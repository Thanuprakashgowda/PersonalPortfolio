// Data extracted and enriched for Thanuprakash Gowda's portfolio

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  description: string[];
  skills?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduation: string;
  score?: string;
  coursework?: string[];
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  description?: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  category: "Android & AI" | "Machine Learning" | "Full-Stack Web" | "IoT & Systems";
  technologies: string[];
  description: string[];
  highlights?: string[];
  featured?: boolean;
  badge?: string;
  githubLink?: string;
  demoLink?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
  badge?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sub: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Thanuprakash Gowda",
    role: "AI/ML & Full-Stack Systems Engineer",
    status: "Available for Software Engineering & AI/ML Opportunities",
    location: "Hassan / Mangaluru, Karnataka, India",
    phone: "+91 7204821605",
    email: "thanuprakashgowda13@gmail.com",
    linkedin: "https://www.linkedin.com/in/thanuprakash-gowda",
    github: "https://github.com/Thanuprakashgowda",
    tagline: "Engineering intelligent on-device ML models, native Android experiences, and robust full-stack cloud architectures.",
    objective: "Information Science & Engineering undergraduate at Canara Engineering College with proven expertise building on-device machine learning systems, native Android applications, RESTful backends, and AI evaluation pipelines. Experienced in translating complex problem statements from raw datasets to production-ready deployments, human-in-the-loop validation, and end-to-end software engineering.",
    resumeUrl: "https://drive.google.com/file/d/1SLGkZjyxJpG2a8K8Xh89HyKjQvzEJPz0/view?usp=sharing",
    stats: [
      {
        value: "99.4%",
        label: "On-Device ML Accuracy",
        sub: "Random Forest across 22 crops"
      },
      {
        value: "7+",
        label: "Production & Academic Projects",
        sub: "Android, AI/ML, Cloud & IoT"
      },
      {
        value: "Runner-Up",
        label: "CEATHERION 2025",
        sub: "24-hr Full-Stack Hackathon"
      },
      {
        value: "AI Trainer",
        label: "Outlier AI",
        sub: "Human-in-the-loop LLM evaluation"
      }
    ] as StatItem[]
  },
  experience: [
    {
      role: "Freelance AI Trainer & Evaluator",
      company: "Outlier AI",
      period: "Jun 2026 – Aug 2026",
      location: "Remote",
      type: "Contract / Specialized",
      skills: ["Human-in-the-Loop", "LLM Evaluation", "Kannada NLP", "Logical Reasoning", "Model Alignment", "Quality Benchmarking"],
      description: [
        "Evaluated and refined cutting-edge AI model outputs for factual precision, multi-step logical reasoning, safety constraints, and linguistic compliance against rigorous rubrics.",
        "Served as a Kannada Language Specialist and Aether Generalist, performing nuanced human-in-the-loop verification on multilingual and culturally grounded prompts.",
        "Diagnosed hallucination patterns, edge-case reasoning errors, and policy violations, providing granular, actionable diagnostic logs to direct model fine-tuning.",
        "Demonstrated systematic analytical rigor in benchmarking complex conversational and technical responses across diverse problem domains."
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Information Science & Engineering",
      institution: "Canara Engineering College, Mangaluru, Karnataka",
      graduation: "2023 – 2027",
      score: "CGPA: 7.92 / 10",
      highlights: ["Affiliated to VTU Belagavi", "Active in Tech Clubs & Hackathons", "Runner-Up CEATHERION 2025"],
      coursework: [
        "Data Structures & Algorithms",
        "Artificial Intelligence & Machine Learning",
        "Database Management Systems (DBMS)",
        "Operating Systems & Linux Internals",
        "Computer Networks & Protocols",
        "Cloud Computing & Security",
        "Object-Oriented Programming (OOP)",
        "Software Engineering & System Design"
      ]
    },
    {
      degree: "Pre-University Course (PUC) – PCMB (Physics, Chem, Math, Bio)",
      institution: "Toppers PU College, Holenarasipura",
      graduation: "2021 – 2023",
      score: "86.33%",
      highlights: ["Strong foundation in Mathematics and Analytical Science"]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Adarsha Vidyalaya, Holenarasipura",
      graduation: "Completed 2021",
      score: "91.36%",
      highlights: ["State Distinction"]
    }
  ] as EducationItem[],
  skills: [
    {
      category: "Programming Languages",
      description: "Core languages used across systems, mobile, and web development",
      items: ["Kotlin", "Python", "Java", "SQL", "TypeScript", "JavaScript", "C", "LaTeX"]
    },
    {
      category: "Mobile & Frontend Engineering",
      description: "Modern UI/UX, native Android architecture, and performant web apps",
      items: ["Android SDK", "Jetpack Compose", "Material 3", "Room Database", "CameraX", "Next.js", "React", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      category: "AI, Machine Learning & LLMs",
      description: "Model building, on-device inference, prompt engineering, and verification",
      items: ["On-Device ML", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Gemini LLM API", "Claude AI", "RAG Concepts", "Prompt Engineering", "Human-in-the-Loop Evaluation"]
    },
    {
      category: "Backend, Databases & APIs",
      description: "Scalable server architectures, relational and NoSQL storage",
      items: ["Node.js", "Express.js", "Flask", "RESTful APIs", "JWT Auth", "Firebase Firestore", "MySQL", "MongoDB", "TiDB", "Vercel Postgres"]
    },
    {
      category: "Data Analytics & Business Intelligence",
      description: "Transforming datasets into actionable dashboards and insights",
      items: ["Power BI", "Tableau", "Excel / Spreadsheets", "Exploratory Data Analysis (EDA)", "Geospatial Data (Folium)", "Data Modeling"]
    },
    {
      category: "Developer Tools & Platforms",
      description: "Dev environment, version control, and cloud hosting ecosystems",
      items: ["Git", "GitHub", "Android Studio", "VS Code", "Postman", "Google AI Studio", "Vercel", "Antigravity", "Arduino IDE"]
    },
    {
      category: "Core CS & Systems",
      description: "Foundational computer science principles applied in practical engineering",
      items: ["Data Structures & Algorithms", "DBMS & Indexing", "Operating Systems", "Computer Networks", "System Design Basics", "OOP Design Patterns"]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "Smart-Crop (Crop-chakra) – AI Precision Agriculture App",
      category: "Android & AI",
      featured: true,
      badge: "Flagship / Native Android + On-Device ML",
      technologies: ["Kotlin", "Jetpack Compose", "Material 3", "On-Device ML", "Gemini LLM", "Room DB", "Firebase", "CameraX"],
      highlights: [
        "99.4% on-device Random Forest accuracy across 22 crops",
        "Zero-cloud inference for offline rural farming",
        "ICAR Soil Fertility & SQI (0–100) algorithmic prescription",
        "Multimodal leaf disease diagnostics via CameraX + Gemini AI"
      ],
      description: [
        "Architected an offline-first native Android precision farming app featuring an on-device Random Forest classifier achieving 99.4% accuracy across 22 crops based on NPK, pH, Zinc, and climatic parameters.",
        "Engineered ICAR soil fertility classification and Soil Quality Index (SQI 0–100) algorithms with automated, custom soil amendment prescriptions.",
        "Implemented multi-factor yield estimation using ICRISAT models alongside real-time AGMARKNET commodity market pricing for farm profitability forecasting.",
        "Integrated Gemini LLM conversational agronomist ('Krishi Mitra') and CameraX visual leaf disease diagnostics for instant multimodal field advisory.",
        "Built Room Database with one-tap parameter restoration, Firebase Firestore cloud sync, bilingual English/Kannada UI, and native PDF report export."
      ],
      githubLink: "https://github.com/Thanuprakashgowda",
      demoLink: ""
    },
    {
      title: "Cloud SMS – AI-Powered Management & Analytics Platform",
      category: "Full-Stack Web",
      featured: true,
      badge: "Production SaaS / AI-Powered",
      technologies: ["Node.js", "Express.js", "MySQL / TiDB", "Gemini AI", "JWT", "Tailwind CSS", "Vercel"],
      highlights: [
        "Multi-tenant institutional architecture with strict tenant data isolation",
        "Gemini AI analytics agent for automated performance reports",
        "Role-based access control with JWT and bcrypt security"
      ],
      description: [
        "Built a multi-tenant institutional management system with secure data isolation for educational and organizational bodies.",
        "Integrated Gemini AI for conversational assistant functionality, automated dashboard insights, and personalized student-performance recommendations.",
        "Designed backend services and data workflows for attendance, academic results, and administrative operations with JWT/bcrypt authentication.",
        "Implemented automated PDF/Excel export capabilities and secure cloud deployments on Vercel."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Cloud-management-system",
      demoLink: "https://cloudmanagementsystem.vercel.app/"
    },
    {
      title: "HostelHub – Full-Stack Grievance & Complaint Management",
      category: "Full-Stack Web",
      featured: false,
      badge: "🏆 CEATHERION 2025 Runner-Up",
      technologies: ["Python", "Flask", "MySQL", "REST APIs", "Postman", "Role-Based Auth"],
      highlights: [
        "Built and presented in a 24-hour hackathon sprint",
        "Real-time ticket lifecycle tracking and admin analytics",
        "Awarded Runner-Up across 30+ engineering teams"
      ],
      description: [
        "Developed a scalable complaint-management platform with role-based authentication for hostel residents and administration.",
        "Built RESTful APIs supporting complaint tracking, status updates, image uploads, and comment-based resolution workflows.",
        "Implemented admin analytics and status dashboards to streamline grievance resolution and reduce manual logging effort.",
        "Secured Runner-Up position in the CEATHERION 2025 24-hour Full Stack Hackathon at Canara Engineering College."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/HSH",
      demoLink: ""
    },
    {
      title: "Monsoon ML – Indian Rainfall Predictive Intelligence",
      category: "Machine Learning",
      featured: true,
      badge: "Geospatial ML / Time Series",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Streamlit", "Plotly", "Folium"],
      highlights: [
        "Subdivision forecasting across 36 Indian meteorological zones",
        "Time-series lag features (T-1 to T-3) and Fourier seasonal encoding",
        "Interactive geospatial heatmaps and scenario simulations"
      ],
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
      title: "PocketPetals – Interactive Digital Bouquet Studio",
      category: "Full-Stack Web",
      featured: false,
      badge: "Modern Next.js 15 App",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Postgres", "Server Actions"],
      highlights: [
        "Custom SVG botanical flower rendering engine",
        "Server-Side Rendered (SSR) dynamic gift links",
        "Vercel Postgres with automated resilient fallback"
      ],
      description: [
        "Built a full-stack web application for creating and sharing personalized digital flower bouquets with animated delivery using Next.js 15, TypeScript, and Tailwind CSS.",
        "Implemented shareable-link system with server-side rendering (SSR) and a scalable Vercel Postgres backend with local JSON fallback.",
        "Created a custom SVG-based botanical flower library and reusable UI components with responsive animations."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/digibouquet",
      demoLink: "https://pocketpetals.vercel.app/"
    },
    {
      title: "Akshara – Bilingual Content & Blogging Platform",
      category: "Full-Stack Web",
      featured: false,
      badge: "Bilingual (EN / KN)",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Rich Text Editor", "SEO"],
      highlights: [
        "Seamless English and Kannada localization",
        "Admin portal with rich media uploads and draft management",
        "Dynamic OpenGraph metadata for enhanced social sharing"
      ],
      description: [
        "Built and deployed a bilingual (English–Kannada) publishing platform using Next.js architecture.",
        "Configured content models, authentication, and admin dashboard for post management including image uploads and rich text editing.",
        "Customized UI, dark/light theme, and SEO settings to improve accessibility and web vitals performance."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Akshara",
      demoLink: ""
    },
    {
      title: "IoT Food Freshness Monitoring System",
      category: "IoT & Systems",
      featured: false,
      badge: "Hardware + Software",
      technologies: ["Arduino", "Gas Sensors (MQ Series)", "DHT11", "Python", "Streamlit"],
      highlights: [
        "Multi-sensor array measuring volatile gases, temperature, and humidity",
        "Real-time Python telemetry streaming and spoilage threshold alerts"
      ],
      description: [
        "Built a low-cost embedded IoT system using Arduino and multiple sensors (gas, humidity, temperature) to assess perishable food freshness.",
        "Engineered a real-time tracking interface utilizing Python and Streamlit to stream ongoing sensor telemetry and detect freshness degradation."
      ],
      githubLink: "https://github.com/Thanuprakashgowda",
      demoLink: ""
    }
  ] as ProjectItem[],
  certifications: [
    {
      name: "Programming in Java (Elite Certification)",
      issuer: "IIT Kharagpur / NPTEL",
      date: "Jan – Apr 2025",
      badge: "Elite Score",
      link: "https://drive.google.com/file/d/19pnkPL7RK0aZlmA85zqO_nn__sNagkgK/view"
    },
    {
      name: "Introduction to MongoDB – Certified",
      issuer: "MongoDB University",
      date: "May 2025",
      badge: "NoSQL & Indexing",
      link: "https://learn.mongodb.com/c/Fw-wdPbHTOSrwassuwPbSw"
    },
    {
      name: "Google Prompting Essentials",
      issuer: "Google / Coursera",
      date: "Apr 2026",
      badge: "Prompt Engineering",
      link: "https://www.credly.com/badges/e88688bd-c62a-4e5b-ab17-8e2504c45d4d/linked_in_profile"
    },
    {
      name: "AWS AI Practitioner Challenge",
      issuer: "Amazon Web Services / Udacity",
      date: "Jun 2026",
      badge: "Cloud AI",
      link: "https://www.udacity.com/certificate/e/ad6b83ec-2ba8-11f1-9e28-236d80e36ec0"
    },
    {
      name: "Claude 101 – Prompting & Systems",
      issuer: "Anthropic",
      date: "2026",
      badge: "LLM Fundamentals",
      link: ""
    },
    {
      name: "Fundamentals of Artificial Intelligence",
      issuer: "Wadhwani Foundation",
      date: "2026",
      badge: "AI Systems",
      link: ""
    },
    {
      name: "EF SET English Certificate (B2 Upper Intermediate)",
      issuer: "EF Standard English Test",
      date: "2026",
      badge: "Professional Working Proficiency",
      link: "https://cert.efset.org/DnMbX2"
    }
  ] as CertificationItem[],
  achievements: [
    {
      title: "Runner-Up – CEATHERION 2025 (24-Hour Full-Stack Hackathon)",
      organization: "Canara Engineering College (Nov 2025)",
      description: "Designed, engineered, and pitched 'HostelHub', a full-stack student grievance resolution platform under high-pressure 24-hour sprint constraints across competitive collegiate teams."
    },
    {
      title: "Regional Finalist – TCS TechBytes 2026",
      organization: "Tata Consultancy Services (TCS) & Karnataka State Board",
      description: "Selected as regional finalist in prestigious state-level technology quiz testing core computer science, software ecosystems, and emerging tech advancements."
    },
    {
      title: "Active Contributor – Aetherion26 & AAKRITI 2026",
      organization: "National Level Techno-Cultural Fest",
      description: "Coordinated technical events, project showcases, and student hackathons representing the Information Science department."
    },
    {
      title: "Competitive Problem Solving & Algorithmic Practice",
      organization: "LeetCode & HackerRank",
      description: "Consistent practice in Data Structures, Algorithms (Graphs, Dynamic Programming, Trees), SQL query optimization, and Object-Oriented System Design."
    }
  ],
  languages: [
    { language: "English", proficiency: "Professional (EF SET B2 Upper Intermediate)" },
    { language: "Kannada", proficiency: "Native / Bilingual Specialist (Outlier AI)" },
    { language: "Hindi", proficiency: "Conversational" }
  ]
};
