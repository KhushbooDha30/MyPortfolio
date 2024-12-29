import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NavBar/>
   <div className='container'>
    <div className='row'>
      <div className='col-1'></div>
      <div className='col-10'><Hero/>
   <AboutMe/>
   <Skills/>
   <Projects/>
   <ContactMe/></div>
      <div className='col-1'></div>
    </div>
   
   </div>
   <Footer/>
  
  </React.StrictMode>
);

