import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  
} from "lucide-react";

import { company } from "../data/company";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <img
  src="/logo.png"
  alt="KosTechSoft"
  className="h-12 w-auto object-contain"
  draggable="false"
/>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">
              Building modern websites, software solutions and
              technology experiences for businesses.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-6 flex items-center gap-3">

              {/* INSTAGRAM */}
              <a
  href={company.instagram}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/50 transition hover:border-white/20 hover:bg-white hover:text-black"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-[18px] w-[18px]"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
    />
  </svg>
</a>

            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/25">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/55 transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                to="/projects"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/25">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <span className="text-sm text-white/45">
                Web Development
              </span>

              <span className="text-sm text-white/45">
                AI Automation
              </span>

              <span className="text-sm text-white/45">
                AutoCAD & SolidWorks
              </span>

              <span className="text-sm text-white/45">
                Business Solutions
              </span>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/25">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              {/* EMAIL */}
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-white/50"
                />

                <span className="break-all">
                  {company.email}
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <MessageCircle
                  size={17}
                  className="text-white/50"
                />

                WhatsApp

                <ArrowUpRight size={14} />
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-3 text-sm leading-6 text-white/45">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-white/50"
                />

                <span>
                  {company.country}
                </span>
              </div>

              {/* PHONE */}
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-white/50"
                />

                {company.phone}
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;