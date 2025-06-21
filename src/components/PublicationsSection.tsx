
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ExternalLink } from 'lucide-react';

const publications = [
  {
    id: "neural-networks-segmentation",
    title: "Two-Stage, Global-Local Approach for Cell Nuclei Segmentation in Histopathology Images",
    authors: "Amit Shakya, Revat Saharan, Chetan Gupta, Rupesh Kumar, Lalit Sharma, Srivatsava Naidu, Subrahmanyam Murala, Chetan Arora",
    venue: "IEEE 8th International Conference on Information and Communication Technology (CICT)",
    year: "2024",
    abstract: "The proposed framework consists of first stage with Global and second stage with Local learning approach.",
    link: "https://arxiv.org/abs/2024.00001"
  },
  {
    id: "transformer-medical-imaging",
    title: "DiffMamba: Leveraging Mamba for Effective Fusion of Noise and Conditional Features in Diffusion Models for Skin Lesion Segmentation",
    authors: "Amit Shakya, Shruti S Phutke, Chetan Gupta, Rupesh Kumar, Lalit Sharma, Chetan Arora",
    venue: "9th International Conference on Computer Vision & Image Processing (CVIP)",
    year: "2024",
    abstract: "This work explores the application of transformer architectures to medical imaging tasks, demonstrating significant improvements in diagnostic accuracy.",
    link: "https://arxiv.org/abs/2024.00002"
  },
  // {
  //   id: "federated-learning-healthcare",
  //   title: "Federated Learning for Privacy-Preserving AI in Healthcare",
  //   authors: "Rodriguez, M., Chen, S.",
  //   venue: "Nature Machine Intelligence",
  //   year: "2023",
  //   abstract: "A comprehensive study on federated learning approaches that enable collaborative AI development while preserving patient privacy in healthcare applications.",
  //   link: "https://www.nature.com/articles/s42256-023-00001-1"
  // },
  // {
  //   id: "reinforcement-learning-navigation",
  //   title: "Reinforcement Learning for Autonomous Navigation in Complex Environments",
  //   authors: "Thompson, A., Rodriguez, M., Chen, S.",
  //   venue: "International Conference on Machine Learning (ICML 2023)",
  //   year: "2023",
  //   abstract: "Novel reinforcement learning algorithms for navigation tasks in dynamic and complex environments with applications to autonomous robotics.",
  //   link: "https://arxiv.org/abs/2023.00001"
  // }
];

export const PublicationsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Publications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our latest research papers published in top-tier conferences and journals.
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
                  <Link 
                    to={`/paper/${paper.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read Paper
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
