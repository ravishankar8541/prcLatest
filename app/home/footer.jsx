import Image from "next/image";
import { productCatalog } from "../catalog";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 15L15 5M7 5H15V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M6.6 3.8L9 3.2C9.6 3.05 10.2 3.35 10.45 3.9L11.55 6.6C11.8 7.2 11.65 7.9 11.15 8.3L9.75 9.5C10.9 11.9 12.1 13.1 14.5 14.25L15.7 12.85C16.1 12.35 16.8 12.2 17.4 12.45L20.1 13.55C20.65 13.8 20.95 14.4 20.8 15L20.2 17.4C20 18.2 19.3 18.8 18.45 18.8C10.5 18.8 5.2 13.5 5.2 5.55C5.2 4.7 5.8 4 6.6 3.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M20 10.5C20 15.5 12 21 12 21C12 21 4 15.5 4 10.5C4 6.36 7.58 3 12 3C16.42 3 20 6.36 20 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M14.2 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H8v3.1h2.8v8h3.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M20 11.5C20 16.2 16.4 20 12 20C10.5 20 9.1 19.6 7.9 18.9L4 20L5.1 16.2C4.4 15 4 13.6 4 12C4 7.3 7.6 3.5 12 3.5C16.4 3.5 20 7.3 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.2 8.3C8.4 7.9 8.7 7.8 9 7.8H9.8C10 7.8 10.2 8 10.3 8.3L11 10C11.1 10.2 11.1 10.4 10.9 10.6L10.2 11.4C10.8 12.7 11.8 13.7 13.1 14.3L13.9 13.6C14.1 13.4 14.3 13.4 14.5 13.5L16.2 14.2C16.5 14.3 16.7 14.5 16.7 14.8V15.6C16.7 15.9 16.6 16.2 16.2 16.4C15.8 16.6 15.2 16.7 14.8 16.6C11.3 15.8 8.2 12.7 7.4 9.2C7.3 8.8 7.4 8.2 7.6 7.8"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SiteFooter() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Why PRC", href: "/why-prc" },
    { label: "Products", href: "/#products" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0b0b0b] text-white">

      {/* =========================================================
          PREMIUM TOP LINE
      ========================================================== */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">

          {/* =====================================================
              BRAND COLUMN
          ====================================================== */}
          <div className="lg:col-span-4">

            <a
              href="/"
              className="group inline-block"
              aria-label="PRC Bath Fittings Home"
            >
              <div className="relative flex h-[72px] w-[160px] items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/prcNewLogo.png"
                  alt="PRC Bath Fittings"
                  width={250}
                  height={124}
                  className="h-auto w-full object-contain"
                />
              </div>
            </a>

            <div className="mt-7 max-w-md">

              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
                Premium Bath Fittings
              </p>

              <h2 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-[28px]">
                Designed for modern
                <br />
                spaces.
              </h2>

              <p className="mt-5 max-w-sm text-[14px] leading-7 text-white/55">
                PRC Bath Fittings brings together refined design, dependable
                performance and thoughtful craftsmanship to create bathroom
                solutions for contemporary spaces.
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://wa.me/919643332209"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <WhatsAppIcon />
              </a>

            </div>

          </div>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}
          <div className="lg:col-span-2">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-white/30" />
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Navigation
              </h3>
            </div>

            <ul className="space-y-4">

              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between border-b border-white/[0.06] pb-3 text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowIcon />
                    </span>
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* =====================================================
              PRODUCTS
          ====================================================== */}
          <div className="lg:col-span-3">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-white/30" />
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                PRC Collection
              </h3>
            </div>

            <ul className="space-y-3">

              {productCatalog.slice(0, 7).map((product) => (
                <li key={product.slug}>

                  <a
                    href={`/products/${product.slug}`}
                    className="group flex items-center gap-3 text-[14px] text-white/60 transition-colors duration-300 hover:text-white"
                  >

                    <span>{product.name}</span>

                    <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowIcon />
                    </span>

                  </a>

                </li>
              ))}

            </ul>

            <a
              href="/#products"
              className="mt-7 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-[12px] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:border-white"
            >
              View all products
              <ArrowIcon />
            </a>

          </div>

          {/* =====================================================
              CONTACT
          ====================================================== */}
          <div className="lg:col-span-3">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-white/30" />
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Contact
              </h3>
            </div>

            <div className="space-y-6">

              {/* PHONE */}
              <a
                href="tel:+919643332209"
                className="group flex gap-4"
              >

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <PhoneIcon />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Call Us
                  </span>

                  <span className="mt-1 block text-[15px] text-white/80 transition-colors group-hover:text-white">
                    +91 96433 32209
                  </span>
                </span>

              </a>

              {/* EMAIL */}
              <a
                href="mailto:prcsanitaryware@gmail.com"
                className="group flex gap-4"
              >

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                  <MailIcon />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-[14px] text-white/80 transition-colors group-hover:text-white">
                    prcsanitaryware@gmail.com
                  </span>
                </span>

              </a>

              {/* LOCATION */}
              <div className="flex gap-4">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60">
                  <LocationIcon />
                </span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Our Location
                  </span>

                  <span className="mt-1 block max-w-[280px] text-[14px] leading-6 text-white/65">
                    Khasra No.-23/8/2, Opposite Shakti Tent House, Railway Road, Samaypur, Delhi - 110042
                  </span>
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            CTA STRIP
        ======================================================== */}
        <div className="border-y border-white/[0.08] py-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
                Need assistance?
              </p>

              <p className="mt-2 text-[16px] text-white/75">
                Talk to our team about your bathroom fitting requirements.
              </p>

            </div>

            <a
              href="tel:+919643332209"
              className="group inline-flex w-fit items-center gap-4 border border-white/20 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Get in touch

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>

          </div>

        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================== */}
        <div className="flex flex-col gap-4 py-6 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} PRC Bath Fittings. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>

            <span className="text-white/20">
              Designed & Developed by Viral Ads Media
            </span>

          </div>

        </div>

      </div>

      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================== */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full border border-white/[0.025]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full border border-white/[0.02]"
        aria-hidden="true"
      />

    </footer>
  );
}
