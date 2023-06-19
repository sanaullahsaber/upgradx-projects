import AboutPageBanner from '@/components/AboutPageBanner/AboutPageBanner';
import Featured from '@/components/Featured/Featured';
import Investors from '@/components/Investors/Investors';
import WeEvolved from '@/components/WeEvolved/WeEvolved';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <AboutPageBanner></AboutPageBanner>
      <WeEvolved></WeEvolved>
      <Featured></Featured>
      <Investors></Investors>
    </div>
  );
};

export default AboutPage;