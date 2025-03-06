import React, { useRef, useEffect } from 'react';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import gsap from 'gsap';
import './App.css';

const App = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to(cursorRef.current, {
        x: event.x,
        y: event.y,
        duration: 1,
        ease: "back.out"
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className = 'overflow-x-hidden'>
      <div ref={cursorRef} className='cursor'></div>
      <Hero />
      <OurServices />
      <Portfolio />
      <ContactUs />
    </div>
  );
};

export default App;
