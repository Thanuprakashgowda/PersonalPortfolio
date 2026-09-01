// Data extracted from resume and portfolio details

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduation: string;
  score?: string;
  coursework?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  technologies: string[];
  description: string[];
  githubLink?: string;
  demoLink?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  date?: string;
  link?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Thanuprakash Gowda",
    location: "Holenarasipura / Hassan, Karnataka, India",
    phone: "+91 7204821605",
    email: "thanuprakashgowda13@gmail.com",
    linkedin: "https://www.linkedin.com/in/thanuprakash-gowda",
    github: "https://github.com/Thanuprakashgowda",
    role: "Information Science & Engineering Student",
    objective: "Final-year Information Science and Engineering student with hands-on experience building full-stack applications, AI-enabled systems, REST APIs, and machine learning solutions. Skilled in Python, Java, SQL, Flask, Next.js, Node.js, Express.js, MySQL, MongoDB, Scikit-learn, Gemini AI, Power BI, Tableau, and Vercel. Experienced in AI model evaluation, backend development, ML decision-support systems, and rapid AI-assisted development (vibe coding).",
    resumeUrl: "https://drive.google.com/file/d/1AaVEWMJ2wFvAhZLdR5XyW5rsi3NwOTAg/view?usp=drive_link"
  },
  experience: [
    {
      role: "Freelance AI Trainer",
      company: "Outlier AI",
      period: "Jun 2026 – Aug 2026",
      location: "Remote",
      description: [
        "Evaluated and refined AI model outputs for quality, accuracy, logical reasoning, and linguistic/policy compliance using structured guidelines.",
        "Performed data validation, anomaly detection, quality assurance, and documented findings to improve AI model performance.",
        "Maintained high reporting accuracy, productivity, and rigorous evaluation standards across diverse domain prompts."
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) Information Science & Engineering",
      institution: "Canara Engineering College, Mangaluru, Karnataka",
      graduation: "2023 – 2027 (Expected)",
      score: "CGPA: 7.92 / 10",
      coursework: [
        "Data Structures & Algorithms",
        "Artificial Intelligence",
        "Machine Learning",
        "Cloud Computing & Security",
        "DBMS",
        "Computer Networks",
        "Operating Systems",
        "Object-Oriented Programming (OOP)"
      ]
    },
    {
      degree: "Pre-University Course (PUC) – PCMB",
      institution: "Toppers PU College, Holenarasipura",
      graduation: "2021 – 2023",
      score: "86.33%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Adarsha Vidyalaya, Holenarasipura",
      graduation: "Completed 2021",
      score: "91.36%"
    }
  ] as EducationItem[],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "SQL", "C", "JavaScript", "TypeScript", "LaTeX"]
    },
    {
      category: "Frameworks & Web Development",
      items: ["Next.js 15", "Flask", "Node.js", "Express.js", "REST APIs", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "AI & Machine Learning",
      items: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Gemini AI", "Claude AI", "RAG", "Prompt Engineering", "AI Model Evaluation", "AI-Assisted Development (vibe coding)"]
    },
    {
      category: "Databases & Cloud",
      items: ["MySQL", "MongoDB", "Vercel Postgres", "TiDB", "Vercel"]
    },
    {
      category: "Analytics & Business Intelligence",
      items: ["Power BI", "Tableau", "Excel", "Data Modeling", "Exploratory Data Analysis (EDA)", "Data Validation", "Dashboard Development"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Postman", "VS Code", "Google AI Studio", "Arduino IDE", "Antigravity"]
    },
    {
      category: "Core Computer Science",
      items: ["Data Structures & Algorithms (DSA)", "Database Management Systems (DBMS)", "Operating Systems", "Computer Networks", "Cloud Computing & Security", "OOP"]
    },
    {
      category: "Soft Skills",
      items: ["Problem-solving", "Teamwork & Collaboration", "Communication", "Time Management", "Adaptability & Flexibility", "Innovation & Continuous Learning"]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "Cloud SMS – AI-Powered Management System",
      technologies: ["Node.js", "Express.js", "MySQL / TiDB", "Gemini AI", "JWT", "Vercel"],
      description: [
        "Developed a multi-tenant management system with secure data isolation and backend workflows for educational institutions.",
        "Integrated Gemini AI for chatbot functionality, automated dashboard insights, and personalized student-performance recommendations.",
        "Implemented JWT/bcrypt authentication, attendance and academic result management, and PDF/Excel export functionality."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Cloud-management-system",
      demoLink: "https://cloudmanagementsystem.vercel.app/"
    },
    {
      title: "HostelHub – Full-Stack Complaint Management System",
      technologies: ["Python", "Flask", "MySQL", "REST APIs", "Postman"],
      description: [
        "Developed a scalable hostel complaint management platform with role-based authentication for students and administrators.",
        "Built RESTful APIs enabling complaint tracking, status updates, image uploads, and real-time communication via comments.",
        "Implemented admin analytics dashboard and workflow management for efficient grievance resolution.",
        "Runner-Up at CEATHERION 2025 24-hour Full Stack Hackathon, Canara Engineering College."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/HSH",
      demoLink: ""
    },
    {
      title: "PocketPetals",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Postgres", "Antigravity"],
      description: [
        "Developed a full-stack web application for creating and sharing personalized digital flower bouquets with animated delivery using Next.js 15, TypeScript, and Tailwind CSS.",
        "Implemented shareable link system with server-side rendering to generate unique animated bouquet experiences for recipients.",
        "Built scalable backend using Vercel Postgres with local JSON fallback and created a high-quality SVG-based botanical flower library."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/digibouquet",
      demoLink: "https://pocketpetals.vercel.app/"
    },
    {
      title: "Machine Learning-Based Crop Rotation Optimization & Profitability Prediction",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Power BI", "SQL"],
      description: [
        "Developed an ML-based decision-support system using soil parameters for crop recommendation and profitability prediction.",
        "Performed data collection, cleaning, preprocessing, exploratory data analysis (EDA), feature engineering, and predictive model evaluation.",
        "Built interactive Power BI dashboards to visualize soil health, crop recommendations, KPIs, and profitability trends.",
        "Applied data validation and anomaly detection techniques to improve prediction accuracy."
      ],
      githubLink: "",
      demoLink: ""
    },
    {
      title: "Monsoon ML: Indian Rainfall Predictor",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Streamlit", "Plotly", "Folium"],
      description: [
        "Developed an end-to-end machine learning pipeline to predict monthly rainfall across 36 meteorological subdivisions in India.",
        "Engineered advanced features including lag variables (T-1, T-2, T-3), rolling statistics, and seasonal Fourier transformations to capture monsoon patterns.",
        "Built ensemble models using Random Forest and XGBoost to model complex non-linear climate relationships.",
        "Designed and deployed an interactive Streamlit dashboard with geospatial visualization and real-time prediction interface."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/monsoon-ml",
      demoLink: "https://monsoonprediction.streamlit.app/"
    },
    {
      title: "IoT-Based Food Freshness Monitoring System (Mini-Project)",
      technologies: ["Python", "Arduino", "Sensors", "Streamlit"],
      description: [
        "Developed a low-cost embedded IoT system to assess fruit and vegetable freshness using sensor data with Arduino and environmental sensors.",
        "Displayed real-time freshness levels and readings through an interactive web-based dashboard using Streamlit."
      ],
      githubLink: "",
      demoLink: ""
    },
    {
      title: "Akshara – Bilingual Blogging Platform",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Antigravity"],
      description: [
        "Built and deployed a bilingual (English–Kannada) blogging platform using Next.js architecture.",
        "Configured content models, authentication, and admin dashboard for post management including image uploads and rich text editing.",
        "Customized UI, dark/light theme, and SEO settings to improve accessibility and performance."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Akshara",
      demoLink: ""
    }
  ] as ProjectItem[],
  certifications: [
    {
      name: "NPTEL – Programming in Java (Elite), IIT Kharagpur",
      date: "Jan – Apr 2025",
      link: "https://drive.google.com/file/d/19pnkPL7RK0aZlmA85zqO_nn__sNagkgK/view"
    },
    {
      name: "Introduction to MongoDB – Certification (NoSQL, CRUD, Data Modeling, Indexing)",
      date: "May 2025",
      link: "https://learn.mongodb.com/c/Fw-wdPbHTOSrwassuwPbSw"
    },
    {
      name: "Google Prompting Essentials (Coursera)",
      date: "Apr 2026",
      link: "https://www.credly.com/badges/e88688bd-c62a-4e5b-ab17-8e2504c45d4d/linked_in_profile"
    },
    {
      name: "AWS AI Practitioner Challenge (Udacity)",
      date: "Jun 2026",
      link: "https://www.udacity.com/certificate/e/ad6b83ec-2ba8-11f1-9e28-236d80e36ec0"
    },
    {
      name: "Fundamentals of Artificial Intelligence – Wadhwani Foundation",
      date: "2026",
      link: ""
    },
    {
      name: "Claude 101 – Anthropic",
      date: "2026",
      link: ""
    },
    {
      name: "EF SET English Certificate (B2 Upper Intermediate)",
      date: "2025",
      link: "https://cert.efset.org/DnMbX2"
    }
  ] as CertificationItem[],
  achievements: [
    "Runner-Up in the Full Stack Development domain at CEATHERION 2025 24-hour Hackathon, Canara Engineering College (Nov 2025); developed and presented a working Full Stack solution under time constraints.",
    "Regional Finalist – TCS TechBytes 2026 (National Level Technology Quiz).",
    "Active participant in Aetherion26 during AAKRITI 2026 National Level Techno Cultural Fest.",
    "Actively solving challenges in Data Structures & Algorithms, Database Systems, and System Design on online competitive platforms."
  ],
  languages: ["English", "Kannada", "Hindi"]
};
