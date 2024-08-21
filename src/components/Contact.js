import React, { useState } from "react";
import emailjs from "emailjs-com";
import '../App.css'; // Ensure CSS file is imported

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      to_name: "Anirudh Yellamraju",
      from_name: formData.name,
      message: formData.description,
    };

    emailjs
      .send(
        "service_gd2bqvk", // Replace with your EmailJS service ID
        "template_570whhq", // Replace with your EmailJS template ID
        emailData,
        "mRaZ2_2cY-gi_xLYU" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          alert("Failed to send message. Please try again.");
          console.error("FAILED...", err);
        }
      );

    // Clear the form after submission
    setFormData({
      email: "",
      name: "",
      subject: "",
      description: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <p>Email me at <a href="mailto:anirudh.why@gmail.com">anirudh.why@gmail.com</a></p>
        <p>Connect with me on <a href="https://www.linkedin.com/in/anirudh-yellamraju/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </section>
  );
};

export default Contact;
