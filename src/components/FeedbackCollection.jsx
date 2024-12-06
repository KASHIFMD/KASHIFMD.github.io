import React, { useState } from 'react';
import { sendPollResponse } from '../services/api';
const FeedbackCollection = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const categories = [
        'Fintech',
        'IT',
        'Electric Vehicle',
        'Government Policies',
        'M&A',
        'Health Tech',
    ];
    const handleCategoryClick = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };
    const handleSubmit = async () => {
        const pollData = {
            selected_categories: selectedCategories,
            ...selectedCategories.reduce((acc, category) => {
                const apiCategory = category === 'M&A' ? 'Mergers&Aquisitions' : category;
                acc[apiCategory] = 1;
                return acc;
            }, {})
        };
        try {
            setIsSubmitting(true);
            setSubmitStatus(null);
            const response = await sendPollResponse(pollData);
            setSubmitStatus({
                success: true,
                message: 'Thank you for your feedback!'
            });
            setSelectedCategories([]);
            setTimeout(() => {
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Failed to submit feedback. Please try again.'
            });
            setTimeout(() => {
                setSubmitStatus(null);
            }, 2000);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-w-8xl mx-auto py-6 px-6 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                Engagement & Feedback Collection
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
                Help us tailor content to your preferences.
            </p>
            <div className="max-w-2xl mx-auto px-4 md:px-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Interest Poll</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-md border 
                                ${
                                    selectedCategories.includes(category)
                                        ? 'bg-pink-600 text-white'
                                        : 'bg-gray-100 text-gray-700'
                                } hover:bg-pink-500 hover:text-white`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <p className="text-sm text-gray-500 mb-6 text-left">
                    Select industries you are interested in.
                </p>
                <div className="text-center">
                    <button
                        onClick={handleSubmit}
                        disabled={selectedCategories.length === 0 || isSubmitting}
                        className={`px-10 py-3 font-semibold rounded-full 
                            ${selectedCategories.length === 0 || isSubmitting
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-main-800 text-white hover:bg-main-900'
                            }`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
                {submitStatus && (
                    <div 
                        className={`mt-4 text-center p-3 rounded-md 
                            ${submitStatus.success 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}
                    >
                        {submitStatus.message}
                    </div>
                )}
            </div>
        </div>
    );
};
export default FeedbackCollection;