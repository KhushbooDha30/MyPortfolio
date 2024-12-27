import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <NavBar/>
   <Hero/>
   <AboutMe/>
   <Skills/>
   <Projects/>
   <ContactMe/>
   <Footer/>
   </BrowserRouter>
  </React.StrictMode>
);

