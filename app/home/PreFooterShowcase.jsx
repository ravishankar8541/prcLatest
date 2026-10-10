import Link from "next/link";

const showcaseItems = [
  {
    title: "C.P. Bend Shower",
    image: "/mid2.png",
    alt: "PRC chrome overhead bend shower",
    href: "/products/c-p-bend-shower-manufacturer",
  },
  {
    title: "C.P. Tap",
    image: "/mid3.png",
    alt: "PRC chrome basin tap",
    href: "/products/c-p-tap-manufacturer",
  },
  {
    title: "Kitchen Sink",
    image: "/mid4.png",
    alt: "PRC stainless steel kitchen sink",
    href: "/products/kitchen-sink-manufacturer",
  },
  {
    title: "C.P. Wall Mixer",
    image: "/mid5.png",
    alt: "PRC chrome wall mixer tap",
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
            <img src="/mid1.png" alt="PRC premium bathroom fitting collection" loading="lazy" />
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
