/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './Skills.css';

import SkillsList from '../SkillsList/SkillsList';


interface SkillsProps {
 
}


const Skills : FC<SkillsProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="Skills container d-flex flex-column align-items-center" id='Skills'>
          
          <div className="title">
            <h2>Skills</h2>
          </div>
         
          <SkillsList/>
      
      
      </div>
  );
}

export default Skills;