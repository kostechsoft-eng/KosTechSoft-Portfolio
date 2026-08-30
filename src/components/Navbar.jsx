import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const productLinks = [
  "Web Development",
  "AI Automation",
  "AutoCAD & SolidWorks",
  "Business Solutions",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/80 px-5 py-3 backdrop-blur-xl">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
              K
            </div>

            <div>
              <p className="text-sm font-bold tracking-wide text-white">
                KosTechSoft
              </p>

              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Digital Solutions
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-6 lg:flex">

            <Link
              to="/"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-sm text-white/65 transition hover:text-white"
            >
              About
            </Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProductsOpen((value) => !value)}
                className="flex items-center gap-1 text-sm text-white/65 transition hover:text-white"
              >
                Services

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 origin-top rounded-xl border border-white/10 bg-[#111315]/95 p-2 shadow-2xl backdrop-blur-xl transition-all duration-200 ${
                  productsOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-95 opacity-0"
                }`}
              >
                <Link
                  to="/services"
                  onClick={closeMenus}
                  className="mb-1 block rounded-lg border-b border-white/5 px-4 py-3 text-xs uppercase tracking-wider text-blue-300/60 transition hover:bg-white/[0.04] hover:text-blue-200"
                >
                  View All Services →
                </Link>

                {productLinks.map((service) => (
                  <Link
                    key={service}
                    to="/services"
                    onClick={closeMenus}
                    className="group flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-white/55 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    <span>{service}</span>

                    <ArrowUpRight
                      size={14}
                      className="text-white/0 transition group-hover:text-blue-300"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/projects"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90 lg:flex"
          >
            Start a Project
            <ArrowUpRight size={16} />
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#111315]/95 p-5 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                About
              </Link>

              <Link
                to="/services"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/projects"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                onClick={closeMenus}
                className="rounded-lg px-3 py-3 text-white/70 transition hover:bg-white/[0.05] hover:text-white"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={closeMenus}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;