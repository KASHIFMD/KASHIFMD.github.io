import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                {}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <span>Follow us on:</span>
                    <a href="#" className="hover:text-main-800">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-main-800">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-main-800">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-main-800">
                        <FaLinkedinIn />
                    </a>
                </div>
                {}
                <div className="text-center mb-4 md:mb-0">
                    © 2024 Deshore. All rights reserved.
                </div>
                {}
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-main-800">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-main-800">
                        Terms & Conditions
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
