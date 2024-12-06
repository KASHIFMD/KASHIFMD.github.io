import React from 'react';
import CategoriesImage from '../assets/list.png'; 
const KeyCategories = () => {
    return (
        <div className="min-w-8xl mx-auto py-12 px-4 md:px-12">
            <div className="grid md:grid-cols-3 items-center">
                {}
                <div className="md:col-span-1 mb-8 md:mb-0">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center md:text-left md:ml-56">
                        Key Categories of <br /> Coverage
                    </h2>
                </div>
                {}
                <div className="md:col-span-2 flex justify-center">
                    <img
                        src={CategoriesImage}
                        alt="Key Categories of Coverage"
                        className="w-full h-auto max-w-[500px]"
                    />
                </div>
            </div>
        </div>
    );
};
export default KeyCategories;
