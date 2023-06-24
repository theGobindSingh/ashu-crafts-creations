import React from "react";
import axios from "axios";

export default function ContactUsBox() {
  const formSubmit = (event: any) => {
    event.preventDefault();
    const targets: HTMLInputElement[] = Array.from(event.target);
    if (targets[4]?.checked) {
      const subject = `${targets[0].value}'s message`;
      const text = `Email: ${targets[1].value}
Phone number: ${targets[2].value}
Message: ${targets[3].value}`;
      const contactDetails = {
        subject: subject,
        text: text,
      };
      const postUrl = "/api/contact";
      axios
        .post(postUrl, contactDetails)
        .then(() => {
          alert("Successfully sent.");
        })
        .catch(() => {
          alert("Something went wrong.");
        })
        .finally(() => {
          targets.forEach((target) => {
            target.value = "";
          });
        });
    } else {
      alert("Sorry, processing your request requires your consent");
      console.log("Eh, your loss");
    }
  };

  return (
    <div className="contact-us-box">
      <h1>Get in touch with us</h1>
      <form className="contact-form" onSubmit={formSubmit}>
        <h2>let us brighten up your gray mood</h2>
        <input type="text" id="name" placeholder="Full Name" required />
        <input type="email" id="email" placeholder="Email" required />
        <input type="tel" id="phnumber" placeholder="+91" required />
        <textarea rows={4} id="comments" placeholder="Comments" required />
        <div className="check-box">
          <input type="checkbox" id="check" />
          <label htmlFor="check">I agree to processing of personal data</label>
        </div>
        <button id="sbmtbtn">Submit message</button>
      </form>
    </div>
  );
}
