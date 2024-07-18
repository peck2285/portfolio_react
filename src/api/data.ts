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
        previewUrl : "https://jstores.netlify.app",
        description :"Réalisation d'un template ecommerce  fais avec les languages suivant html CSS3 et JavaScript .",
        
    },
     {
        title :"Boulangerie responsive",
        previewUrl: "https://pain-dore.netlify.app",
        time : "2 semaine",
        description :"Réalisation d'une Boulangerie responsive fais en html et css .",
        
    },
     {
        title :"jeux JavaScript",
        time : "2 semaine",
        previewUrl: "https://gamelofts.netlify.app",
        description :"Réalisation d'un jeu en JavaScript  dans le quelle vous etes soumus a plusieurs questions pendants une période de 10s .",
        
    },
   
    {
        title :"application de gestion des  films",
        previewUrl:"https://moviehandles.netlify.app",
        time : "2 semaine",
        description :"C'est une application qui permet de sélectionner des films de votre choix grace a une barre de recherche .",
       
    },

     {
        title :"Javascript filter",
        previewUrl:"https://filterfil.netlify.app",
        time : "2 semaine",
        description :"Une application constitué d'objet avec une barre de recherche pouvant les rechercher ces objets par leur nom ou leur catégorie",
       
    },

    {
        title :"Gestion de bibliothèque avec php",
        time : "3 semaine",
        previewUrl:"https://bookshandlers.netlify.app",
        description :" Une application consiste à créer un système de gestion de bibliothèque interactif et fonctionnel",
       
    },


    
]