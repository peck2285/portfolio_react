/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/06/2024 18:45:13
*/
import React, { FC, useState } from "react";
import "./SliderItem.css";
import { Slider } from "../../models/Slider";
import { sliders } from "../../api/data";

interface SliderItemProps {
  
  slide: Slider;
  index : number
  
}

const SliderItem: FC<SliderItemProps> = ({ slide, index }) => {

  const [currentIndex, setCurrentIndex]  = useState<number>(0)
  


const  displayCarroussel = ()=> {
  // var newIndex = (currentIndex + 1) % sliders.length
  
var newIndex = currentIndex + 1

  if (newIndex === sliders.length) {
    newIndex = 0
    
  }

    setCurrentIndex(newIndex)
}


const interval = setTimeout(displayCarroussel,10000)



  return (
      <div className={`slide ${index === currentIndex ? "active" : ""}`}>
        <img src={slide.imgSrc} alt="slides" />
        <div className="content">
          <h2>{slide.name}</h2>
          <h3>{slide.description} </h3>
        </div>  
      </div>
    
  );
};

export default SliderItem;
