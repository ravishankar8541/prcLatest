import Image from "next/image";
import Link from "next/link";

type PageBannerProps = {
  pageName: string;
  imageAlt: string;
};

export default function PageBanner({ pageName, imageAlt }: PageBannerProps) {
  return (
    <section className="about-hero" aria-label={`${pageName} page banner`}>
      <Image
        className="about-hero__image"
        src="/branded-banners/prc-page-banner-logo.webp"
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
      />
      <div className="about-hero__shade" aria-hidden="true" />
      <div className="about-hero__content">
        <h1 className="about-hero__title">{pageName}</h1>
        <nav className="about-hero__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="about-hero__breadcrumb-current" aria-current="page">
            {pageName}
          </span>
        </nav>
      </div>
    </section>
  );
}
