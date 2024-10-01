import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: 'Jaycob',
    lastName: 'Branco',
    email: 'jaycob.branco@outlook.com',
    message: 'email me if you have any questions.'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Message sent successfully');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
