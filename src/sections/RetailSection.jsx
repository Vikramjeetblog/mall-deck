import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assetMap } from "../data/assetMap";

export default function RetailSection({ openModule }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [stage, setStage] = useState(0);

  const brands = [
    { name: "Louis Vuitton", src: assetMap.logos?.lv },
    { name: "Chanel", src: assetMap.logos?.chanel },
    { name: "Gucci", src: assetMap.logos?.gucci },
    { name: "Prada", src: assetMap.logos?.prada },
    { name: "Dior", src: assetMap.logos?.dior },
  ];

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play();

      const t1 = setTimeout(() => setStage(1), 400);
      const t2 = setTimeout(() => setStage(2), 1200);
      const t3 = setTimeout(() => setStage(3), 2000);

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
      {/* VIDEO */}
      <motion.video
        ref={videoRef}
        src="/assets/videos/retail.mp4"
        muted
        loop
        playsInline
        preload="none"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={
          isInView
            ? { scale: 1, opacity: 1 }
            : { scale: 1.12, opacity: 0 }
        }
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/85" />

      {/* LABEL */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 px-4 py-1 border border-white/20 rounded-full backdrop-blur-md">
        <span className="text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase">
          03 — Retail
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between px-6 pt-24 pb-12">
        {/* TOP METRIC */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          animate={
            stage >= 1
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="text-white text-[72px] md:text-[110px] font-semibold leading-none tracking-tight">
            1,200+
          </div>
          <div className="mt-2 text-white/55 text-xs md:text-sm tracking-[0.28em] uppercase">
            Stores
          </div>
        </motion.div>

        {/* CENTER HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={
            stage >= 2
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1.1 }}
          className="text-center -mt-6"
        >
          <h2 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Where Brands
            <br />
            Meet Demand
          </h2>
        </motion.div>

        {/* BOTTOM BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-4xl text-center"
        >
          {/* LOGOS */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center">
                {brand.src && (
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="h-4 md:h-6 object-contain opacity-55 brightness-0 invert"
                  />
                )}
              </div>
            ))}
          </div>

          {/* MICRO LINE */}
          <p className="mt-8 text-white/45 text-[10px] md:text-xs tracking-[0.35em] uppercase">
            Luxury • Fashion • Beauty • Lifestyle
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button
              onClick={() => openModule("leasing")}
              className="px-7 py-3 rounded-full border border-white/25 text-white text-[11px] md:text-sm tracking-[0.28em] uppercase hover:bg-white hover:text-black transition duration-300"
            >
              Explore Leasing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}