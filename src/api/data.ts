import { Portofolio } from "../models/Portofolio"
import { Skill } from "../models/Skill"
import { Slider } from "../models/Slider"

export const sliders : Slider[] = [
    {
        name : "Alex Gbagbo franklin Zadi",
        description : "developpeur web Junior FullStack",
        imgSrc : "assets/images/bcg1.jpg"
    },

     {
        name : "Zadi Gbagbo",
        description : "La meilleure manière d'apprendre et de connaître le succès est de ne jamais considérer l'échec comme une défaite.",
        imgSrc : "assets/images/bcg2 (1).jpg"
    },

     {
        name : "Zadi Gbagbo",
        description : "La meilleure manière d'apprendre et de connaître le succès est de ne jamais considérer l'échec comme une défaite.",
        imgSrc : "assets/images/bcg3.jpg"
    }
]



export const skills : Skill[] = [
    {
        name : "html",
        imgUrl : "assets/images/html.svg",
        status : "Terminé"
    },
    {
        name : "Css",
        imgUrl : "assets/images/css.svg",
        status : "Terminé"
    },
    {
        name : "Javascript",
        imgUrl : "assets/images/javascript.svg",
        status : "Terminé"
    },
    {
        name : "bootstrap",
        imgUrl : "assets/images/bootstrap.svg",
        status : "terminé"
    },
    {
        name : "typescript",
        imgUrl : "assets/images/ts.svg",
        status : "terminé"
    },
    {
        name : "mongoDB",
        imgUrl : "assets/images/mongo.svg",
        status : "Terminé"
    },
    {
        name : "node Js",
        imgUrl : "assets/images/nodejs.svg",
        status : "Terminé"
    },
    {
        name : "React js",
        imgUrl : "assets/images/react.svg",
        status : "en cours"
    },
    
    
    
   

]



export const portofolios : Portofolio[] =[
    {
        title :"Template ecommerce",
        time : "2 semaine",
        previewUrl : "https://ecommerce-wo6y.onrender.com",
        description :"Réalisation d'un template ecommerce  fais avec les languages suivant html CSS3 et JavaScript .",
        
    },
     {
        title :"Boulangerie responsive",
        previewUrl: "https://boulangerie-js.onrender.com",
        time : "2 semaine",
        description :"Réalisation d'une Boulangerie responsive fais en html et css et javascript.",
        
    },
     {
        title :"Project boostrap",
        previewUrl: "https://projet-boostrap.onrender.com",
        time : "2 heure ",
        description :"Réalisation de ce projet boostrap ",
        
    },
     
    {
        title :"jeux JavaScript",
        time : "1 jour",
        previewUrl: "https://javascript-quiz-o9dr.onrender.com",
        description :"Réalisation d'un jeu en JavaScript  dans le quelle vous etes soumus a plusieurs questions pendants une période de 10s .",
        
    },
   
    {
        title :"application de gestion des  films",
        previewUrl:"https://film-script.onrender.com",
        time : "2 jour",
        description :"C'est une application qui permet de sélectionner des films de votre choix grace a une barre de recherche .",
       
    },

     {
        title :"Javascript filter",
        previewUrl:"https://javascript-filter.onrender.com",
        time : "1 jour",
        description :"Une application constitué d'objet avec une barre de recherche pouvant les rechercher ces objets par leur nom ou leur catégorie",
       
    },

     {
        title :"TTODOLIST JAVASCRPT",
        previewUrl:"https://javascript-taches.onrender.com",
        time : "1 jour",
        description :"Une application pouvantc crée des taches et les sauvegarder en local",
       
    },

    {
        title :"Gestion de bibliothèque avec php",
        time : "3 semaine",
        previewUrl:"https://github.com/peck2285/biblioth-que_php.git",
        description :" Une application consiste à créer un système de gestion de bibliothèque interactif et fonctionnel",
       
    },

    {
        title :"Gestion d'évènementavec php",
        time : "3 semaine",
        previewUrl:"https://github.com/peck2285/GestionEvents.git",
        description :" Une application consiste à créer un système de gestion de évènement interactif et fonctionnel",
       
    },



    
]