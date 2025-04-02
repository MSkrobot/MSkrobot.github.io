import { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import "./styles/CustomNavbar.css";
import checkedIcon from "/images/sunny.png";
import uncheckedIcon from "/images/night-mode.png";

interface NavBarProps {
  onLightModeToggle: () => void;
  isLightMode: boolean;
}

function CustomNavbar({ onLightModeToggle, isLightMode }: NavBarProps) {
  const [activeLink, setActiveLink] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector(".navbar-toggler");
    if (toggleButton) {
      if (isExpanded) {
        toggleButton.classList.add("box-shadow");
        document.body.classList.add("navbar-expanded"); // add class to body
      } else {
        toggleButton.classList.remove("box-shadow");
        document.body.classList.remove("navbar-expanded"); // remove class from body
      }
    }
  }, [isExpanded]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-sm navbar-dark fixed-top ${
          isLightMode ? "light-mode" : ""
        }`}
      >
        <div className="container-fluid" id="navCont">
          <a
            className="navbar-brand"
            href="#landing"
            onClick={() => {
              setIsExpanded(false);
              setActiveLink("landing");
              var navbar = document.getElementById("navbarNavAltMarkup");
              if (navbar) {
                navbar.classList.remove("show");
              }
            }}
          >
            <img
              src={`/images/M${isLightMode ? "11" : "8"}.png`}
              width="40"
              height="40"
              className="d-inline-block align-center ms-2 me-2"
              alt=""
            ></img>
            Michał Skrobot
          </a>
          <div className="switch ms-auto me-2">
            <ReactSwitch
              onChange={onLightModeToggle}
              checked={isLightMode}
              onColor="#fcd121"
              offColor="#1275cc"
              uncheckedIcon={
                <div className="react-switch-handle">
                  <img src={checkedIcon} alt="Checked Icon" />
                </div>
              }
              checkedIcon={
                <div className="react-switch-handle">
                  <img src={uncheckedIcon} alt="Unchecked Icon" />
                </div>
              }
            />
          </div>
          <button
            className="navbar-toggler navbar-toggler-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                aria-current="page"
                onClick={() => {
                  setIsExpanded(false);
                  setActiveLink("about");
                  var navbar = document.getElementById("navbarNavAltMarkup");
                  if (navbar) {
                    navbar.classList.remove("show");
                  }
                }}
                onDrag={() => setActiveLink("about")}
                href="#about"
              >
                About Me
              </a>
              <a
                className={`nav-link ${
                  activeLink === "skills" ? "active" : ""
                }`}
                onClick={() => {
                  setIsExpanded(false);
                  setActiveLink("skills");
                  var navbar = document.getElementById("navbarNavAltMarkup");
                  if (navbar) {
                    navbar.classList.remove("show");
                  }
                }}
                onDrag={() => setActiveLink("skills")}
                href="#skills"
              >
                Skills
              </a>
              <a
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                } me-2`}
                onClick={() => {
                  setIsExpanded(false);
                  setActiveLink("contact");
                  var navbar = document.getElementById("navbarNavAltMarkup");
                  if (navbar) {
                    navbar.classList.remove("show");
                  }
                }}
                onDrag={() => setActiveLink("contact")}
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;
