const ITEMS = [
  "TypeScript",
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "PostgreSQL",
  "SaaS",
  "UI/UX",
  "Mobile",
  "Cloud",
  "IA",
  "Vite",
];

export function TechRibbon() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative z-10 space-y-0">
      <div className="ka-marquee">
        <div className="ka-marquee-track">
          {loop.map((item, i) => (
            <span key={`a-${item}-${i}`}>
              {item} <em>✦</em>
            </span>
          ))}
        </div>
      </div>
      <div className="ka-marquee ka-marquee-reverse border-t-0">
        <div className="ka-marquee-track">
          {[...loop].reverse().map((item, i) => (
            <span key={`b-${item}-${i}`}>
              {item} <em>✦</em>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
