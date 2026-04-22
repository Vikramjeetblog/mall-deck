import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assetMap } from "../../data/assetMap";

export default function LuxuryIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [stage, setStage] = useState(0);

  /*  TIMELINE */
  useEffect(() => {
    if (isInView) {
      const t1 = setTimeout(() => setStage(1), 400);
      const t2 = setTimeout(() => setStage(2), 1400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setStage(0);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center"
    >

      {/*  BACKGROUND */}
      <motion.img
        src={assetMap.luxuryImage}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.25, opacity: 0 }}
        animate={
          isInView
            ? { scale: 1, opacity: 1 }
            : { scale: 1.25, opacity: 0 }
        }
        transition={{ duration: 3 }}
      />

      {/*  LAYERED OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />

      {/* 🔥 CENTER FOCUS (KEY FOR LUXURY) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[300px] bg-black/50 blur-3xl rounded-full" />
      </div>

      {/*  CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

       

        {/*  HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          animate={
            stage >= 1
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl md:text-7xl font-semibold leading-tight drop-shadow-[0_25px_80px_rgba(0,0,0,1)]"
        >
          Luxury Isn’t Added.
          <br />
          <span className="text-white/70">It’s Engineered.</span>
        </motion.h2>

        {/*  SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={stage >= 2 ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="mt-8 text-white/80 text-lg max-w-2xl mx-auto"
        >
          A purpose-built luxury environment designed for flagship brands,
          premium clientele, and high-value retail performance.
        </motion.p>

      </div>

      {/*  SLIDE LABEL */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
          04 — Luxury Positioning
        </span>
      </div>

    </section>
  );
}