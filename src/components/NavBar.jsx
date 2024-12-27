import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid rightnav">
        
      <div class="logo d-flex jusitfy-content-center">
      <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    <div class="logo-container">
      <img src="logo.jpg" alt="MyImage" class="logo-image"/>
    </div>
    <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ marginLeft: "800px" }}>
            <li className="nav-item">
              <a href="#About" className="nav-link" aria-current="page">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" aria-disabled="true">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" aria-disabled="true">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
