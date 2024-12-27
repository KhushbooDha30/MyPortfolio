import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
    <>
      <section className="herosection">
        <div id=" Hero" className="container mt-5 mb-5">
          <div className="row">
            <div className="col-12 col-md-1 mt-4"></div>
            <div className=" col-md-5 col-sm-12 text-md-start details">
              <h4>Hello , I'm</h4>
              <h1>Khushboo Dhakciya</h1>
              <h4 style={{ marginLeft: "200px" }}>Full Stack Developer</h4>
              <button
                className="btn hero-btn shadow-none hover-shadow-lg download"
                onClick={handleClick}
              >
                <FontAwesomeIcon
                  icon={faCircleDown}
                  style={{
                    color: "white",
                    backgroundColor: "#124E66",
                    height: "20px",
                    width: "20px",
                    marginRight: "6px",
                    marginTop: "3px",
                  }}
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
              <blockquote>
                <a href="https://github.com/KhushbooDha30">
                <FontAwesomeIcon
                  className="hero-btn shadow-none hover-shadow-lg"
                  icon={faGithub}
                  style={{
                    height: "40px",
                    marginLeft: "150px",
                    marginRight: "30px",
                  }}
                />
                </a>
                <a href="https://www.linkedin.com/in/khushboo-dhakciya-a37039291"><FontAwesomeIcon
                  className="hero-btn shadow-none hover-shadow-lg"
                  icon={faLinkedin}
                  style={{ height: "40px", marginLeft: "40px" }}
                /></a>
              </blockquote>
            </div>
            <div className="col-12 col-md-5 col-sm-12 container-img text-center">
              <img
                src="hero.jpg"
                alt="Avatar"
                class="image profile-picture"
                style={{
                  width: "400px", // Adjust the size as needed
                  height: "400px", // Adjust the size as needed
                  borderRadius: "50%", // This makes the image circular
                  objectFit: "cover",
                  marginBottom:"100px",
                  marginTop:"70px" // Ensures the image fills the circle properly
                }}
              />
              
            </div>
            <hr />
            <div className="col-12 col-md-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
