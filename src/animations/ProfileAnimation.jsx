import React from 'react';


const ProfileAnimation = () => (
  <div className="flex justify-center items-center w-full h-[500px]">
    <svg
      className="w-[600px] h-full"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="15%">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437Z"
          stroke="url(#paint0_radial)"
        />
        {/* Other paths and ellipses */}
      </g>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="33.33%" stopColor="#FBFBFB" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

export default ProfileAnimation;
