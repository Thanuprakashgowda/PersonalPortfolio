// Data extracted from the provided resume
import { ReactNode } from "react";

export const portfolioData = {
  personalInfo: {
    name: "Thanuprakash Gowda",
    location: "Hassan, Karnataka, India",
    phone: "7204821605",
    email: "thanuprakashgowda13@gmail.com",
    linkedin: "www.linkedin.com/in/thanuprakash-gowda",
    github: "github.com/Thanuprakashgowda",
    role: "Information Science & Technology Student",
    objective: "Information Science and Technology engineering student with a growing interest in full stack development and data analytics. Seeking opportunities to apply programming fundamentals, deployment practices, and analytical thinking while continuously learning and building applications on vibe coding platforms.",
    resumeUrl: "https://drive.google.com/file/d/1veYg97Qel5x-lpKULWxcjnWUOz4ycG9H/view?usp=sharing"
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
      institution: "Adarsha Vidyalaya,Holenarasipura",
      graduation: "Completed",
      score: "91.36%"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "C", "Python ", "LaTeX"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Databases",
      items: ["SQL", "MongoDB"]
    },
    {
      category: "Core Concepts",
      items: ["DBMS", "Operating Systems", "Computer Networks", "Cloud Computing Fundamentals", "Data structures&algorithms", "Machine Learning", "Theory of computation"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Arduino IDE", "Antigravity", "Vercel", "Postman", "Tableau", "Power BI"]
    }
  ],
  projects: [
    {
      title: "Monsoon ML: Indian Rainfall Predictor",
      technologies: ["Python", "scikit-learn", "XGBoost", "pandas", "numpy", "Streamlit", "Plotly", "Folium"],
      description: [
        "Developed an end-to-end machine learning pipeline to predict monthly rainfall across 36 meteorological subdivisions in India.",
        "Engineered advanced features including lag variables (T-1, T-2, T-3), rolling statistics, and seasonal Fourier transformations to capture monsoon patterns.",
        "Built ensemble models using Random Forest and XGBoost to model complex non-linear climate relationships.",
        "Designed and deployed an interactive Streamlit dashboard with geospatial visualization, feature importance insights, and real-time prediction interface."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/monsoon-ml",
      demoLink: "https://monsoonprediction.streamlit.app/"
    },
    {
      title: "HostelHub (Runner-Up)",
      technologies: ["Python", "Flask", "MySQL", "REST APIs", "Postman"],
      description: [
        "Developed and presented a completely functional backend system during the CEATHERION 2025 24-hour hackathon.",
        "Created a robust RESTful API with Flask and MySQL to solve real-world hostel resource allocation and management routing.",
        "Demonstrated working functionality accurately under extreme time constraints."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/HSH", // Placeholder
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
      githubLink: "https://github.com/Thanuprakashgowda/Cloud-management-system", // Placeholder
      demoLink: "https://cloudmanagementsystem.vercel.app/" // Placeholder
    },
    {
      title: "IoT-Based Food Freshness Monitoring System",
      technologies: ["Arduino", "Sensors", "Streamlit"],
      description: [
        "Developed a low-cost embedded hardware system to continuously evaluate raw food freshness based on dynamic environmental sensor metrics.",
        "Engineered a real-time tracking interface utilizing Python and Streamlit to display ongoing readings seamlessly."
      ],
    },
    {
      title: "DigiBouquet",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Postgres", "Antigravity"],
      description: [
        "Engineered a dynamic, highly responsive modern web application focused on optimal UI/UX standards.",
        "Leveraged Vercel Postgres to rapidly implement database abstraction layers for complex data persistence workflows.",
        "Achieved near-instant deployment cycles using continuous delivery and strict TypeScript adherence."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/digibouquet", // Placeholder
      demoLink: "https://pocketpetals.vercel.app/" // Placeholder
    },
    {
      title: "Banking Chatbot Application",
      technologies: ["Python", "Flask"],
      description: [
        "Designed and developed a chatbot to handle basic banking-related user queries.",
        "Implemented backend logic using Flask for request handling and responses."
      ],
    },
    {
      title: "Akshara – Bilingual Blogging Platform",
      technologies: ["Antigravity Platform", "Next.js", "MongoDB", "Tailwind CSS"],
      description: [
        "Built and deployed a bilingual (English–Kannada) blogging platform using the Antigravity development platform with Next.js architecture.",
        "Configured content models, authentication, and admin dashboard for post management including image uploads and rich text editing.",
        "Customized UI, dark/light theme, and SEO settings to improve accessibility and performance."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Akshara", // Placeholder
      demoLink: "" // Placeholder
    }
  ],
  certifications: [
    {
      name: "NPTEL – Programming in Java (Elite), IIT Kharagpur, Jan–Apr 2025",
      link: "https://drive.google.com/file/d/19pnkPL7RK0aZlmA85zqO_nn__sNagkgK/view"
    },
    {
      name: "Introduction to MongoDB – Certification, 2025 (Topics: NoSQL concepts, CRUD operations, data modeling, aggregation framework, and indexing for performance optimization.)",
      link: "https://learn.mongodb.com/c/Fw-wdPbHTOSrwassuwPbSw"
    },
    {
      name: "EF SET B2 English",
      link: "https://cert.efset.org/DnMbX2"
    },
    {
      name: "Google Prompting Essentials (Badge)",
      link: "https://www.credly.com/badges/e88688bd-c62a-4e5b-ab17-8e2504c45d4d/linked_in_profile"
    },
  ],
  achievements: [
    "Runner-Up in the Full Stack Development domain at CEATHERION 2025 – 24-hour Hackathon, Canara Engineering College (Nov 2025)",
    "Regional Finalist TCS TechBytes 2026 (National Level Technology Quiz)",
    "Actively participated in Aetherion26 during AAKRITI 2026, a National Level Techno Cultural Fest at Canara Engineering College ",
    "Actively practicing Fundamentals of Computer Science on online platforms",
    "Participated in technical mini-project evaluations and presentations"
  ],
  languages: ["English", "Kannada", "Hindi"]
};
