import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Language, WebOutlined, YouTube } from "@material-ui/icons";

export default {
    name:'Akrem BELDI',
    title:'Développeur Full-Stack',
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
          title: 'Job 1',
          date: 'Aout 2020 - Present',
          description: "hsdbfsjdfn skdnfsfnm skldfnsmj kdfsmkdfnm skjdfskj dfbsmkjd fbsmkf djbskj dfbs kjfdbs mfbs",
        },
        {
            title:'Job 2',
            date:'Aout 2019 - Present',
            description:"hsdbfsjdfn skdnfsfnm skldfnsmj kdfsmkdfnm skjdfskj dfbsmkjd fbsmkf djbskj dfbs kjfdbs mfbs",
          },
          {
            title:'Job 3',
            date:'Aout 2018 - Present',
            description:"hsdbfsjdfn skdnfsfnm skldfnsmj kdfsmkdfnm skjdfskj dfbsmkjd fbsmkf djbskj dfbs kjfdbs mfbs",
          },
         
    ],

    
    educations: [
        {
          title:'education 1',
          date:'Aout 2020 - Present',
          description:"hsdbfsjdfn skdnfsfnm skldfnsmj kdfsmkdfnm skjdfskj dfbsmkjd fbsmkf djbskj dfbs kjfdbs mfbs",
        },
        {
            title:'education 2',
            date:'Aout 2019 - Present',
            description:"hsdbfsjdfn skdnfsfnm skldfnsmj kdfsmkdfnm skjdfskj dfbsmkjd fbsmkf djbskj dfbs kjfdbs mfbs",
          },
          {
            title:'education 3',
            date:'Aout 2018 - Present',
            description:"hsdbfsjdfn skdnfsfnm skldfnsmj kdfsmkdfnm skjdfskj dfbsmkjd fbsmkf djbskj dfbs kjfdbs mfbs",
          },
         
    ],

    services: [
      {
        title:'Intégrateur web',
        description:'dsfbjd fnsmkdfnslk dfnsmofd nsmlkdfnsm klnfdmsk ldnfmsl fnsld',
        icon: <WebOutlined />
      },
      {
        title:'Développeur Fron-end',
        description:'dsfbjd fnsmkdfnslk dfnsmofd nsmlkdfnsm klnfdmsk ldnfmsl fnsld',
        icon: <WebOutlined />
      },
      {
        title:'WordPress',
        description:'dsfbjd fnsmkdfnslk dfnsmofd nsmlkdfnsm klnfdmsk ldnfmsl fnsld',
        icon: <WebOutlined />
      },
 ],

 skills: [
  {
    title:'Intégrateur web',
    description:[
      "ReactJS",
      "Js",
      "Wordpress",
      "Woocommerce",
    ],
  },
  {
    title:'Développeur Fron-end',
    description:[
      "ReactJs",
      "Js",
      "Wordpress",
      "Woocommerce",
    ],
  },
  {
    title:'WordPress',
    description:[
      "ReactJs",
      "Js",
      "Wordpress",
      "Woocommerce",
    ],
  },
  {
    title:'WordPress',
    description:[
      "ReactJs",
      "Js",
      "Wordpress",
      "Woocommerce",
    ],
  },

],

projects :[
    {
      tag:'React',
      image:'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg',
      title:'React Project 1',
      caption:'a short description',
      description:'thbfsjndf sdfsdf sfsdsdf sdf ffffff fffffff fffff',
      links:[
        {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'React',
      image:'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg',
      title:'React Project 2',
      caption:'a short description',
      description:'thbfsjndf sdfsdf sfsdsdf sdf ffffff fffffff fffff',
      links:[
        {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Wordpress',
      image:'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg',
      title:'Wordpress Project 2',
      caption:'a short description',
      description:'thbfsjndf sdfsdf sfsdsdf sdf ffffff ffffff fffff',
      links:[
        {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://www.google.com', icon: <Language />},
      ]
    },


    {
      tag:'Logo&Flyer',
      image:'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg',
      title:'Logo&Flyer Project 3',
      caption:'a short description',
      description:'thbfsjndf sdfsdf sfsdsdf  fffff ffffff ffffffff',
      links:[
        {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://www.google.com', icon: <Language />},
      ]
    },

    {
      tag:'Logo&Flyer',
      image:'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-abstract-80s-trendy-geometric-background-neon-colors-image_304908.jpg',
      title:'Logo&Flyer Project 4',
      caption:'a short description',
      description:'thbfsjndf sdfsdf sfsdsdf sdf fffff ffffff fffffff',
      links:[
        {link:'https://www.google.com', icon: <YouTube />},
        {link:'https://www.google.com', icon: <GitHubIcon />},
        {link:'https://www.google.com', icon: <Language />},
      ]
    },


],

};

