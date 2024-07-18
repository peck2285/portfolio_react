/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:00:56
*/
import React, { FC, useEffect } from 'react';
import './Header.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // Add logic here if needed
    };
    runLocalData();
  }, []); // Added dependency array to avoid running effect on every render

  return (
    
    <div className="Header container">
     
     <nav className="navbar navbar-expand-lg ">
    
    <div className="container-fluid d-flex justify-content-between header-fluid ">
    
    <a className="navbar-brand Logo" href="#">Alex</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
   
   
    <div className="navbarr collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#Skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Portofolio">Portfolio</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#Contact">Contact</a>
        </li>
        
        
      </ul>

    </div>
  </div>
    </nav>  


    </div>
  );
};

export default Header;
