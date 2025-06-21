
import React from 'react';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Principal Investigator",
    expertise: "Computer Vision, Deep Learning",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face",
    description: "Leading research in advanced neural architectures and vision systems."
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Senior Research Scientist",
    expertise: "Machine Learning, NLP",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Specializing in transformer architectures and language understanding."
  },
  {
    name: "Dr. Emily Zhang",
    role: "Research Scientist",
    expertise: "Image Segmentation, Medical AI",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    description: "Developing AI solutions for medical imaging and diagnostic applications."
  },
  {
    name: "Alex Thompson",
    role: "PhD Student",
    expertise: "Reinforcement Learning, Robotics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "Research focus on autonomous systems and intelligent decision making."
  }
];

export const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds driving innovation in artificial intelligence research
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
