import {
  Code,
  Server,
  Database,
  Globe,
  Layout,
  Smartphone,
  Palette,
  Layers,
  Zap,
  Sparkles,
  ShieldCheck,
  Cpu,
  Terminal
} from 'lucide-react';
import cloth from '../assets/cloth.png';
import dd from '../assets/dd.png';
import c from '../assets/crisiz.png';
import me from '../assets/me.jpg';
import info from '../assets/info.jpg';
import nptel from '../assets/nptel.png';
import robo from '../assets/robo.jpg';
import movie from '../assets/movie.png';
import cal from '../assets/cal.png';

export const personalInfo = {
  name: "Gokulakrishnan S",
  shortName: "Gokul",
  role: "Software Developer & UI/UX Designer",
  tagline: "Crafting High-Performance Web Apps & Western-Grade Digital Experiences",
  bio: "Passionate developer and UI/UX craftsman specializing in responsive modern web applications, scalable MERN architectures, and fluid interactive animations.",
  email: "sivalingamgokulakrishnan@gmail.com",
  phone: "+91 95438 96651",
  githubUsername: "GokulakrishnanSivalingam",
  githubUrl: "https://github.com/GokulakrishnanSivalingam",
  portfolio: "https://gokuls.vercel.app",
  location: "Surapet, Chennai, India",
  timezone: "Asia/Kolkata",
  status: "Available for new projects",
  experienceYears: "2+",
  image: me
};

export const liveStats = {
  initialProfileViews: 4890,
  projectsCompleted: "12+",
  codeCommits: "1,450+",
  clientSatisfaction: "100%",
  cupsOfCoffee: "480+"
};

