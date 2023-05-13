import React from "react";

export default function ContactUsBox() {
  return (
    <div className="contact-us-box">
      <h1>Get in touch with us</h1>
      <form className="contact-form">
        <h2>let us brighten up your gray mood</h2>
        <input type="text" id="name" placeholder="Full Name" />
        <input type="email" id="email" placeholder="Email" />
        <input
          type="number"
          id="phnumber"
          pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          placeholder="+91"
        />
        <textarea rows={4} id="comments" placeholder="Comments" />
        <div className="check-box">
          <input type="checkbox" id="check" />
          <label htmlFor="check">I agree to processing of personal data</label>
        </div>
        <button id="sbmtbtn">Submit message</button>
      </form>
    </div>
  );
}
