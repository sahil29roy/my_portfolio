const logotext = "SAHIL";
const meta = {
    title: "Sahil",
    description: "I’m Sahil _ Full stack devloper,currently studing in LPU",
};

const introdata = {
    title: "I’m Sahil",
    animated: {
        first: "I love coding",
        second: "I'm a Web Developer",
    },
    description: "I'm Sahil, a passionate web developer and a 2nd-year student at LPU, Jalandhar. Coding is my passion, and I love working on creative projects.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};


const dataabout = {
    title: "A Bit About Myself",
    aboutme: "I'm Sahil from Deoghar, currently pursuing my 2nd year at Lovely Professional University, Jalandhar. I specialize in web development and enjoy coding and solving technical challenges.",
};

const worktimeline = [{
        jobtitle: "Internship as a developer",
        where: "Briztech Infosystem,Ranchi",
        date: "Oct/2023 - nov/2023",
    },
    {
        jobtitle: "Designer at GetDev",
        where: "Remort",
        date: "March 2024",
    },
    
];

const skills = [{
        name: "Java",
        value: 90,
    },
    {
        name: "Mongodb",
        value: 60,
    },
    {
        name: "ExpressJs",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "NodeJs",
        value: 85,
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "I specialize in creating intuitive and responsive user interfaces using CSS frameworks like Bootstrap and Tailwind CSS. I also utilize tools like Canva to design visually appealing and user-friendly experiences.",
    },
    {
        title: "Web Development",
        description: "As a web developer proficient in the MERN stack (MongoDB, Express, React, Node.js), I build dynamic and efficient websites and web applications that focus on performance and scalability.",
    },
    {
        title: "WordPress Design",
        description: "I offer custom WordPress design services, creating tailored websites that meet the unique needs of clients, ensuring both functionality and an engaging user experience.",
    }
];


const dataportfolio = [{
        img: "../public/src/image.png",
        description: "Clone of Youtube,built using react.",
        link: "https://github.com/sahil29roy/YourTube",
    },
    {
        img: "https://github.com/sahil29roy/Video-Player/blob/main/public/video_player_model.png",
        description: "Video-player app (Backend project),Which has also functinality to upload video,comment,like,tweet and other functionality",
        link: "https://github.com/sahil29roy/Video-Player",
    },
    {
        img: "https://github.com/sahil29roy/currency-converter/blob/main/public/src/image.png",
        description: "Currency-convertor Built using react app which is used to convert any international currency.",
        link: "https://github.com/sahil29roy/currency-converter",
    },
];

const contactConfig = {
    YOUR_EMAIL: "sahil08roy@gmail.com",
    YOUR_FONE: "6206505126",
    description: "I'm Sahil, a passionate web developer and a 2nd-year student at LPU, Jalandhar. Coding is my passion, and I love working on creative projects. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
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