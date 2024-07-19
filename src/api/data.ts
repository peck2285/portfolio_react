import { Portofolio } from "../models/Portofolio"
import { Skill } from "../models/Skill"
import { Slider } from "../models/Slider"

export const sliders : Slider[] = [
    {
        name : "Alex Gbagbo Franklin Zadi",
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
        description :"Réalisation d'un template E.commerce mettant en lumière des acticles féminins avec différents prix fais avec les languages HTML,CSS et JavaScript .",
        
    },
     {
        title :"Boulangerie responsive",
        previewUrl: "https://boulangerie-js.onrender.com",
        time : "2 semaine",
        description :"Réalisation d'une Boulangerie responsive faite en HTML CSS et JavaScript. Dans ce projet tout client peut voir les détails des produits et les commander en quantité voulu juste par un clique .Dans ce projet ce que je retiens c'est comment utilisé les fonctons et les appelé",
        
    },
     {
        title :"Projet boostrap",
        previewUrl: "https://projet-boostrap.onrender.com",
        time : "2 heure ",
        description :"Réalisation d'un projet boostrap mettant en lumière la constrsurction .J'ai beaucoup appris dans ce projet et je suis aller plus vite "
        
    },
     
    {
        title :"jeux JavaScript",
        time : "1 jour",
        previewUrl: "https://javascript-quiz-o9dr.onrender.com",
        description :"Réalisation d'un jeu en JavaScript  dans lequel vous etes soumis a plusieurs questions pendants une période de 10s . A la fin du jeu vous serrez totalisé ",
        
    },
   
    {
        title :"application de gestion des  films",
        previewUrl:"https://film-script.onrender.com",
        time : "2 jour",
        description :"C'est une application qui permet de sélectionner des films de votre choix grace a une barre de recherche et filtrer  .",
       
    },

     {
        title :"Javascript filter",
        previewUrl:"https://javascript-filter.onrender.com",
        time : "1 jour",
        description :"Une application constitué d'objet de vente  avec une barre de recherche pouvant les rechercher ces objets par leur nom ou leur catégorie",
       
    },

     {
        title :"TODOLIST JAVASCRPT",
        previewUrl:"https://javascript-taches.onrender.com",
        time : "1 jour",
        description :"Une application pouvant crée des taches et les sauvegarder en local",
       
    },

    {
        title :"Gestion de bibliothèque avec php",
        time : "3 semaine",
        previewUrl:"https://github.com/peck2285/biblioth-que_php.git",
        description :" Une application consiste à créer un système de gestion de bibliothèque interactif et fonctionnel",
       
    },

    {
        title :"Gestion d'évènement avec php",
        time : "3 semaine",
        previewUrl:"https://github.com/peck2285/GestionEvents.git",
        description :" Une application consiste à créer un système de gestion de évènement interactif et fonctionnel",
       
    },



    
]