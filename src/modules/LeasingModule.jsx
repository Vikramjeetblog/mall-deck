import { motion } from "framer-motion";
import { useRef } from "react";

export default function LeasingModule({ onClose }) {
  const containerRef = useRef(null);

  const segments = [
    {
      title: "Luxury",
      subtitle: "Flagship Presence",
      desc: "Prestige frontage for iconic brands.",
      zone: "Premium Boulevard",
      value: "Visibility + Status",
      video: "/assets/videos/lease-luxury.mp4",
    },
    {
      title: "Retail",
      subtitle: "Scale & Footfall",
      desc: "High-traffic corridors built for volume.",
      zone: "Retail Core",
      value: "Traffic + Conversion",
      video: "/assets/videos/lease-retail.mp4",
    },
    {
      title: "F&B",
      subtitle: "Lifestyle Anchors",
      desc: "Dining zones designed for dwell time.",
      zone: "Dining District",
      value: "Repeat Visits",
      video: "/assets/videos/lease-fnb.mp4",
    },
    {
      title: "Pop-Up",
      subtitle: "Flexible Activation",
      desc: "Fast, agile formats for launches.",
      zone: "Activation Spaces",
      value: "Buzz + Trial",
      video: "/assets/videos/lease-popup.mp4",
    },
  ];

  const zoneCards = [
    { title: "Luxury", sub: "Prestige frontage" },
    { title: "Retail", sub: "High-footfall core" },
    { title: "F&B", sub: "Dwell-time districts" },
    { title: "Pop-Up", sub: "Flexible activation" },
  ];

  const brandProfiles = [
    "Luxury Fashion",
    "Premium Accessories",
    "Global Apparel",
    "Sportswear",
    "Consumer Tech",
    "Coffee Concepts",
    "Fast Casual",
    "Experiential Retail",
  ];

  return (
    <div className="fixed inset-0 z-[999] bg-black text-white">
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/70 backdrop-blur-md transition hover:text-white"
      >
        Close
      </button>

      <div
        ref={containerRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory"
      >
        {/* HERO */}
        <section className="relative h-screen snap-start overflow-hidden">
          <video
            src="/assets/videos/leasing-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 rounded-full border border-white/15 px-4 py-1 text-[10px] uppercase tracking-[0.35em] text-white/55 backdrop-blur-md md:text-xs">
              Leasing Module
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
              className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl xl:text-7xl"
            >
              Curated Leasing Paths
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-5 text-sm uppercase tracking-[0.28em] text-white/55 md:text-base"
            >
              Luxury • Retail • F&B • Pop-Up
            </motion.p>
          </div>
        </section>

        {/* CATEGORY SECTIONS  */}
        {segments.map((seg) => (
          <section
            key={seg.title}
            className="relative h-screen snap-start overflow-hidden"
          >
            <video
              src={seg.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/80" />

            <div className="relative z-10 flex h-full items-center px-8 md:px-12">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                >
                  <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                    {seg.subtitle}
                  </div>

                  <h2 className="text-4xl font-semibold md:text-6xl xl:text-7xl">
                    {seg.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-base text-white/70 md:text-lg">
                    {seg.desc}
                  </p>

                  <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                      <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/40">
                        Zone
                      </div>
                      <div className="text-white/80">{seg.zone}</div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                      <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/40">
                        Value
                      </div>
                      <div className="text-white/80">{seg.value}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        {/* ZONED FOR PERFORMANCE */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Zoning Strategy
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Zoned for Performance
              </h2>

              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/50 md:text-base">
                Luxury  Retail  Dining  Activation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-14 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-4"
            >
              {zoneCards.map((zone, i) => (
                <div
                  key={zone.title}
                  className={`rounded-3xl border border-white/10 p-6 text-left backdrop-blur-md md:p-8 ${
                    i % 2 === 0 ? "bg-white/[0.07]" : "bg-white/[0.04]"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                    Zone
                  </div>

                  <div className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    {zone.title}
                  </div>

                  <div className="mt-3 text-sm text-white/65 md:text-base">
                    {zone.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* BUILT FOR CATEGORY */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_50%)]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Brand Fit
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Built for Category Leaders
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-14 flex max-w-5xl flex-wrap justify-center gap-3 md:gap-4"
            >
              {brandProfiles.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm md:text-xs"
                >
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="mt-10 text-sm uppercase tracking-[0.22em] text-white/50 md:text-base"
            >
              Global relevance. Local momentum.
            </motion.p>
          </div>
        </section>

        {/* CTA  */}
        <section className="flex h-screen snap-start items-center justify-center bg-black px-8 text-center">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold md:text-5xl xl:text-6xl">
              Start Your Leasing Journey
            </h2>

            <p className="mt-5 text-sm uppercase tracking-[0.28em] text-white/50 md:text-base">
              Find the right format. Own the right position.
            </p>

            <button className="mt-10 rounded-full border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition hover:bg-white hover:text-black md:text-sm">
              Enquire Leasing
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}