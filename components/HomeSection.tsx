
import React from 'react';
import Section from './Section';

const HomeSection: React.FC = () => {
  return (
    <Section id="home" title="Home">
      <p className="leading-relaxed text-gray-700 mb-6">
        Welcome to my awesome website. This page is designed using the power of React for components and Tailwind CSS for styling, creating a modern and responsive user experience.
      </p>
      <button
        onClick={() => alert('Thanks for clicking!')}
        className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
      >
        Click Me
      </button>
    </Section>
  );
};

export default HomeSection;
