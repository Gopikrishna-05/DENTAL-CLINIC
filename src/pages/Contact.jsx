import React, { useState } from 'react';
import axios from 'axios';
import FAQ from '../components/FAQ'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('error');
      alert('Please fill in all fields.');
      return;
    }

    // Email validation regex (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      console.log('Form submission successful:', response.data);
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className="contact-page container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-7 mb-4">
          <h2 className="mb-3">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && <p className="text-success mt-2">Message sent successfully!</p>}
            {formStatus === 'error' && <p className="text-danger mt-2">Failed to send message. Please try again.</p>}
          </form>
        </div>

        {/* Contact Details */}
        <div className="col-md-5 mb-4">
          <h2 className="mb-3">Our Details</h2>
          <p><i className="bi bi-geo-alt-fill me-2"></i> 1-115 Jubile Hills, Hyderabad, Telangana</p>
          <p><i className="bi bi-phone-fill me-2"></i> (123) 456-7890</p>
          <p><i className="bi bi-envelope-fill me-2"></i> info@dentalclinic.com</p>
          <p><i className="bi bi-clock-fill me-2"></i> Monday - Friday: 9:00 AM - 5:00 PM</p>

          {/* Embedded Google Map */}
          <div className="mt-4">
            <h3 className="mb-3">Find Us on the Map</h3>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2987515252873!2d144.9631777153177!3d-37.81729097975109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675c2e176b0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678234567890!5m2!1sen!2sau"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                aria-label="Google Map of Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5" />
      <FAQ />
    </div>
  );
}

export default Contact;