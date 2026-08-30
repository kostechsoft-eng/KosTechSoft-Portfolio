function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern responsive websites and web applications for businesses.",
    },
    {
      title: "AI Automation",
      description:
        "AI-powered workflows and automation designed to reduce repetitive work.",
    },
    {
      title: "AutoCAD & SolidWorks",
      description:
        "CAD drafting, mechanical design and 3D modelling solutions.",
    },
    {
      title: "Business Solutions",
      description:
        "Custom digital tools and software solutions built around business requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-widest text-white/40">
          Services
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          What we
          <span className="text-white/40"> build.</span>
        </h1>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-white/10 bg-white/[0.02] p-6"
            >
              <h2 className="text-xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Services;