export const services = [
  {
    id: "web-design",
    category: "Web Design",
    title: "Web Design & Creative Frontend",
    icon: Layout,
    accent: "#10b981",
    tag: "Creative & Fast",
    description: "Designing high-conversion, responsive, and visually stunning web interfaces with GSAP animations, modern typography, and SEO-first architecture.",
    deliverables: [
      "Responsive & Mobile-First Web Design",
      "GSAP & Framer Motion Micro-interactions",
      "SEO Optimization & Core Web Vitals",
      "Pixel-Perfect Landing Pages & SPAs"
    ],
    techStack: ["React.js", "Next.js", "GSAP", "HTML5/CSS3", "JavaScript (ES6+)"]
  },
  {
    id: "app-dev",
    category: "App Dev",
    title: "Mobile & Web App Development",
    icon: Smartphone,
    accent: "#06b6d4",
    tag: "Cross-Platform",
    description: "Engineering fluid, native-feeling mobile and web applications with offline capabilities, seamless device responsiveness, and fast API integration.",
    deliverables: [
      "Cross-Platform App Development",
      "Progressive Web Apps (PWA)",
      "State Management & Offline Sync",
      "Push Notifications & API Pipelines"
    ],
    techStack: ["React Native", "PWA", "TailwindCSS", "REST APIs", "Vite"]
  },
  {
    id: "full-stack",
    category: "Full Stack",
    title: "Full-Stack MERN Architecture",
    icon: Server,
    accent: "#f59e0b",
    tag: "Scalable & Secure",
    description: "Developing robust backend systems, RESTful APIs, database schemas, authentication layers, and integrated payment gateways with high reliability.",
    deliverables: [
      "Scalable REST API Architecture",
      "Database Modeling (MongoDB / SQL)",
      "Secure Auth & Role-Based Access Control",
      "Payment Gateways & Webhooks (Razorpay)"
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Razorpay API", "JWT & Auth"]
  }
];

export const skills = [
  {
    name: "Frontend Development",
    icon: Layout,
    description: "Building responsive web applications using React.js, HTML5, modern CSS3, and JavaScript."
  },
  {
    name: "Backend Development",
    icon: Server,
    description: "Developing REST APIs and scalable backend systems using Node.js and Express.js."
  },
  {
    name: "Database Architecture",
    icon: Database,
    description: "Working with MongoDB and SQL for high-speed indexing and secure data storage."
  },
  {
    name: "Full Stack MERN",
    icon: Globe,
    description: "Developing complete end-to-end MERN stack applications with cloud deployment support."
  },
  {
    name: "UI/UX & Clean Code",
    icon: Code,
    description: "Architecting design systems, clean code standards, Git collaboration, and Postman API testing."
  },
  {
    name: "System & Performance",
    icon: Cpu,
    description: "Optimizing Core Web Vitals, fast caching, responsive layouts, and bug diagnosis."
  }
];

export const projects = [
  {
    id: "disaster-alert",
    title: "Real-Time Disaster Alert System",
    category: "Full-Stack",
    description:
      "A mission-critical disaster warning platform built with the MERN stack that delivers real-time disaster alerts and automated WhatsApp notifications before and during natural disasters.",
    featured: true,
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "UltraMsg API",
      "Vercel",
    ],
    live: "https://dms-wine-gamma.vercel.app/",
    github:
      "https://github.com/GokulakrishnanSivalingam/dms-frontend",
    image: c,
  },
 {
  id: "iniya-sweets",
  title: "Iniya — Sweets Store",
  category: "Full-Stack",
  description:
    "A premium modern sweets e-commerce website designed for showcasing traditional Indian sweets with an elegant visual experience, product browsing, and a seamless online shopping journey.",
  featured: true,
  tech: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "CSS3",
    "Razorpay",
    "Cloudinary",
    "E-Commerce",
  ],
  live: "iniyasweets.vercel.app",
  github: "https://github.com/GokulakrishnanSivalingam/iniya-sweets",
  image: "https://res.cloudinary.com/dnb5k6kpt/image/upload/v1787628568/sweet_jd4bd9.png",
},
  {
    id: "auralux",
    title: "Auralux — Premium Audio Store",
    category: "E-Commerce / Web Design",
    description:
      "A premium modern audio e-commerce experience designed for showcasing headphones, earphones, speakers, and wireless audio products with a strong visual-first shopping experience.",
    featured: true,
    tech: [
      "React",
      "Shopify",
      "JavaScript",
      "CSS3",
      "E-Commerce",
    ],
    live: "https://auraluxx.vercel.app/",
    github: "https://github.com/GokulakrishnanSivalingam/earphone-branding",
    image: "https://res.cloudinary.com/dnb5k6kpt/image/upload/v1787294092/auraluxx_uuu7zg.png",
  },

  {
    id: "a2-gold-ghee",
    title: "A2 Gold Ghee — Premium Brand Experience",
    category: "Web Design / Frontend",
    description:
      "A premium digital experience for an Indian A2 ghee brand combining traditional dairy heritage with a modern Western-style visual identity, interactive storytelling, and immersive animations.",
    featured: true,
    tech: [
      "React",
      "Vite",
      "GSAP",
      "ScrollTrigger",
      "Framer Motion",
      "CSS3",
    ],
    live: "https://a2-gold-ghee.vercel.app/",
    github:
      "https://github.com/GokulakrishnanSivalingam/a2-gold-ghee",
    image:"https://res.cloudinary.com/dnb5k6kpt/image/upload/v1787294088/a2-gold-ghee_ac3sxa.png",
  },

  {
    id: "finance-manager",
    title: "AI Personal Finance Manager",
    category: "Mobile App / AI",
    description:
      "An AI-powered personal finance mobile application for tracking transactions, managing budgets and goals, and interacting with an intelligent financial assistant.",
    featured: true,
    tech: [
      "React Native",
      "Expo",
      "Firebase",
      "Firestore",
      "Gemini AI",
    ],
    live: "#",
    github: "#",
    image: "https://res.cloudinary.com/dnb5k6kpt/image/upload/v1787294618/finiance_xjujmd.jpg",
  },
{
    id: "diabetic-detection",
    title: "Diabetic Detection ML Platform",
    category: "ML / AI",
    description:
      "A machine learning-based healthcare prediction platform with a Flask backend and responsive web interface for generating diabetes risk predictions from user-provided data.",
    featured: true,
    tech: [
      "Python",
      "Flask",
      "Machine Learning",
      "Linear Regression",
      "Render",
    ],
    live: "https://diabetic-detection-1.onrender.com",
    github:
      "https://github.com/GokulakrishnanSivalingam/diabetic-detection",
    image: dd,
  },

  {
    id: "cloth-ecommerce",
    title: "Modern Apparel E-Commerce Store",
    category: "Full-Stack",
    description:
      "A full-stack fashion e-commerce platform featuring product discovery, customer authentication, shopping cart functionality, and Razorpay-powered checkout.",
    featured: true,
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Vercel",
    ],
    live: "https://cloth-ecommerce-seven.vercel.app/",
    github:
      "https://github.com/GokulakrishnanSivalingam/cloth-ecom-site",
    image: cloth,
  },
  {
    id: "movie-streaming",
    title: "JetPlex — Movie Streaming Platform",
    category: "Web Design / Frontend",
    description:
      "A high-performance movie streaming web application featuring dynamic content categorization, fast media search, Cloudinary integration, and a sleek dark interface.",
    featured: false,
    tech: [
      "React",
      "Node.js",
      "Cloudinary",
      "CSS3",
      "Vercel",
    ],
    live: "https://jetplex.vercel.app/",
    github:
      "https://github.com/GokulakrishnanSivalingam/movie-stream",
    image: movie,
  },

  {
    id: "cgpa-calculator",
    title: "Interactive Academic CGPA Engine",
    category: "Web Design / Frontend",
    description:
      "An interactive academic calculation platform that allows students to calculate semester GPA and cumulative CGPA while providing instant academic performance insights.",
    featured: false,
    tech: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "GitHub Pages",
    ],
    live:
      "https://gokulakrishnansivalingam.github.io/cgpa-calculator/loginpage.html",
    github:
      "https://github.com/GokulakrishnanSivalingam/cgpa-calculator",
    image: cal,
  },
];

