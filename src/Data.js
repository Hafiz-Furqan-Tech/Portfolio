import { SiCss3 } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";

const Data = {
  Skills: [
    {
      skill: "HTML",
      icon: IoCodeSlash,
      para: "Expert in crafting semantic and responsive web structures using modern HTML5 best practices.",
    },
    {
      skill: "CSS",
      icon: SiCss3,
      para: "Proficient in styling web pages with CSS3, utilizing Flexbox, Grid, and modern design methods.",
    },
    {
      skill: "Bootstrap",
      icon: FaBootstrap,
      para: "Efficient in designing responsive, mobile-first websites using Bootstrap’s powerful toolkit.",
    },
    {
      skill: "Tailwind CSS",
      icon: RiTailwindCssFill,
      para: "Adept at using Tailwind CSS for utility-first styling and rapid UI development processes.",
    },
    {
      skill: "JavaScript",
      icon: FaJsSquare,
      para: "Skilled in creating interactive and dynamic web experiences using modern JavaScript (ES6+).",
    },
    {
      skill: "React",
      icon: FaReact,
      para: "Experienced in building scalable and dynamic user interfaces with React and React Hooks.",
    },
    {
      skill: "Firebase",
      icon: IoLogoFirebase,
      para: "Proficient in Firebase integration for authentication, database management, and app hosting.",
    },
    {
      skill: "Redux Toolkit",
      icon: SiRedux,
      para: "Experienced in managing state efficiently using Redux Toolkit with slices and middleware.",
    },
    {
      skill: "MUI (Material-UI)",
      icon: SiMui,
      para: "Proficient in building modern, responsive UI designs using MUI’s pre-built components.",
    },
    {
      skill: "Git and GitHub",
      icon: FaGitAlt,
      para: "Skilled in version control using Git and repository hosting and collaboration on GitHub.",
    },
  ],
  Projects: [
    {
      image: "/Images/Projects/ChatBot.png",
      name: "Ai ChatBot",
      para: "Intelligent assistant for seamless, real-time communication and problem-solving.",
      link: "https://github.com/Hafiz-Muhammad-Furqan/Ai-Interviewer-and-ChatBot",
      demo: "https://furqan-ai-interviewer-chatbot.netlify.app/",
    },
    {
      image: "/Images/Projects/interviewer.png",
      name: "Ai Interviewer",
      para: "Smart tool for generating, analyzing, and conducting AI-driven interviews.",
      link: "https://github.com/Hafiz-Muhammad-Furqan/Ai-Interviewer-and-ChatBot",
      demo: "https://furqan-ai-interviewer-chatbot.netlify.app/interview",
    },
    {
      image: "/Images/Projects/Gemini.png",
      name: "Gemini Clone",
      para: "An AI-powered chatbot offering smart, real-time assistance and seamless conversational support.",
      link: "https://github.com/Hafiz-Muhammad-Furqan/Gemini-Clone",
      demo: "https://hafiz-furqan-gemini.netlify.app",
    },
    {
      image: "/Images/Projects/Todoapp.png",
      name: "Todo App",
      para: "A simple and efficient app to manage tasks, set priorities, and track progress.",
      link: "https://github.com/Hafiz-Muhammad-Furqan/Todo-App",
      demo: "https://hafiz-furqan-todoapp.netlify.app",
    },
    {
      image: "/Images/Projects/weatherapp.png",
      name: "Weather App",
      para: "Real-time weather updates with forecasts, location-based insights, and user-friendly interface.",
      link: "https://github.com/Hafiz-Muhammad-Furqan/Weather_App",
      demo: "https://furqan-tect-weatherapp.netlify.app",
    },
  ],
  Reviews: [
    {
      image: "/Images/Avatars/avatar-1.png",
      feedback:
        "Muhammad Furqan delivered the project on time, exceeding expectations with great attention to detail.",
      fName: "Dianne Russel",
      company: "Starbucks",
    },
    {
      image: "/Images/Avatars/avatar-2.png",
      feedback:
        "Excellent work! Highly professional and always met deadlines with top-notch quality.",
      fName: "Kristin Watson",
      company: "Louis Vuitton",
    },
    {
      image: "/Images/Avatars/avatar-3.png",
      feedback:
        "Great experience working with Muhammad Furqan. Delivered high-quality work and communicated effectively throughout.",
      fName: "Kathryn Murphy",
      company: "McDonald's",
    },
  ],
};

export default Data;
