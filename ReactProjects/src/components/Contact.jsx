import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation request submitted with email:', email);
    setEmail('');
  };

  return (
    <section id="contact" className="bg-amber-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-800">Make a Reservation</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-amber-800">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded text-amber-900"
              required
            />
          </div>
          <button type="submit" className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition duration-300">
            Request Reservation
          </button>
        </form>
        <div className="mt-8 text-center text-amber-800">
          <p>For immediate assistance, call us at: (123) 456-7890</p>
          <p>Address: 123 Gourmet Street, Foodie City, FC 12345</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
