import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Change Router to BrowserRouter for routing
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';  // Correct import for ThemeProvider
import { darkTheme, lightTheme } from './Theme/Theme';  // Make sure these are valid theme objects
import styled from 'styled-components';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Profile />
          <Wrapper>
            <Skills />
            <WorkExperience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
