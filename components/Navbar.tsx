
import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="text-white font-bold py-2 px-4 rounded-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
      >
        {children}
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <ul className="flex justify-center items-center p-2 flex-wrap">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#gallery">Gallery</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
