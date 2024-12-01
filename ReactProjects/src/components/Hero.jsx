import React from 'react';
import image from '../assets/image.jpg';
const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={image}
          alt="Gourmet dish" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto text-center relative z-10 text-white">
        <h2 className="text-5xl font-bold mb-4">Welcome to Gourmet Delight</h2>
        <p className="text-xl mb-8">Experience culinary excellence in every bite</p>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition duration-300">
          Reserve a Table
        </button>
      </div>
    </section>
  );
};

export default Hero;
