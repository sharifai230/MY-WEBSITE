
import React from 'react';
import Section from './Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <p className="leading-relaxed text-gray-700">
        I'm learning how to create modern and beautiful websites using cutting-edge technologies like React, TypeScript, and Tailwind CSS. My goal is to build applications that are not only functional but also visually appealing and a joy to use.
      </p>
    </Section>
  );
};

export default AboutSection;
