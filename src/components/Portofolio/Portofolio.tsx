/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './Portofolio.css';
import PortofolioList from '../PortofolioList/PortofolioList';


interface PortofolioProps {
 
}


const Portofolio : FC<PortofolioProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Portofolio container d-flex flex-column align-items-center" id='Portofolio'>
          
          <div className="title">
            
         <h2>Portfolio </h2>
        
          </div>

          <PortofolioList/>
      
      </div>
  );
}

export default Portofolio;