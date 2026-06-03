import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaServer, FaArrowRight } from 'react-icons/fa';
import { SiRender } from 'react-icons/si';

// 🔴 BULLETPROOF IMPORT: Looking exactly inside the assets folder
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-12 lg:pt-20 lg:pb-0 overflow-hidden bg-darkBg z-0">
      
      {/* Immersive Glowing Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl w-full px-8 grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left opacity-0 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-accent font-semibold tracking-wider uppercase">Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl font-black text-textMain tracking-tight leading-tight">
              Ishu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sharma</span>
            </h1>
            <p className="text-lg md:text-xl text-textSub max-w-lg mx-auto lg:mx-0 leading-relaxed mt-4">
              I design and develop modern, clean, and highly responsive web applications that deliver exceptional user experiences.
            </p>
          </div>
          
          

          {/* Social Links Box - COLORFUL & GLOWING */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 mt-8">
            <span className="text-textSub font-medium border-r border-maroon-900 pr-6">Follow me</span>
            
            <div className="flex gap-5 text-3xl items-center">
              {/* GitHub */}
              <a href="https://github.com/ishusharma-7" className="text-gray-200 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300">
                <FaGithub />
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ishu-sharma-043121325/" className="text-[#0A66C2] bg-white rounded-md hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(10,102,194,0.8)] transition-all duration-300 leading-none">
                <FaLinkedin />
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/ishu.sharma_7/?__pwa=1" className="text-[#E1306C] hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(225,48,108,0.8)] transition-all duration-300">
                <FaInstagram />
              </a>
              {/* Render */}
              <a href="https://dashboard.render.com/" className="text-[#46E3B7] hover:scale-125 hover:drop-shadow-[0_0_20px_rgba(70,227,183,0.8)] transition-all duration-300">
                <SiRender />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Circular Image Card */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center opacity-0 animate-fade-in-up [animation-delay:200ms] mb-10 lg:mb-0">
          
          {/* Circular Animated Glow behind the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
          
          {/* The Main Image Container */}
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-[4px] border-maroon-900 shadow-2xl animate-float transition-transform duration-500 bg-darkCard p-2 group hover:scale-105 hover:border-primary">
            
            {/* Inner Wrapper */}
            <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-maroon-950">
              
              {/* 🔴 IMPORTED PROFILE IMAGE */}
              <img 
                src={profileImg} 
                alt="Ishu Profile" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80"></div>
            </div>
            
          </div>
          
          {/* Floating Tech Badge */}
          <div className="absolute bottom-4 -left-4 md:-left-12 bg-black/80 backdrop-blur-md border border-maroon-900 px-6 py-4 rounded-full shadow-xl flex items-center gap-4 animate-float [animation-delay:600ms]">
            <FaServer className="text-accent text-3xl" />
            <div>
              <p className="text-xs text-textSub uppercase tracking-wider">Specialty</p>
              <p className="text-textMain font-bold">MERN Stack</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;