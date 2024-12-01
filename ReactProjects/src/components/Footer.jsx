import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Gourmet Delight Restaurant. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="hover:text-amber-200 mx-2">Privacy Policy</a>
          <a href="#" className="hover:text-amber-200 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
