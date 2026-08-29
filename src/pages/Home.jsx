import { teamMembers } from "../data/team";
import TeamCard from "../components/TeamCard";
import { processSteps } from "../data/process";
import ProcessStep from "../components/ProcessStep";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  ShieldCheck,
  PencilRuler,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

function Home() {
  return (
    <main id="home" className="overflow-hidden">

      {/* Hero */}
      <section className="relative min-h-screen px-5 pt-32">

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
          <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-blue-500/[0.08] blur-3xl" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Small badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Building the future, one solution at a time
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building Digital Solutions
              <span className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                That Move Businesses Forward.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
  We help businesses establish, automate and improve their digital
  operations through modern software, AI automation, CAD design and
  technology services.
</p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                View Our Work
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Start a Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
              <span>✓ Modern Technology</span>
              <span>✓ Business-Focused</span>
              <span>✓ Security-Minded</span>
            </div>

          </motion.div>


          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden h-[500px] lg:block"
          >

            {/* Main glass panel */}
            <div className="absolute inset-8 rounded-3xl border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-sm">

              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>

                <span className="text-xs text-white/30">
                  kts.digital
                </span>
              </div>

              {/* Code-style visual */}
              <div className="p-8 font-mono text-sm leading-8">

                <div className="text-white/30">
                  {"// Building digital solutions"}
                </div>

                <div>
  <span className="text-purple-400">const</span>{" "}
  <span className="text-blue-300">KosTechSoft</span>{" "}
  = {"{"}
</div>

<div className="pl-6">
  <span className="text-white/40">services:</span>{" "}
  <span className="text-emerald-300">
    ["Web", "AI", "CAD"]
  </span>,
</div>

<div className="pl-6">
  <span className="text-white/40">design:</span>{" "}
  <span className="text-orange-300">true</span>,
</div>

<div className="pl-6">
  <span className="text-white/40">security:</span>{" "}
  <span className="text-orange-300">true</span>,
</div>

<div className="pl-6">
  <span className="text-white/40">innovation:</span>{" "}
  <span className="text-orange-300">true</span>
</div>

                <div>{"}"}</div>

                <div className="mt-8 h-px w-full bg-white/10" />

                <div className="mt-6 flex items-center gap-3 text-white/40">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  System ready
                </div>

              </div>
            </div>


            {/* Floating cards */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="rounded-xl bg-purple-500/10 p-3 text-purple-300">
                <Code2 size={20} />
              </div>

              <div>
                <p className="text-sm font-medium">Development</p>
                <p className="text-xs text-white/40">Modern Web</p>
              </div>
            </motion.div>


            <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-28 right-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 p-4 shadow-xl backdrop-blur-xl"
>
  <div className="rounded-xl bg-orange-500/10 p-3 text-orange-300">
    <PencilRuler size={20} />
  </div>

  <div>
    <p className="text-sm font-medium">CAD Design</p>
    <p className="text-xs text-white/40">2D / 3D Design</p>
  </div>
</motion.div>


            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 left-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-300">
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="text-sm font-medium">Security</p>
                <p className="text-xs text-white/40">Built In</p>
              </div>
            </motion.div>


            {/* Decorative center icon */}
            <div className="absolute right-20 top-28 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/70 shadow-xl backdrop-blur">
              <Cpu size={25} />
            </div>

          </motion.div>

        </div>
      </section>


      
      


      {/* Temporary spacer for testing */}
      <section
  id="services"
  className="border-t border-white/10 px-5 py-28"
>
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        What we do
      </p>

      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Technology that solves
        <span className="text-white/40"> real problems.</span>
      </h2>

      <p className="mt-5 text-base leading-7 text-white/45">
        From building your digital presence to automating everyday
        operations, we create practical technology solutions around
        your business needs.
      </p>
    </motion.div>

    {/* Service cards */}
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          index={index}
        />
      ))}
    </div>

  </div>
</section>

<section
  id="projects"
  className="border-t border-white/10 px-5 py-28"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        Our work
      </p>

      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Ideas built into
        <span className="text-white/40"> digital experiences.</span>
      </h2>

      <p className="mt-5 text-base leading-7 text-white/45">
        Explore some of the solutions and concepts we can build for
        businesses across different industries.
      </p>
    </motion.div>

    {/* Projects */}
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </div>

  </div>
