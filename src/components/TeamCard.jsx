import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045]"
    >
      {/* Avatar */}
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl font-semibold text-white">
          {member.name.charAt(0)}
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all group-hover:border-white/20 group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Info */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white">
          {member.name}
        </h3>

        <p className="mt-1 text-sm text-white/40">
          {member.role}
        </p>

        <p className="mt-5 text-sm leading-6 text-white/45">
          {member.description}
        </p>
      </div>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/45"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default TeamCard;