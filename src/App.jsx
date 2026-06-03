import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact'; // <-- Import the new component

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <AboutSkills />
      <Experience />
      <Projects />
      <Hobbies />
      
      {/* Replaced the old footer with the new layout */}
      <Contact />
      
      {/* Clean copyright bar at the very bottom */}
      <div className="bg-black border-t border-maroon-950 py-6 text-center">
        <p className="text-sm text-textSub/60">
          © {new Date().getFullYear()} ishu.dev - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default App;