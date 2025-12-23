import PageHero from "@/components/PageHero";
import ContactForm from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We’re here to help you choose the right pump"
        image="/images/contact-hero.jpg"
      />

      <section className="section light-bg">
        <div className="container two-col">
          <ContactForm />
          <div>
            <h1 className="page-title">Contact Us</h1>
            <p>
              Get in touch with us for expert guidance and product enquiries.
            </p>

            <p>📞 +91 XXXXX XXXXX</p>
            <p>✉️ info@ayeshamachinery.com</p>
            <p>📍 India</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d234411.06964847597!2d85.325646!3d23.36386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e108f3591b21%3A0x3b2d2a5f4339a570!2sAyesha%20Machinary!5e0!3m2!1sen!2sin!4v1766414052582!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "16px" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
