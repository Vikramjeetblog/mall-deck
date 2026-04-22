import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AttractionsSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [stage, setStage] = useState(0);

  /*  TIMELINE CONTROL */
  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();

      const t1 = setTimeout(() => setStage(1), 300);
      const t2 = setTimeout(() => setStage(2), 1200);
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
      className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center"
    >

      {/*  VIDEO */}
      <motion.video
        ref={videoRef}
        src="/assets/videos/Entertainment.mp4"
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
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.15]"
      />

      {/*  OVERLAY  */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/*  LIGHT BURST EFFECT */}
      {stage >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent_60%)]"
        />
      )}

      {/*  CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl">


        {/*  HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={
            stage >= 1
              ? { opacity: 1, y: 0, scale: 1 }
              : {}
          }
          transition={{ duration: 1.4 }}
          className="text-white text-5xl md:text-7xl font-semibold leading-tight drop-shadow-[0_25px_80px_rgba(0,0,0,1)]"
        >
          More Than Retail.
          <br />
          <span className="text-white/70">A Destination Experience.</span>
        </motion.h2>

        {/*  EXPERIENCE BURST  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={stage >= 2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-10 text-white/80 text-sm tracking-wide"
        >
          <span>Aquarium</span>
          <span>Ice Rink</span>
          <span>VR Park</span>
          <span>Live Shows</span>
        </motion.div>

        {/*  BUSINESS IMPACT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={stage >= 3 ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="mt-14 text-white/90 text-lg max-w-2xl mx-auto"
        >
          Entertainment transforms footfall into engagement — driving longer visits,
          repeat traffic, and global destination visibility.
        </motion.p>

      </div>

      {/*  SLIDE LABEL */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
          08 — Attractions & Entertainment
        </span>
      </div>

    </section>
  );
}