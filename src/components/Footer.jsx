import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return ( 
        <div className='container-fluid border-top mt-5 mb-5 text-center'>
            <h4 style={{marginTop:"19px"}}>© 2024 Khushboo Dhakciya. All rights reserved.</h4>
            
            <a href='https://github.com/KhushbooDha30'><FontAwesomeIcon
                              className="hero-btn shadow-none hover-shadow-lg "
                              icon={faGithub}
                              style={{
                                height: "40px",
                                
                                marginRight: "30px",
                              }}
                            />
                            </a>
            <a href="https://www.linkedin.com/in/khushboo-dhakciya-a37039291"><FontAwesomeIcon
                              className="hero-btn shadow-none hover-shadow-lg"
                              icon={faLinkedin}
                              style={{ height: "40px", marginLeft: "40px" }}
                            />
                            </a>
        </div>
     );
}

export default Footer;