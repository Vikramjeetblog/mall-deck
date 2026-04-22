import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

export default function SectionHeading({ kicker, title, body, align = "left" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}
    >
      {kicker ? (
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
          {kicker}
        </div>
      ) : null}
           <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">{body}</p> : null}
    </motion.div>
  );
}