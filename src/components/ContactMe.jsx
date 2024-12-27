import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactMe() {
  return (
    <>
      <section id="contact" class="contact">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-md-1 mt-4"></div>

            <div className="col-10">
              <h5>Feel Free to Connect</h5>
              <h1>Contact Me</h1>
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="container justify-content-center d-flex">
          <div className="row contact-info">
            <div className="col-1"></div>
            <div className="col-10">
             
            
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="container justify-content-center d-flex mb-5">
          <div className="row">
            <div className="col-12 col-md-1 mt-4"></div>
          
            <div className="col-10 con">
              <div className="container">
              <div className="row ">
                <div className="col"><a href="mailto:khushboodhakciya@gmail.com"><MailIcon ></MailIcon>Mail</a></div>
                <div className="col"><a href="https://www.linkedin.com/in/khushboo-dhakciya-a37039291"><LinkedInIcon></LinkedInIcon>LinkedIn</a></div>
                <div className="col "><a href="https://www.google.com/maps/place/Dr.+Ambedkar+Nagar+(Mhow)/"><LocationOnIcon></LocationOnIcon>Location</a></div>
              </div>
              </div>
             </div>
            <div className="col-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
