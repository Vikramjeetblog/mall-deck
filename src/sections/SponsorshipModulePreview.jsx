import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import GlassCard from "../shared/GlassCard";

const sponsorshipItems = [
  "Tiered partnership architecture with flexible brand visibility",
  "Audience and footfall proof points to support commercial conversations",
  "Activation examples for retail launches, seasonal campaigns, and cultural moments",
  "Clear path to sponsorship inquiry and qualification",
];
export default function SponsorshipModulePreview({ open, onToggle }) {
  return (
    <div className="mt-8">
      <button
        onClick={onToggle}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
      >
        {open ? "Hide Sponsorship Module" : "Open Sponsorship Module"}
        <FiArrowRight className={`transition ${open ? "rotate-90" : ""}`} />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          marginTop: open ? 24 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <GlassCard>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-white/45">Phase 2 preview</div>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Sponsorship Module</h3>
              <p className="mt-4 text-sm leading-6 text-white/65 md:text-base">
                A deeper path for brand partners evaluating audience fit, activation potential, and campaign visibility.
              </p>
            </div>
             <div className="grid gap-3">
              {sponsorshipItems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/80">
                  <div className="flex items-start gap-3">
                    <FiStar className="mt-0.5 shrink-0 text-white/70" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}