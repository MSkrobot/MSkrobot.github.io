import { useState, useEffect } from "react";
import "./CustomNavbar.css";

function CustomNavbar() {
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
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#landing"
            style={{ color: "#e0e1dd" }}
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
              src="/images/M6.png"
              width="40"
              height="40"
              className="d-inline-block align-center ms-2 me-2"
              alt=""
            ></img>
            Michał Skrobot
          </a>
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
