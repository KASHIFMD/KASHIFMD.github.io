import React, { useState } from 'react';
import { sendFeedback } from '../services/api';
const FeedbackSection = () => {
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const isFormValid = () => {
        return feedback.trim().length > 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            await sendFeedback(feedback);
            setSubmitStatus({
                success: true,
                message: 'Thanks for your feedback!'
            });
            setFeedback('');
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
            console.error('Feedback submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-w-8xl mx-auto py-6 px-4 md:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                We Value Your Feedback!
            </h2>
            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto flex flex-col items-center"
            >
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Will this thing make your life easy? We value your viewpoint."
                    className="w-[300px] md:w-[500px] h-60 p-4 text-gray-700 bg-gray-100 rounded-md mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-main-800"
                ></textarea>
                {submitStatus && (
                    <div 
                        className={`mt-4 text-center p-3 rounded-md mb-4
                            ${submitStatus.success 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}
                    >
                        {submitStatus.message}
                    </div>
                )}
                <button
                    type="submit"
                    className={`px-10 py-3 font-semibold rounded-full 
                        ${!isFormValid() || isSubmitting
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-main-800 text-white hover:bg-main-900'
                        }`}
                    disabled={!isFormValid() || isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );
};
export default FeedbackSection;