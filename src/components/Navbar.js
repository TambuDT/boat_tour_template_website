import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className='side-menu'>
            <a href="#" className={`nav-item teachers nav-logo ${scrolled ? 'nav-logo-scrolled' : ''}`}>Como Lake View</a>
            <a href="#"className={`nav-item nav-link ${scrolled ? 'nav-link-scrolled' : ''}`}>Home</a>
            <a href="#tour" className={`nav-item nav-link ${scrolled ? 'nav-link-scrolled' : ''}`}>Boat Tours</a>
            <a href="#about" className={`nav-item nav-link ${scrolled ? 'nav-link-scrolled' : ''}`}>About Us</a>
            <a href="#where" className={`nav-item nav-link ${scrolled ? 'nav-link-scrolled' : ''}`}>Where</a>
            <a href="#book" className={`nav-item nav-link ${scrolled ? 'nav-link-scrolled' : ''}`}>Book Now</a>
        </div>
    </div>
  );
}

export default Navbar;
