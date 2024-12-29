import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Skills() {
  return (
    <>
      <section id="skills">
        <div className="container mt-5 mb-5">
          {/* Row for Title */}
          <div className="row">
            <div className="col-12">
              <h5 className="text-center text-md-start">Have a Look at my Skills</h5>
              <h1 className="text-center text-md-start">
                Skills
                <FontAwesomeIcon
                  icon={faPenFancy}
                  style={{ marginLeft: "20px", color: "#66FCF1" }}
                />
              </h1>
              <p className="summary text-center text-md-start">
                Experienced in problem-solving, leadership, teamwork, and communication,
                with a strong foundation in both front-end and back-end development.
              </p>
            </div>
          </div>

          {/* Row for Skill Cards */}
          <div className="row mt-4">
            {/* Frontend Development Card */}
            <div className="col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
              <div className="card card2 h-100" style={{ width: "100%", maxWidth: "22rem" }}>
                <h3 className="card-header text-center">Frontend Development</h3>
                <div className="card-body">
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>HTML</h5>
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>CSS</h5>
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>React JS</h5>
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>JavaScript</h5>
                </div>
              </div>
            </div>

            {/* Backend Development Card */}
            <div className="col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
              <div className="card card2 h-100" style={{ width: "100%", maxWidth: "22rem" }}>
                <h3 className="card-header text-center">Backend Development</h3>
                <div className="card-body">
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>MYSQL</h5>
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>Java Programming</h5>
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>Node JS</h5>
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>Express JS</h5>
                  <h5 className="card-subtitle mb-2"><CheckCircleIcon style={{marginRight:"10px"}}></CheckCircleIcon>MongoDB</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line for Section Break */}
          <hr style={{
          margin: "40px 0",  // Adding margin for space around the line
          border: "1px solid #66FCF1", // Styling the hr element with color and border width
        }} />
        </div>
      </section>
    </>
  );
}

export default Skills;
