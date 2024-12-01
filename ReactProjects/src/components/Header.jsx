import React from 'react';

const Header = () => {
  return (
    <header className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gourmet Delight</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-amber-200">Home</a></li>
            <li><a href="#menu" className="hover:text-amber-200">Menu</a></li>
            <li><a href="#about" className="hover:text-amber-200">About</a></li>
            <li><a href="#contact" className="hover:text-amber-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
