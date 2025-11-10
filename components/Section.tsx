
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="my-8 mx-auto max-w-4xl bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
