export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="spotlight absolute inset-0" />
      <div
        className="aurora-blob -top-40 -left-28 h-[40rem] w-[40rem]"
        style={{ background: "var(--brand-orange)" }}
      />
      <div
        className="aurora-blob top-1/4 -right-36 h-[34rem] w-[34rem]"
        style={{ background: "var(--brand-gold)", animationDelay: "-9s", opacity: 0.3 }}
      />
      <div
        className="aurora-blob -bottom-48 left-1/3 h-[32rem] w-[32rem]"
        style={{ background: "var(--brand-red)", animationDelay: "-16s", opacity: 0.28 }}
      />
      <div className="smoke absolute inset-x-0 bottom-0 h-2/3" />
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
          "linear-gradient(to right, oklch(0.873 0.176 96 / 14%) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.873 0.176 96 / 10%) 1px, transparent 1px)",
        backgroundSize: "88px 88px",
        maskImage: "radial-gradient(ellipse at 50% 0%, black 10%, transparent 75%)",
      }}
    />
  );
}