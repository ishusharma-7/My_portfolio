import React from 'react';
// 🔴 Notice: Figma is completely removed from this import
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
// 🔴 Notice: Photoshop and DaVinci are completely removed from this import
import { SiC, SiMongodb } from "react-icons/si";

import aboutImg from '../assets/about.jpg';

const AboutSkills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    { name: 'C', icon: <SiC className="text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-300" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'MERN Stack', icon: <SiMongodb className="text-green-500" /> },
    
    // 🔴 100% BYPASSING REACT-ICONS: Using direct images for ALL editing tools
    { name: 'Photoshop', icon: <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" alt="Photoshop" className="w-11 h-11 drop-shadow-md" /> },
    { name: 'Figma', icon: <img src="https://svgstack.com/media/img/figma-logo-VFij788691.webp" alt="Figma" className="w-8 h-11 drop-shadow-md" /> },
    { name: 'DaVinci', icon: <img src="https://tse3.mm.bing.net/th/id/OIP.rckBw8LsTuYjYNy0YlxNtQHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3" alt="DaVinci" className="w-11 h-11 drop-shadow-md" /> },
    { name: 'Adobe Express', icon: <img src="https://play-lh.googleusercontent.com/Su39nteYoXMdmmWupitzo9XKZhZnstj2ObmJOR6S-wWCgSnF6USw3Weo7bcDL4RRv79G" alt="Express" className="w-11 h-11 drop-shadow-md" /> },
    { name: 'CapCut', icon: <img src="https://i.pinimg.com/736x/79/b5/15/79b515e2a6085eaca197f3e2009cfdd0.jpg" alt="CapCut" className="w-11 h-11 drop-shadow-md" /> },
    { name: 'Alight Motion', icon: <img src="https://freepnglogo.com/images/all_img/1691819804alight-motion-logo-png.png" className="w-11 h-11 rounded-xl drop-shadow-md" /> },
    { name: 'Pencil 2D', icon: <img src="https://tse3.mm.bing.net/th/id/OIP.T6GWVdTZz8uHXvWgaac67gHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Pencil 2D" className="w-11 h-11 drop-shadow-md" /> },
  ];

  return (
    <section id="about" className="py-24 px-8 bg-darkBg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 items-center justify-between mb-24 opacity-0 animate-fade-in-up">
          
          <div className="flex-none w-72 h-[400px] lg:w-[400px] lg:h-[500px] relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
            
            <div className="w-full h-full rounded-2xl overflow-hidden border border-maroon-900 shadow-2xl bg-darkCard">
              <img 
                src={aboutImg} 
                alt="About Ishu" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          <div className="space-y-6 flex-1">
            <h2 className="text-4xl font-bold text-textMain border-l-4 border-primary pl-5">About Me</h2>
            <p className="text-textSub leading-relaxed text-lg">
              I am a driven creative developer who loves turning complex ideas into elegant digital realities. With a diverse toolkit spanning programming languages, design systems, and multimedia editing, I approach every project with both logical precision and artistic flair.
            </p>
            <p className="text-textSub leading-relaxed text-lg">
              Whether building a full-stack application, designing an intuitive user experience, or crafting compelling video content, my focus is always on delivering impactful, high-quality results.
            </p>
          </div>
        </div>

        <div id="skills" className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
          <h2 className="text-4xl font-bold mb-12 text-center text-textMain">Technical Toolkit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-darkCard p-6 rounded-2xl flex flex-col items-center justify-center border border-maroon-950 hover:border-primary/50 transition-all duration-300 shadow-lg hover:-translate-y-2">
                
                {/* Fixed the wrapper to perfectly center both Icons and Images */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-12 w-12">
                  {skill.icon}
                </div>
                
                <span className="text-sm font-semibold text-textSub group-hover:text-textMain transition-colors text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSkills;