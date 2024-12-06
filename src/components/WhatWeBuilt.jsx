import React from 'react';
import Screen from '../assets/screen 1.png';

const WhatWeBuilt = () => {
    return (
        <div className="min-w-8xl mx-auto py-6 md:py-16 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-main-800 text-center mb-8">
                What We Built
            </h2>

            {/* Mobile View (Title -> Image -> Text) */}
            <div className="md:hidden flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    100-word updates & prepare daily feed, tailored for you
                </h3>
                <div className="mb-12">
                    <img
                        src={Screen}
                        alt="Mobile app preview showing Diageo news"
                        className="h-[400px] w-auto"
                    />
                </div>
                <div className="text-center">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Deshore provides highly curated, industry-specific summaries, powered by AI,
                        focusing on business sectors and innovations that matter most to professionals.
                        Features like one-tap definitions and personalized news feeds make Deshore a
                        unique, time-efficient news experience. With options for tailored insights in
                        sectors like fintech and AI, quick 100-word updates, pop-up definitions, and
                        newsletter summaries in bite-sized formats, Deshore offers a streamlined,
                        efficient news experience that keeps you ahead effortlessly.
                    </p>
                </div>
            </div>

            {/* Desktop View (Original Layout) */}
            <div className="hidden md:grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-8">
                <div className="flex items-start">
                    <div className="text-left max-w-2xl">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            100-word updates & prepare daily feed, tailored for you
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Deshore provides highly curated, industry-specific summaries, powered by AI,
                            focusing on business sectors and innovations that matter most to professionals.
                            Features like one-tap definitions and personalized news feeds make Deshore a
                            unique, time-efficient news experience. With options for tailored insights in
                            sectors like fintech and AI, quick 100-word updates, pop-up definitions, and
                            newsletter summaries in bite-sized formats, Deshore offers a streamlined,
                            efficient news experience that keeps you ahead effortlessly.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src={Screen}
                        alt="Mobile app preview showing Diageo news"
                        className="h-[600px] w-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatWeBuilt;
