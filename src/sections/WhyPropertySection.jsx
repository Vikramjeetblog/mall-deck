import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assetMap } from "../data/assetMap";

export default function WhyPropertySection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [stage, setStage] = useState(0);

  /* 🎬 VIDEO + TIMELINE CONTROL */
  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();

      const t1 = setTimeout(() => setStage(1), 500);
      const t2 = setTimeout(() => setStage(2), 1800);
      const t3 = setTimeout(() => setStage(3), 3200);

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
      className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center"
    >

      {/* 🎬 VIDEO (REPLACE IMAGE → VIDEO FIRST) */}
      <motion.video
        ref={videoRef}
        src={assetMap.whyHereVideo} // 🔥 add this in assetMap
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
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover brightness-90"
      />

      {/* 🔥 OVERLAY FIX */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* 🎯 CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* 🔥 HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
          animate={
            stage >= 1
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl font-semibold leading-tight drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
        >
          At The Center Of A Global Destination
        </motion.h2>

        {/* 🔥 STATS */}
        <motion.div
          initial="hidden"
          animate={stage >= 2 ? "show" : "hidden"}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.4,
                delayChildren: 0.4,
              },
            },
          }}
          className="mt-14 flex flex-wrap justify-center gap-16"
        >
          <AnimatedStat value={100} suffix="M+" label="Annual Visitors" />
          <AnimatedStat value={1200} suffix="+" label="Retail Stores" />
          <AnimatedStat value={200} suffix="+" label="Dining Experiences" />
        </motion.div>

        {/* 🔥 BUSINESS LINE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4 }}
          className="mt-12 text-white/80 text-lg max-w-2xl mx-auto"
        >
          Located in Downtown Dubai, this destination captures unmatched global footfall,
          driving visibility, scale, and commercial performance.
        </motion.p>

      </div>

      {/* 🔥 SLIDE LABEL */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
          02 — Why This Location
        </span>
      </div>

    </section>
  );
}

/* 🔥 SMOOTH COUNT-UP */
function AnimatedStat({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  const startCount = () => {
    if (started.current) return;
    started.current = true;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, duration / steps);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      onViewportEnter={startCount}
      transition={{ duration: 1.2 }}
      className="text-center"
    >
      <div className="text-white text-6xl font-semibold tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm mt-3 tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}