import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: "What are your clinic hours?",
      answer: "We are open Monday to Friday, 9 AM to 5 PM."
    },
    {
      question: "Do you accept new patients?",
      answer: "Yes, we are always accepting new patients! Please call us to schedule an appointment."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans. Please contact our office for specific details."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we offer same-day emergency appointments for urgent dental issues. Please call our clinic immediately."
    },
    {
      question: "What services do you provide?",
      answer: "We offer a wide range of dental services including cleanings, fillings, root canals, crowns, implants, orthodontics, and cosmetic dentistry."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us or using our online booking system on our website."
    },
    {
      question: "Do you treat children?",
      answer: "Yes, we provide pediatric dental care for children of all ages."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid ID, your insurance card, and any medical history or medication information."
    },
    {
      question: "Is parking available at your clinic?",
      answer: "Yes, we have free parking available for all patients directly outside the clinic."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend a dental check-up and cleaning every six months to maintain good oral health."
    }
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h3 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h3>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;