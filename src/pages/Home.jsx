import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/dental-banner.jpg';

function Home() {
  return (
    <div className="home-page">
      {/* Hero/Banner Section */}
      <section className="hero-section text-white text-center py-5" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="display-4 mb-3">Your Health, Our Priority</h1>
          <p className="lead mb-4">Providing compassionate and comprehensive healthcare services.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">Book Appointment</Link>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="intro-section container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Welcome to Our Clinic</h2>
            <p className="lead">
              We are dedicated to providing high-quality medical care to our community.
              Our team of experienced professionals is committed to your well-being,
              offering a wide range of services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview of Services */}
      <section className="services-overview container my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 p-3">
              <i className="bi bi-heart-pulse-fill fs-1 text-primary mb-3"></i> {/* Example icon, you'd need to link a proper icon library or use images */}
              <h3 className="card-title">General Check-ups</h3>
              <p className="card-text">Routine examinations and health screenings.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 p-3">
              <i className="bi bi-capsule fs-1 text-primary mb-3"></i>
              <h3 className="card-title">Prescription Management</h3>
              <p className="card-text">Expert management of your medication needs.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 p-3">
              <i className="bi bi-plus-circle fs-1 text-primary mb-3"></i>
              <h3 className="card-title">Preventive Care</h3>
              <p className="card-text">Focus on preventing illness and promoting wellness.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link to="/services" className="btn btn-outline-primary btn-lg">View All Services</Link>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section bg-light py-5 text-center">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p className="lead">Schedule an appointment with our compassionate team today.</p>
          <Link to="/contact" className="btn btn-success btn-lg">Book Your Appointment</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;