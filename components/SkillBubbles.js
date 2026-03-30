import { useEffect, useRef } from 'react';

const H_PAD = 14; // horizontal padding inside each pill
const V_PAD = 7;  // vertical padding inside each pill
const GAP_X = 8;  // horizontal gap between pills
const GAP_Y = 8;  // vertical gap between rows
const RADIUS = 99; // fully rounded (capsule shape)

export default function SkillBubbles({ skills, fontFamily, fontSize, textColor, bgColor }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let observer;

    async function init() {
      await document.fonts.ready;
      const { prepareWithSegments, layoutWithLines } = await import('@chenglou/pretext');

      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const dpr = window.devicePixelRatio || 1;
      const fontStr = `600 ${fontSize}px ${fontFamily}`;
      const pillH = fontSize + V_PAD * 2;

      // Measure each skill tag's natural text width using pretext
      const textWidths = skills.map(skill => {
        const prepared = prepareWithSegments(skill, fontStr);
        const result = layoutWithLines(prepared, Infinity, pillH);
        return result.lines[0]?.width ?? 0;
      });

      function render() {
        const maxWidth = container.offsetWidth;

        // Flow pills into rows
        const rows = [];
        let row = [];
        let rowX = 0;

        for (let i = 0; i < skills.length; i++) {
          const pillW = textWidths[i] + H_PAD * 2;
          if (row.length > 0 && rowX + pillW > maxWidth) {
            rows.push(row);
            row = [];
            rowX = 0;
          }
          row.push({ text: skills[i], pillW, x: rowX });
          rowX += pillW + GAP_X;
        }
        if (row.length > 0) rows.push(row);

        const totalH = rows.length * (pillH + GAP_Y) - GAP_Y;

        canvas.width = Math.round(maxWidth * dpr);
        canvas.height = Math.round(totalH * dpr);
        canvas.style.width = maxWidth + 'px';
        canvas.style.height = totalH + 'px';

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.font = fontStr;
        ctx.textBaseline = 'middle';

        rows.forEach((row, rowIdx) => {
          const y = rowIdx * (pillH + GAP_Y);
          row.forEach(({ text, pillW, x }) => {
            // Pill background
            ctx.fillStyle = bgColor;
            ctx.beginPath();
            ctx.roundRect(x, y, pillW, pillH, RADIUS);
            ctx.fill();

            // Pill label — centered horizontally
            ctx.fillStyle = textColor;
            ctx.fillText(text, x + H_PAD, y + pillH / 2);
          });
        });

        ctx.restore();
      }

      observer = new ResizeObserver(render);
      observer.observe(container);
      render();
    }

    init();

    return () => {
      if (observer) observer.disconnect();
    };
  }, [skills, fontFamily, fontSize, textColor, bgColor]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <canvas ref={canvasRef} style={{ display: 'block', margin: '0 auto' }} />
    </div>
  );
}
