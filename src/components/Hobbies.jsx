import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Added for the close button
import photo1 from "../assets/hobbies/photo1.jpg"
import photo2 from "../assets/hobbies/photo2.jpg"
import sketch1 from "../assets/hobbies/sketch1.jpg"
import sketch2 from "../assets/hobbies/sketch2.jpg"

const Hobbies = () => {
  // State to track which image is currently selected/clicked
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle opening the image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    // Optional: Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to handle closing the image
  const closeModal = () => {
    setSelectedImage(null);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="hobbies" className="py-24 px-8 bg-[linear-gradient(170deg,#000000_70%,#1a0101_100%)] relative">
      <div className="max-w-6xl mx-auto opacity-0 animate-fade-in-up [animation-delay:100ms]">
        <h2 className="text-4xl font-bold mb-6 text-center text-textMain">Creative Hobbies</h2>
        <p className="text-center text-textSub mb-16 max-w-2xl mx-auto text-lg">
          Beyond development and design, I channel my creativity through photography and sketching.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Photography Gallery */}
          <div className="bg-darkBg p-8 rounded-3xl border border-maroon-900 shadow-2xl relative group hover:border-primary/50 transition-colors duration-500">
            <h3 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Photography
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Added cursor-pointer and onClick to all images */}
              <div 
                className="overflow-hidden rounded-xl border border-maroon-950 aspect-[4/3] cursor-pointer bg-black/50"
                onClick={() => openModal(photo1)}
              >
                {/* Changed to object-contain so thumbnails aren't cropped if they don't match the aspect ratio */}
                <img src={photo1} alt="Photography 1" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>
              <div 
                className="overflow-hidden rounded-xl border border-maroon-950 aspect-[4/3] cursor-pointer bg-black/50"
                onClick={() => openModal(photo2)}
              >
                <img src={photo2} alt="Photography 2" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out delay-75" />
              </div>
            </div>
          </div>

          {/* Sketching Gallery */}
          <div className="bg-darkBg p-8 rounded-3xl border border-maroon-900 shadow-2xl relative group hover:border-accent/50 transition-colors duration-500">
            <h3 className="text-3xl font-bold mb-8 text-accent flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Sketching
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="overflow-hidden rounded-xl border border-maroon-950 aspect-[4/3] cursor-pointer bg-black/50"
                onClick={() => openModal(sketch1)}
              >
                <img src={sketch1} alt="Sketch 1" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>
              <div 
                className="overflow-hidden rounded-xl border border-maroon-950 aspect-[4/3] cursor-pointer bg-black/50"
                onClick={() => openModal(sketch2)}
              >
                <img src={sketch2} alt="Sketch 2" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out delay-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeModal} // Clicking the dark background closes it
        >
          {/* Close Icon at the top right */}
          <button 
            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/60 hover:text-primary text-4xl transition-colors duration-300 z-[110]"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Large Image Card */}
          <div 
            className="relative max-w-5xl w-full h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Clicking the image itself won't close the modal
          >
            <img 
              src={selectedImage} 
              alt="Full View" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-maroon-900/30" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hobbies;