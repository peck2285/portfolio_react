/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './PortofolioItem.css';
import { Portofolio } from '../../models/Portofolio';
import { Link } from 'react-router-dom';



interface PortofolioItemProps {
 portofolio : Portofolio
}


const PortofolioItem : FC<PortofolioItemProps> = ({portofolio}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div  className="PortofolioItem">
        <a href={portofolio.previewUrl} className="project1">         
           <div className="desc">
              <h3>{portofolio.title.toUpperCase()}</h3>
              <p> Durée : <span>{portofolio.time}</span></p>
                <p>{portofolio.description}</p>
            </div>
      </a>
      </div>
  );
}

export default PortofolioItem;
