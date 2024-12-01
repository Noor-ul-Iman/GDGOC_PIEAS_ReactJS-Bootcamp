import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">About Gourmet Delight</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-700">Our Story</h3>
            <p className="text-amber-900">
              Founded in 2010, Gourmet Delight has been serving exquisite cuisine to food enthusiasts for over a decade. 
              Our passion for culinary excellence and commitment to using the finest ingredients have made us a favorite 
              among locals and tourists alike.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-700">Our Cuisine</h3>
            <p className="text-amber-900">
              At Gourmet Delight, we offer a fusion of traditional and modern cuisines. Our menu is carefully crafted 
              by our award-winning chefs, featuring dishes that cater to various palates and dietary preferences. 
              From farm-fresh ingredients to exotic spices, every element is chosen to create an unforgettable dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
