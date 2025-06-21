
import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { removeBackground, loadImage } from '@/utils/segmentation';

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    title: "Circuit Board"
  },
  {
    url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
    title: "Light Bulb"
  },
  {
    url: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
    title: "Abstract Shape"
  }
];

export const SegmentationDemo = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [segmentedImage, setSegmentedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
      setSegmentedImage(null);
    }
  };

  const handleExampleClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setSegmentedImage(null);
  };

  const processSegmentation = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);
    try {
      // Load the image
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);
      
      // Process segmentation
      const segmentedBlob = await removeBackground(imageElement);
      const segmentedUrl = URL.createObjectURL(segmentedBlob);
      setSegmentedImage(segmentedUrl);
      
      toast({
        title: "Success!",
        description: "Image segmentation completed successfully.",
      });
    } catch (error) {
      console.error('Segmentation error:', error);
      toast({
        title: "Error",
        description: "Failed to process image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Interactive Demo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Try our image segmentation research in action. Upload your own image or select from examples below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Input Image</h3>
            
            {/* Upload Area */}
            <div 
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600 mb-2">Drop an image here or click to upload</p>
              <p className="text-sm text-gray-500">Supports JPG, PNG, WebP</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Example Images */}
            <div className="mt-8">
              <p className="text-lg font-medium text-gray-900 mb-4">Or try these examples:</p>
              <div className="grid grid-cols-3 gap-4">
                {exampleImages.map((img, index) => (
                  <div 
                    key={index}
                    className="cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    onClick={() => handleExampleClick(img.url)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="w-full h-24 object-cover"
                    />
                    <p className="text-xs text-center py-2 text-gray-600">{img.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Image */}
            {selectedImage && (
              <div className="mt-8">
                <img 
                  src={selectedImage} 
                  alt="Selected"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
                <button
                  onClick={processSegmentation}
                  disabled={isProcessing}
                  className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isProcessing ? 'Processing...' : 'Run Segmentation'}
                </button>
              </div>
            )}
          </div>

          {/* Output Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Segmentation Result</h3>
            
            <div className="border-2 border-gray-200 rounded-xl p-8 min-h-[400px] flex items-center justify-center bg-gray-50">
              {segmentedImage ? (
                <img 
                  src={segmentedImage} 
                  alt="Segmented"
                  className="max-w-full max-h-full rounded-lg shadow-md"
                />
              ) : (
                <div className="text-center">
                  <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Segmented image will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