export const blogs = [
  {
    id: "western-web-design-craft",
    title: "Mastering Western-Grade Web Aesthetics: Micro-Interactions, Typography & GSAP",
    category: "Web Design",
    readTime: "4 min read",
    date: "Aug 2024",
    excerpt: "How top Western digital agencies combine obsidian dark palettes, magnetic cursors, fluid GSAP timelines, and editorial typography to create unforgettable websites.",
    views: "1,240",
    likes: 89,
    content: `
### What Defines Modern Western Web Aesthetics?

In modern web craftsmanship, the difference between a generic template and an award-winning digital experience comes down to intentionality in three key areas:

1. **Editorial Typography Hierarchy**: High contrast pairings between expressive geometric display fonts (like *Space Grotesk* and *Syne*) and clean, readable body typefaces (like *Plus Jakarta Sans*).
2. **Atmospheric Lighting & Glassmorphism**: Moving away from flat gray backgrounds into deep obsidian (#07080a) layered with subtle ambient radial glow meshes and 1px crisp borders.
3. **Motion with Intent (GSAP & Spring Physics)**: Micro-animations should never distract; they should orient the user. Magnetic button hover states, staggered title reveals, and subtle spotlight card effects elevate the feel into luxury software.

\`\`\`javascript
// Example: Smooth Staggered Text Mask Reveal with GSAP
gsap.from(".hero-title-line", {
  y: 60,
  opacity: 0,
  duration: 1.1,
  stagger: 0.12,
  ease: "power4.out"
});
\`\`\`

#### Key Takeaway
Invest in deliberate micro-details: an interactive cursor follower, custom scrollbar, and crisp borders transform a standard portfolio into a premier showcase.
    `
  },
  {
    id: "scaling-mern-architecture",
    title: "Scaling Full-Stack MERN Architectures: From Indexing to Resilient Deployment",
    category: "Full Stack",
    readTime: "6 min read",
    date: "Jul 2024",
    excerpt: "Best practices for architecting maintainable Node.js & Express REST APIs, compound MongoDB indexing, and secure token workflows in high-traffic applications.",
    views: "2,180",
    likes: 142,
    content: `
### Building Production-Grade MERN Backends

When moving from prototype to production, application performance heavily depends on clean database queries, stateless auth, and robust error handling.

#### 1. Compound Indexing in MongoDB
Without proper indexing, queries perform full collection scans ($O(N)$). By indexing high-frequency filter keys such as \`userId\` and \`createdAt\`, query execution times drop by over 80%.

\`\`\`javascript
// Mongoose compound index definition
orderSchema.index({ customerId: 1, status: 1, createdAt: -1 });
\`\`\`

#### 2. Clean Architecture & Middleware Pipelines
- Isolate business logic in separate service layers rather than cluttering route handlers.
- Use centralized rate limiting and Joi/Zod request validation to guard endpoints.
- Secure JWT credentials in HttpOnly cookies with CSRF tokens.

#### 3. Zero-Downtime Deployment
Deploying backend microservices on cloud environments with automatic health checks and connection pooling ensures high uptime.
    `
  },
  {
    id: "figma-design-systems",
    title: "From Wireframe to Reality: Building High-Fidelity UI/UX Systems in Figma",
    category: "UI/UX Design",
    readTime: "5 min read",
    date: "Jun 2024",
    excerpt: "Step-by-step methodology for setting up scalable design tokens, auto-layout grids, accessible contrast ratios, and interactive component libraries.",
    views: "1,650",
    likes: 110,
    content: `
### The Power of Systematic UI/UX Design

A great user interface is engineered before the first line of code is written. Establishing clear design tokens in Figma guarantees visual coherence across every viewport.

#### Core Pillars of Modern Design Systems:
- **Spacing Scale (4pt/8pt Grid)**: Eliminates guesswork in layout padding, margins, and gaps.
- **Color Variables with Semantic Meaning**: Define colors by function (\`--surface-primary\`, \`--accent-glow\`, \`--text-muted\`) instead of arbitrary hex codes.
- **Micro-Interactions**: Prototyping realistic button states (default, hover, pressed, disabled) in Figma accelerates frontend development by 2x.

> "Good design is as little design as possible. Great design makes the complex feel effortless."
    `
  },
  {
    id: "real-time-alert-systems",
    title: "Engineering Real-Time Emergency Notification Systems with Node.js & Webhooks",
    category: "Full Stack",
    readTime: "7 min read",
    date: "May 2024",
    excerpt: "Architectural insights from developing an automated disaster warning platform with instant WhatsApp and SMS broadcast pipelines.",
    views: "3,410",
    likes: 215,
    content: `
### Critical Systems Design for Immediate Alerts

In emergency disaster response platforms, notification latency directly impacts human safety. 

#### Architecture Highlights:
1. **Automated Trigger Pipeline**: Ingesting meteorology sensor feeds and queueing outgoing notifications.
2. **WhatsApp API Integration via UltraMsg**: Automated dispatch of localized safety guidelines and evacuation protocols.
3. **Failover & Retry Queues**: Implementing exponential backoff logic so network congestion doesn't drop vital alerts.

\`\`\`javascript
// Exponential backoff retry handler
async function dispatchWithRetry(payload, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await sendAlertWebhook(payload);
    } catch (err) {
      if (attempt === maxAttempts) throw err;
      await new Promise(res => setTimeout(res, Math.pow(2, attempt) * 1000));
    }
  }
}
\`\`\`
    `
  }
];

