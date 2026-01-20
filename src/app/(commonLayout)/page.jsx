
import Categories from '@/components/Home/Categories';
import CTA from '@/components/Home/CTA';
import FeaturedResources from '@/components/Home/FeaturedResources';
import Hero from '@/components/Home/Hero';
import HowItWorks from '@/components/Home/HowItWorks';
import WhatWeOffer from '@/components/Home/WhatWeOffer';
import WhoItsFor from '@/components/Home/WhoItsFor';
import React from 'react';

const HomePage = () => {
  return (
     <main className="min-h-screen ">
      <Hero />
      <FeaturedResources/>
      <WhatWeOffer />
      <Categories />
      <WhoItsFor />
      <HowItWorks />
      <CTA />
    </main>
  );
};

export default HomePage;