import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { cadProjects } from "../data/cadProjects";
import { autocadProjects } from "../data/autocadProjects";

function Projects() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-widest text-white/40">
          Our Projects
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Selected work
          <span className="text-white/40">.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-white/50">
          Explore websites and digital solutions built by KosTechSoft.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="aspect-video w-full object-cover"
                />
              )}

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-white/30">
                  {project.category}
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
                  >
                    View Project
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 hover:text-white"
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <section className="border-t border-white/10 px-5 py-28">
  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
        CAD & Engineering
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Engineering work,
        <span className="text-white/40">
          {" "}designed in 3D.
        </span>
      </h2>

      <p className="mt-5 text-base leading-7 text-white/45">
        Explore our CAD and mechanical design work created using
        professional engineering software.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {cadProjects.map((project) => (
        <article
          key={project.id}
          className="group overflow-hidden border border-white/10 bg-white/[0.02] transition hover:border-blue-400/30"
        >

          {/* Main image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#17191c]">
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute left-4 top-4 border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur">
              {project.software}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">

            <p className="text-xs uppercase tracking-[0.18em] text-blue-300/60">
              {project.type}
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/45">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="border border-white/10 px-3 py-1.5 text-xs text-white/40"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <Link
  to={`/projects/cad/${project.id}`}
  className="mt-7 inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
>
  View CAD Project
</Link>

          </div>
        </article>
      ))}
    </div>

  </div>
</section>
{/* AUTOCAD PROJECTS */}
<section className="border-t border-white/10 px-5 py-28">
  <div className="mx-auto max-w-7xl">

    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
        AutoCAD
      </p>

      <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Technical drawings,
        <span className="text-white/40">
          {" "}built with precision.
        </span>
      </h2>

      <p className="mt-5 text-base leading-7 text-white/45">
        Explore our 2D CAD drafting and mechanical engineering
        documentation created using AutoCAD.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {autocadProjects.map((project) => (
        <article
          key={project.id}
          className="group overflow-hidden border border-white/10 bg-white/[0.02] transition hover:border-blue-400/30"
        >

          {/* Drawing Preview */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#17191c]">

            <img
              src={project.images[0]}
              alt={`${project.title} AutoCAD drawing`}
              className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute left-4 top-4 border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur">
              {project.software}
            </div>

          </div>

          {/* Content */}
          <div className="p-6">

            <p className="text-xs uppercase tracking-[0.18em] text-blue-300/60">
              {project.type}
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/45">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="border border-white/10 px-3 py-1.5 text-xs text-white/40"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">

              <Link
  to={`/projects/cad/autocad/${project.id}`}
  className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
>
  View AutoCAD Project
  <span>↗</span>
</Link>

            </div>

          </div>
        </article>
      ))}
    </div>

  </div>
</section>
    </main>
  );
}

export default Projects;