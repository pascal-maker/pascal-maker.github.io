import { useEffect, useRef } from 'react';

// Uses @chenglou/pretext for browser-accurate canvas text layout.
// Animates the text character-by-character and re-lays out on resize.
export default function CanvasText({ text, fontFamily, fontSize, lineHeight, color }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let animId;
    let observer;

    async function init() {
      // Wait for custom fonts (e.g. Poppins) to be ready before measuring
      await document.fonts.ready;

      const { prepareWithSegments, layoutWithLines } = await import('@chenglou/pretext');

      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const dpr = window.devicePixelRatio || 1;
      const fontStr = `${fontSize}px ${fontFamily}`;
      let revealedChars = 0;
      let lines = [];
      let totalChars = 0;

      function computeLayout(width) {
        const prepared = prepareWithSegments(text, fontStr);
        const result = layoutWithLines(prepared, width, lineHeight);
        lines = result.lines;
        totalChars = lines.reduce((n, l) => n + l.text.length, 0);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(result.height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = result.height + 'px';
      }

      function draw() {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.font = fontStr;
        ctx.fillStyle = color;
        ctx.textBaseline = 'alphabetic';

        // Render only the revealed portion of each line
        let rem = Math.floor(revealedChars);
        const baseline = lineHeight - Math.round((lineHeight - fontSize) * 0.3);
        for (let i = 0; i < lines.length; i++) {
          const t = lines[i].text;
          const vis = Math.min(rem, t.length);
          if (vis > 0) ctx.fillText(t.slice(0, vis), 0, i * lineHeight + baseline);
          rem -= t.length;
          if (rem <= 0) break;
        }
        ctx.restore();
      }

      function animate() {
        if (revealedChars < totalChars) {
          revealedChars = Math.min(revealedChars + 3, totalChars);
          draw();
          animId = requestAnimationFrame(animate);
        }
      }

      function layout() {
        computeLayout(container.offsetWidth);
        revealedChars = 0;
        cancelAnimationFrame(animId);
        draw();
        animate();
      }

      observer = new ResizeObserver(layout);
      observer.observe(container);
      layout();
    }

    init();

    return () => {
      cancelAnimationFrame(animId);
      if (observer) observer.disconnect();
    };
  }, [text, fontFamily, fontSize, lineHeight, color]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
