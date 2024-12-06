import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Pic1 from '../assets/card.png';
import Pic2 from '../assets/card (1).png';
import Pic3 from '../assets/card (2).png';
import 'swiper/css';
import 'swiper/css/pagination';

const ValueProposition = () => {
  const propositionCards = [
    {
      id: 1,
      image: Pic1,
      likes: '2k',
      hearts: '41',
      readTime: '1 min read'
    },
    {
      id: 2,
      image: Pic2,
      likes: '1.8k',
      hearts: '35',
      readTime: '2 min read'
    },
    {
      id: 3,
      image: Pic3,
      likes: '2.2k',
      hearts: '48',
      readTime: '1 min read'
    }
  ];

  return (
    <section className="py-6 container mx-auto px-6">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-8">
          Value Proposition
        </h2>
        <button className="bg-main-800 text-white px-8 sm:px-16 py-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base mb-8">
          Read More
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          className="value-swiper"
        >
          {propositionCards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flex flex-col items-center">
                <img
                  src={card.image}
                  alt={`Proposition ${card.id}`}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-4"></div>
      </div>

      {/* Desktop View - Continuous Sliding */}
      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="desktop-swiper"
        >
          {[...propositionCards, ...propositionCards].map((card, index) => (
            <SwiperSlide key={`${card.id}-${index}`}>
              <div className="relative aspect-video rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <img
                  src={card.image}
                  alt={`Proposition ${card.id}`}
                  className="w-full h-[500px] transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ValueProposition;