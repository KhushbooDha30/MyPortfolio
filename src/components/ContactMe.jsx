import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactMe() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-md-1 mt-4"></div>

            <div className="col-12 col-md-10">
              <h5 className="text-center text-md-start">Feel Free to Connect</h5>
              <h1 className="text-center text-md-start">Contact Me</h1>
            </div>
            <div className="col-12 col-md-1"></div>
          </div>
        </div>

        <div className="container justify-content-center d-flex">
          <div className="row contact-info">
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-10">
              {/* Add content if needed */}
            </div>
            <div className="col-12 col-md-1"></div>
          </div>
        </div>

        <div className="container justify-content-center d-flex mb-5">
          <div className="row">
            <div className="col-12 col-md-1 mt-4"></div>

            <div className="col-12 col-md-10 con p-4"> {/* Padding added here */}
              <div className="container">
                <div className="row text-center">
                  {/* Mail Section */}
                  <div className="col-12 col-sm-4 mb-4">
                    <a href="mailto:khushboodhakciya@gmail.com" className="hero-btn shadow-none hover-shadow-lg">
                      <MailIcon style={{ fontSize: "40px" }} />
                      
                    </a>
                    <p>Mail</p>
                  </div>

                  {/* LinkedIn Section */}
                  <div className="col-12 col-sm-4 mb-4">
                    <a href="https://www.linkedin.com/in/khushboo-dhakciya-a37039291" className="hero-btn shadow-none hover-shadow-lg">
                      <LinkedInIcon style={{ fontSize: "40px" }} />
                      
                    </a>
                    <p>LinkedIn</p>
                  </div>

                  {/* Location Section */}
                  <div className="col-12 col-sm-4 mb-4">
                    <a href="https://www.google.com/maps/place/Dr.+Ambedkar+Nagar+(Mhow)/" className=" hero-btn shadow-none hover-shadow-lg">
                      <LocationOnIcon style={{ fontSize: "40px" }} />
                      
                    </a>
                    <p>Location</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-1"></div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default ContactMe;
