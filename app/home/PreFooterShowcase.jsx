const showcaseItems = [
  {
    title: "C.P. Taps",
    image: "/mid2.png",
    alt: "Chrome PRC bath tap",
    href: "https://www.prcsanitaryware.com/product-list.php?id=3",
  },
  {
    title: "Kitchen Sinks",
    image: "/mid3.png",
    alt: "PRC stainless steel kitchen sink",
    href: "https://www.prcsanitaryware.com/product-list.php?id=1",
  },
  {
    title: "Bath Showers",
    image: "/mid4.png",
    alt: "PRC bath shower fitting",
    href: "https://www.prcsanitaryware.com/product-list.php?id=4",
  },
  {
    title: "Health Faucets",
    image: "/mid5.png",
    alt: "PRC chrome health faucet",
    href: "https://www.prcsanitaryware.com/product-list.php?id=5",
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
              <article className="prefooter-showcase__item" key={item.title}>
                <a className="prefooter-showcase__image" href={item.href} aria-label={`View ${item.title}`}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </a>
                <a className="prefooter-showcase__more" href={item.href}>
                  <span>View More</span>
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

     
    </section>
  );
}
