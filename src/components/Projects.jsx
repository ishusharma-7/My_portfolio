import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce-aaraz',
      description: 'Vibrant, heartwarming promotional advertisement video featuring specific school branding.',
      iframeUrl: 'https://e-commerce-aaraz.onrender.com', 
      repo: 'https://github.com/ishusharma-7/E-Commerce-Aaraz'
    },
    {
      title: 'Crypto-Dashboard',
      description: 'Platform highlighting coding mentorship and internship opportunities with cinematic progressions.',
      iframeUrl: 'https://ishusharma-7.github.io/Crypto-dashboard/', 
      repo: 'https://github.com/ishusharma-7/Crypto-dashboard'
    },
    {
      title: 'Weather-Dashboard',
      description: 'Digital storytelling project featuring characters Kaelen Voss and Unit 7 in a sci-fi setting.',
      iframeUrl: 'https://ishusharma-7.github.io/12_weather-dashboard2/',
      repo: 'https://github.com/ishusharma-7/12_weather-dashboard2'
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-8 bg-darkCard">
      <div className="max-w-6xl mx-auto opacity-0 animate-fade-in-up [animation-delay:300ms]">
        <h2 className="text-4xl font-bold mb-16 text-center text-textMain tracking-wide">My Portfolio</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div 
              key={index} 
              className="group bg-darkBg rounded-2xl overflow-hidden border border-maroon-900 flex flex-col shadow-lg hover:shadow-[0_20px_40px_rgba(185,28,28,0.2)] hover:-translate-y-3 transition-all duration-500 ease-out"
            >
              {/* iFrame for Live Preview with a hover scale effect */}
              <a href={proj.iframeUrl} target='blank'>
              <div className="h-48 w-full bg-black border-b border-maroon-950 overflow-hidden relative">
                 <iframe 
                    src={proj.iframeUrl} 
                    title={proj.title}
                    className="w-full h-full border-none pointer-events-none group-hover:scale-105 transition-transform duration-700" 
                    scrolling="no"
                 />
              </div>
              </a>
              
              <div className="p-7 flex-grow flex flex-col justify-between relative">
                <div>
                  <h3 className="text-xl font-bold text-textMain mb-3 group-hover:text-primary transition-colors">{proj.title}</h3>
                  <p className="text-textSub text-sm leading-relaxed mb-6">{proj.description}</p>
                </div>
                
                <a 
                  href={proj.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-maroon-950 hover:bg-primary text-textMain py-2.5 px-5 rounded-lg transition-colors border border-maroon-900 w-fit"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;