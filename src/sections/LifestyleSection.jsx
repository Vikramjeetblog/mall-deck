import { motion } from "framer-motion";
import GlassCard from "../shared/GlassCard";
import SectionHeading from "../shared/SectionHeading";
import SectionShell from "../shared/SectionShell";
import { deckContent } from "../data/deckContent";
import { fadeUp, stagger } from "../utils/motion";

export default function LifestyleSection() {
  const { lifestyle } = deckContent;
 return (
    <SectionShell id="lifestyle" className="bg-neutral-950">
      <div className="w-full">
        <SectionHeading title={lifestyle.title} body={lifestyle.body} align="center" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {lifestyle.cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={fadeUp}>
                <GlassCard className="h-full">
                  <Icon className="text-xl text-white/85" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{card.text}</p>
                </GlassCard>
              </motion.div>
               );
          })}
        </motion.div>
      </div>
    </SectionShell>
  );
}