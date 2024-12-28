import React from "react";
import Face3Icon from "@mui/icons-material/Face3";

function AboutMe() {
  return (
    <>
      <div id="About" className="container py-4">
        {/* Row for Title and Image */}
        <div className="row">
          <div className="col-12">
            <h5 className="text-center text-md-start">Know More About Me</h5>
            <h1 className="text-center text-md-start">
              About me
              <Face3Icon
                style={{ fontSize: "40px", color: "#66FCF1", marginLeft: "20px" }}
                className="aboutimg"
              />
            </h1>
            <div className="img-cont text-center">
              <img
                src="aboutme.png"
                alt="about"
                className="img-fluid"
                style={{
                  maxWidth: "550px",
      
                  padding: "2px", // Reduced padding
                }}
              />
            </div>
            <p className="summary text-center text-md-start mt-3">
              I am Khushboo Dhakciya, a dreamer, creator, and problem-solver
              at heart. My journey in software development has been fueled by
              curiosity and an unrelenting passion for learning. With a strong
              foundation in full-stack development, particularly the MERN
              stack, I thrive on transforming ideas into impactful solutions.
              Beyond coding, I bring leadership and adaptability to every
              project, ensuring a balance of innovation and efficiency.
            </p>
          </div>
        </div>

        {/* Row for Education and Experience Cards */}
        <div className="row mt-4">
          <div className="col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
            <div
              className="card card2 h-100"
              style={{
                width: "100%",
                maxWidth: "22rem",
                height: "auto", // Responsive height
              }}
            >
              <h3 className="card-header text-center">Education</h3>
              <div className="card-body">
                <h5 className="card-subtitle mb-2">
                  Bachelor's in Computer Applications -{" "}
                  <strong>Bherulal Patidar Government PG College, DAVV</strong>
                </h5>
                <h5>
                  Master's in Computer Applications -{" "}
                  <strong>SGSITS, RGPV</strong>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
            <div
              className="card card2 h-100"
              style={{
                width: "100%",
                maxWidth: "22rem",
                height: "auto", // Responsive height
              }}
            >
              <h3 className="card-header text-center">Experience</h3>
              <div className="card-body">
                <h5 className="card-subtitle mb-2">Fresher</h5>
                <h5>
                  Eager to apply my skills and knowledge to real-world projects
                  and make a meaningful impact.
                </h5>
              </div>
            </div>
          
          </div>
          
        </div>

        <hr style={{
          margin: "40px 0",  // Adding margin for space around the line
          border: "1px solid #66FCF1", // Styling the hr element with color and border width
        }} />
        
      </div>
     
    </>
  );
}

export default AboutMe;
