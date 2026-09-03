import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const graphPath = path.join(root, "public/knowledge-graphs/pascal-maker-repos.json");
const outPath = path.join(root, "public/knowledge-graphs/pascal-maker-repos.html");
const graph = JSON.parse(fs.readFileSync(graphPath, "utf8"));

const nodes = graph.nodes || [];
const links = graph.links || [];

const repoMeta = {
  website: { label: "Personal Website", color: "#fb7185", angle: -1.5, radius: 920, spread: 360 },
  "discovery-report-agents": { label: "Discovery Agents", color: "#a78bfa", angle: 0.2, radius: 720, spread: 640 },
  datavisualization: { label: "Data Visualization", color: "#f59e0b", angle: 2.1, radius: 780, spread: 660 },
  medicalvlm: { label: "Medical VLM", color: "#38bdf8", angle: -0.2, radius: 0, spread: 1550 },
  mlxs: { label: "MLX Experiments", color: "#34d399", angle: 0.95, radius: 1900, spread: 660 },
};

const repoOrder = ["website", "discovery-report-agents", "datavisualization"];
const selectedRepos = new Set(repoOrder);
const grouped = new Map(repoOrder.map((repo) => [repo, []]));
for (const node of nodes) {
  const repo = node.repo || String(node.id).split("::")[0] || "unknown";
  node.repo = repo;
  if (!selectedRepos.has(repo)) continue;
  grouped.get(repo).push(node);
}

const selectedNodeIds = new Set([...grouped.values()].flat().map((node) => node.id));
const selectedLinks = links.filter((edge) => selectedNodeIds.has(edge.source) && selectedNodeIds.has(edge.target));
const degree = new Map();
for (const edge of selectedLinks) {
  degree.set(edge.source, (degree.get(edge.source) || 0) + 1);
  degree.set(edge.target, (degree.get(edge.target) || 0) + 1);
}

for (const [repo, repoNodes] of grouped) {
  const meta = repoMeta[repo] || { color: "#94a3b8", angle: 0, radius: 2400, spread: 650 };
  const cx = Math.cos(meta.angle) * meta.radius;
  const cy = Math.sin(meta.angle) * meta.radius;
  repoNodes.forEach((node) => {
    node.degree = degree.get(node.id) || 0;
  });
  repoNodes.sort((a, b) => b.degree - a.degree || String(a.label).localeCompare(String(b.label)));
  repoNodes.forEach((node, index) => {
    const theta = index * 2.399963229728653;
    const r = 28 + Math.sqrt(index) * (meta.spread / Math.sqrt(Math.max(repoNodes.length, 1)));
    node.x = Math.round(cx + Math.cos(theta) * r * 10) / 10;
    node.y = Math.round(cy + Math.sin(theta) * r * 10) / 10;
    node.color = meta.color;
    node.size = Math.max(2.5, Math.min(15, 2.5 + Math.sqrt(node.degree) * 1.45));
  });
}

const selectedNodes = repoOrder.flatMap((repo) => grouped.get(repo) || []);

const topNodes = [...selectedNodes]
  .sort((a, b) => b.degree - a.degree)
  .slice(0, 10)
  .map((node) => ({
    id: node.id,
    label: node.label,
    repo: node.repo,
    degree: node.degree,
  }));

const payload = {
  nodes: selectedNodes.map((node) => ({
    id: node.id,
    label: node.label,
    repo: node.repo,
    source_file: node.source_file,
    source_location: node.source_location,
    community_name: node.community_name,
    file_type: node.file_type,
    degree: node.degree,
    x: node.x,
    y: node.y,
    size: node.size,
    color: node.color,
  })),
  links: selectedLinks.map((edge) => ({
    source: edge.source,
    target: edge.target,
    relation: edge.relation,
    confidence: edge.confidence,
    confidence_score: edge.confidence_score,
    context: edge.context,
    source_file: edge.source_file,
    source_location: edge.source_location,
    weight: edge.weight,
  })),
  repos: repoOrder.map((repo) => ({
    key: repo,
    label: repoMeta[repo].label,
    color: repoMeta[repo].color,
    nodes: grouped.get(repo)?.length || 0,
  })),
  stats: {
    nodes: selectedNodes.length,
    links: selectedLinks.length,
    communities: new Set(selectedNodes.map((node) => node.community)).size,
  },
  topNodes,
};

