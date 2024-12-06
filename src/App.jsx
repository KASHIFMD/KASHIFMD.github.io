import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Tag from './components/Tag';
import HowItWorks from './components/HowItWorks';
import WhyChoose from './components/WhyChoose';
import Vision from './components/Vision';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';
import WhatWeBuilt from './components/WhatWeBuilt';
import Testimonials from './components/Testimonials';
import KeyCategories from './components/KeyCategories';
import FeedbackCollection from './components/FeedbackCollection';
import Faq from './components/Faq';
import Feedback from './components/Feedback';
import NewsletterSubscription from './components/Newsletter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import EarlyAccessPopup from './components/EarlyAccessPopup';
import { getEarlyAccessCount } from './services/api';

const teamMembers = [
  {
    name: "Anurag Modi",
    role: "CEO & Co-Founder",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Mohammed Kashif",
    role: "CTO & Co-Founder",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Tanmoy Haldar",
    role: "Advisor",
    linkedin: "https://linkedin.com/in/mikejohnson",
  },
  {
    name: "Mrinal Narain",
    role: "Advisor",
    linkedin: "https://linkedin.com/in/sarahwilson",
  },
  {
    name: "Krutik Parmar",
    role: "Advisor",
    linkedin: "https://linkedin.com/in/davidbrown",
  },
];

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkEarlyAccessCount = async () => {
      try {
        const earlyAccessCount = await getEarlyAccessCount();
        
        if (earlyAccessCount < 500) {
          const timer = setTimeout(() => {
            setShowPopup(true);
          }, 10000); // 10 seconds

          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error('Error checking early access count:', error);
      }
    };

    checkEarlyAccessCount();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Add the popup component */}
      <EarlyAccessPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />

      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">
        {/* Home section */}
        <section id="home" className="bg-gradient-to-r from-purple-700 to-purple-900 text-white">
          <Hero />
        </section>

        {/* About section */}
        <section id="about">
          <Tag />
          <ValueProposition />
          <Vision />
          <HowItWorks />
          <WhyChoose />
          <TargetAudience />
          <WhatWeBuilt />
          <Testimonials />
          <KeyCategories />
        </section>

        {/* Team section */}
        <section id="team" className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            
            {/* Mobile View (Carousel) */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                loop={true}
                speed={1000}
                className="team-swiper"
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center p-4">
                      <div className="w-48 h-48 bg-gray-300 rounded-full mb-4"></div>
                      <h3 className="font-semibold text-xl text-center">{member.name}</h3>
                      <p className="text-gray-600 text-center mb-2">{member.role}</p>
                      <a
                        href={member.linkedin}
                        className="text-blue-600 hover:text-blue-800 mt-1 mb-8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop View (Grid) */}
            <div className="hidden md:block">
              <div className="flex flex-col items-center">
                {/* First row - 2 members */}
                <div className="grid grid-cols-2 gap-8 w-full mb-12">
                  {teamMembers.slice(0, 2).map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                      <h3 className="font-semibold text-lg text-center">{member.name}</h3>
                      <p className="text-gray-600 text-center">{member.role}</p>
                      <a
                        href={member.linkedin}
                        className="text-blue-600 hover:text-blue-800 mt-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  ))}
                </div>

                {/* Second row - 3 members */}
                <div className="grid grid-cols-3 gap-8 w-full">
                  {teamMembers.slice(2).map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
                      <h3 className="font-semibold text-lg text-center">{member.name}</h3>
                      <p className="text-gray-600 text-center">{member.role}</p>
                      <a
                        href={member.linkedin}
                        className="text-blue-600 hover:text-blue-800 mt-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeedbackCollection />
        <Faq />
        <Feedback />
        {/* Contact section */}
        <section id="contact" className="py-12">
          <NewsletterSubscription />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;