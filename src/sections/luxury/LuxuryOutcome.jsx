import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LuxuryOutcome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [stage, setStage] = useState(0);

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
      className="relative h-screen w-screen bg-black flex items-center justify-center overflow-hidden"
    >

      {/*  BACKGROUND */}
      <motion.img
        src="/assets/images/luxury5.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 3 }}
      />

      {/*  STRONG OVERLAY  */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/95" />

      {/*  CENTER FOCUS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[300px] bg-black/60 blur-3xl rounded-full" />
      </div>

      {/*  LIGHT SWEEP (SUBTLE) */}
      {stage >= 1 && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
        />
      )}

      {/*  CONTENT */}
      <div className="relative z-10 text-center max-w-4xl px-6">

       
       

        
        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
          animate={
            stage >= 1
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-[110px] md:text-[150px] font-semibold tracking-tight drop-shadow-[0_30px_100px_rgba(0,0,0,1)]"
        >
          Elite
        </motion.div>

        {/*  GOLD ACCENT */}
        <motion.div
          initial={{ width: 0 }}
          animate={stage >= 1 ? { width: "140px" } : {}}
          transition={{ duration: 1.4 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mt-6"
        />

        
        <motion.p
          initial={{ opacity: 0 }}
          animate={stage >= 2 ? { opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="text-white/80 text-lg mt-8 max-w-2xl mx-auto"
        >
          A retail environment where global luxury brands don’t compete —
          they dominate.
        </motion.p>

      </div>

      {/*  SLIDE LABEL */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
          06 — Luxury Outcome
        </span>
      </div>

    </section>
  );
}