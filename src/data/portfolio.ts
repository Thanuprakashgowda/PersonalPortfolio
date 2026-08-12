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
  link?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Thanuprakash Gowda",
    location: "Hassan, Karnataka, India",
    phone: "+91 7204821605",
    email: "thanuprakashgowda13@gmail.com",
    linkedin: "https://www.linkedin.com/in/thanuprakash-gowda",
    github: "https://github.com/Thanuprakashgowda",
    role: "Information Science & Engineering Student",
    objective: "Final-year Information Science and Engineering student with hands-on experience building full-stack applications, AI-enabled systems, REST APIs, and machine learning solutions. Skilled in Python, Java, SQL, Flask, Node.js, Express.js, MySQL, MongoDB, Scikit-learn, Gemini AI, and Vercel. Experienced in AI model evaluation, backend development, ML decision support systems, and data-driven applications.",
    resumeUrl: "https://drive.google.com/file/d/1AaVEWMJ2wFvAhZLdR5XyW5rsi3NwOTAg/view?usp=drive_link"
  },
  experience: [
    {
      role: "Freelance AI Trainer",
      company: "Outlier AI",
      period: "Jun 2026 – Present",
      location: "Remote",
      description: [
        "Evaluated and refined AI model outputs for quality, accuracy, logical reasoning, and linguistic correctness using defined guidelines.",
        "Performed data validation, anomaly detection, quality assurance, and documented findings to improve AI model performance.",
        "Worked with structured guidelines while maintaining high reporting accuracy and productivity."
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "B.E. Information Science & Engineering",
      institution: "Canara Engineering College, Mangaluru",
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
        "Object-Oriented Programming"
      ]
    },
    {
      degree: "Pre-University (PUC)",
      institution: "Toppers PU College, Holenarasipura",
      graduation: "Completed 2023",
      score: "86.33%"
    },
    {
      degree: "SSLC",
      institution: "Adarsha Vidyalaya, Holenarasipura",
      graduation: "Completed 2021",
      score: "91.36%"
    }
  ] as EducationItem[],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C", "SQL", "LaTeX", "JavaScript", "TypeScript"]
    },
    {
      category: "Development & Web",
      items: ["Flask", "Node.js", "Express.js", "Next.js", "REST APIs", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "AI & Machine Learning",
      items: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Gemini AI", "RAG", "Prompt Engineering", "AI-Assisted Development"]
    },
    {
      category: "Databases & Cloud",
      items: ["MySQL", "MongoDB", "TiDB", "Vercel Postgres", "Vercel"]
    },
    {
      category: "Tools & Analytics",
      items: ["Git", "GitHub", "Postman", "VS Code", "Google AI Studio", "Power BI", "Tableau", "Excel"]
    },
    {
      category: "Core CS & Systems",
      items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Cloud Computing & Security", "OOP"]
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
        "Developed a hostel complaint management platform with role-based authentication for students and administrators.",
        "Built RESTful APIs for complaint tracking, status updates, image uploads, and real-time communication through comments.",
        "Implemented an admin analytics dashboard and workflow management to streamline grievance resolution.",
        "Runner-Up at CEATHERION 2025 24-hour Full Stack Hackathon, Canara Engineering College."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/HSH",
      demoLink: ""
    },
    {
      title: "Machine Learning-Based Crop Rotation Optimization & Profitability Prediction",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Power BI", "SQL"],
      description: [
        "Developed an ML-based decision-support system using soil parameters for crop recommendation and profitability prediction.",
        "Performed data collection, cleaning, preprocessing, exploratory data analysis (EDA), feature engineering, and model evaluation.",
        "Built interactive Power BI dashboards to visualize soil health, crop recommendations, and profitability trends.",
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
      title: "DigiBouquet",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Postgres", "Antigravity"],
      description: [
        "Engineered a dynamic, highly responsive modern web application focused on optimal UI/UX standards.",
        "Leveraged Vercel Postgres to rapidly implement database abstraction layers for complex data persistence workflows.",
        "Achieved near-instant deployment cycles using continuous delivery and strict TypeScript adherence."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/digibouquet",
      demoLink: "https://pocketpetals.vercel.app/"
    },
    {
      title: "Akshara – Bilingual Blogging Platform",
      technologies: ["Antigravity Platform", "Next.js", "MongoDB", "Tailwind CSS"],
      description: [
        "Built and deployed a bilingual (English–Kannada) blogging platform using Next.js architecture.",
        "Configured content models, authentication, and admin dashboard for post management including image uploads and rich text editing.",
        "Customized UI, dark/light theme, and SEO settings to improve accessibility and performance."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Akshara",
      demoLink: ""
    },
    {
      title: "IoT-Based Food Freshness Monitoring System",
      technologies: ["Arduino", "Sensors", "Python", "Streamlit"],
      description: [
        "Developed a low-cost embedded hardware system to continuously evaluate raw food freshness based on dynamic environmental sensor metrics.",
        "Engineered a real-time tracking interface utilizing Python and Streamlit to display ongoing readings seamlessly."
      ]
    }
  ] as ProjectItem[],
  certifications: [
    {
      name: "NPTEL – Programming in Java (Elite), IIT Kharagpur",
      link: "https://drive.google.com/file/d/19pnkPL7RK0aZlmA85zqO_nn__sNagkgK/view"
    },
    {
      name: "Introduction to MongoDB – Certification (NoSQL, CRUD, Data Modeling, Indexing)",
      link: "https://learn.mongodb.com/c/Fw-wdPbHTOSrwassuwPbSw"
    },
    {
      name: "Google Prompting Essentials (Badge)",
      link: "https://www.credly.com/badges/e88688bd-c62a-4e5b-ab17-8e2504c45d4d/linked_in_profile"
    },
    {
      name: "AWS AI Practitioner Challenge",
      link: "https://www.udacity.com/certificate/e/ad6b83ec-2ba8-11f1-9e28-236d80e36ec0"
    },
    {
      name: "EF SET English Certificate (B2 Upper Intermediate)",
      link: "https://cert.efset.org/DnMbX2"
    },
    {
      name: "Claude 101 & Fundamentals of AI Certification",
      link: ""
    }
  ] as CertificationItem[],
  achievements: [
    "Runner-Up in Full Stack Development – CEATHERION 2025 24-hour Hackathon, Canara Engineering College",
    "Regional Finalist – TCS TechBytes 2026 National-Level Technology Quiz",
    "Active participant in Aetherion26 during AAKRITI 2026 National Level Techno Cultural Fest",
    "Actively practicing core Computer Science & system design concepts on online platforms"
  ],
  languages: ["English", "Kannada", "Hindi"]
};
