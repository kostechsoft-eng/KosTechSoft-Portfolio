import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
    >
      {/* PROJECT PREVIEW */}
      {/* PROJECT PREVIEW */}
<div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#111315]">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      loading="lazy"
    />
  ) : (
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:30px_30px]" />
  )}

  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/60 backdrop-blur">
    {project.type || "Project"}
  </div>
</div>

      {/* CONTENT */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {project.title}
            </h3>
          </div>

          <span className="text-xs text-white/20">
            {String(project.id).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/40">
          {project.description}
        </p>

        {/* TECH */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-xs text-white/40"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Live Site
              <ArrowUpRight size={15} />
            </a>
          )}

          <a
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
          >
            View Project
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </motion.article>
  );
}

export default ProjectCard;