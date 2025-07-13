import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; 
import consultationImg from '../assets/consultations.jpg';
import preventiveImg from '../assets/preventivecare.jpg';
import chronicImg from '../assets/chronic.jpg';
import pediatricImg from '../assets/pediatric.jpg';
import womensImg from '../assets/womenshealth.jpg';
import surgicalImg from '../assets/surgicals.jpg';
function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "General Consultations",
      image:consultationImg,
      description: "Routine check-ups, diagnosis of common illnesses, and general health advice.",
      details: "Comprehensive consultations covering all aspects of general health. We focus on early detection and prevention, providing personalized care plans. This includes annual physicals, managing acute illnesses, and referrals to specialists when needed."
    },
    {
      title: "Preventive Care",
      image: preventiveImg,
      description: "Vaccinations, health screenings, and lifestyle counseling to prevent disease.",
      details: "Our preventive care services are designed to keep you healthy and reduce your risk of developing chronic diseases. We offer a range of vaccinations (flu, tetanus, etc.), cholesterol screenings, blood pressure monitoring, and personalized guidance on diet and exercise."
    },
    {
      title: "Chronic Disease Management",
      image:  chronicImg,
      description: "Ongoing care and support for conditions like diabetes, hypertension, and asthma.",
      details: "We provide dedicated support for patients living with chronic conditions. Our team helps you manage your symptoms, understand your medication, and make lifestyle adjustments to improve your quality of life. Regular follow-ups and personalized care plans are central to this service."
    },
    {
      title: "Pediatric Care",
      image: pediatricImg,
      description: "Healthcare services for infants, children, and adolescents.",
      details: "From newborn care to adolescent health, our pediatric services cover everything your child needs to grow up healthy. This includes routine check-ups, immunizations, developmental screenings, and management of common childhood illnesses. We aim to create a comforting environment for our young patients."
    },
    {
      title: "Women's Health",
      image: womensImg,
      description: "Gynecological exams, family planning, and prenatal care support.",
      details: "Our women's health services cater to the unique healthcare needs of women at all stages of life. We offer routine gynecological exams, pap smears, breast health screenings, contraception counseling, and support for prenatal and postnatal care, ensuring holistic well-being."
    },
    {
      title: "Minor Surgical Procedures",
      image: surgicalImg,
      description: "In-clinic procedures such as mole removal, wound care, and stitches.",
      details: "For your convenience, we offer a range of minor surgical procedures directly in our clinic, avoiding the need for hospital visits for simple treatments. This includes mole and wart removal, laceration repair (stitches), wound dressing, and other small dermatological procedures. All procedures are performed with local anesthesia and sterile techniques."
    },
    // Add more services as needed
  ];

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="services-page container my-5">
      <h1 className="text-center mb-4">Our Comprehensive Services</h1>
      <p className="lead text-center mb-5">
        At Clinic, we are committed to providing a wide array of healthcare services to meet the diverse needs of our patients.
      </p>

      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={service.image} className="card-img-top mx-auto mt-3" alt={service.title} style={{ width: '200px', height: '80px', objectFit: 'contain' }} />
              <div className="card-body text-center">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.description}</p>
                {/* Optional: Details expandable via modal */}
                <button className="btn btn-outline-primary mt-2" onClick={() => handleShowModal(service)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedService.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedService.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Services;