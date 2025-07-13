import React from 'react';
import practitionerImage from '../assets/dr-smith.jpg';
import janeImage from "../assets/janedoe.jpg";
import johnImage from "../assets/johnsmith.jpg";
import emilyImage from "../assets/emily.jpg";

function About() {
  return (
    <div className="about-page container my-5">
      <h1 className="text-center mb-4">About Our Clinic</h1>

      {/* Clinic Background */}
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={practitionerImage} alt="Clinic Interior" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h2>Our Story</h2>
           <p>Established in 2010, Today’s Dental Services has earned a reputation as a trusted provider
            of comprehensive dental care in the Telangana community. With over 15 years of dedicated service, 
            we have had the privilege of caring for multiple generations of families. Our commitment lies in
            delivering compassionate, patient-centered care through personalized treatment plans and 
            advanced dental technologies — all within a warm, welcoming, and professional environment..</p>

        <p> Our clinic began with the vision of making quality dental care accessible and stress-free. 
        Whether it’s a routine cleaning or a complete smile makeover, every patient is treated with the same level of empathy and
        attention. We believe that a healthy smile can change lives — and we’re committed to being a part of that transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Practitioner Details */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Meet Our Practitioners</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100">
              <img src={janeImage} className="card-img-top rounded-circle mx-auto mt-3" alt="Dr. Jane Doe" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="card-title">Dr. Jane Doe</h4>
                <p className="card-text"><strong>General Practitioner</strong></p>
                <p className="card-text">Dr. Doe specializes in family medicine with a passion for preventive care. She believes in empowering patients through education.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100">
              <img src={johnImage} className="card-img-top rounded-circle mx-auto mt-3" alt="Dr. John Smith" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="card-title">Dr. John Smith</h4>
                <p className="card-text"><strong>Pediatrician</strong></p>
                <p className="card-text">Dr. Smith has dedicated his career to the health and well-being of children, from infancy through adolescence.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100">
              <img src={emilyImage} className="card-img-top rounded-circle mx-auto mt-3" alt="Nurse Emily White" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h4 className="card-title">Nurse Emily White</h4>
                <p className="card-text"><strong>Registered Nurse</strong></p>
                <p className="card-text">Emily is our lead nurse, known for her empathetic approach and expertise in patient care and education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Philosophy */}
      <section className="bg-light p-4 rounded shadow-sm">
        <h2 className="text-center mb-3">Our Mission & Philosophy</h2>
        <p className="lead text-center">
          Our mission is to provide accessible, compassionate, and comprehensive healthcare services that promote the long-term health and well-being of our patients. We believe in:
        </p>
        <h6 className="list-unstyled text-center">
         <p> Patient-Centered Care: Always putting our patients' needs first.</p>
          <p>Excellence: Striving for the highest standards in medical practice.</p>
        <p> Integrity: Upholding ethical practices and transparency.</p>
         <p>Community Health: Contributing to the overall health of our community.</p>
       </h6>
      </section>
    </div>
  );
}

export default About;