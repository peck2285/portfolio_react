/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import './Footer.css';


interface FooterProps {
 
}


const Footer : FC<FooterProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
     
     
     <div className="Footer">
         
         
  

  
  <ul className="social-icon">
    <li className="social-icon__item"><a className="social-icon__link" href="#">
    <FaFacebook />
      </a>
      
      </li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
        <FaGithub />

      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
<FaLinkedin />
      </a></li>
    <li className="social-icon__item"><a className="social-icon__link" href="#">
<FaInstagram />
      </a></li>
  </ul>
  
  <ul className="menu">
    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
    <li className="menu__item"><a className="menu__link" href="#About">About</a></li>
    <li className="menu__item"><a className="menu__link" href="#Skills">Skills</a></li>
    <li className="menu__item"><a className="menu__link" href="#Portofolio">Portofolio</a></li>
    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
  </ul>


        

   
    <p>&copy;2024 Alex  | All Rights Reserved</p>
      </div>
  );
}

export default Footer;