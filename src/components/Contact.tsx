// import React from "react";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 bg-white">
//       <div className="max-w-xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-6 text-center">
//           Get In Touch
//         </h2>

//         <form className="space-y-4">
//           <input
//             className="w-full border p-3 rounded"
//             placeholder="Full Name"
//           />
//           <input
//             className="w-full border p-3 rounded"
//             placeholder="Email Address"
//           />
//           <textarea
//             className="w-full border p-3 rounded"
//             placeholder="Your Message"
//           ></textarea>

//           <button className="w-full bg-blue-600 text-white py-3 rounded">
//             Send Message
//           </button>
//         </form>

//         <p className="mt-4 text-center">
//           For inquiries, email:{" "}
//           <a href="mailto:info@example.com" className="text-blue-600">
//             info@example.com
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// }


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

