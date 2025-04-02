import CustomNavbar from "./components/navBar";
import "./App.css";
import bgPhoto from "/images/M8.png";
import Landing from "./components/SubPages/Landing";
import About from "./components/SubPages/About";
import Skills from "./components/SubPages/Skills";
import Contact from "./components/SubPages/Contact";
import { useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Handler function to toggle the dark mode
  const handleDarkModeToggle = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <>
      <div
        className="bg-portrait"
        style={{
          backgroundImage: `url(${bgPhoto})`,
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          display: "block",
        }}
      >
        <CustomNavbar
          onLightModeToggle={handleDarkModeToggle}
          isLightMode={isLightMode}
        />
        <div className="container-fluid">
          <Landing isLightMode={isLightMode} />
          <About isLightMode={isLightMode} />
          <Skills isLightMode={isLightMode} />
          <Contact isLightMode={isLightMode} />
        </div>
      </div>
    </>
  );
}

export default App;
