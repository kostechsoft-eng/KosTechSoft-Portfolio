import { motion } from "framer-motion";

function ProcessStep({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative"
    >
      {/* Connector */}
      {index !== 4 && (
        <div className="absolute left-[2.1rem] top-16 hidden h-px w-[calc(100%-2rem)] bg-white/10 lg:block" />
      )}

      <div className="relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.08]">
          {step.number}
        </div>

        <h3 className="mt-6 text-lg font-semibold text-white">
          {step.title}
        </h3>

        <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/40">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProcessStep;