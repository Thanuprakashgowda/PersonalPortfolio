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
    objective: "Information Science and Technology engineering student with a growing interest in full stack development and data analytics. Seeking opportunities to apply programming fundamentals, deployment practices, and analytical thinking while continuously learning and building applications on vibe coding platforms.",
    resumeUrl: "https://drive.google.com/file/d/1F_V3tamNhjRioOeG1thKeUfDp1jeZDre/view?usp=sharing"
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) – Information Science & Technology",
      institution: "Canara Engineering College, Mangaluru",
      graduation: "Expected Graduation: 2027",
      score: "CGPA: 7.76"
    },
    {
      degree: "Pre-University (PUC)",
      institution: "Toppers PU College, Holenarasipura",
      graduation: "Completed",
      score: "86.33%"
    },
    {
      degree: "SSLC",
      institution: "Adarsha Vidyalaya",
      graduation: "Completed",
      score: "91.36%"
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
      items: ["Git", "VS Code", "Arduino IDE", "Streamlit", "Antigravity", "Vercel", "Postman", "Tableau", "Power BI"]
    }
  ],
  projects: [
    {
      title: "HostelHub (Runner-Up)",
      technologies: ["Python", "Flask", "MySQL", "REST APIs", "Postman"],
      description: [
        "Developed and presented a completely functional backend system during the CEATHERION 2025 24-hour hackathon.",
        "Created a robust RESTful API with Flask and MySQL to solve real-world hostel resource allocation and management routing.",
        "Demonstrated working functionality accurately under extreme time constraints."
      ],
      githubLink: "https://github.com/Thanuprakashgowda", // Placeholder
      demoLink: "" // Placeholder
    },
    {
      title: "Cloud SMS — AI-Powered Management System",
      technologies: ["Node.js", "Express.js", "MySQL (TiDB)", "Gemini AI", "Chart.js", "JWT", "Vercel"],
      description: [
        "Architected an advanced multi-tenant student management system operating on a cloud-hosted MySQL TiDB cluster.",
        "Implemented secure JWT role-based access control and generated dynamic AI-powered insights using the Gemini API.",
        "Constructed intuitive reporting dashboards using Chart.js to visually map administrative data."
      ],
      githubLink: "https://github.com/Thanuprakashgowda", // Placeholder
      demoLink: "" // Placeholder
    },
    {
      title: "IoT-Based Food Freshness Monitoring System",
      technologies: ["Arduino", "Sensors", "Streamlit"],
      description: [
        "Developed a low-cost embedded hardware system to continuously evaluate raw food freshness based on dynamic environmental sensor metrics.",
        "Engineered a real-time tracking interface utilizing Python and Streamlit to display ongoing readings seamlessly."
      ],
      githubLink: "https://github.com/Thanuprakashgowda", // Placeholder
      demoLink: "" // Placeholder
    },
    {
      title: "DigiBouquet",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Postgres", "Antigravity"],
      description: [
        "Engineered a dynamic, highly responsive modern web application focused on optimal UI/UX standards.",
        "Leveraged Vercel Postgres to rapidly implement database abstraction layers for complex data persistence workflows.",
        "Achieved near-instant deployment cycles using continuous delivery and strict TypeScript adherence."
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
    "Runner-Up in the Full Stack Development domain at CEATHERION 2025 – 24-hour Hackathon, Canara Engineering College (Nov 2025)",
    "Actively practicing Fundamentals of Computer Science on online platforms",
    "Participated in technical mini-project evaluations and presentations"
  ],
  languages: ["English", "Kannada", "Hindi"]
};
