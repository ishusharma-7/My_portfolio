import React from 'react';
import cert2 from "../assets/certificates/cert2.jpg";
import cert1 from "../assets/certificates/cert1.png";
import cert3 from "../assets/certificates/cert3.png";
import cert4 from "../assets/certificates/cert4.png";

const Experience = () => {
  const certifications = [
    {
      title: "Python Bootcamp ",
      issuer: "Udemy", // (Fixed a quick typo here from "Udmey")
      imgSrc: cert2, // 🔴 FIXED: Changed key to imgSrc and removed curly braces
      topBorder: "border-t-primary", 
      issuerColor: "text-blue-500"
    },
    {
      title: "Ecommerce Store Development",
      issuer: "Creative Soft",
      imgSrc: cert1, // 🔴 FIXED: Changed key to imgSrc and removed curly braces
      topBorder: "border-t-blue-600", 
      issuerColor: "text-blue-500"
    },
    {
      title: "Machine-Learning",
      issuer: "Kaggle",
      imgSrc: cert3, // 🔴 FIXED: Changed key to imgSrc and removed curly braces
      topBorder: "border-t-blue-600", 
      issuerColor: "text-blue-500"
    },
    {
      title: "Machine-Learning",
      issuer: "Google",
      imgSrc: cert4, // 🔴 FIXED: Changed key to imgSrc and removed curly braces
      topBorder: "border-t-blue-600", 
      issuerColor: "text-blue-500"
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-darkBg w-full overflow-hidden relative">
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Heading Container */}
        <div className="flex justify-center mb-16">
          <div className="border-b-2 border-primary pb-4 px-2 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-textMain text-center tracking-wide">
              Experience & Certifications
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`bg-black rounded-2xl p-4 md:p-6 flex flex-col items-center text-center shadow-xl border border-maroon-950 border-t-4 ${cert.topBorder} hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(185,28,28,0.15)] transition-all duration-300 w-full`}
            >
              
              {/* Image Container */}
              <div className="w-full h-48 sm:h-64 md:h-72 rounded-xl overflow-hidden mb-6 border border-maroon-950 bg-darkCard">
                <img 
                  src={cert.imgSrc} // 🟢 Now this perfectly matches the key in your array!
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600/1a0101/fff?text=${cert.issuer}+Certificate`;
                  }}
                />
              </div>

              {/* Title & Issuer */}
              <h3 className="text-xl md:text-2xl font-bold text-textMain mb-3 w-full">
                {cert.title}
              </h3>
              <p className={`${cert.issuerColor} font-black tracking-[0.2em] uppercase text-sm`}>
                {cert.issuer}
              </p>
              
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;