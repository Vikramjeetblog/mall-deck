import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assetMap } from "../data/assetMap";

export default function HeroSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });
  const [stage, setStage] = useState(0);

  /* 🎬 VIDEO CONTROL + TIMELINE */
  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();

      const t1 = setTimeout(() => setStage(1), 400);
      const t2 = setTimeout(() => setStage(2), 1400);
      const t3 = setTimeout(() => setStage(3), 2400);

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
      className="relative h-screen w-screen overflow-hidden bg-black"
    >

      {/* 🎬 VIDEO */}
      <motion.video
        ref={videoRef}
        src={assetMap.heroVideo}
        muted
        loop
        playsInline
        preload="none"
        initial={{ scale: 1.25, opacity: 0 }}
        animate={
          isInView
            ? { scale: 1, opacity: 1 }
            : { scale: 1.25, opacity: 0 }
        }
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110"
      />

      {/* 🔥 LAYERED OVERLAY (KEY FIX) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      {/* 🔥 CENTER FOCUS GLOW */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[400px] bg-black/40 blur-3xl rounded-full" />
      </div>

      {/* 🎬 INTRO FLASH */}
      {stage === 0 && isInView && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black z-20"
        />
      )}

      {/* 🎯 CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* 🔥 IMPACT NUMBER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: "blur(10px)" }}
          animate={
            stage >= 1
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-white text-[110px] md:text-[150px] font-semibold tracking-tight drop-shadow-[0_20px_80px_rgba(0,0,0,1)]">
            100M+
          </h2>
          <p className="text-white/80 text-lg tracking-wide">
            Annual Visitors
          </p>
        </motion.div>

        {/* 🔥 HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
          animate={
            stage >= 2
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-8 text-white text-4xl md:text-7xl font-semibold leading-tight max-w-4xl drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
        >
          Where The World Meets Retail
        </motion.h1>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={stage >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-6 text-white/80 max-w-2xl text-lg"
        >
          1,200+ global brands. One destination built for scale,
          visibility, and global impact.
        </motion.p>

      </div>

      {/* 🔥 SLIDE LABEL */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
          01 — Global Destination
        </span>
      </div>

    </section>
  );
}