/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 01/06/2024 21:20:28
*/
import React, { FC, useEffect } from 'react';
import './About.css';


interface AboutProps {
 
}


const About : FC<AboutProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      
      <div className="About container" id='About'>
       <section className="about-me" id="About">
    <div className="abtContent">
    <div className="title">
      <h2>ABOUT</h2>
    </div>
    <p> Développeur Fullstack junior passionné par la programmation, je crée des solutions innovantes et performantes, alliant front-end et back-end pour des expériences utilisateurs optimales
      <span className="spa1">FullStack</span>
Développeur fullstack junior doté d'une solide base technique en développement web, je mets en exergue mes compétences pour concevoir des interfaces utilisateur interactives et conviviales. Mon expertise inclut l'utilisation de technologies modernes telles que HTML5, CSS3, JavaScript, et des frameworks frontend populaires comme React. Mon objectif est de transformer des concepts créatifs en applications web exceptionnelles, offrant une navigation intuitive et une esthétique remarquable.    </p>
  </div>
</section>

      </div>
  );
}

export default About;