import { motion } from "framer-motion";
import CTAButton from "../shared/CTAButton";
import SectionHeading from "../shared/SectionHeading";
import SectionShell from "../shared/SectionShell";
import { deckContent } from "../data/deckContent";
import { fadeUp } from "../utils/motion";

export default function FinalCTASection() {
  const { cta } = deckContent;
 return (
    <SectionShell id="cta" className="bg-gradient-to-b from-neutral-950 to-black">
      <div className="w-full text-center">
        <SectionHeading title={cta.title} body={cta.body} align="center" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {cta.buttons.map((label, index) => (
            <CTAButton key={label} secondary={index !== 0}>
              {label}
            </CTAButton>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}