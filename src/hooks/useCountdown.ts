import { useEffect, useState } from "react";

export function useCountdown(iso: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0, ready: false });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(iso).getTime() - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
        ready: true,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [iso]);

  return left;
}