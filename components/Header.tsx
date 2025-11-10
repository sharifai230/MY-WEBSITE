
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white text-center py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">🌍 Welcome to My Website</h1>
        <p className="mt-2 text-lg text-yellow-300">(Built with React & Tailwind CSS)</p>
      </div>
    </header>
  );
};

export default Header;
