import React from 'react';
import { Search, Book, Bookmark } from 'lucide-react';
import Card1 from '../assets/frame.png';
import Card2 from '../assets/frame (1).png';
import Card3 from '../assets/frame (2).png';

const HowItWorks = () => {
  return (
    <section className="py-6 md:py-16 container mx-auto px-6">
      <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-12">How it works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        <div className="flex flex-col items-center">
          <img src={Card1} alt="Card 1" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold text-2xl md:text-2xl mb-2">Scan the latest News</h3>
          <p className="text-gray-600 text-base md:text-xl">Use ourlatest business, finance
            and tech insights from your favourite
            publishers & authors.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Card2} alt="Card 2" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold text-2xl md:text-2xl mb-2">Summarize Articles</h3>
          <p className="text-gray-600 text-base md:text-xl">Use Summarize articles into
            100-words updates & prepare
            daily feed, tailored for you.</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Card3} alt="Card 3" className="w-16 h-16 mb-4" />
          <h3 className="font-semibold text-2xl md:text-2xl">Bookmark and Resume</h3>
          <h3 className="font-semibold mb-2 text-2xl md:text-2xl">insights curated for you</h3>
          <p className="text-gray-600 text-base md:text-xl">Resume you left off so that you never 
          miss your valuable reads.</p>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
