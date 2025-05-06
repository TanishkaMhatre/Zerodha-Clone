import React from 'react';
import HeroSection from './HeroSection';
import OpenAccount from '../OpenAccount';
import FAQs from './FAQs';

function SignUpPage() {
  return (
    <div className="app">
      <HeroSection />
      <FAQs/>
      <OpenAccount/>
    </div>
  );
}

export default SignUpPage;
