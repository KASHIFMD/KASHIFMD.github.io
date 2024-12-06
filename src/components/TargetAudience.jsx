import React from 'react';
import { Globe, Briefcase, Rocket, Monitor } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Card1 from '../assets/frame (6).png';
import Card2 from '../assets/frame (7).png';
import Card3 from '../assets/frame (8).png';
import Card4 from '../assets/frame (9).png';
import Card5 from '../assets/frame (10).png';

const TargetAudience = () => {
  const audienceCards = [
    {
      id: 1,
      image: Card1,
      title: "Investors",
      description: "Stay informed with key market updates and trends"
    },
    {
      id: 2,
      image: Card2,
      title: "Business Consultants",
      description: "Access concise insights to enhance advisory skills"
    },
    {
      id: 3,
      image: Card3,
      title: "Entrepreneur",
      description: "Stay ahead of competition with crisp business insights"
    },
    {
      id: 4,
      image: Card4,
      title: "Business Analyst",
      description: "Get clear, relevant business news to support analysis"
    },
    {
      id: 5,
      image: Card5,
      title: "Product Manager",
      description: "Stay updated with tech insights and product strategies"
    }
  ];

  return (
    <section className="py-6 md:py-16 container mx-auto px-6">
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-12">Target Audience</h2>
      
      {/* Mobile View - Carousel */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          speed={1000}
          className="audience-swiper py-8"
        >
          {audienceCards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-gray-50 rounded-lg shadow-xl p-6 mx-2 border border-gray-100">
                <div className="flex flex-col items-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 text-center">{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-6 gap-16 text-center max-w-8xl mx-auto">
        <div className="flex flex-col items-center col-span-2">
          <img src={Card1} alt="Card 1" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold mb-2">Investors</h3>
          <p className="text-sm text-gray-500">Stay informed with key market updates and trends</p>
        </div>
        <div className="flex flex-col items-center col-span-2">
          <img src={Card2} alt="Card 2" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold mb-2">Business Consultants</h3>
          <p className="text-sm text-gray-500">Access concise insights to enhance advisory skills</p>
        </div>
        <div className="flex flex-col items-center col-span-2">
          <img src={Card3} alt="Card 3" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold mb-2">Entrepreneur</h3>
          <p className="text-sm text-gray-500">Stay ahead of competition with crisp business insights</p>
        </div>
        <div className="flex flex-col items-center col-start-2 col-span-2">
          <img src={Card4} alt="Card 4" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold mb-2">Business Analyst</h3>
          <p className="text-sm text-gray-500">Get clear, relevant business news to support analysis</p>
        </div>
        <div className="flex flex-col items-center col-start-4 col-span-2">
          <img src={Card5} alt="Card 5" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold mb-2">Product Manager</h3>
          <p className="text-sm text-gray-500">Stay updated with tech insights and product strategies</p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
