import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { autocadProjects } from "../data/autocadProjects";

function AutoCADProjectDetails() {
  const { projectId } = useParams();

  const project = autocadProjects.find(
    (item) => item.id === projectId
  );

  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-semibold">
            AutoCAD project not found.
          </h1>

          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-sm hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-12 max-w-4xl">

          <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
            {project.type}
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
            <span className="text-white/30">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/45">
            {project.description}
          </p>

        </div>

        {/* Main Gallery */}
        <section className="mt-16">

          <div className="overflow-hidden border border-white/10 bg-[#111315]">

            <div className="relative aspect-[16/9]">

              <img
                src={project.images[selectedImage]}
                alt={`${project.title} drawing ${selectedImage + 1}`}
                className="h-full w-full object-contain"
              />

              <div className="absolute bottom-4 right-4 border border-white/10 bg-black/70 px-3 py-2 text-xs text-white/40 backdrop-blur">
                {String(selectedImage + 1).padStart(2, "0")} /{" "}
                {String(project.images.length).padStart(2, "0")}
              </div>

            </div>

          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-2 gap-4">

            {project.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden border transition ${
                  selectedImage === index
                    ? "border-blue-400"
                    : "border-white/10 hover:border-white/30"
                }`}
              >

                <div className="aspect-[16/10] bg-[#111315]">

                  <img
                    src={image}
                    alt={`AutoCAD drawing ${index + 1}`}
                    className="h-full w-full object-contain p-2 transition duration-300 hover:scale-[1.02]"
                  />

                </div>

                <div
                  className={`border-t border-white/10 px-4 py-3 text-left text-xs uppercase tracking-wider ${
                    selectedImage === index
                      ? "text-blue-300"
                      : "text-white/40"
                  }`}
                >
                  Drawing {String(index + 1).padStart(2, "0")}
                </div>

              </button>
            ))}

          </div>

        </section>

        {/* Project Information */}
        <section className="mt-24 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-3">

          {/* Description */}
          <div className="lg:col-span-2">

            <p className="text-xs uppercase tracking-[0.22em] text-white/30">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Precision drafting for
              <span className="text-white/40">
                {" "}engineering applications.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
              This project demonstrates detailed 2D mechanical drafting
              and technical documentation developed using AutoCAD.
              The drawings include multiple views, sectional details,
              dimensions, and component-level annotations.
            </p>

          </div>

          {/* Details */}
          <div className="border border-white/10 bg-white/[0.02] p-6">

            <p className="text-xs uppercase tracking-wider text-white/30">
              Project Details
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-xs text-white/30">
                  Software
                </p>

                <p className="mt-1 text-sm text-white/80">
                  {project.software}
                </p>
              </div>

              <div>
                <p className="text-xs text-white/30">
                  Design Type
                </p>

                <p className="mt-1 text-sm text-white/80">
                  2D CAD / Technical Drawing
                </p>
              </div>

              <div>
                <p className="text-xs text-white/30">
                  Drawings
                </p>

                <p className="mt-1 text-sm text-white/80">
                  {project.images.length} technical views
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Highlights */}
        <section className="mt-20 border-t border-white/10 pt-16">

          <p className="text-xs uppercase tracking-[0.22em] text-white/30">
            Capabilities Demonstrated
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 border border-white/10 bg-white/[0.02] p-5"
              >

                <CheckCircle2
                  size={17}
                  className="shrink-0 text-blue-300/70"
                />

                <span className="text-sm text-white/60">
                  {highlight}
                </span>

              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}

export default AutoCADProjectDetails;