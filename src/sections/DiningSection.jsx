import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DiningSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [stage, setStage] = useState(0);

  /*  TIMELINE CONTROL */
  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();

      const t1 = setTimeout(() => setStage(1), 500);
      const t2 = setTimeout(() => setStage(2), 1600);
      const t3 = setTimeout(() => setStage(3), 3000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      videoRef.current?.pause();
      setStage(0);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center"
    >

      {/* VIDEO */}
      <motion.video
        ref={videoRef}
        src="/assets/videos/dining.mp4"
        muted
        loop
        playsInline
        preload="none"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={
          isInView
            ? { scale: 1, opacity: 1 }
            : { scale: 1.2, opacity: 0 }
        }
        transition={{ duration: 2.5 }}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.1]"
      />

      {/*  OVERLAY  */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/90" />

     
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[300px] bg-black/50 blur-3xl rounded-full" />
      </div>

      {/*  CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/*  HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          animate={
            stage >= 1
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1.8 }}
          className="text-white text-5xl md:text-7xl font-semibold leading-tight drop-shadow-[0_25px_80px_rgba(0,0,0,1)]"
        >
          More Than Dining.
          <br />
          <span className="text-white/70">A Lifestyle Destination.</span>
        </motion.h2>

        {/*  EXPERIENCE FLOW  */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={stage >= 2 ? { opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="mt-12 flex flex-wrap justify-center gap-10 text-white/70 text-sm tracking-wide"
        >
          <span>Fine Dining</span>
          <span>Waterfront Evenings</span>
          <span>Social Cafés</span>
          <span>Global Cuisine</span>
        </motion.div>

        {/*  BUSINESS IMPACT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={stage >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className="mt-14 text-white/85 text-lg max-w-2xl mx-auto"
        >
          Dining extends dwell time, increases repeat visits, and transforms
          retail into a full-day lifestyle destination.
        </motion.p>

      </div>

      {/*  SLIDE LABEL */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
          07 — Dining & Lifestyle
        </span>
      </div>

    </section>
  );
}