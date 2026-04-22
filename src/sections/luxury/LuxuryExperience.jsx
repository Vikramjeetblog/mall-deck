import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LuxuryExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const t1 = setTimeout(() => setStage(1), 400);
      const t2 = setTimeout(() => setStage(2), 1400);
      const t3 = setTimeout(() => setStage(3), 2600);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
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
        src="/assets/images/luxury3.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 3 }}
      />

      {/*  DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90" />

      {/*  VIP SILHOUETTES (FADE IN) */}
      <motion.img
        src="/assets/images/vip-silhouette.png"
        className="absolute bottom-0 w-full opacity-20 object-contain"
        initial={{ opacity: 0, y: 40 }}
        animate={stage >= 2 ? { opacity: 0.2, y: 0 } : {}}
        transition={{ duration: 2 }}
      />

      {/*  CENTER FOCUS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[300px] bg-black/50 blur-3xl rounded-full" />
      </div>

      {/*  GOLD LIGHT SWEEP */}
      {stage >= 1 && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent blur-2xl"
        />
      )}

      {/*  CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

     
        

        {/*  HEADLINE */}
        <motion.h3
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          animate={stage >= 1 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.8 }}
          className="text-white text-4xl md:text-6xl font-medium leading-tight drop-shadow-[0_25px_80px_rgba(0,0,0,1)]"
        >
          Private Client Experience
        </motion.h3>

        {/*  SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={stage >= 2 ? { opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="mt-8 text-white/80 text-lg"
        >
          Designed for high-value clientele — where privacy, service,
          and curated environments redefine retail engagement.
        </motion.p>

        {/*  EXPERIENCE TAGS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={stage >= 3 ? { opacity: 1 } : {}}
          className="mt-12 flex flex-wrap justify-center gap-10 text-white/60 text-sm tracking-wide"
        >
          <span>Private Appointments</span>
          <span>VIP Lounges</span>
          <span>Personal Styling</span>
          <span>Exclusive Access</span>
        </motion.div>

        {/*  GOLD ACCENT LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={stage >= 2 ? { width: "120px" } : {}}
          transition={{ duration: 1.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mt-10"
        />

      </div>

      {/*  SLIDE LABEL */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
          05 — Luxury Experience
        </span>
      </div>

    </section>
  );
}