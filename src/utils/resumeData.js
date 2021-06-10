import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Language } from "@material-ui/icons";
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import PhotoIcon from '@material-ui/icons/Photo';
import Renovasanit from '../assests/images/renovasanit.png'
import Clubjouets from '../assests/images/clubjouets.png'
import Devfreelance from '../assests/images/devfreelance.png'
import CreditCardTunisia from '../assests/images/creditcardtunisia.png'
import ListMovies from '../assests/images/listemovies.png'
import OnePage from '../assests/images/onepage.png'
import ToDoList from '../assests/images/todolist.png'
// import Portfolio from '../assests/images/devfreelance.png'
import AffCrereno from '../assests/images/afficherenovasanit.jpg'
import AffCreinsg from '../assests/images/affichecréationsiteinsight.png'
import AffCrerespPoly from '../assests/images/afficheresppoly.jpg'
import AffSitPoly from '../assests/images/affichecréationsitepoly.jpg'
import AffForDev from '../assests/images/afficheformationdev.jpg'
import AffForPloy from '../assests/images/afficheformationpoly.jpg'
import AffSitDev from '../assests/images/affichecréationsitedev.png'
import AffMobDev from '../assests/images/affichemobiledev.jpg'
import LogoPoly from '../assests/images/logopoly.png'
import LogoCoquitta from '../assests/images/logocoquitta.jpg'
import LogoZayna from '../assests/images/logozayna.jpg'
import Portfolio from '../assests/images/portfolio.png'



