import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import GlassCard from "../shared/GlassCard";
import SectionHeading from "../shared/SectionHeading";
import SectionShell from "../shared/SectionShell";
import { deckContent } from "../data/deckContent";
import { fadeUp, stagger } from "../utils/motion";

export default function OpportunitySection() {
const { opportunities } = deckContent;
return (
    <SectionShell id="opportunities" className="bg-black">
      <div className="w-full">
        <SectionHeading title={opportunities.title} body={opportunities.body} align="center" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {opportunities.paths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.div key={path.title} variants={fadeUp}>
                <button className="h-full w-full text-left transition hover:-translate-y-1">
                  <GlassCard className="h-full">
                    <Icon className="text-xl text-white/85" />
                <div className="mt-8 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{path.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/65">{path.text}</p>
                      </div>
                      <FiArrowRight className="mt-1 shrink-0 text-white/60" />
                    </div>
                  </GlassCard>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
       </SectionShell>
  );
}