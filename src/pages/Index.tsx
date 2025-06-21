
import React from 'react';
import { Hero } from '@/components/Hero';
import { TeamSection } from '@/components/TeamSection';
import { PublicationsSection } from '@/components/PublicationsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TeamSection />
      <PublicationsSection />
    </div>
  );
};

export default Index;
