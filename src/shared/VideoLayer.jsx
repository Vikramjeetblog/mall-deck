import { useEffect, useRef, useState } from "react";

export default function VideoLayer({ src, overlay = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 🚫 Prevent rendering if no src
  if (!src) return null;

  return (
    <div ref={ref} className="absolute inset-0">
      {visible && (
        <video
          className="h-full w-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"   // 🔥 CRITICAL FIX
        />
      )}

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
      )}
    </div>
  );
}