export default  {
    name:'Akrem BELDI',
    title:'Développeur Full-Stack / Intégrateur Wordpress',
    dateNaissance :'15 Mars 1993',
    email: 'baldiakrem@gmail.com',
    adress: 'Sidi Fathalah Tunis',
    phone: '+216 21430701',
    social: {
        Facebook:{
            link:'https://www.facebook.com/akrem.beldi',
            text:'facebook',
            icon: <FacebookIcon /> 
        },
        Linkedin:{
            link:'https://www.linkedin.com/in/beldi-akrem-602622141/',
            text:'linkedin',
            icon: <LinkedInIcon /> 
        },
        Github:{
            link:'https://github.com/beldiakrem',
            text:'github',
            icon: <GitHubIcon /> 
        },
        
    },

    about: "Je m’appelle Akrem, j’ai 28 ans et j’ai une licence appliqué en systémes informatique et logiciel. Je suis un développeur Full-Stack je maîtrise les technologies du web et les different languages et frameworks, ce qui me permet a créer un programme, une application ou un site internet.",

    
    experiences: [
        {
          title: 'Développeur Front-End & Intégrateur Wordpress – Polydev Digital ',
          date: 'Aout 2020 - Present',
          description: "Découpage des elements graphiques à partir d’une maquette PSD, Création et maintenance des sites internets avec les technologies HTML5/ CSS3/ JavaScript, Adaptation et integration de design sur Wordpress, Installation et configuration des themes et des extensions Wordpress.",
        },
        {
            title:'Développeur Front-End ReactJS - Freelance ',
            date:'Jan 2020 – Juin 2020',
            description:"- Développement d’une application E-learning, Technologie utilisées: HTML5/CSS3/JavaScript/ReactJS/Material-ui, Développement d’une application DropPro, Technologie utilisées: HTML5/CSS3/JavaScript.",
          },
          {
            title:'Projet Fin D’étude - Aiventu',
            date:'Jan 2017- Juin 2017',
            description:"Application android de comptage d’inventaire (Conception et Réalisation), environnement techniques: “Zcing-scanner, Android Studio”.",
          },
         
    ],

    
    educations: [
        {
          title:' Formation Développeur Web FullStack JS – Go My Code ',
          date:'Aout 2019 – Nov 2019',
          description:"- Manipuler les événements DOM avec jQuery et JavaScript vanilla, Gestion de projets avec Git&Github, Création d’interface utilisateur basées sur des composants avec React-Redux, Création d’application Back-End avec NodeJS, Sauvegarde et gestion des données avec MongoDB/Mongoose.",
        },
        {
            title:'Licence en Systéme Informatique et Logiciel – ISI Ariana ',
            date:'Sep 2014 – Juin 2018 ',
            description:"Ce programme prepare les étudiants à devenir des analystes de systems informatiques ainsi que des concepteurs de systems et de logiciels. ",
          },
          {
            title:'Baccalauréat: Sciences Expérimentales - Lycée jbel jloud Tunis',
            date:'2012–2013 ',
            description:"Mention passable",
          },
         
    ],

    services: [
      {
        title:'Création des Applications Web',
        description:'Création des applications basées sur des composants avec React-Redux, Création d’application Back-End avec NodeJS, Sauvegarde et gestion des données avec MongoDB/Mongoose.',
        icon: <CodeIcon />
      },
      {
        title:'Création et Intégration des Sites Web',
        description:"C'est à partir du thème choisi qu’il a pour mission de mener à mettre en ligne un site WordPress au plus près des attentes et des besoins du donneur d’ordres",
        icon: <WebIcon />
      },
      {
        title:'Création des Logos&Flyers',
        description:'Création des logos et des flyers sur mesure avec le Photoshop (PSD)',
        icon: <PhotoIcon />
      },
 ],

 skills: [
  {
    title:'Front-End',
    description:[
      "HTML5/CSS3",
      "JavaScript",
      "ReacTJS, react-redux",
      "Bootstrap , Materialui",
    ],
  },
  {
    title:'Back-End',
    description:[
      "NodeJS",
      "MongoDB",
      "Mongoose",
      "Mysql",
    ],
  },
  {
    title:'CMS',
    description:[
      "Wordpress",
      "Woocommerce",
      "Elementor",
      "cPanel",
    ],
  },
  {
    title:'Design',
    description:[
      "Potoshop (PSD)",
      "responsive design",
    ],
  },

],

projects :[

  {
    tag:'Applications Web',
    image:CreditCardTunisia,
    title:'Credit Card Tunisia',
    caption:'Credit Card Tunisia',
    description:'Technologie utilisées: ReactJS, Bootstrap, Payment',
    links:[
      // {link:'https://www.google.com', icon: <YouTube />},
      {link:'https://github.com/beldiakrem/credit-card-Tunisia', icon: <GitHubIcon />},
      // {link:'https://www.google.com', icon: <Language />},
    ]
  },

    {
      tag:'Applications Web',
      image:ListMovies,
      title:'To-Do-liste-ReactJS',
      caption:'Application to do Liste',
      description:'Technologie utilisées: ReactJS, Material-ui',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://github.com/beldiakrem/To-Do-liste-ReactJS', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Applications Web',
      image:ToDoList,
      title:'List Movies Redux',
      caption:'Application list movies',
      description:'Technologie utilisées: React-Redux JS, ReactBotstrap, Reactstrap, Material-ui',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://github.com/beldiakrem/My-List-Movies-Redux', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Applications Web',
      image:OnePage,
      title:'Exemple Site OnePage',
      caption:" Exemple d'un site OnePage",
      description:'Technologie utilisées: ReactJS, ReactBotstrap, Gatsby',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://github.com/beldiakrem/site-OnePage', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Applications Web',
      image:Portfolio,
      title:'Portfolio',
      caption:'Mon Portfolio',
      description:'Technologie utilisées: ReactJS, Material-ui, Bootstrap',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://github.com/beldiakrem/Portfolio', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },


    {
      tag:'Sites Web',
      image: Renovasanit,
      title:'Renovasanit',
      caption:'Plombier en France',
      description:'Technologie utilisées: Wordpress, Elementor',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://renovasanit.fr/', icon: <Language />},
      ]
    },

    {
      tag:'Sites Web',
      image:Clubjouets,
      title:'ClubJouets',
      caption:'Magasin de jouets',
      description:'Technologie utilisées: Wordpress, Woocommerce, WPBakery Éditeur de page',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://clubjouets.tn/', icon: <Language />},
      ]
    },


    {
      tag:'Sites Web',
      image:Devfreelance,
      title:'DevFreelance',
      caption:"Site d'un Freelance",
      description:'Technologie utilisées: Wordpress, Elementor',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://devfreelance.tech/', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffCrereno,
      title:'Flyer Renovasanit',
      caption:'Flyer Renovasanit',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffCreinsg,
      title:'Flyer Insight Dev',
      caption:'Flyer Insight Dev',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:LogoPoly,
      title:'Logo Polydev Digital ',
      caption:'Logo Polydev Digital ',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffCrerespPoly,
      title:'Flyer Site Responsive Polydev Digital',
      caption:'Flyer Site Responsive Polydev Digital',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffSitPoly,
      title:'Flyer Création Site web Polydev Digital',
      caption:'Flyer Création Site web Polydev Digital',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffForDev,
      title:'Flyer Formation DevFreelance',
      caption:'Flyer Formation DevFreelance',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:LogoCoquitta,
      title:'Logo Coquitta',
      caption:'Logo Coquitta',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffForPloy,
      title:'Flyer Formation Polydev Digital',
      caption:'Flyer Formation Polydev Digital',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffSitDev,
      title:'Flyer Création Site DevFreelance',
      caption:'Flyer Création Site DevFreelance',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:LogoZayna,
      title:'Logo Zayna',
      caption:'Logo Zayna',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:AffMobDev,
      title:'Flyer Création Application Mobile DevFreelance',
      caption:'Flyer Création Application Mobile DevFreelance',
      description:'Technologie utilisées: Photoshop (PSD)',
      links:[
        // {link:'https://www.google.com', icon: <YouTube />},
        // {link:'https://www.google.com', icon: <GitHubIcon />},
        // {link:'https://www.google.com', icon: <Language />},
      ]
    },



],

};

