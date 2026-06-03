import React from 'react';
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import img1 from "../assets/profile.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary text-xl" />,
      title: 'Email',
      value: 'contact@ishu.dev', 
      href: 'mailto:contact@ishu.dev',
    },
    {
      icon: <FaWhatsapp className="text-green-500 text-xl" />, 
      title: 'WhatsApp',
      value: 'Chat directly',
      href: '#', 
    },
    {
      icon: <FaPhoneAlt className="text-accent text-xl" />,
      title: 'Phone',
      value: '+91 XXXXX XXXXX', 
      href: 'tel:+910000000000',
    },
  ];

  return (
    <section id="contact" className="py-24 px-8 bg-darkBg border-t border-maroon-950 relative overflow-hidden">
      {/* Background glow matching the about section */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Profile Image and Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 opacity-0 animate-fade-in-up">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-darkBg outline outline-2 outline-primary shadow-[0_0_40px_rgba(185,28,28,0.3)] hover:scale-105 transition-transform duration-500">
            <img 
              src={img1}
              alt="Let's Connect" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h2 className="text-5xl font-bold text-textMain mb-4">Let's Connect</h2>
            <p className="text-textSub leading-relaxed max-w-sm text-lg">
              Have a project, idea, or opportunity? I'm always open to discussing new work and creative collaborations.
            </p>
          </div>
        </div>

        {/* Right Side: Stacked Contact Cards */}
        <div className="space-y-5 opacity-0 animate-fade-in-up [animation-delay:200ms]">
          {contactInfo.map((info, index) => (
            <a 
              key={index} 
              href={info.href}
              className="flex items-center justify-between p-5 bg-darkCard border border-maroon-900 rounded-2xl hover:border-accent/50 transition-all duration-300 group shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]"
            >
              <div className="flex items-center gap-5">
                <div className="bg-black p-4 rounded-xl border border-maroon-950 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-textMain font-semibold text-lg mb-1">{info.title}</h4>
                  <p className="text-textSub text-sm">{info.value}</p>
                </div>
              </div>
              <FaArrowRight className="text-textSub group-hover:text-accent transition-transform transform group-hover:translate-x-3 duration-300" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;