
"use client";

import { FormEvent } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7ryn6dr",
      "template_8q0lsjc",
      e.currentTarget,
      "fM3J4rccGBO4Rj_Lu"
    );


    alert("Thank you! We will contact you shortly.");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <h3>Request a Quote</h3>

      <div className="form-group">
        <input name="name" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email Address" required />
      </div>

      <input
        name="phone"
        placeholder="Phone Number"
        required
      />

      <textarea
        name="message"
        placeholder="Tell us your requirement"
        required
      ></textarea>

      <button type="submit">Send Enquiry</button>
    </form>
  );
}

