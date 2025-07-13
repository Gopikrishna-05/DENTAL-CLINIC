import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Today's Dental Services. All rights reserved.</p>
        <p>1-115, Jubile Hills, Hyderabad, Telangana, 500038 | Phone: (123) 456-7890 | Email: info@dentalclinic.com</p>
      </div>
    </footer>
  );
}

export default Footer;