import { motion } from "framer-motion";
import { useRef } from "react";

export default function SponsorshipModule({ onClose }) {
  const containerRef = useRef(null);

  const tiers = [
    {
      title: "Title Partner",
      desc: "Lead presence across major destination moments.",
    },
    {
      title: "Official Partner",
      desc: "Always-on visibility with premium relevance.",
    },
    {
      title: "Campaign Partner",
      desc: "Short-term bursts around launches and seasons.",
    },
    {
      title: "Seasonal Sponsor",
      desc: "High-impact presence during peak traffic periods.",
    },
  ];

  const audienceData = [
    { value: "100M+", label: "Annual Visits" },
    { value: "Global", label: "Audience Reach" },
    { value: "Premium", label: "Spend Profile" },
    { value: "High", label: "Visibility Impact" },
  ];

  const activations = [
    "Atrium Takeovers",
    "Brand Installations",
    "LED Screen Dominations",
    "Product Launch Moments",
    "Sampling Campaigns",
    "Immersive Experiences",
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

      {/* SCROLL */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory"
      >
        {/* HERO */}
        <section className="relative h-screen snap-start overflow-hidden">
          <video
            src="/assets/videos/sponsorship-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 rounded-full border border-white/15 px-4 py-1 text-[10px] uppercase tracking-[0.35em] text-white/55 backdrop-blur-md md:text-xs">
              Sponsorship Module
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
              className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl xl:text-7xl"
            >
              Own Attention
              <br />
              At Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-5 text-sm uppercase tracking-[0.28em] text-white/55 md:text-base"
            >
              Reach • Relevance • Visibility
            </motion.p>
          </div>
        </section>

        {/* PARTNERSHIP TIERS */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
          <div className="relative z-10 w-full max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1 }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Partnership Tiers
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Structured for Brand Ambition
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              {tiers.map((tier, i) => (
                <div
                  key={tier.title}
                  className={`rounded-3xl border border-white/10 p-6 text-left backdrop-blur-md md:p-8 ${
                    i % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.03]"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                    Tier
                  </div>

                  <div className="mt-3 text-xl font-medium text-white md:text-2xl">
                    {tier.title}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AUDIENCE DATA */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_50%)]" />
          <div className="relative z-10 w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1 }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Audience Data
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Built for Reach
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
            >
              {audienceData.map((item, i) => (
                <div
                  key={item.label}
                  className={`rounded-3xl border border-white/10 p-6 text-center backdrop-blur-md md:p-8 ${
                    i % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.03]"
                  }`}
                >
                  <div className="text-3xl font-semibold text-white md:text-5xl">
                    {item.value}
                  </div>

                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/45 md:text-xs">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ACTIVATION EXAMPLES */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_45%)]" />
          <div className="relative z-10 w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1 }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Activation Examples
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Make Presence Unmissable
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {activations.map((item) => (
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
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="mt-10 text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs"
            >
              Atrium • Media • Experience • Sampling
            </motion.p>
          </div>
        </section>

        {/* WHY IT WORKS */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_42%)]" />
          <div className="relative z-10 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1 }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Value
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                More Than Visibility.
                <br />
                Brand Ownership.
              </h2>

              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/50 md:text-base">
                Attention • Association • Impact
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative h-screen snap-start overflow-hidden">
          <video
            src="/assets/videos/sponsorship-cta.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/45 to-black/88" />

          <div className="relative z-10 flex h-full items-center justify-center px-8 text-center">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-semibold md:text-5xl xl:text-6xl">
                Build Your Partnership
              </h2>

              <p className="mt-5 text-sm uppercase tracking-[0.28em] text-white/50 md:text-base">
                Put your brand at the center of attention.
              </p>

              <button className="mt-10 rounded-full border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition hover:bg-white hover:text-black md:text-sm">
                Enquire Sponsorship
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}