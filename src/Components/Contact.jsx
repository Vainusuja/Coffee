import React from 'react';


const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subtext">
        We'd love to hear from you! Reach out with any questions or feedback.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
        ></textarea>

        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Our Contact Details</h2>
        <p><strong>Email:</strong> <a href="mailto:contact@perkupcafe.com">contact@perkupcafe.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
        <p><strong>Address:</strong> 123 Coffee Street, Dindigul, Tamil Nadu</p>
      </div>
    </div>
  );
};

export default Contact;