import { Mail, MessageCircle, Phone } from "lucide-react";

function Contact() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-widest text-white/40">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-semibold">
          Let's build something
          <span className="text-white/40"> together.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-white/50">
          Have a project, website or automation requirement?
          Get in touch with KosTechSoft.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          <a
            href="mailto:kostechsoft@gmail.com"
            className="border border-white/10 bg-white/[0.02] p-6 transition hover:bg-white/[0.05]"
          >
            <Mail size={22} />

            <h2 className="mt-5 font-semibold">
              Email
            </h2>

            <p className="mt-2 text-sm text-white/40">
              kostechsoft@gmail.com
            </p>
          </a>

          <a
            href="tel:+917043455275"
            className="border border-white/10 bg-white/[0.02] p-6 transition hover:bg-white/[0.05]"
          >
            <Phone size={22} />

            <h2 className="mt-5 font-semibold">
              Phone
            </h2>

            <p className="mt-2 text-sm text-white/40">
              +91 7043455275
            </p>
          </a>

          <a
            href="https://wa.me/917043455275"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 bg-white/[0.02] p-6 transition hover:bg-white/[0.05]"
          >
            <MessageCircle size={22} />

            <h2 className="mt-5 font-semibold">
              WhatsApp
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Chat with us
            </p>
          </a>

        </div>

      </div>
    </main>
  );
}

export default Contact;