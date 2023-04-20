import "..//App.css";

import Landing from "./SubPages/Landing";
import About from "./SubPages/About";
import Skills from "./SubPages/Skills";
import Contact from "./SubPages/Contact";

function Content() {
  return (
    <div className="container-fluid">
      <Landing />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default Content;
