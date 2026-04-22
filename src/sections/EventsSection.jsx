import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import EventsModule from "../modules/EventsModule";
import SponsorshipModule from "../modules/SponsorshipModule";

export default function EventsSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  const [stage, setStage] = useState(0);
  const [openModule, setOpenModule] = useState(null);

  useEffect(() => {
    if (isInView && !openModule) {
      videoRef.current?.play();

      const t1 = setTimeout(() => setStage(1), 300);
      const t2 = setTimeout(() => setStage(2), 1100);
      const t3 = setTimeout(() => setStage(3), 2100);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else {
      videoRef.current?.pause();
      setStage(0);
    }
  }, [isInView, openModule]);

  return (
    <>
      <section
        ref={ref}
        className="relative h-screen w-screen overflow-hidden bg-black"
      >
        {/* VIDEO */}
        <motion.video
          ref={videoRef}
          src="/assets/videos/events.mp4"
          muted
          loop
          playsInline
          preload="none"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={
            isInView && !openModule
              ? { scale: 1, opacity: 1 }
              : { scale: 1.12, opacity: 0 }
          }
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.58] contrast-[1.08]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/38 to-black/88" />

        {/* LIGHT BURST */}
        {stage >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.16 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent_58%)]"
          />
        )}

        {/* TOP LABEL */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
          <span className="text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase">
            09 — Events
          </span>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 pt-24 pb-14 text-center">
          {/* TOP KICKER */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            animate={
              stage >= 1
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 1 }}
          >
            <div className="text-white/50 text-[10px] md:text-xs tracking-[0.35em] uppercase">
              Events & Platform
            </div>
          </motion.div>

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            animate={
              stage >= 2
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 1.2 }}
            className="max-w-5xl -mt-8"
          >
            <h2 className="text-white text-4xl md:text-6xl xl:text-7xl font-semibold leading-[1.05]">
              More Than A Destination.
              <br />
              <span className="text-white/72">A Global Stage.</span>
            </h2>
          </motion.div>

          {/* BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="w-full max-w-5xl text-center"
          >
            {/* TYPES */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/60 text-[10px] md:text-xs tracking-[0.28em] uppercase">
              <span>Concerts</span>
              <span>Activations</span>
              <span>Launches</span>
              <span>Exhibitions</span>
              <span>Live Shows</span>
            </div>

            {/* MICRO LINE */}
            <p className="mt-8 text-white/45 text-[10px] md:text-xs tracking-[0.35em] uppercase">
              Reach • Visibility • Impact
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setOpenModule("events")}
                className="px-7 py-3 rounded-full border border-white/25 text-white text-[11px] md:text-sm tracking-[0.28em] uppercase hover:bg-white hover:text-black transition duration-300"
              >
                Explore Events
              </button>

              <button
                onClick={() => setOpenModule("sponsorship")}
                className="px-7 py-3 rounded-full border border-white/25 text-white text-[11px] md:text-sm tracking-[0.28em] uppercase hover:bg-white hover:text-black transition duration-300"
              >
                Explore Sponsorship
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODULES */}
      {openModule === "events" && (
        <EventsModule onClose={() => setOpenModule(null)} />
      )}

      {openModule === "sponsorship" && (
        <SponsorshipModule onClose={() => setOpenModule(null)} />
      )}
    </>
  );
}