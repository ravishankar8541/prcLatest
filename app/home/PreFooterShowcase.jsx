import Link from "next/link";

const showcaseItems = [
  {
    title: "C.P. Bend Shower",
    image: "/branded-banners/prc-bend-shower-logo.webp",
    alt: "Chrome overhead bend shower with the PRC logo engraved on the shower head",
    href: "/products/c-p-bend-shower-manufacturer",
  },
  {
    title: "C.P. Tap",
    image: "/branded-banners/prc-basin-tap-logo.webp",
    alt: "Chrome basin tap with the PRC logo engraved on the lever",
    href: "/products/c-p-tap-manufacturer",
  },
  {
    title: "Kitchen Sink",
    image: "/branded-banners/prc-kitchen-sink-logo.webp",
    alt: "Stainless steel kitchen sink with the PRC logo engraved inside the basin",
    href: "/products/kitchen-sink-manufacturer",
  },
  {
    title: "C.P. Wall Mixer",
    image: "/branded-banners/prc-wall-mixer-logo.webp",
    alt: "Chrome wall mixer tap with the PRC logo engraved on both handles",
    href: "/products/c-p-tap-manufacturer",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function PreFooterShowcase() {
  return (
    <section
      className="prefooter-showcase"
      data-header-theme="light"
      aria-label="PRC premium bath fittings"
    >
      <div className="prefooter-showcase__gallery">
        <div className="prefooter-showcase__inner">
          <a
            className="prefooter-showcase__hero"
            href="#products"
            aria-label="Explore PRC bathroom fittings"
          >
            <img src="/branded-banners/prc-health-faucets-logo.webp" alt="Chrome health faucet collection with the PRC logo engraved on each handle" loading="lazy" />
          </a>

          <div className="prefooter-showcase__grid">
            {showcaseItems.map((item) => (
              <article className="prefooter-showcase__item" key={item.image}>
                <Link className="prefooter-showcase__image" href={item.href} aria-label={`View ${item.title}`}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </Link>
                <Link className="prefooter-showcase__more" href={item.href}>
                  <span>View More</span>
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

     
    </section>
  );
}
