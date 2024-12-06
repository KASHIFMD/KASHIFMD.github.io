import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: 'When is the launch date?', answer: 'The launch date is scheduled for Q1 next year.' },
        { question: 'Can I customize my news feed?', answer: 'Yes, you can tailor your feed based on your preferences.' },
        { question: 'Is Deshore free?', answer: 'Deshore offers both free and premium subscription plans.' },
        { question: 'How does Deshore ensure the accuracy of its news?', answer: 'Deshore uses AI and a team of editors to verify the accuracy.' },
        { question: 'How often is new content updated?', answer: 'New content is updated daily to keep you informed.' },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-w-8xl mx-auto py-12 px-6 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-8">FAQs</h2>
            <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-main-800 mb-4 px-4 md:px-0">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left py-4 text-lg font-bold text-main-800 flex justify-between items-center"
                        >
                            {faq.question}
                            <span className="text-main-800 text-xl">
                                {openIndex === index ? '-' : '+'}
                            </span>
                        </button>
                        {openIndex === index && (
                            <p className="text-black text-sm pb-4">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
