import { Link } from "react-router-dom";
import { projects } from "../data/projects";

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
    </main>
  );
}

export default Projects;