export const certificates = [
  {
    id: 1,
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "2023",
    badge: "Gold Standard",
    image: nptel
  },
  {
    id: 2,
    title: "Enhance Reactive Applications with Advanced React",
    issuer: "Infosys Springboard",
    date: "2024",
    badge: "Certified Specialist",
    image: info
  },
  {
    id: 3,
    title: "Advanced Robotics and Cloud Computing",
    issuer: "Velammal Institution",
    date: "2023",
    badge: "Cloud Computing",
    image: robo
  }
];

export const experience = [
  {
    role: "Agentic AI Development Intern",
    company: "OneSoft Technologies",
    date: "May 2026 - Aug 2026",
    type: "Internship",
    description:
      "Developing AI-powered applications and agentic workflows using LLMs, RAG, LangChain, and LangGraph. Built intelligent workflows integrating retrieval, tool calling, and multi-step agent orchestration.",
    highlights: [
      "Agentic AI & LLMs",
      "RAG & LangChain",
      "LangGraph & AI Workflows"
    ]
  },
  {
    role: "MERN Stack Development Intern",
    company: "Klite Private Limited, Chennai",
    date: "Nov 2024 - Dec 2024",
    type: "Internship",
    description:
      "Engineered scalable MERN stack web modules, optimized REST API performance by 30%, resolved database bottlenecks, and participated in Agile sprint reviews.",
    highlights: [
      "30% Performance Boost",
      "MERN Stack Optimization",
      "Agile & Git Workflows"
    ]
  }
  
];
