import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaFolder, FaEnvelope, FaBars, FaTimes, FaHome } from "react-icons/fa";
import Education from "./Education";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";
import Home from "./Home";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Data for sections
  const sectionData = {
    experience: (
      <WorkExperience />
    ),
    projects: (
      <Projects />
    ),
    education: (
      <Education />
    ),
    contact: (
      <Contact />

    ),
    home: (
      <Home />
    ),
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20"
          } bg-gray-800 text-white transition-all duration-300 fixed h-full`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className={`${!isSidebarOpen && "hidden"} font-bold text-xl`}>
            Portfolio
          </h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="mt-8">
          {[
            { id: "home", icon: FaHome, label: "Home" },
            { id: "experience", icon: FaBriefcase, label: "Experience" },
            { id: "projects", icon: FaFolder, label: "Projects" },
            { id: "education", icon: FaGraduationCap, label: "Education" },
            { id: "contact", icon: FaEnvelope, label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex  items-center p-4 hover:bg-gray-700 ${activeSection === item.id ? "bg-gray-700" : ""
                }`}
            >
              <item.icon className="text-xl" />
              <span className={`${!isSidebarOpen && "hidden"} ml-4`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main
        className={`p-8 transition-all duration-300 max-h-full`}
        style={
          {
            marginLeft: isSidebarOpen ? "16rem" : "5rem", // Adjust for sidebar width
            width: `calc(100% - ${isSidebarOpen ? "16rem" : "5rem"})`, // Remaining width
            height: `100vh`
          }
        }
      >
        {sectionData[activeSection]}
      </main>
    </div>
  );
}

export default Sidebar;
