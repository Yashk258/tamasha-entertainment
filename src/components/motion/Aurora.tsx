export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="aurora-blob -top-32 -left-24 h-[36rem] w-[36rem]"
        style={{ background: "var(--brand)" }}
      />
      <div
        className="aurora-blob top-1/3 -right-32 h-[32rem] w-[32rem]"
        style={{ background: "var(--brand-orange)", animationDelay: "-5s" }}
      />
      <div
        className="aurora-blob -bottom-40 left-1/3 h-[30rem] w-[30rem]"
        style={{ background: "var(--brand-gold)", animationDelay: "-9s", opacity: 0.35 }}
      />
    </div>
  );
}

export function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.14]"
      style={{
        backgroundImage:
          "linear-gradient(to right, oklch(1 0 0 / 12%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 12%) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: "radial-gradient(ellipse at 50% 0%, black 10%, transparent 75%)",
      }}
    />
  );
}