
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const papers = [
  {
    id: "neural-networks-segmentation",
    title: "Two-Stage, Global-Local Approach for Cell Nuclei Segmentation in Histopathology Images",
    authors: "Amit Shakya, Revat Saharan, Chetan Gupta, Rupesh Kumar, Lalit Sharma, Srivatsava Naidu, Subrahmanyam Murala, Chetan Arora.",
    venue: "IEEE 8th International Conference on Information and Communication Technology (CICT)",
    year: "2024",
    abstract: "Effective management of high-resolution, and spatially wide contextual cues is fundamental to the accurate semantic segmentation. Traditional approaches like multi-resolution feature maps, and skip-connection are effective but require changes in the backbone architecture, restricting utilization of newer models and architectures for the problem. In this work we propose an architecture-agnostic, two-stage, global-local frame-work, called GoLo, for the semantic segmentation, which can use arbitrary semantic segmentation models within its two stages. We focus on segmenting cell nuclei in histopathology image analysis, where accurate segmentation of cell nuclei boundaries is one of the key issues. The proposed framework consists of first stage with Global and second stage with Local learning approach. The first stage is proposed to process the image globally and provide the coarse nuclei segmentation map. In the second stage, to process the image locally, coarse segmentation map and input image is first converted into patches. These patches are then fed as input to the second stage to get the fine- grained segmentation map. Both stages are trained with a combination of dice and binary cross entropy loss. To show the effectiveness of our approach, we test 4 state-of-the-art segmentation architectures (ACC-UNet, UCTransnet, Swin-UNet, and Vanilla U-Net), on 4 different benchmark datasets (MoNuSeg, CPM-17, CoNSep, and TNBC). We evaluate performance of each technique before and after using our framework. We report an average improvement of 4.82 % in mIoU, and 4.52% mDSC score, across techniques, and datasets.",
    arxivLink: "https://ieeexplore.ieee.org/document/10899523",
    demoDescription: "Interactive demo showing real-time image segmentation on uploaded images.",
    demoFeatures: ["Real-time webcam segmentation", "Upload custom images", "Adjustable confidence thresholds", "Multiple segmentation models"]
  },
  {
    id: "transformer-medical-imaging",
    title: "DiffMamba: Leveraging Mamba for Effective Fusion of Noise and Conditional Features in Diffusion Models for Skin Lesion Segmentation",
    authors: "Amit Shakya, Shruti S Phutke, Chetan Gupta, Rupesh Kumar, Lalit Sharma, Chetan Arora",
    venue: "9th International Conference on Computer Vision & Image Processing (CVIP)",
    year: "2024",
    abstract: "This work explores the application of transformer architectures to medical imaging tasks, demonstrating significant improvements in diagnostic accuracy.",
    arxivLink: "https://arxiv.org/abs/2024.00002",
    demoDescription: "Medical image analysis demo with pre-trained models for various diagnostic tasks.",
    demoFeatures: ["Chest X-ray analysis", "MRI tumor detection", "CT scan classification", "DICOM file support"]
  },
  {
    id: "federated-learning-healthcare",
    title: "Federated Learning for Privacy-Preserving AI in Healthcare",
    authors: "Rodriguez, M., Chen, S.",
    venue: "Nature Machine Intelligence",
    year: "2023",
    abstract: "A comprehensive study on federated learning approaches that enable collaborative AI development while preserving patient privacy in healthcare applications. We propose FedHealth, a novel federated learning framework specifically designed for healthcare scenarios that addresses the unique challenges of medical data including data heterogeneity, privacy requirements, and regulatory compliance. Our approach demonstrates superior performance while maintaining strict privacy guarantees.",
    arxivLink: "https://www.nature.com/articles/s42256-023-00001-1",
    demoDescription: "Simulation of federated learning in healthcare with privacy-preserving techniques.",
    demoFeatures: ["Multi-hospital simulation", "Privacy metrics visualization", "Model performance tracking", "Differential privacy controls"]
  },
  {
    id: "reinforcement-learning-navigation",
    title: "Reinforcement Learning for Autonomous Navigation in Complex Environments",
    authors: "Thompson, A., Rodriguez, M., Chen, S.",
    venue: "International Conference on Machine Learning (ICML 2023)",
    year: "2023",
    abstract: "Novel reinforcement learning algorithms for navigation tasks in dynamic and complex environments with applications to autonomous robotics. We introduce NavRL, a hierarchical reinforcement learning approach that combines global path planning with local obstacle avoidance. The method demonstrates robust performance in challenging scenarios including crowded environments, dynamic obstacles, and partial observability conditions.",
    arxivLink: "https://arxiv.org/abs/2023.00001",
    demoDescription: "Interactive simulation of autonomous navigation in various environments.",
    demoFeatures: ["3D environment simulation", "Obstacle avoidance demo", "Path planning visualization", "Multiple robot types"]
  }
];

const ResearchPaper = () => {
  const { id } = useParams<{ id: string }>();
  const paper = papers.find(p => p.id === id);

  if (!paper) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Paper Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Publications
        </Link>

        {/* Paper Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{paper.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{paper.authors}</p>
          <p className="text-blue-600 font-medium mb-6">{paper.venue} ({paper.year})</p>
          
          <div className="flex gap-4">
            <Button asChild>
              <a 
                href={paper.arxivLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Publication
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Abstract */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Abstract</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>
          </CardContent>
        </Card>

        {/* Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Interactive Demo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{paper.demoDescription}</p>
            
            {/* <div className="bg-gray-100 rounded-lg p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Demo Features:</h4>
              <ul className="space-y-2">
                {paper.demoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <p className="text-blue-800 mb-4">Demo implementation coming soon!</p>
              <p className="text-sm text-blue-600">
                Interactive demonstrations will be available in the next update.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResearchPaper;
