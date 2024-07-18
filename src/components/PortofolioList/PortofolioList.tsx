/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './PortofolioList.css';
import {portofolios } from '../../api/data';
import { Portofolio } from '../../models/Portofolio';
import PortofolioItem from '../PortofolioItem/PortofolioItem';


interface PortofolioListProps {
 
}


const PortofolioList : FC<PortofolioListProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="PortofolioList">
            {
           portofolios.map((portofolio : Portofolio, index : number)=>{
              return <PortofolioItem key={index} portofolio={portofolio}/>
            })
          }
      </div>
  );
}

export default PortofolioList;