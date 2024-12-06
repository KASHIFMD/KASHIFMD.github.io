import React, { useState } from 'react';
import { sendWaitlistRequest } from '../services/api';
import NewsletterImage from '../assets/image.png';
const NewsletterSubscription = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        name: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const isFormValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return formData.email.trim() !== '' && emailRegex.test(formData.email);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);
        const { email, phone, name } = formData;
        const userData = { name, mobile_num: phone, email };
        try {
            await sendWaitlistRequest(userData);
            setSubmitStatus({
                success: true,
                message: 'You have been added to the waitlist!'
            });
            setFormData({ email: '', phone: '', name: '' });
            setTimeout(() => {
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Failed to submit. Please try again.'
            });
            setTimeout(() => {
                setSubmitStatus(null);
            }, 2000);
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-w-8xl mx-auto py-6 px-4 md:px-24">
            <div className="grid md:grid-cols-2 items-center">
                <div className="flex justify-center mb-16 md:mb-0">
                    <img
                        src={NewsletterImage}
                        alt="Newsletter Subscription"
                        className="w-full max-w-sm h-auto"
                    />
                </div>
                <div className="px-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                        Join the Waitlist
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main-800"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                We'll send updates to this email address
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your Phone Number"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main-800"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                            />
                            <p className="text-sm text-gray-500 mt-2">Let us know what to call you</p>
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
                        <button
                            type="submit"
                            className={`px-14 py-3 font-semibold rounded-full 
                                ${!isFormValid() || isSubmitting
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-main-800 text-white hover:bg-main-900'
                                }`}
                            disabled={!isFormValid() || isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default NewsletterSubscription;