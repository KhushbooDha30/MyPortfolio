import React from "react";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

function Projects() {
  return (
    <>
      <div id="projects">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h5 className="text-center text-md-start">Browse My Recent Projects</h5>
            <h1 className="text-center text-md-start">
              Projects
              <DeveloperModeIcon style={{height:"90px"}}></DeveloperModeIcon>
            </h1>
          </div>
          </div>
        </div>
        <div className="container cont d-flex">
          <div className="row mb-3 justify-content-center">
            <div className="col-12 col-md-5 col-sm-12 mb-3">
              <div className="card card-projects">
                <div className="image">
                  <img alt="music" src="music.jpg" />
                  <h3 className="pro">Spotify Clone</h3>
                </div>
                <div className="content">
                  <h3>Spotify Clone</h3>
                  <p>
                    Spotify Clone is a static music platform replica built with HTML and CSS, featuring a layout for browsing and playing songs.
                  </p>
                  <a href="https://github.com/KhushbooDha30/Static-Spotify-clone" className="btn pro-btn hero-btn shadow-none hover-shadow-lg">
                    Github Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 col-sm-12 mb-3">
              <div className="card">
                <div className="image">
                  <img alt="hotel" src="wanderlust.jpg" />
                  <h3 className="pro">Wanderlust</h3>
                </div>
                <div className="content">
                  <h3>Wanderlust</h3>
                  <p>
                    Wanderlust is a responsive hotel rental system focusing on hotel search, user authentication, and efficient property management.
                  </p>
                  <a href="https://github.com/KhushbooDha30/Wanderlust" className="btn pro-btn hero-btn shadow-none hover-shadow-lg">
                    Github Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 col-sm-12 ">
              <div className="card">
                <div className="image">
                  <img alt="clone" src="zerodha.jpeg" />
                  <h3 className="pro">Zerodha Clone</h3>
                </div>
                <div className="content">
                  <h3>Zerodha Clone</h3>
                  <p>
                    Zerodha Clone is a stock trading platform that replicates key features of Zerodha, including real-time market data, trading, and portfolio management.
                  </p>
                  <a href="https://github.com/KhushbooDha30/Zerodha-Clone" className="btn pro-btn hero-btn shadow-none hover-shadow-lg">
                    Github Repository
                  </a>
                </div>
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

export default Projects;