const html = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Pascal-maker Repository Knowledge Graph</title>
<style>
  :root { color-scheme: dark; --bg: #090b10; --panel: #111827; --panel-2: #0f172a; --line: #263244; --text: #f8fafc; --muted: #94a3b8; --accent: #14b8a6; }
  * { box-sizing: border-box; }
  html, body { height: 100%; margin: 0; overflow: hidden; background: var(--bg); color: var(--text); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  body { display: grid; grid-template-columns: minmax(0, 1fr) 360px; }
  #stage { position: relative; min-width: 0; background:
    radial-gradient(circle at 22% 18%, rgba(20,184,166,0.12), transparent 32%),
    radial-gradient(circle at 74% 72%, rgba(56,189,248,0.09), transparent 34%),
    #090b10; }
  canvas { display: block; width: 100%; height: 100%; cursor: grab; }
  canvas.dragging { cursor: grabbing; }
  .topbar { position: absolute; left: 24px; top: 20px; max-width: 520px; padding: 16px 18px; border: 1px solid rgba(148,163,184,0.18); background: rgba(9,11,16,0.72); backdrop-filter: blur(14px); border-radius: 14px; box-shadow: 0 18px 60px rgba(0,0,0,0.28); }
  .eyebrow { margin: 0 0 8px; color: #5eead4; font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; }
  h1 { margin: 0; font-size: clamp(24px, 3vw, 42px); line-height: 1.05; letter-spacing: 0; }
  .subtitle { margin: 10px 0 0; color: #cbd5e1; line-height: 1.55; font-size: 14px; }
  .toolbar { position: absolute; left: 24px; bottom: 22px; display: flex; gap: 10px; flex-wrap: wrap; }
  button, .button { border: 1px solid rgba(148,163,184,0.22); background: rgba(15,23,42,0.82); color: var(--text); border-radius: 10px; padding: 10px 12px; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; text-decoration: none; }
  button:hover, .button:hover { border-color: rgba(20,184,166,0.75); color: #99f6e4; }
  aside { min-width: 0; display: flex; flex-direction: column; border-left: 1px solid var(--line); background: linear-gradient(180deg, #111827, #0b1120); }
  .side-section { padding: 18px; border-bottom: 1px solid var(--line); }
  .search { width: 100%; height: 42px; border: 1px solid #334155; background: #020617; color: var(--text); border-radius: 10px; padding: 0 12px; font-size: 14px; outline: none; }
  .search:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(20,184,166,0.18); }
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .stat { padding: 10px; border: 1px solid rgba(148,163,184,0.16); border-radius: 10px; background: rgba(15,23,42,0.76); }
  .stat b { display: block; font-size: 18px; }
  .stat span { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; }
  h2 { margin: 0 0 12px; color: #e2e8f0; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; }
  .repo { display: grid; grid-template-columns: 18px minmax(0, 1fr) auto; align-items: center; gap: 10px; width: 100%; padding: 9px 0; color: #dbeafe; }
  .repo input { width: 15px; height: 15px; accent-color: var(--accent); }
  .dot { width: 10px; height: 10px; border-radius: 999px; }
  .repo-name { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-weight: 700; font-size: 13px; }
  .repo-count { color: var(--muted); font-size: 12px; }
  .results { max-height: 190px; overflow: auto; }
  .result { display: block; width: 100%; margin: 0; padding: 9px 0; border: 0; border-bottom: 1px solid rgba(148,163,184,0.12); background: transparent; text-align: left; color: #e2e8f0; }
  .result small { display: block; margin-top: 3px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .details { flex: 1; overflow: auto; }
  .detail-title { margin: 0; font-size: 18px; line-height: 1.25; overflow-wrap: anywhere; }
  .meta { margin: 12px 0 0; display: grid; gap: 8px; color: #cbd5e1; font-size: 13px; line-height: 1.45; }
  .meta b { color: var(--text); }
  .neighbors { margin-top: 14px; display: grid; gap: 6px; }
  .neighbor { width: 100%; text-align: left; border: 1px solid rgba(148,163,184,0.16); background: rgba(2,6,23,0.46); border-radius: 8px; padding: 8px; font-size: 12px; font-weight: 650; }
  .top-node { display: flex; justify-content: space-between; gap: 8px; padding: 8px 0; border-bottom: 1px solid rgba(148,163,184,0.1); color: #dbeafe; font-size: 13px; cursor: pointer; }
  .top-node span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .footer-note { color: var(--muted); font-size: 12px; line-height: 1.55; }
  @media (max-width: 900px) {
    body { grid-template-columns: 1fr; grid-template-rows: minmax(56vh, 1fr) auto; overflow: auto; }
    html, body { height: auto; min-height: 100%; }
    #stage { height: 62vh; min-height: 430px; }
    aside { border-left: 0; border-top: 1px solid var(--line); }
    .topbar { left: 14px; right: 14px; top: 14px; }
    .toolbar { left: 14px; bottom: 14px; }
  }
</style>
</head>
<body>
  <main id="stage">
    <canvas id="graph"></canvas>
    <section class="topbar">
      <p class="eyebrow">Repository Knowledge Graph</p>
      <h1>Pascal-maker repos, mapped.</h1>
      <p class="subtitle">Three selected repositories laid out as readable clusters. Search a symbol, click a node or edge, drag to pan, scroll to zoom.</p>
    </section>
    <div class="toolbar">
      <button id="fit">Fit graph</button>
      <button id="edges">Toggle edges</button>
      <a class="button" href="/#repo-graphs">Back to website</a>
      <a class="button" href="/knowledge-graphs/pascal-maker-repos-report.md">Report</a>
    </div>
  </main>
  <aside>
    <section class="side-section">
      <input id="search" class="search" type="search" placeholder="Search nodes, files, repos..." autocomplete="off">
    </section>
    <section class="side-section stats">
      <div class="stat"><b>${payload.stats.nodes.toLocaleString("en-US")}</b><span>Nodes</span></div>
      <div class="stat"><b>${payload.stats.links.toLocaleString("en-US")}</b><span>Edges</span></div>
      <div class="stat"><b>${payload.stats.communities.toLocaleString("en-US")}</b><span>Groups</span></div>
    </section>
    <section class="side-section">
      <h2>Repositories</h2>
      <div id="repos"></div>
    </section>
    <section class="side-section">
      <h2>Search Results</h2>
      <div id="results" class="results"></div>
    </section>
    <section class="side-section details">
      <h2>Selection Info</h2>
      <div id="details" class="footer-note">Click a node, edge, or search result to inspect source files, relationships, degree, and neighbors.</div>
    </section>
  </aside>
  <script id="graph-data" type="application/json">${JSON.stringify(payload).replace(/</g, "\\u003c")}</script>
  <script>
    const data = JSON.parse(document.getElementById('graph-data').textContent);
    const canvas = document.getElementById('graph');
    const ctx = canvas.getContext('2d');
    const nodes = data.nodes;
    const links = data.links;
    const byId = new Map(nodes.map(n => [n.id, n]));
    const adjacency = new Map();
    for (const link of links) {
      if (!adjacency.has(link.source)) adjacency.set(link.source, []);
      if (!adjacency.has(link.target)) adjacency.set(link.target, []);
      adjacency.get(link.source).push({ id: link.target, relation: link.relation });
      adjacency.get(link.target).push({ id: link.source, relation: link.relation });
    }

    let scale = 0.16;
    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;
    let dragStart = null;
    let dragMoved = false;
    let hovered = null;
    let hoveredEdge = null;
    let selected = null;
    let selectedEdge = null;
    let showEdges = true;
    const visibleRepos = new Set(data.repos.map(r => r.key));

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function project(n) {
      const rect = canvas.getBoundingClientRect();
      return { x: rect.width / 2 + (n.x * scale) + offsetX, y: rect.height / 2 + (n.y * scale) + offsetY };
    }

    function screenToWorld(x, y) {
      const rect = canvas.getBoundingClientRect();
      return { x: (x - rect.width / 2 - offsetX) / scale, y: (y - rect.height / 2 - offsetY) / scale };
    }

    function draw() {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (showEdges) {
        ctx.lineWidth = 0.45;
        for (const link of links) {
          const a = byId.get(link.source);
          const b = byId.get(link.target);
          if (!a || !b || !visibleRepos.has(a.repo) || !visibleRepos.has(b.repo)) continue;
          const pa = project(a);
          const pb = project(b);
          const selectedLink = selectedEdge === link;
          const hoverLink = hoveredEdge === link;
          const active = selectedLink || hoverLink || (selected && (link.source === selected.id || link.target === selected.id));
          if (!active && scale < 0.22 && a.degree < 8 && b.degree < 8) continue;
          ctx.globalAlpha = selectedLink ? 0.95 : active ? 0.72 : 0.08;
          ctx.lineWidth = selectedLink || hoverLink ? 2.2 : active ? 1.2 : 0.45;
          ctx.strokeStyle = active ? '#e2e8f0' : a.color;
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      for (const n of nodes) {
        if (!visibleRepos.has(n.repo)) continue;
        const p = project(n);
        const r = Math.max(1.4, n.size * scale * 3.8);
        const edgeActive = selectedEdge && (selectedEdge.source === n.id || selectedEdge.target === n.id);
        const active = edgeActive || (selected && (selected.id === n.id || (adjacency.get(selected.id) || []).some(nb => nb.id === n.id)));
        ctx.globalAlpha = selected || selectedEdge ? (active ? 1 : 0.24) : 0.92;
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        if (hovered?.id === n.id || selected?.id === n.id) {
          ctx.globalAlpha = 1;
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#f8fafc';
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    }

    function nearest(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      let best = null;
      let bestDist = Infinity;
      for (const n of nodes) {
        if (!visibleRepos.has(n.repo)) continue;
        const p = project(n);
        const d = Math.hypot(p.x - x, p.y - y);
        const hit = Math.max(10, n.size * scale * 5, scale < 0.12 ? 13 : 0);
        if (d < hit && d < bestDist) {
          best = n;
          bestDist = d;
        }
      }
      return best;
    }

    function distanceToSegment(px, py, ax, ay, bx, by) {
      const dx = bx - ax;
      const dy = by - ay;
      if (dx === 0 && dy === 0) return Math.hypot(px - ax, py - ay);
      const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
      return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
    }

    function nearestEdge(clientX, clientY) {
      if (!showEdges) return null;
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      let best = null;
      let bestDist = Infinity;
      const hit = scale < 0.16 ? 8 : 10;
      for (const link of links) {
        const a = byId.get(link.source);
        const b = byId.get(link.target);
        if (!a || !b || !visibleRepos.has(a.repo) || !visibleRepos.has(b.repo)) continue;
        const active = selected && (link.source === selected.id || link.target === selected.id);
        if (!active && scale < 0.22 && a.degree < 8 && b.degree < 8) continue;
        const pa = project(a);
        const pb = project(b);
        const d = distanceToSegment(x, y, pa.x, pa.y, pb.x, pb.y);
        if (d < hit && d < bestDist) {
          best = link;
          bestDist = d;
        }
      }
      return best;
    }

    function inspect(node) {
      selected = node;
      selectedEdge = null;
      const detail = document.getElementById('details');
      const neighbors = (adjacency.get(node.id) || [])
        .map(nb => ({ ...nb, node: byId.get(nb.id) }))
        .filter(nb => nb.node)
        .sort((a, b) => b.node.degree - a.node.degree)
        .slice(0, 14);
      detail.innerHTML = '<h3 class="detail-title">' + esc(node.label) + '</h3>' +
        '<div class="meta">' +
        '<div><b>Repo:</b> ' + esc(node.repo) + '</div>' +
        '<div><b>Source:</b> ' + esc([node.source_file, node.source_location].filter(Boolean).join(' ')) + '</div>' +
        '<div><b>Community:</b> ' + esc(node.community_name || 'Unlabeled') + '</div>' +
        '<div><b>Degree:</b> ' + node.degree + '</div>' +
        '</div>' +
        '<div class="neighbors">' +
        neighbors.map(nb => '<button class="neighbor" data-id="' + escAttr(nb.node.id) + '">' + esc(nb.node.label) + '<br><small>' + esc(nb.relation || 'related') + ' - ' + esc(nb.node.repo) + '</small></button>').join('') +
        '</div>';
      detail.querySelectorAll('.neighbor').forEach(btn => {
        btn.addEventListener('click', () => focusNode(byId.get(btn.dataset.id)));
      });
      draw();
    }

    function inspectEdge(edge) {
      selected = null;
      selectedEdge = edge;
      const source = byId.get(edge.source);
      const target = byId.get(edge.target);
      const detail = document.getElementById('details');
      detail.innerHTML = '<h3 class="detail-title">' + esc(source?.label || edge.source) + ' -> ' + esc(target?.label || edge.target) + '</h3>' +
        '<div class="meta">' +
        '<div><b>Relation:</b> ' + esc(edge.relation || 'related') + '</div>' +
        '<div><b>Source repo:</b> ' + esc(source?.repo || 'unknown') + '</div>' +
        '<div><b>Target repo:</b> ' + esc(target?.repo || 'unknown') + '</div>' +
        '<div><b>Evidence:</b> ' + esc([edge.source_file, edge.source_location].filter(Boolean).join(' ') || edge.context || 'not provided') + '</div>' +
        '<div><b>Confidence:</b> ' + esc([edge.confidence, edge.confidence_score].filter(v => v !== undefined && v !== null).join(' / ') || 'unknown') + '</div>' +
        '</div>' +
        '<div class="neighbors">' +
        [source, target].filter(Boolean).map(n => '<button class="neighbor" data-id="' + escAttr(n.id) + '">' + esc(n.label) + '<br><small>' + esc(n.repo) + ' - degree ' + n.degree + '</small></button>').join('') +
        '</div>';
      detail.querySelectorAll('.neighbor').forEach(btn => {
        btn.addEventListener('click', () => focusNode(byId.get(btn.dataset.id)));
      });
      draw();
    }

    function focusNode(node) {
      if (!node) return;
      const rect = canvas.getBoundingClientRect();
      scale = Math.max(scale, 0.24);
      offsetX = -(node.x * scale);
      offsetY = -(node.y * scale);
      selected = node;
      inspect(node);
    }

    function fitGraph() {
      const visible = nodes.filter(n => visibleRepos.has(n.repo));
      const minX = Math.min(...visible.map(n => n.x));
      const maxX = Math.max(...visible.map(n => n.x));
      const minY = Math.min(...visible.map(n => n.y));
      const maxY = Math.max(...visible.map(n => n.y));
      const rect = canvas.getBoundingClientRect();
      scale = Math.min(rect.width / Math.max(1, maxX - minX), rect.height / Math.max(1, maxY - minY)) * 0.82;
      offsetX = -((minX + maxX) / 2) * scale;
      offsetY = -((minY + maxY) / 2) * scale;
      draw();
    }

    function esc(value) {
      return String(value || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    function escAttr(value) { return esc(value).replace(/"/g, '&quot;'); }

    function renderRepos() {
      const wrap = document.getElementById('repos');
      wrap.innerHTML = data.repos.map(repo => '<label class="repo"><input type="checkbox" checked data-repo="' + escAttr(repo.key) + '"><span class="dot" style="background:' + repo.color + '"></span><span class="repo-name">' + esc(repo.label) + '</span><span class="repo-count">' + repo.nodes + '</span></label>').join('');
      wrap.querySelectorAll('input').forEach(input => {
        input.addEventListener('change', () => {
          if (input.checked) visibleRepos.add(input.dataset.repo);
          else visibleRepos.delete(input.dataset.repo);
          selected = null;
          selectedEdge = null;
          draw();
        });
      });
    }

    function renderResults(query = '') {
      const q = query.trim().toLowerCase();
      const results = q
        ? nodes.filter(n => (n.label + ' ' + n.repo + ' ' + (n.source_file || '')).toLowerCase().includes(q)).sort((a, b) => b.degree - a.degree).slice(0, 18)
        : data.topNodes.map(n => byId.get(n.id)).filter(Boolean);
      document.getElementById('results').innerHTML = results.map(n => '<button class="result" data-id="' + escAttr(n.id) + '">' + esc(n.label) + '<small>' + esc(n.repo) + ' - degree ' + n.degree + '</small></button>').join('');
      document.querySelectorAll('.result').forEach(btn => btn.addEventListener('click', () => focusNode(byId.get(btn.dataset.id))));
    }

    canvas.addEventListener('mousemove', event => {
      if (dragging) {
        offsetX = dragStart.offsetX + event.clientX - dragStart.x;
        offsetY = dragStart.offsetY + event.clientY - dragStart.y;
        dragMoved = dragMoved || Math.hypot(event.clientX - dragStart.x, event.clientY - dragStart.y) > 4;
        draw();
        return;
      }
      hovered = nearest(event.clientX, event.clientY);
      hoveredEdge = hovered ? null : nearestEdge(event.clientX, event.clientY);
      canvas.title = hovered ? hovered.label : hoveredEdge ? (hoveredEdge.relation || 'edge') : '';
      draw();
    });
    canvas.addEventListener('mousedown', event => {
      dragging = true;
      dragMoved = false;
      canvas.classList.add('dragging');
      dragStart = { x: event.clientX, y: event.clientY, offsetX, offsetY };
    });
    window.addEventListener('mouseup', () => {
      dragging = false;
      canvas.classList.remove('dragging');
    });
    canvas.addEventListener('click', event => {
      if (dragMoved) return;
      const node = nearest(event.clientX, event.clientY);
      if (node) {
        inspect(node);
        return;
      }
      const edge = nearestEdge(event.clientX, event.clientY);
      if (edge) inspectEdge(edge);
    });
    canvas.addEventListener('wheel', event => {
      event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const before = screenToWorld(event.clientX - rect.left, event.clientY - rect.top);
      const factor = event.deltaY < 0 ? 1.12 : 0.89;
      scale = Math.max(0.02, Math.min(1.4, scale * factor));
      offsetX = event.clientX - rect.left - rect.width / 2 - before.x * scale;
      offsetY = event.clientY - rect.top - rect.height / 2 - before.y * scale;
      draw();
    }, { passive: false });

    document.getElementById('fit').addEventListener('click', fitGraph);
    document.getElementById('edges').addEventListener('click', () => { showEdges = !showEdges; hoveredEdge = null; selectedEdge = null; draw(); });
    document.getElementById('search').addEventListener('input', e => renderResults(e.target.value));
    window.addEventListener('resize', resize);
    renderRepos();
    renderResults();
    resize();
    fitGraph();
  </script>
</body>
</html>`;

fs.writeFileSync(outPath, html);
console.log(`Wrote ${outPath}`);
