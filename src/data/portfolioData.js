import { Code, Server, Database, Globe, Layout, Cpu, Brain, ShieldAlert } from 'lucide-react';
import cloth from '../assets/cloth.png';
import dd from '../assets/dd.png';
import c from '../assets/crisiz.png';
import me from '../assets/me.jpg';
export const personalInfo = {
  name: "Gokulakrishnan S",
  role: "Software Developer",
  email: "sivalingamgokulakrishnan@gmail.com",
  phone: "9543896651",
  githubUsername: "GokulakrishnanSivalingam",
  portfolio: "https://gokuls.vercel.app",
  location: "Surapet, Chennai",
  image: me
};

export const skills = [
  {
    name: "Frontend Development",
    icon: Layout,
    description: "Building responsive web applications using React.js, HTML5, CSS3, and JavaScript."
  },
  {
    name: "Backend Development",
    icon: Server,
    description: "Developing REST APIs and scalable backend systems using Node.js and Express.js."
  },
  {
    name: "Database Management",
    icon: Database,
    description: "Working with MongoDB and SQL for efficient data storage and retrieval."
  },
  {
    name: "Full Stack MERN",
    icon: Globe,
    description: "Developing complete MERN stack applications with deployment support."
  },
  {
    name: "Clean Code & API Testing",
    icon: Code,
    description: "Writing maintainable code with Git, GitHub, and Postman API testing."
  },
  {
    name: "System & SDLC",
    icon: Cpu,
    description: "Understanding Agile workflows, SDLC, debugging, and bug reporting."
  },
];

export const projects = [
   {
    title: "Real-Time Disaster Alert System",
    description: "Developed a real-time disaster alert system using MERN stack with automated WhatsApp notifications using UltraMsg API before and during disasters.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "UltraMsg API"],
    live: "https://dms-wine-gamma.vercel.app/",
    github: "https://github.com/GokulakrishnanSivalingam/dms-frontend",
    image: c
  },
  {
    title: "Diabetic Detection System",
    description: "Built a machine learning-based diabetic detection system using Linear Regression with Flask backend and HTML frontend for real-time prediction.",
    tech: ["Python", "Flask", "Machine Learning", "Linear Regression", "HTML"],
    live: "https://diabetic-detection-1.onrender.com",
    github: "https://github.com/GokulakrishnanSivalingam/diabetic-detection",
    image: dd
  },
  {
    title: "Clothes E-Commerce Website",
    description: "Built and deployed a full-stack e-commerce platform using MERN stack with seamless product browsing, cart management, and secure payment integration using Razorpay API.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "Vercel"],
    live: "https://cloth-ecommerce-seven.vercel.app/",
    github: "https://github.com/GokulakrishnanSivalingam/cloth-ecom-site",
    image: cloth
  }
];

export const certificates = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2023",
    image: "https://img.sanishtech.com/u/eab09d95c352c21cddc5a92ae308cf2c.png"
  },
  {
    id: 2,
    title: "Enhance Reactive Applications with Advanced React",
    issuer: "Infosys Springboard",
    date: "2024",
    image: "https://img.sanishtech.com/u/630b08f68eefa8d8988779387edea534.jpg"
  },
  {
    id: 3,
    title: "Advanced robotics and cloud computing",
    issuer: "Velammal institution",
    date: "2023",
    image: "https://img.sanishtech.com/u/850184fe50287a7e931a94588357d407.jpg"
  }
];

export const experience = [
  {
    role: "MERN Stack Development Intern",
    company: "Klite Private Limited, Chennai",
    date: "Jun 2024",
    description: "Developed MERN applications, optimized REST APIs, improved system performance by 30%, and collaborated using Git & Agile."
  },
  {
    role: "Web Development In-plant Trainee",
    company: "CodeBind Technology, Chennai",
    date: "Nov 2024",
    description: "Built responsive websites using HTML, CSS, JavaScript and worked on UI/UX design with Figma."
  }
];