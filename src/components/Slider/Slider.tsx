/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './Slider.css';
import SliderList from '../SliderList/SliderList';


interface SliderProps {
 
}


const Slider : FC<SliderProps> = () =>{



   
  return (
      <div className="Slider">
    
          <SliderList/>
      </div>
  );
}

export default Slider;