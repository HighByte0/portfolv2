const logotext = "Hamza Byhardi";
import img1 from './pages/hamzaPhotojpg.jpg';
import cuis from './pages/cuis.png';
import job from './pages/image.png';
import git from './pages/th (1).jpeg';

const meta = {
    title: "Hamza Byahrdi",
    description: "Full stack devloper",
};

const introdata = {
    title: "I’m Hamza Byahrdi",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "",
    your_img_url: img1,
};

const dataabout = {
    title: "about about my self",
    aboutme: "Currently pursuing a Master's in Technology with a specialization in Computer Engineering, I am passionate about new technologies and programming. Dynamic, curious, and highly adaptable, I am always looking for opportunities to apply my theoretical knowledge and contribute to innovative projects. My goal is to join a stimulating environment where I can further develop my skills and contribute to ambitious, technology-driven initiatives.",
};
const worktimeline = [{
        jobtitle: "fullStack(Laravel&&React)",
        where: "Mahitel",
        date: "3mois",
    },
  
];

const skills = [{
        name: "Python",
        value: 90,
    },
 
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "Laravel",
        value: 90,
    },
  
];

const services = [{
        title: "Master MIAGE  Méthodes Informatiques Appliquées à la Gestion des Entreprises  |2024-2026",
        description: "SupTechnology",
    },
    {
        title: "2024 License: Développent web et mobile. À Université du Littoral Côted'Opale.",
        description: "SupTechnology",
    },
   
];

const dataportfolio = [{
        img: cuis,
        description: "Laravel & MySQL & boostsrap & Flutter Mettre en place une application web et mobile qui permet aux mamans de préparer des repas faits maison et de générer des profits, tout en permettant aux consommateurs de manger des nourritures saines.",
        link: "https://github.com/HighByte0/cuisFlut",
    },
    {
        img:git ,
        description: "More Project",
        link: "https://github.com/HighByte0/",
    },
    {
        img: job,
        description: " Création de plateforme de recrutement et plateforme de gestion des candidatures en ligne.Développement avec React, Laravel, Bootstrap, et intégration de SMTP pour les envois d'emails.",
        link: "https://github.com/HighByte0/samki",
    },
   
  
];

const contactConfig = {
    YOUR_EMAIL: "byhardihamza@gmail.com",
    YOUR_FONE: "0771193283",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/HighByte0",

    linkedin: "https://www.linkedin.com/in/hamza-byhardi/",
   
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};