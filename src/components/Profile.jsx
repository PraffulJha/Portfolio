import React from 'react';
import Typewriter from 'typewriter-effect';
import { Bio } from '../constant/Constant';
import ProfileAnimation from '../animations/ProfileAnimation';
import ProfileImage from '../assets/ProfileImage.jpg'

const Profile = () => {
  return (
    <div id="about" className="bg-gray-900 relative py-20 flex justify-center">
      <div className="absolute inset-0 flex justify-end overflow-hidden">
        <ProfileAnimation />
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center max-w-screen-lg w-full px-6">
        <div id="Left" className="order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-snug">
            Hi, I am <br /> {Bio.name}
          </h1>
          <div className="flex items-center mt-4 text-xl md:text-2xl font-semibold text-white">
            I am a <span className="ml-2 text-indigo-600">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="mt-4 text-lg text-white leading-relaxed">{Bio.description}</p>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-indigo-600 text-white font-medium text-lg py-3 px-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            Check Resume
          </a>
        </div>

        <div id="Right" className="order-2 md:order-2 flex justify-center md:justify-end">
          <img
            src={ProfileImage}
            alt="hero-image"
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-indigo-600 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
