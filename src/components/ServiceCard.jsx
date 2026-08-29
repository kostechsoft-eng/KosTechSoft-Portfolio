import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045]"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition-all duration-500 group-hover:bg-white/[0.08]" />

      {/* Top row */}
      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white transition-transform duration-300 group-hover:scale-105">
          <Icon size={22} />
        </div>

        <span className="text-sm font-medium text-white/20">
          {service.number}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-8">
        <h3 className="text-xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/45">
          {service.description}
        </p>
      </div>

      {/* Features */}
      <div className="relative mt-6 space-y-2">
        {service.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-sm text-white/55"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            {feature}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm text-white/40">
          Learn more
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;