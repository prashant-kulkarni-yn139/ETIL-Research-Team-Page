
import React from 'react';
import { Hero } from '@/components/Hero';
import { TeamSection } from '@/components/TeamSection';
import { PublicationsSection } from '@/components/PublicationsSection';
import { SegmentationDemo } from '@/components/SegmentationDemo';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TeamSection />
      <PublicationsSection />
      <SegmentationDemo />
    </div>
  );
};

export default Index;
