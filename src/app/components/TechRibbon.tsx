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
    <div className="relative z-10 ka-marquee">
      <div className="ka-marquee-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item} <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}
