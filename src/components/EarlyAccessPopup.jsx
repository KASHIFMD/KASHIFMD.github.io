import React, { useState, useEffect } from 'react';
import { sendEarlyAccessRequest } from '../services/api';
function EarlyAccessPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile_num: '',
    email: '',
    join_community: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.name.trim() !== '' &&
      formData.mobile_num.trim() !== '' &&
      formData.email.trim() !== '' &&
      emailRegex.test(formData.email)
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const submissionData = {
        name: formData.name,
        mobile_num: formData.mobile_num,
        email: formData.email,
        join_community: formData.join_community
      };
      await sendEarlyAccessRequest(submissionData);
      setSubmitStatus({
        success: true,
        message: 'Thank you for your submission!'
      });
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to submit early access request. Please try again.'
      });
      console.error('Early access submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-main-800">🎉 Join the First 200 & earn Pioneer badge!</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        {submitStatus ? (
          <div 
            className={`text-center p-4 rounded-md 
              ${submitStatus.success 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
              }`}
          >
            {submitStatus.message}
          </div>
        ) : (
          <>
            <p className="mb-6 text-gray-600">
              Be one of the first 200 users to earn the Pioneer Badge and unlock early access to premium features.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded"
                  value={formData.mobile_num}
                  onChange={(e) => setFormData({...formData, mobile_num: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={formData.join_community}
                    onChange={(e) => setFormData({...formData, join_community: e.target.checked})}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-600">
                    Join WhatsApp community & network with professionals like you
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className={`w-full py-2 mt-6 font-semibold rounded 
                  ${!isFormValid() || isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-main-800 text-white hover:bg-main-900'
                  }`}
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
export default EarlyAccessPopup;