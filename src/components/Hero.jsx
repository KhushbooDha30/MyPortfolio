import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  function handleClick() {
    const link = document.createElement("a");
    link.href = "Resume_Khushboo_Dhakciya.pdf";
    link.setAttribute("download", "KhushbooDhakciyaResume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="herosection">
      <div id="Hero" className="container mt-5 mb-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-12 col-md-6 text-md-start details  text-md-left">
            <h4 className="text-center text-md-start">Hello, I'm</h4>
            <h1 className="text-center text-md-start">Khushboo Dhakciya</h1>
            <h4 className="text-center text-md-start">Full Stack Developer</h4>
            <div className="d-flex flex-column flex-md-row gap-3 mt-4">
              <button
                className="btn hero-btn shadow-none hover-shadow-lg download"
                onClick={handleClick}
              >
                <FontAwesomeIcon
                  icon={faCircleDown}
                  className="me-2"
                  style={{ color: "white" }}
                />
                Download Resume
              </button>
              <button className="btn hero-btn shadow-none hover-shadow-lg">
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Me
                </a>
              </button>
            </div>
            <div className="mt-4">
              <a href="https://github.com/KhushbooDha30">
                <FontAwesomeIcon
                  className="me-3 hero-btn shadow-none hover-shadow-lg"
                  icon={faGithub}
                  style={{ fontSize: "1.5rem" }}
                />
              </a>
              <a href="https://www.linkedin.com/in/khushboo-dhakciya-a37039291">
                <FontAwesomeIcon
                 className="hero-btn shadow-none hover-shadow-lg"
                  icon={faLinkedin}
                  style={{ fontSize: "1.5rem",textDecoration:"none" }}
                />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="hero.jpg"
              alt="Avatar"
              className="img-fluid rounded-circle mt-4"
              style={{
                maxWidth: "300px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <hr style={{
          margin: "40px 0",  // Adding margin for space around the line
          border: "1px solid #66FCF1", // Styling the hr element with color and border width
        }} />
      </div>
    </section>
  );
}

export default Hero;
