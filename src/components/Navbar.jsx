import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../constant/Constant';
// import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
//   const theme = useTheme();

  return (
    <nav className="bg-gray-900 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-20 px-6">
        <div className="flex items-center">
          <a href="/" className="flex items-center text-white cursor-pointer">
            <DiCssdeck size="3rem" />
            <span className="ml-2 font-bold text-lg">Portfolio</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white font-medium hover:text-blue-500">About</a>
          <a href="#skills" className="text-white font-medium hover:text-blue-500">Skills</a>
          <a href="#experience" className="text-white font-medium hover:text-blue-500">Experience</a>
          <a href="#projects" className="text-white font-medium hover:text-blue-500">Projects</a>
          <a href="#education" className="text-white font-medium hover:text-blue-500">Education</a>
        </div>
        <div className="hidden md:flex">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Github Profile
          </a>
        </div>
        <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size="1.5rem" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-20 right-0 w-full bg-gray-800 text-white rounded-b-lg shadow-lg p-6">
          <div className="flex flex-col space-y-6">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Skills</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Projects</a>
            <a href="#education" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Education</a>
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Github Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
