import { motion } from "framer-motion";
import { assetMap } from "../data/assetMap";

export default function LuxurySection() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">

      {/* 🔥 SCREEN 1 — POSITIONING */}
      <section className="relative h-screen w-screen snap-start bg-black flex items-center justify-center overflow-hidden">

        <motion.img
          src={assetMap.luxuryImage}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 18, ease: "linear" }}
        />

        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 text-center max-w-4xl px-6">

          {/* LABEL */}
          <div className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">
            Luxury Positioning
          </div>

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-white text-5xl md:text-7xl font-semibold leading-tight"
          >
            Luxury Isn’t Added.
            <br />
            <span className="text-white/70">It’s Engineered.</span>
          </motion.h2>

          {/* SUBTEXT */}
          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
            A purpose-built luxury environment designed for flagship brands,
            premium clientele, and high-value retail performance.
          </p>

          {/* BOTTOM NAV */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            02 — Luxury Experience
          </div>

          {/* SCROLL HINT */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs animate-pulse">
            Scroll ↓
          </div>

        </div>
      </section>

      {/* 🔥 SCREEN 2 — EXPERIENCE */}
      <section className="relative h-screen w-screen snap-start bg-black flex items-center justify-center overflow-hidden">

        <motion.img
          src="/assets/images/luxury-vip.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 16 }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 text-center max-w-3xl px-6">

          {/* LABEL */}
          <div className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">
            Experience
          </div>

          {/* TITLE */}
          <motion.h3
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="text-white text-3xl md:text-5xl font-medium"
          >
            Private Client Experience
          </motion.h3>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="mt-6 text-white/60 text-lg"
          >
            Designed for high-value clients — where service, space, and
            personalization redefine retail engagement.
          </motion.p>

          {/* NAV */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            03 — Market Impact
          </div>

        </div>
      </section>

      {/* 🔥 SCREEN 3 — OUTCOME */}
      <section className="relative h-screen w-screen snap-start bg-black flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-black" />

        <div className="relative z-10 text-center max-w-4xl px-6">

          {/* LABEL */}
          <div className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">
            Outcome
          </div>

          {/* BIG WORD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="text-white text-[100px] md:text-[140px] font-semibold tracking-tight"
          >
            Elite
          </motion.div>

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-lg mt-6 max-w-2xl mx-auto"
          >
            A retail environment where global luxury brands don’t compete —
            they dominate.
          </motion.p>

        </div>
      </section>

    </div>
  );
}