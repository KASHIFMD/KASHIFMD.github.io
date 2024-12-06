import React from 'react';
import { Clock, Brain, Rocket } from 'lucide-react';
import Card1 from '../assets/frame (3).png';
import Card2 from '../assets/frame (4).png';
import Card3 from '../assets/frame (5).png';

const WhyChoose = () => {
  return (
    <section className="py-6 md:py-16 container mx-auto px-6">
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-12">Why Deshore?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        <div className="flex flex-col items-center">
          <img src={Card1} alt="Card 1" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold text-2xl md:text-2xl mb-2">Save Time</h3>
          <p className="text-gray-600 text-base md:text-xl">Essential insights in seconds.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Card2} alt="Card 2" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold text-2xl md:text-2xl mb-2">Stay Informed, Not Overwhelmed</h3>
          <p className="text-gray-600 text-base md:text-xl">No clutter, just relevant news.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Card3} alt="Card 3" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold text-2xl md:text-2xl">Boost Your Edge</h3>
          <p className="text-gray-600 text-base md:text-xl">Gain industry-specific knowledge effortlessly.</p>
        </div>
      </div>
    </section>
  );
};
export default WhyChoose