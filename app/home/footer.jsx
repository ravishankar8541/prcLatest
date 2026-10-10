import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
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
    <footer data-native-cursor className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="PRC Bath Fittings home">
              <Image src="/prcNewLogo.png" alt="PRC Bath Fittings" width={250} height={124} />
            </Link>
            <p className={styles.eyebrow}>Premium bath fittings</p>
            <h2 className={styles.brandHeading}>
              Designed for modern<br /><em>spaces.</em>
            </h2>
            <p className={styles.description}>
              Refined design. Dependable performance. Thoughtfully crafted bath
              fittings that bring every detail of your space together.
            </p>
            <div className={styles.socials} aria-label="Follow PRC">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://wa.me/919643332209" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <nav className={styles.column} aria-label="Footer navigation">
            <h3 className={styles.columnHeading}>Explore PRC</h3>
            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}><span>{link.label}</span><ArrowIcon /></Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Footer product collection">
            <h3 className={styles.columnHeading}>Our collection</h3>
            <ul className={styles.links}>
              {productCatalog.slice(0, 7).map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`}><span>{product.name}</span><ArrowIcon /></Link>
                </li>
              ))}
            </ul>
            <Link className={styles.collectionLink} href="/#products">
              View the collection <ArrowIcon />
            </Link>
          </nav>

          <div className={styles.contact}>
            <h3 className={styles.columnHeading}>Let&apos;s connect</h3>
            <div className={styles.contactDetails}>
              <a href="tel:+919643332209" className={styles.contactItem}>
                <span className={styles.contactIcon}><PhoneIcon /></span>
                <span><span className={styles.contactLabel}>Call us</span><span className={styles.contactValue}>+91 96433 32209</span></span>
              </a>
              <a href="mailto:prcsanitaryware@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}><MailIcon /></span>
                <span><span className={styles.contactLabel}>Write to us</span><span className={styles.contactValue}>prcsanitaryware@gmail.com</span></span>
              </a>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><LocationIcon /></span>
                <span>
                  <span className={styles.contactLabel}>Visit us</span>
                  <span className={styles.contactValue}>
                    Khasra No.-23/8/2, Opposite Shakti Tent House, Railway Road,
                    Samaypur, Delhi - 110042
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>The finishing touch to your space</p>
            <p className={styles.ctaHeading}>Good spaces begin with <em>great details.</em></p>
          </div>
          <a href="tel:+919643332209" className={styles.ctaButton}>
            Let&apos;s talk <span><ArrowIcon /></span>
          </a>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} PRC Bath Fittings. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
          <span className={styles.credit}>Designed &amp; Developed by <span>Viral Ads Media</span></span>
        </div>
      </div>
    </footer>
  );
}
