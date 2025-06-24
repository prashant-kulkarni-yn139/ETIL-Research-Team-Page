import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleResearchClick = () => {
    navigate('/#research'); // or change to /#publications or a real section ID
  };

  const handleContactClick = () => {
    navigate('/#contact'); // or a real section like /#team or /contact
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ETIL Research Lab
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team is dedicated to do research along the Yamaha Vision.
            Area of research: 
            Medical Imaging, Precision Agriculture, Techniques of Autonomous Driving, 3D Point Cloud, Language Model, EEG
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={handleResearchClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Our Research
            </button>
            <button 
              onClick={handleContactClick}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
