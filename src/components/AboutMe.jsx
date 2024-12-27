import React from "react";
import Face3Icon from '@mui/icons-material/Face3';

function AboutMe() {
  return (
    <>
      <div id="About" className="container">
        <div className="row">
          <div className="col-12 col-md-1 mt-4"></div>

          <div className="col-10">
            <h5>Know More About Me</h5>
            <h1>About me<Face3Icon style={{ fontSize: "40", color: "66FCF1",marginLeft:"20px" }} className="aboutimg"/></h1>
            <div className="img-cont">
              <img src="aboutme.png"></img>
            </div>
            <div>
              
              <p className="summary">
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
          <div className="col-1"></div>
</div>
          <div className="row">
            <div className="col-12 col-md-1 mt-4"></div>
            <div className="col-md-5 col-sm-12">
              <div className="card card2" style={{width: "18rem;"}}>
                <h3 className="card-header">Education</h3>
                <div className="card-body">
                <h5 className="card-subtitle mb-2">
                  Bachelor's in Computer Applications - <strong>Bherulal Patidar
                  Government PG College, DAVV </strong>
                </h5>
                <h5>Master's in Computer Applications
                - <strong>SGSITS, RGPV</strong></h5>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="card card2" style={{width: "18rem;"}}>
                <h3 className="card-header">Experience</h3>
                <div className="card-body">
                <h5 className="card-subtitle mb-2">
                Fresher 
                </h5>
                <h5>Eager to apply my skills and knowledge to real-world projects and make a meaningful impact.</h5>
              </div>
              </div>
            </div>
            <div className="col-12 col-md-1 mt-4"></div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-1"></div>
            <div className="col-10">
              <div class="card">
               
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <hr/>
          <div className="col-1"></div>
        </div>
      
    </>
  );
}

export default AboutMe;
