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
    role: "Information Science & Engineering Undergraduate",
    objective: "Information Science & Engineering undergraduate with hands-on experience building AI-integrated applications, REST APIs, machine learning systems, and data-driven solutions. Strong foundation in Python, Java, SQL, DSA, DBMS, Operating Systems, Computer Networks, and software engineering. Experienced in taking problem statements from data preprocessing and model evaluation to backend integration, human-in-the-loop AI verification, and deployable applications. Interested in AI/ML, agentic systems, real-time distributed systems, and 0-to-1 product engineering.",
    resumeUrl: "https://drive.google.com/file/d/1SLGkZjyxJpG2a8K8Xh89HyKjQvzEJPz0/view?usp=sharing"
  },
  experience: [
    {
      role: "Freelance AI Trainer",
      company: "Outlier AI",
      period: "Jun 2026 – Aug 2026",
      location: "Remote",
      description: [
        "Evaluated and refined AI-generated outputs for factual accuracy, logical reasoning, quality, and linguistic/policy compliance using structured evaluation guidelines.",
        "Contributed to the Aether project as a Kannada language specialist and Aether Generalist, performing human-in-the-loop verification.",
        "Identified inconsistencies, anomalies, and quality issues and provided structured, traceable feedback for model improvement.",
        "Applied analytical reasoning and systematic validation to assess AI behavior across diverse problem scenarios."
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) Information Science & Engineering",
      institution: "Canara Engineering College, Mangaluru, Karnataka",
      graduation: "2023 – 2027",
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
      category: "AI / LLM & Machine Learning",
      items: ["Machine Learning", "Generative AI", "Gemini AI", "Claude AI", "RAG Concepts", "Prompt Engineering", "AI Model Evaluation", "Scikit-learn", "Pandas", "NumPy", "Human-in-the-Loop Verification"]
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT", "bcrypt", "API Testing (Postman)", "Debugging"]
    },
    {
      category: "Frameworks & Web Development",
      items: ["Next.js 15", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Databases & Cloud",
      items: ["MySQL", "MongoDB", "TiDB", "Vercel Postgres", "Vercel"]
    },
    {
      category: "Analytics & Business Intelligence",
      items: ["Power BI", "Tableau", "Excel", "Data Modeling", "Exploratory Data Analysis (EDA)", "Data Validation", "Dashboard Development"]
    },
    {
      category: "Developer Tools & Platforms",
      items: ["Antigravity", "Git", "GitHub", "Postman", "VS Code", "Google AI Studio", "Arduino IDE"]
    },
    {
      category: "Core Computer Science & Systems",
      items: ["Data Structures & Algorithms (DSA)", "Database Management Systems (DBMS)", "Operating Systems", "Computer Networks", "Cloud Computing & Security", "OOP", "Software Engineering"]
    },
    {
      category: "Soft Skills & Strengths",
      items: ["Problem-solving", "Teamwork & Collaboration", "Communication", "Stakeholder Coordination", "Time Management", "Adaptability & Flexibility", "Continuous Learning"]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "Cloud SMS – AI-Powered Management & Analytics Platform",
      technologies: ["Node.js", "Express.js", "MySQL / TiDB", "Gemini AI", "JWT", "Vercel"],
      description: [
        "Built a multi-tenant management system with secure data isolation for educational institutions.",
        "Integrated Gemini AI for chatbot functionality, automated dashboard insights, and personalized student-performance recommendations.",
        "Designed backend services and data workflows for attendance, academic results, and management operations with JWT/bcrypt authentication.",
        "Implemented automated PDF/Excel export capabilities and secure cloud deployments."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Cloud-management-system",
      demoLink: "https://cloudmanagementsystem.vercel.app/"
    },
    {
      title: "HostelHub – Full-Stack Complaint Management System",
      technologies: ["Python", "Flask", "MySQL", "REST APIs", "Postman"],
      description: [
        "Developed a scalable complaint-management platform with role-based authentication for students and administrators.",
        "Built RESTful APIs supporting complaint tracking, status updates, image uploads, and comment-based communication.",
        "Implemented admin analytics and workflow management to streamline grievance resolution and reduce manual tracking effort.",
        "Secured Runner-Up position in the CEATHERION 2025 24-hour Full Stack Hackathon, Canara Engineering College."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/HSH",
      demoLink: ""
    },
    {
      title: "Smart Crop – AI-Based Crop Recommendation & Profitability Prediction",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Next.js", "TypeScript", "Power BI", "SQL", "REST APIs"],
      description: [
        "Developed an AI-driven decision-support system combining machine learning, data processing, backend APIs, and web application integration for crop recommendation and profitability prediction.",
        "Implemented crop classification and recommendation using agricultural, soil, and environmental parameters.",
        "Performed data preprocessing, feature engineering, predictive model evaluation, and application-level integration.",
        "Built interactive Power BI dashboards to visualize soil health and profitability trends, exploring computer vision-based maturity detection as an extension."
      ],
      githubLink: "",
      demoLink: ""
    },
    {
      title: "PocketPetals – Full-Stack Web Application",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Postgres", "Antigravity"],
      description: [
        "Built a full-stack web application for creating and sharing personalized digital flower bouquets with animated delivery using Next.js 15, TypeScript, and Tailwind CSS.",
        "Implemented shareable-link system with server-side rendering (SSR) and a scalable Vercel Postgres backend with local JSON fallback.",
        "Created a custom SVG-based botanical flower library and reusable UI components."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/digibouquet",
      demoLink: "https://pocketpetals.vercel.app/"
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
      technologies: ["Arduino", "Sensors (Gas, Humidity, Temp)", "Python", "Streamlit"],
      description: [
        "Built a low-cost embedded IoT system using Arduino and multiple sensors (gas, humidity, temperature) to assess produce freshness.",
        "Engineered a real-time tracking interface utilizing Python and Streamlit to display ongoing readings and freshness levels seamlessly."
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
