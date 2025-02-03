import React from "react";
import "../style.css"; // Certifique-se de importar o CSS corretamente

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="input-group">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="input-group">
          <label>Phone (Optional):</label>
          <input type="tel" placeholder="Your Phone Number" />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
