"use client";

function ContactIcon({ type }) {
  const paths = {
    phone: (
      <path d="M6.6 3.8 9 3.2a1.2 1.2 0 0 1 1.4.7l1.1 2.7a1.2 1.2 0 0 1-.3 1.4l-1.4 1.2a13.7 13.7 0 0 0 5 5l1.2-1.4a1.2 1.2 0 0 1 1.4-.3l2.7 1.1a1.2 1.2 0 0 1 .7 1.4l-.6 2.4a1.8 1.8 0 0 1-1.7 1.4A15.5 15.5 0 0 1 4.8 5.5a1.8 1.8 0 0 1 1.8-1.7Z" />
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.3-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.6.7c.7 1.2 1.5 2 2.8 2.7l.6-.7c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.6c0 .3-.2.6-.5.8-.5.3-1.1.4-1.7.2-3.1-.7-5.4-3-6.1-6.1-.1-.5 0-1.1.4-1.4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10.5C20 15.5 12 21 12 21s-8-5.5-8-10.5C4 6.36 7.58 3 12 3s8 3.36 8 7.5Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 4l6 6-6 6" />
    </svg>
  );
}

function handleInquirySubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name").toString().trim();
  const email = formData.get("email").toString().trim();
  const phone = formData.get("phone").toString().trim();
  const message = formData.get("message").toString().trim();
  const subject = encodeURIComponent(`Website inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:prcsanitaryware@gmail.com?subject=${subject}&body=${body}`;
}

const contactChannels = [
  {
    icon: "phone",
    label: "Call our team",
    value: "+91 79032 26274",
    href: "tel:+917903226274",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "+91 96433 32209",
    href: "https://wa.me/919643332209",
    external: true,
  },
  {
    icon: "mail",
    label: "Email PRC",
    value: "prcsanitaryware@gmail.com",
    href: "mailto:prcsanitaryware@gmail.com",
    className: "contact-channel--email",
  },
];

const address = "Khasra No.-23/8/2, Opposite Shakti Tent House, Railway Road, Samaypur, Delhi - 110042";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=PRC+Sanitary+Ware%2C+Khasra+No.+23%2F8%2F2%2C+Railway+Road%2C+Samaypur%2C+Delhi+110042";
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.353610643334!2d77.22564471525159!3d28.64912898241124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd70115d7525%3A0xaca6e4729b7304dc!2sPRC%20Sanitary%20ware!5e0!3m2!1sen!2sin!4v1680253982091!5m2!1sen!2sin";



export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-shell">
        <div className="contact-topline">
          <span>CONTACT PRC</span>
          <span>We’re ready when you are <i aria-hidden="true">↗</i></span>
        </div>

        <div className="contact-layout">
          <div className="contact-copy">
            <p className="contact-eyebrow"><span /> GET IN TOUCH</p>
            <h2 id="contact-title">Let’s find the right fit for your space.</h2>
            <p className="contact-intro">
              From product questions to business enquiries, our team is here to help you choose with confidence.
            </p>

            <div className="contact-channels" aria-label="Contact PRC Sanitary Ware">
              {contactChannels.map((channel) => (
                <a
                  className={`contact-channel ${channel.className ?? ""}`}
                  href={channel.href}
                  key={channel.label}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                >
                  <span className="contact-channel__icon"><ContactIcon type={channel.icon} /></span>
                  <span className="contact-channel__copy">
                    <span>{channel.label}</span>
                    <strong>{channel.value}</strong>
                  </span>
                  <span className="contact-channel__arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <div className="contact-location">
              <span className="contact-location__icon"><ContactIcon type="location" /></span>
              <div>
                <p>VISIT OUR LOCATION</p>
                <address>{address}</address>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-card__heading">
              <span>01 / START A CONVERSATION</span>
              <h3>Send us a message</h3>
              <p>Tell us a little about what you need and we’ll help you take the next step.</p>
            </div>

            <form className="contact-form" onSubmit={handleInquirySubmit}>
              <label>
                <span>Your name</span>
                <input autoComplete="name" name="name" placeholder="e.g. Rahul Sharma" required />
              </label>
              <label>
                <span>Email address</span>
                <input autoComplete="email" name="email" placeholder="you@example.com" required type="email" />
              </label>
              <label>
                <span>Phone number <i>Optional</i></span>
                <input autoComplete="tel" name="phone" placeholder="+91" type="tel" />
              </label>
              <label>
                <span>How can we help?</span>
                <textarea name="message" placeholder="Tell us about the product or project you have in mind…" required rows={4} />
              </label>
              <button className="contact-submit" type="submit">
                Prepare your enquiry <ArrowIcon />
              </button>
              <p className="contact-form-note">Your email app will open with your message ready to send.</p>
            </form>
          </div>
        </div>

        <div className="contact-map-card">
          <div className="contact-map-card__copy">
            <p>FIND US IN DELHI</p>
            <h3 id="contact-map-title">Visit the PRC team.</h3>
            <address>{address}</address>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              Get directions <ArrowIcon />
            </a>
            <span className="contact-map-card__coordinates" aria-hidden="true">28°38&apos;57.0&quot;N&nbsp; 77°13&apos;32.3&quot;E</span>
          </div>
          <div className="contact-map-card__frame">
            <iframe
              src={mapEmbedUrl}
              title="Map to PRC Sanitary Ware in Samaypur, Delhi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
