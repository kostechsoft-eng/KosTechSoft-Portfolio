import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => String(item.id) === String(projectId)
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-5 pt-40 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-white/40">Project not found</p>

          <h1 className="mt-4 text-4xl font-semibold">
            We couldn't find that project.
          </h1>

          <Link
            to="/#projects"
            className="mt-8 inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-sm text-white/60 hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10 px-5 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-5xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/45">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Visit Live Website
                <ExternalLink size={16} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* SCREENSHOT */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#111315]"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full"
              />
            ) : (
              <div className="flex aspect-video items-center justify-center">
                <span className="text-white/20">
                  Project preview
                </span>
              </div>
            )}
          </motion.div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              Project Overview
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Built to solve a real business need.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45">
              {project.longDescription ||
                project.description}
            </p>

            <p className="mt-6 text-base leading-8 text-white/40">
              This project demonstrates our approach to combining
              practical business requirements with modern digital
              experiences and maintainable technology.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            What We Built
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Key features
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(
              project.features || [
                "Responsive user interface",
                "Modern component architecture",
                "Business-focused experience",
              ]
            ).map((feature, index) => (
              <div
                key={feature}
                className="border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="text-xs text-white/20">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold">
                  {feature}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                Technology
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Built with modern tools.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/45"
                >
                  {technology}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">

            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              Start a Project
            </p>

            <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Have a project like this in mind?
              </h2>

              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </Link>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default ProjectDetails;