</section>
<section
  id="about"
  className="border-t border-white/10 px-5 py-28"
>
  <div className="mx-auto max-w-7xl">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        Why KosTechSoft
      </p>

      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Technology should solve
        <span className="text-white/40"> problems, not create them.</span>
      </h2>

      <p className="mt-5 text-base leading-7 text-white/45">
        We focus on understanding the real business requirement first,
        then choose the right technology to build a practical solution.
      </p>
    </motion.div>

    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          title: "Business First",
          description:
            "We focus on the actual business problem instead of building unnecessary features.",
        },
        {
          title: "Modern Technology",
          description:
            "We use modern tools and technologies that fit the requirements of the project.",
        },
        {
          title: "Practical Solutions",
          description:
            "Our goal is to create solutions that are useful, maintainable and easy to use.",
        },
        {
          title: "Direct Collaboration",
          description:
            "You communicate directly with our team throughout the project.",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/20 hover:bg-white/[0.045]"
        >
          <span className="text-sm text-white/25">
            0{index + 1}
          </span>

          <h3 className="mt-8 text-lg font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/40">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* HOW WE WORK */}
<section className="border-t border-white/10 px-5 py-28">
  <div className="mx-auto max-w-7xl">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        How we work
      </p>

      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        From idea to
        <span className="text-white/40"> launch.</span>
      </h2>

      <p className="mt-5 text-base leading-7 text-white/45">
        A simple and transparent process designed to keep every project
        organized from the first conversation to launch.
      </p>
    </motion.div>

    <div className="mt-16 grid gap-10 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <ProcessStep
          key={step.number}
          step={step}
          index={index}
        />
      ))}
    </div>

  </div>
</section>

{/* TEAM */}
<section
  id="team"
  className="border-t border-white/10 px-5 py-28"
>
  <div className="mx-auto max-w-7xl">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
        The team
      </p>

      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Small team.
        <span className="text-white/40">
          {" "}Big ideas.
        </span>
      </h2>

      <p className="mt-5 text-base leading-7 text-white/45">
        We are a growing team of technology-focused people building
        practical digital solutions for businesses and individuals.
      </p>
    </motion.div>

    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={member.id}
          member={member}
          index={index}
        />
      ))}
    </div>

  </div>
</section>
{/* CONTACT */}
<section
  id="contact"
  className="border-t border-white/10 px-5 py-28"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
          Start a project
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Have an idea?
          <span className="block text-white/40">
            Let's build it.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/45">
          Tell us about your project, business requirement or idea.
          We'll discuss the requirements and figure out the right
          solution together.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:hello@kostechsoft.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Start a Project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
      >
        <p className="text-sm text-white/35">
          Contact KosTechSoft
        </p>

        <div className="mt-8 space-y-6">

          <div>
            <p className="text-xs uppercase tracking-wider text-white/25">
              Email
            </p>

            <a
              href="mailto:hello@kostechsoft.com"
              className="mt-2 block text-base text-white/75 transition hover:text-white"
            >
              kostechsoft@gmail.com
            </a>
          </div>

         <div>
  <p className="text-xs uppercase tracking-wider text-white/25">
    Contact
  </p>

  <div className="mt-3 space-y-3">

    {/* Email */}
    <a
      href="mailto:kostechsoft@gmail.com"
      className="flex items-center gap`-3 text-sm text-white/60 transition hover:text-white"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
        <Mail size={16} />
      </span>

      kostechsoft@gmail.com
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/917043455275"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
        <MessageCircle size={16} />
      </span>

      +91 7043455275
    </a>

    {/* Phone */}
    <a
      href="tel:+917043455275"
      className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
        <Phone size={16} />
      </span>

      Call us
    </a>

  </div>
</div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white/25">
              Services
            </p>

            <p className="mt-2 text-sm leading-6 text-white/45">
              Web Development · AI Automation · CAD Design ·
              UI/UX · IT & Cybersecurity
            </p>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>
    </main>
  );
}

export default Home;