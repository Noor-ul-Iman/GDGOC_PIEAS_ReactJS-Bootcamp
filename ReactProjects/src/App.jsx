import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { menuData } from './menuData'; // Import menuData

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Menu menuData={menuData} /> {/* Pass menuData as a prop */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
