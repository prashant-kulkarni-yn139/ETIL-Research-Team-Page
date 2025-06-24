
import React from 'react';
import rupesh from "@/assets/images/team/rupesh_kumar.jpg";
import shruti from "@/assets/images/team/shruti.jpg";
import chetan from "@/assets/images/team/chetan.jpg";
import amit from "@/assets/images/team/amit.jpg";
import akanksha from "@/assets/images/team/akanksha.jpg";
import uday from "@/assets/images/team/uday.jpg";
import yasmin from "@/assets/images/team/yasmin.jpg";

const teamMembers = [
  {
    name: "Dr. Rupesh Kumar",
    role: "Senior Research Scientist",
    expertise: "Computer Vision, Deep Learning",
    image: rupesh,
    description: "Enter Description of Research "
  },
  {
    name: "Dr. Shruti Shantiling Phutke",
    role: "Senior Research Scientist",
    expertise: "Computer Vision, Deep Learning, Image Restoration, Biomedical Image Processing",
    image: shruti,
    description: "Enter Description of Research "
  },
  {
    name: "Chetan Gupta",
    role: "Data Scientist",
    expertise: "Image Segmentation, Medical AI",
    image: chetan,
    description: "Enter Description of Research "
  },
  {
    name: "Amit Shakya",
    role: "Associate Data Scientist",
    expertise: "Medical Image Analysis, Computer Vision",
    image: amit,
    description: "Enter Description of Research."
  },
  {
    name: "Prashant D. Kulkarni",
    role: "Associate Data Scientist",
    expertise: "3D Point Cloud, GIS, Medical Segmentation",
    image: "",
    description: "Research focus on 3D point cloud processing and GIS applications."
  },
  {
    name: "Udaybhan Rathore",
    role: "Associate Data Scientist",
    expertise: "Computer Vision, NLP, Biometrics, Autonomous, Agriculture",
    image: uday,
    description: "Research focus on Plant Disease Detection and Agriculture Automation."
  },
  {
    name: "Yasmin M. Tadavi",
    role: "Associate Data Scientist",
    expertise: "NLP, Knowledge Graphs, Audio Processing",
    image: yasmin,
    description: "Research focus on NLP, SLMs, Knowledge Distillation and Audio Processing."
  },
  {
    name: "Akanksha Yadav",
    role: "Assistant Data Scientist",
    expertise: "Medical Image Analysis, Computer Vision",
    image: akanksha,
    description: "Research focus on Medical Image Analysis and Segmentation."
  },
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
