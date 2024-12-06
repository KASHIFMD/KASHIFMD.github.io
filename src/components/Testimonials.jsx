import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Testimonials = () => {
    const testimonialCards = [
        {
            id: 1,
            name: "John Smith",
            position: "CEO at TechCorp",
            image: "https://i.pravatar.cc/150?img=1",
            description: "The best platform for quick business insights!"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            position: "Product Manager",
            image: "https://i.pravatar.cc/150?img=5",
            description: "Transformed how I stay updated with industry news."
        },
        {
            id: 3,
            name: "Mike Brown",
            position: "Finance Analyst",
            image: "https://i.pravatar.cc/150?img=8",
            description: "Perfect for busy professionals like me."
        }
    ];

    return (
        <section className="py-6 container mx-auto px-6">
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
                    User Testimonials
                </h2>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    speed={1000}
                    className="testimonial-swiper py-8"
                >
                    {testimonialCards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="bg-gray-50 rounded-lg shadow-xl p-6 mx-4 border border-gray-100">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
                                    />
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{card.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{card.position}</p>
                                    <p className="text-base text-gray-800 text-center">{card.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop View - Continuous Sliding */}
            <div className="hidden md:block">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    className="desktop-swiper"
                >
                    {[...testimonialCards, ...testimonialCards].map((card, index) => (
                        <SwiperSlide key={`${card.id}-${index}`}>
                            <div className="bg-gray-50 rounded-lg shadow-xl p-6 mx-2 h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex flex-col items-center">
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
                                    />
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{card.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{card.position}</p>
                                    <p className="text-base text-gray-800 text-center">{card.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
