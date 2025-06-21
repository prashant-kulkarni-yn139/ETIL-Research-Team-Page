
import React from 'react';
import { Book } from 'lucide-react';

const publications = [
  {
    title: "Advanced Neural Networks for Real-Time Image Segmentation",
    authors: "Chen, S., Zhang, E., Rodriguez, M.",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2024)",
    year: "2024",
    abstract: "We present a novel approach to real-time image segmentation using lightweight neural networks that achieve state-of-the-art performance while maintaining computational efficiency.",
    link: "#"
  },
  {
    title: "Transformer-Based Architectures for Medical Image Analysis",
    authors: "Zhang, E., Chen, S., Thompson, A.",
    venue: "Medical Image Computing and Computer Assisted Intervention (MICCAI 2024)",
    year: "2024",
    abstract: "This work explores the application of transformer architectures to medical imaging tasks, demonstrating significant improvements in diagnostic accuracy.",
    link: "#"
  },
  {
    title: "Federated Learning for Privacy-Preserving AI in Healthcare",
    authors: "Rodriguez, M., Chen, S.",
    venue: "Nature Machine Intelligence",
    year: "2023",
    abstract: "A comprehensive study on federated learning approaches that enable collaborative AI development while preserving patient privacy in healthcare applications.",
    link: "#"
  },
  {
    title: "Reinforcement Learning for Autonomous Navigation in Complex Environments",
    authors: "Thompson, A., Rodriguez, M., Chen, S.",
    venue: "International Conference on Machine Learning (ICML 2023)",
    year: "2023",
    abstract: "Novel reinforcement learning algorithms for navigation tasks in dynamic and complex environments with applications to autonomous robotics.",
    link: "#"
  }
];

export const PublicationsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Publications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our latest research contributions to the field of artificial intelligence
          </p>
        </div>
        
        <div className="grid gap-8">
          {publications.map((paper, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-2">{paper.authors}</p>
                  <p className="text-blue-600 font-medium mb-3">{paper.venue} ({paper.year})</p>
                  <p className="text-gray-700 mb-4">{paper.abstract}</p>
                  <a 
                    href={paper.link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Paper →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
