import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cadProjects } from "../data/cadProjects";
import ModelViewer from "../components/ModelViewer";

function CADProjectDetails() {
  const { projectId } = useParams();

  const project = cadProjects.find(
    (item) => item.id === projectId
  );

  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            CAD Project Not Found
          </h1>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 text-white/50 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 pb-28 pt-36 text-white">
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
        <div className="mt-10 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
            {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/45 sm:text-lg">
            {project.description}
          </p>
        </div>

        {/* Main image */}
        <div className="mt-14 overflow-hidden border border-white/10 bg-white/[0.02]">
          <img
            src={project.images[0]}
            alt={`${project.title} isometric view`}
            className="w-full object-contain"
          />
        </div>

        {/* Project information */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="border border-white/10 p-6">
            <p className="text-xs uppercase tracking-widest text-white/25">
              Software
            </p>

            <p className="mt-3 text-lg font-medium">
              {project.software}
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <p className="text-xs uppercase tracking-widest text-white/25">
              Design Type
            </p>

            <p className="mt-3 text-lg font-medium">
              {project.type}
            </p>
          </div>

          <div className="border border-white/10 p-6">
            <p className="text-xs uppercase tracking-widest text-white/25">
              Project Category
            </p>

            <p className="mt-3 text-lg font-medium">
              {project.category}
            </p>
          </div>

        </div>

        {/* Overview + Highlights */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
              Design Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              A closer look at the design.
            </h2>

            <p className="mt-5 text-base leading-7 text-white/45">
              This project demonstrates a 3D mechanical component
              developed using a SolidWorks CAD workflow. Multiple
              views are provided to communicate the geometry and
              overall form of the model clearly.
            </p>

            <p className="mt-4 text-base leading-7 text-white/40">
              The project is presented as portfolio work to
              demonstrate CAD modeling and engineering visualization
              capabilities.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
              Highlights
            </p>

            <div className="mt-6 space-y-3">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 border border-white/10 bg-white/[0.02] px-5 py-4"
                >
                  <CheckCircle2
                    size={17}
                    className="text-blue-300"
                  />

                  <span className="text-sm text-white/60">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Model views */}
        {/* CAD IMAGE GALLERY */}
<section className="mt-24">

  <div>
    <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
      Model Views
    </p>

    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
      Explore the component
      <span className="text-white/40">
        {" "}from every angle.
      </span>
    </h2>

    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40">
      Multiple CAD views are presented to showcase the geometry
      and overall design of the component.
    </p>
  </div>

  {/* Main Image */}
  <div className="mt-10 overflow-hidden border border-white/10 bg-[#111315]">

    <div className="relative aspect-[16/10] w-full">

      <img
        src={project.images[selectedImage]}
        alt={`${project.title} view ${selectedImage + 1}`}
        className="h-full w-full object-contain"
      />

      {/* View counter */}
      <div className="absolute bottom-4 right-4 border border-white/10 bg-black/70 px-3 py-2 text-xs text-white/40 backdrop-blur">
        {String(selectedImage + 1).padStart(2, "0")} /{" "}
        {String(project.images.length).padStart(2, "0")}
      </div>

    </div>
  </div>

  {/* Thumbnails */}
  <div className="mt-4 grid grid-cols-5 gap-3">

    {project.images.map((image, index) => (
      <button
        key={image}
        onClick={() => setSelectedImage(index)}
        className={`group relative overflow-hidden border transition ${
          selectedImage === index
            ? "border-blue-400"
            : "border-white/10 hover:border-white/30"
        }`}
      >
        <div className="aspect-square bg-[#111315]">

          <img
            src={image}
            alt={`CAD view ${index + 1}`}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />

        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 px-2 py-2 text-center text-[10px] uppercase tracking-wider backdrop-blur ${
            selectedImage === index
              ? "bg-blue-500/20 text-blue-200"
              : "bg-black/60 text-white/35"
          }`}
        >
          View {String(index + 1).padStart(2, "0")}
        </div>
      </button>
    ))}

  </div>

</section>
{/* INTERACTIVE 3D MODEL */}
<section className="mt-24">

  <div className="max-w-2xl">

    <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
      Interactive Model
    </p>

    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
      Explore the model
      <span className="text-white/40">
        {" "}in 3D.
      </span>
    </h2>

    <p className="mt-4 text-sm leading-6 text-white/40">
      Rotate and zoom the model to explore the mechanical design
      from different angles.
    </p>

  </div>

  <div className="mt-10">
    <ModelViewer />
  </div>

</section>

        {/* CTA */}
        <section className="mt-24 border border-white/10 bg-white/[0.02] p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-blue-300/60">
            CAD & Engineering
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Need a custom CAD design?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/40">
            Explore how KosTechSoft can help with 2D drafting,
            3D modeling and engineering design workflows.
          </p>

          <a
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Contact KosTechSoft
            <ArrowUpRight size={16} />
          </a>
        </section>

      </div>
    </main>
  );
}

export default CADProjectDetails;