import React, { useState } from 'react';

function Home() {
  const [resumeData, setResumeData] = useState(null);

  const handleResumeClick = async () => {
    try {
      const response = await fetch('https://drive.google.com/file/d/1o2ReBHcvpwfVQlRjAQXnZLbMjQWx5YVD/view?usp=drive_link'); // Replace with your actual endpoint
      const blob = await response.blob(); 
      saveAs(blob, 'PraffulJha_Resume.pdf'); // Customize filename as needed
    } catch (error) {
      console.error("Error fetching resume:", error);
      // Handle error, e.g., display an error message to the user
    }
  };
  return (
    <div className="flex flex-row justify-center items-center gap-8 mt-36">
      <img src="" alt="" className="mt-36" />
      
      <div className="text-center w-3/4 text-green-50">
        <h1 className="text-6xl font-semibold">
          Hi, <span className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">I am Prafful Jha</span>, Mobile App Developer based in India
        </h1>
        
        <p className="w-1/2 mx-auto text-xl leading-10 mt-4"></p>
        
        <div className="flex  justify-center items-center gap-6 mt-12 mb-12 text-xl font-medium">
          <div className="py-6 px-12 bg-gradient-to-l from-[#DF8908] to-[#BF15FF] rounded-full cursor-pointer hover:border-2 hover:border-white">
            Connect with me
          </div>
          
          <div className="py-6 px-16 bor  der-2 border-white rounded-full cursor-pointer hover:border-[#BF15FF]" onClick={handleResumeClick}>
            My Resume
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
