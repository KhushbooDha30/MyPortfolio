import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <>
    <section id="skills">
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 col-md-1 mt-4"></div>

          <div className="col-10">
            <h5>Have a Look at my Skills</h5>
            <h1>Skills<FontAwesomeIcon icon={faPenFancy} style={{marginLeft:"20px",color:"#66FCF1"}} /></h1>
            
            <p className="summary">
            Experienced in problem-solving, leadership, teamwork, and communication, with a strong foundation in both front-end and back-end development."
              </p>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
            <div className="col-12 col-md-1 mt-4"></div>
            <div className="col-md-5 col-sm-12">
              <div className="card card2" >
                <h3 className="card-header">Frontend Devlopment</h3>
                <div className="card-body">
                <h5 className="card-subtitle mb-2">
                 HTML
                </h5>
                <h5 className="card-subtitle mb-2">
                 CSS
                </h5>
                <h5 className="card-subtitle mb-2">
                 React JS
                </h5>
                <h5 className="card-subtitle mb-2">
                 JavaScript
                </h5>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="card card2" >
                <h3 className="card-header">Backend Development</h3>
                <div className="card-body">
                <h5 className="card-subtitle mb-2">
                MYSQL
                </h5>
                <h5 className="card-subtitle mb-2">
                Java Programming
                </h5>
                <h5 className="card-subtitle mb-2">
                Node Js
                </h5>
                <h5 className="card-subtitle mb-2">
                Express Js
                </h5>
                <h5 className="card-subtitle mb-2">
                MongoDB
                </h5>
               
              </div>
              </div>
            </div>
            <hr></hr>
            <div className="col-12 col-md-1 mt-4"></div>
          </div>
      </div>
      </section>
    </>
  );
}

export default Skills;
