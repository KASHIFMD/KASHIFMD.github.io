import React from 'react';
import HeroImage from '../assets/Hero.png';
const Hero = () => {
    const handleJoinWaitlist = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };
    return (
      <div className="relative min-h-[480px] h-[calc(100vh-64px)] md:h-[580px] lg:h-[700px]">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginTop: '-4px',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-12 md:pt-24 text-center h-full flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Your Quick Daily Read on Business,
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-0 md:mt-4 mb-8 text-white">
            Finance & Tech
          </h1>
          <div>
            <button 
              onClick={handleJoinWaitlist}
              className="bg-main-800 text-white px-8 sm:px-16 py-3 rounded-full transition-colors shadow-lg text-sm sm:text-base"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    );
  };
export default Hero;