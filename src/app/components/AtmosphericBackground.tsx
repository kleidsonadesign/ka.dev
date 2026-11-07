export function AtmosphericBackground() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-[var(--ka-bg)]" />
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="ka-aurora ka-aurora-a" />
        <div className="ka-aurora ka-aurora-b" />
        <div className="ka-aurora ka-aurora-c" />
        <div className="ka-neon-scan" />
      </div>
      <div className="ka-grid" />
      <div className="ka-grain" />
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/85 to-transparent pointer-events-none z-[3]" />
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-[3]" />
    </>
  );
}
