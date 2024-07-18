/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/06/2024 18:45:12
*/
import React, { FC, useEffect, useState } from 'react';
import './SliderList.css';
import { sliders } from '../../api/data';
import { Slider } from '../../models/Slider';
import SliderItem from '../SliderItem/SliderItem';


interface SliderListProps {
 
}


const SliderList : FC<SliderListProps> = () =>{





//  const rotateArticles = () => {
//     showArticle(currentIndex);
//     currentIndex = (currentIndex + 1) % slides.length;
// }
    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      
      runLocalData()
    })

  return (
      <div className="SliderList ">
           {
            sliders.map((slide : Slider , index : number)=> {

              return <SliderItem key={index} slide={slide} index={index} />
      } )

      }      
      </div>
  );
}

export default SliderList;