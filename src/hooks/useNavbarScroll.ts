import { useEffect, useState } from "react";

export function useNavbarScroll(scrollThreshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [scrollThreshold]);

  return scrolled;
}
