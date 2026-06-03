import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle bottom border only when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkBg/80 backdrop-blur-md border-b border-maroon-900 shadow-lg py-4' : 'bg-transparent py-6'} px-8 flex justify-between items-center`}>
      
      <div className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent cursor-pointer hover:scale-105 transition-transform duration-300">
        ishu.dev
      </div>
      
      <ul className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
        {['Home', 'About', 'Experience', 'Portfolio', 'Hobbies', 'Contact'].map((item) => (
          <li key={item} className="group relative">
            <a href={`#${item.toLowerCase()}`} className="text-textSub hover:text-textMain transition-colors duration-300 cursor-pointer uppercase">
              {item}
            </a>
            {/* Animated underline effect */}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;