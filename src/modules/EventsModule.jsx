import { motion } from "framer-motion";
import { useRef } from "react";

export default function EventsModule({ onClose }) {
  const containerRef = useRef(null);

  const eventTypes = [
    "Concerts",
    "Brand Activations",
    "Product Launches",
    "Exhibitions",
    "Live Shows",
    "Corporate Events",
  ];

  const capabilities = [
    {
      title: "Scale",
      value: "High-footfall destination",
    },
    {
      title: "Format",
      value: "Indoor + public activation spaces",
    },
    {
      title: "Audience",
      value: "Global, affluent, high-intent",
    },
    {
      title: "Impact",
      value: "Visibility at destination scale",
    },
  ];

  const highlights = [
    "Launch Moments",
    "Seasonal Spectacles",
    "Brand-Led Activations",
    "High-Impact Public Events",
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
        {/* HERO  */}
        <section className="relative h-screen snap-start overflow-hidden">
          <video
            src="/assets/videos/event-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 rounded-full border border-white/15 px-4 py-1 text-[10px] uppercase tracking-[0.35em] text-white/55 backdrop-blur-md md:text-xs">
              Events Module
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
              className="max-w-5xl text-4xl font-semibold leading-tight md:text-6xl xl:text-7xl"
            >
              A Global Event Platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-5 text-sm uppercase tracking-[0.28em] text-white/55 md:text-base"
            >
              Launch Engage Amplify
            </motion.p>
          </div>
        </section>

        {/* EVENT HOSTING  */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />

          <div className="relative z-10 w-full max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1 }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Event Hosting
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Built for High-Impact Experiences
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {eventTypes.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-sm md:text-xs"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES  */}
        <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-black px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_50%)]" />

          <div className="relative z-10 w-full max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1 }}
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Capabilities
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Designed for Reach
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4"
            >
              {capabilities.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-3xl border border-white/10 p-6 text-left backdrop-blur-md md:p-8 ${
                    i % 2 === 0 ? "bg-white/[0.06]" : "bg-white/[0.03]"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                    {item.title}
                  </div>
                  <div className="mt-3 text-lg font-medium text-white md:text-xl">
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PAST HIGHLIGHTS  */}
        <section className="relative h-screen snap-start overflow-hidden">
          <video
            src="/assets/videos/past-event.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/88" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
              className="max-w-5xl"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 md:text-xs">
                Past Highlights
              </div>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl xl:text-6xl">
                Built for Attention
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-12 flex max-w-5xl flex-wrap justify-center gap-3 md:gap-4"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm md:text-xs"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* VALUE  */}
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
                Not Just Events.
                <br />
                A Visibility Engine.
              </h2>

              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/50 md:text-base">
                Audience • Engagement • Amplification
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA  */}
        <section className="relative h-screen snap-start overflow-hidden">
          <video
            src="/assets/videos/cta.mp4"
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
                Book Your Next Event
              </h2>

              <p className="mt-5 text-sm uppercase tracking-[0.28em] text-white/50 md:text-base">
                Bring your brand to a global audience.
              </p>

              <button className="mt-10 rounded-full border border-white/25 px-8 py-4 text-[11px] uppercase tracking-[0.3em] transition hover:bg-white hover:text-black md:text-sm">
                Enquire Events
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}