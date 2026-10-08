import ContactSection from "../home/ContactSection";
import PageBanner from "../home/PageBanner";
import SiteFooter from "../home/footer";
import SiteHeader from "../site-header";

export default function ContactPage() {
  return (
    <main className="home-page" id="contact-page">
      <SiteHeader />
      <PageBanner pageName="Contact Us" imageAlt="PRC sanitaryware fittings displayed in a modern bathroom" />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
