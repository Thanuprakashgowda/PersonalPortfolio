// Data extracted from the provided resume
import { ReactNode } from "react";

export const portfolioData = {
  personalInfo: {
    name: "Thanuprakash Gowda",
    location: "Karnataka, India",
    phone: "7204821605",
    email: "thanuprakashgowda13@gmail.com",
    linkedin: "www.linkedin.com/in/thanuprakash-gowda",
    github: "github.com/Thanuprakashgowda",
    role: "Information Science & Technology Student",
    objective: "Information Science and Technology engineering student with a growing interest in cloud computing and data analytics. Seeking opportunities to apply cloud fundamentals, deployment practices, and analytical thinking while continuously learning and strengthening practical technical skills.",
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) – Information Science & Technology",
      institution: "Canara Engineering College, Karnataka",
      graduation: "Expected Graduation: 2027",
      sgpa: [
        { semester: "Sem 1", score: 6.73 },
        { semester: "Sem 2", score: 7.45 },
        { semester: "Sem 3", score: 7.43 },
        { semester: "Sem 4", score: 8.24 },
        { semester: "Sem 5", score: 8.95 },
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "C", "Python (Basic)", "LaTeX (Basic)"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Databases",
      items: ["SQL (Basic)", "MongoDB (Basic)"]
    },
    {
      category: "Core Concepts",
      items: ["DBMS", "Operating Systems (Basics)", "Computer Networks (Basics)", "Cloud Computing Fundamentals"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Arduino IDE", "Streamlit", "Antigravity", "Vercel", "Postman"]
    }
  ],
  projects: [
    {
      title: "Cloud-Based Student Management System",
      technologies: ["Node.js", "Express.js", "MySQL (AWS RDS)", "HTML", "CSS", "JavaScript"],
      description: [
        "Developed a full-stack student management system with a cloud-hosted MySQL database on AWS RDS.",
        "Designed RESTful APIs and relational schema to manage students, departments, courses, and enrollments with complete CRUD operations.",
        "Built a responsive web dashboard and tested backend endpoints using Postman following clean code architecture."
      ],
      githubLink: "https://github.com/Thanuprakashgowda", // Placeholder
      demoLink: "" // Placeholder
    },
    {
      title: "Banking Chatbot Application",
      technologies: ["Python", "Flask"],
      description: [
        "Designed and developed a chatbot to handle basic banking-related user queries.",
        "Implemented backend logic using Flask for request handling and responses."
      ],
      githubLink: "https://github.com/Thanuprakashgowda", // Placeholder
      demoLink: "" // Placeholder
    },
    {
      title: "IoT-Based Food Freshness Monitoring System",
      technologies: ["Arduino", "Sensors", "Streamlit"],
      description: [
        "Developed a low-cost system to assess fruit and vegetable freshness using sensor data.",
        "Displayed real-time freshness levels through a web-based dashboard."
      ],
      githubLink: "https://github.com/Thanuprakashgowda", // Placeholder
      demoLink: "" // Placeholder
    },
    {
      title: "Akshara – Bilingual Blogging Platform",
      technologies: ["Antigravity Platform", "Next.js", "MongoDB", "Tailwind CSS"],
      description: [
        "Built and deployed a bilingual (English–Kannada) blogging platform using the Antigravity development platform with Next.js architecture.",
        "Configured content models, authentication, and admin dashboard for post management including image uploads and rich text editing.",
        "Customized UI, dark/light theme, and SEO settings to improve accessibility and performance."
      ],
      githubLink: "https://github.com/Thanuprakashgowda", // Placeholder
      demoLink: "" // Placeholder
    }
  ],
  certifications: [
    "NPTEL – Programming in Java (Elite), IIT Kharagpur, Jan–Apr 2025",
    "Introduction to MongoDB – Certification, 2025 (Topics: NoSQL concepts, CRUD operations, data modeling, aggregation framework, and indexing for performance optimization.)",
    "Self-learning through online platforms"
  ],
  achievements: [
    "Runner-Up in the Full Stack Development domain at CEATHERION 2025 – 24-hour Hackathon, Canara Engineering College (Nov 2025); developed and presented a working full-stack solution under time constraints.",
    "Actively practicing Fundamentals of Computer Science on online platforms",
    "Participated in technical mini-project evaluations and presentations"
  ],
  languages: ["English", "Kannada", "Hindi"]
};
