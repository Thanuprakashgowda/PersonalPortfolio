// Enriched data synthesized from all professional resumes for Thanuprakash Gowda

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  skills?: string[];
  description: string[];
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
  category: "AI & ML" | "Android & Mobile" | "Full-Stack Web" | "IoT & Systems";
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
    role: "AI/ML Developer & Full-Stack Systems Engineer",
    status: "Available for Software Engineering, AI Evaluation & Freelance Roles",
    location: "Hassan / Holenarasipura, Karnataka, India",
    phone: "+91 7204821605",
    email: "thanuprakashgowda13@gmail.com",
    linkedin: "https://www.linkedin.com/in/thanuprakash-gowda",
    github: "https://github.com/Thanuprakashgowda",
    portfolioUrl: "https://thanugowdaportfolio.vercel.app",
    tagline: "Engineering intelligent on-device ML models, LLM-powered applications, and robust full-stack software architectures.",
    summary: "Information Science and Engineering undergraduate focused on AI-assisted software development, prompt engineering, AI evaluation, and LLM-powered applications. Hands-on experience evaluating AI-generated outputs for logical correctness and quality at TELUS Digital and Outlier AI, integrating Gemini AI and OpenAI into full-stack applications, and developing backend APIs with Python and JavaScript. Skilled in Antigravity, RAG concepts, structured guideline-based review, API testing, debugging, and human-in-the-loop verification.",
    resumeUrl: "https://drive.google.com/file/d/1SLGkZjyxJpG2a8K8Xh89HyKjQvzEJPz0/view?usp=sharing",
    stats: [
      {
        value: "99.4%",
        label: "On-Device ML Accuracy",
        sub: "Random Forest across 22 crops"
      },
      {
        value: "TELUS & Outlier",
        label: "AI QA & Evaluation",
        sub: "Human-in-the-loop LLM rating"
      },
      {
        value: "Runner-Up",
        label: "CEATHERION 2025",
        sub: "24-hr Full-Stack Hackathon"
      },
      {
        value: "8+",
        label: "Engineered Projects",
        sub: "AI/ML, Web, Mobile & IoT"
      }
    ] as StatItem[]
  },
  experience: [
    {
      role: "Quality Assurance Rater",
      company: "TELUS Digital AI Data Solutions",
      period: "Jul 2026 – Oct 2026",
      location: "Remote",
      type: "Freelance / Remote",
      skills: ["AI Quality Assurance", "Data Validation", "Response Evaluation", "Guideline Adherence", "AI Model Quality", "Remote QA Rating"],
      description: [
        "Performed rigorous quality assurance rating work for AI data solutions following structured guidelines and quality expectations in a remote freelance capacity.",
        "Benchmarked AI responses across factual correctness, tone, safety compliance, and intent fidelity to ensure high-quality dataset curation.",
        "Applied attention to detail and consistent task completion under remote operational guidelines."
      ]
    },
    {
      role: "Freelance AI Trainer & Aether Generalist",
      company: "Outlier AI",
      period: "Jun 2026 – Aug 2026",
      location: "Remote",
      type: "Freelance / Remote",
      skills: ["Human-in-the-Loop", "LLM Evaluation", "Audio Transcription", "Kannada NLP", "Logical Reasoning", "Model Alignment", "Anomaly Detection"],
      description: [
        "Evaluated AI-generated responses for accuracy, logical reasoning, quality, and adherence to evaluation guidelines, performing human-in-the-loop verification.",
        "Completed generalist and audio transcription tasks for AI training and evaluation workflows, maintaining consistent quality across submissions.",
        "Identified inconsistencies, anomalies, and logical errors in model outputs and provided structured, traceable feedback to improve model performance.",
        "Contributed to the Aether project as a Kannada Language Specialist and generalist evaluator, validating culturally and linguistically nuanced prompts."
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Information Science & Engineering",
      institution: "Canara Engineering College, Mangaluru, Karnataka",
      graduation: "2023 – 2027 (Expected)",
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
      category: "AI, LLMs & Response Evaluation",
      description: "Prompt engineering, verification rubrics, model alignment, and RAG concepts",
      items: [
        "Prompt Engineering",
        "AI-Assisted Development",
        "RAG Concepts",
        "Gemini AI",
        "OpenAI API",
        "AI Model Evaluation",
        "Human-in-the-Loop (HITL) Verification",
        "Anti-Hallucination Prompt Schemas",
        "Audio Transcription",
        "AI Data Quality Assurance",
        "Claude AI"
      ]
    },
    {
      category: "Programming Languages",
      description: "Core systems, application, and scripting languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin", "SQL", "C", "LaTeX"]
    },
    {
      category: "Backend & API Engineering",
      description: "Server-side architectures, API design, testing, and debugging",
      items: [
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
        "JWT & bcrypt Auth",
        "API Testing (Postman)",
        "Debugging",
        "PyMuPDF",
        "Server Actions"
      ]
    },
    {
      category: "Databases & Cloud Infrastructure",
      description: "Relational, NoSQL, and serverless data storage architectures",
      items: [
        "MySQL",
        "MongoDB",
        "TiDB",
        "Vercel Postgres",
        "Firebase Firestore",
        "Room Database",
        "Cloud Computing Fundamentals",
        "Vercel Cloud"
      ]
    },
    {
      category: "Developer Tools & Platforms",
      description: "Development environments, agentic tooling, and deployment pipelines",
      items: [
        "Antigravity",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Google AI Studio",
        "Android Studio",
        "Arduino IDE"
      ]
    },
    {
      category: "Research, Data Analytics & Project Support",
      description: "Data modeling, visualization, workflow support, and technical reporting",
      items: [
        "Research Methodology",
        "Technical Documentation",
        "Report Writing",
        "Task & Issue Tracking",
        "Workflow Support",
        "Data Validation",
        "Source Traceability",
        "Exploratory Data Analysis (EDA)",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Power BI",
        "Microsoft Excel",
        "Folium & Plotly"
      ]
    },
    {
      category: "Mobile & Frontend Engineering",
      description: "Native Android and modern responsive frontend frameworks",
      items: [
        "Android SDK",
        "Jetpack Compose",
        "Material 3",
        "CameraX",
        "Next.js 15",
        "React",
        "Tailwind CSS",
        "HTML5 / CSS3"
      ]
    },
    {
      category: "Core Strengths & CS Fundamentals",
      description: "Analytical problem solving and fundamental computer science",
      items: [
        "Data Structures & Algorithms (DSA)",
        "DBMS & Indexing",
        "Operating Systems",
        "Computer Networks",
        "Analytical Problem Solving",
        "Critical Thinking",
        "Attention to Detail",
        "Time Management",
        "Teamwork & Clear Communication"
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "Smart-Crop (Crop-chakra) – AI Precision Agriculture App",
      category: "Android & Mobile",
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
      title: "CASELens – AI-Assisted Legal Document Research & Analysis",
      category: "AI & ML",
      featured: true,
      badge: "AI Document Workbench / HITL",
      technologies: ["Python", "Flask", "PyMuPDF", "OpenAI API", "Prompt Engineering", "JSON/Markdown"],
      highlights: [
        "Page-by-page text extraction pipeline with 1-indexed pagination & text-density scan audit",
        "Strict anti-hallucination prompt schemas with 'Not found' fallbacks & source-page citations",
        "Dual-pane verification interface with synchronized source-page jumping",
        "Human-in-the-loop (HITL) audit checklist with structured Markdown/JSON report export"
      ],
      description: [
        "Researched and developed a legal document analysis workbench using Flask, PyMuPDF, and the OpenAI API for structured information extraction from court filings.",
        "Engineered a page-by-page text extraction pipeline preserving 1-indexed pagination and implemented text-density heuristics to audit and detect scanned/image-only PDFs.",
        "Implemented strict anti-hallucination prompt schemas enforcing grounded fact extraction, 'Not found' fallbacks, and 1-indexed source-page citations for facts, issues, and precedents.",
        "Built a dual-pane verification interface with synchronized source-page jumping, an interactive human-in-the-loop (HITL) validation audit checklist, and structured Markdown/JSON report export."
      ],
      githubLink: "https://github.com/Thanuprakashgowda",
      demoLink: ""
    },
    {
      title: "Cloud SMS – AI-Powered Management & Analytics Platform",
      category: "Full-Stack Web",
      featured: true,
      badge: "Production SaaS / AI-Powered",
      technologies: ["Node.js", "Express.js", "Gemini AI", "MySQL / TiDB", "JWT", "Tailwind CSS", "Vercel"],
      highlights: [
        "Integrated Gemini AI for chatbot, automated dashboard insights & student-performance recommendations",
        "Multi-tenant application with secure data isolation and JWT/bcrypt authentication",
        "Database-driven features for attendance, academic results, and automated PDF/Excel exports"
      ],
      description: [
        "Integrated Gemini AI to build an intelligent chatbot, automated dashboard insights, and personalized student-performance recommendations.",
        "Developed REST APIs and backend workflows for a multi-tenant application with secure data isolation and JWT/bcrypt authentication.",
        "Designed database-driven features for attendance and academic results with automated PDF/Excel exports and deployed on Vercel."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/Cloud-management-system",
      demoLink: "https://cloudmanagementsystem.vercel.app/"
    },
    {
      title: "HostelHub – Full-Stack Grievance & Complaint Management System",
      category: "Full-Stack Web",
      featured: false,
      badge: "🏆 Runner-Up, CEATHERION 2025",
      technologies: ["Python", "Flask", "MySQL", "REST APIs", "Postman", "Role-Based Auth"],
      highlights: [
        "Recognized as Runner-Up in the 24-hour CEATHERION 2025 Full Stack Hackathon",
        "RESTful APIs for complaint tracking, status updates, image uploads & role-based access",
        "Postman for rigorous API testing, debugging, and admin workflow resolution"
      ],
      description: [
        "Developed RESTful APIs and backend workflows for complaint tracking, status updates, image uploads, and role-based access control.",
        "Used Postman for API testing and debugging and built an administrator workflow to streamline complaint resolution.",
        "Developed an admin analytics dashboard and workflow tools to support issue resolution and reporting.",
        "Awarded Runner-Up across competitive collegiate engineering teams at the CEATHERION 2025 24-Hour Full Stack Hackathon, Canara Engineering College."
      ],
      githubLink: "https://github.com/Thanuprakashgowda/HSH",
      demoLink: ""
    },
    {
      title: "Machine Learning-Based Crop Rotation Optimization & Profitability Prediction",
      category: "AI & ML",
      featured: false,
      badge: "ML Decision Support / Agriculture",
      technologies: ["Python", "Machine Learning", "Flask", "Scikit-learn", "Pandas", "NumPy"],
      highlights: [
        "ML-based decision support system for crop recommendation and profitability prediction",
        "Exploratory data analysis on soil datasets containing pH, EC, OC, N, P, K, Zn, Cu, Fe, and Mn",
        "Comparative model evaluation and structured R&D documentation covering experiments and findings"
      ],
      description: [
        "Built an ML-based decision-support system for crop recommendation and profitability prediction using soil parameters.",
        "Analysed soil datasets containing pH, EC, OC, N, P, K, Zn, Cu, Fe, and Mn parameters using comprehensive data preprocessing and exploratory data analysis.",
        "Investigated machine learning approaches for crop recommendation and prediction and performed comparative model evaluation using relevant metrics.",
        "Prepared structured project documentation covering problem definition, methodology, dataset analysis, experiments, results, and findings."
      ],
      githubLink: "https://github.com/Thanuprakashgowda",
      demoLink: ""
    },
    {
      title: "Monsoon ML – Indian Rainfall Predictive Intelligence",
      category: "AI & ML",
      featured: false,
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
      date: "2025",
      badge: "Elite Score",
      link: "https://drive.google.com/file/d/19pnkPL7RK0aZlmA85zqO_nn__sNagkgK/view"
    },
    {
      name: "AWS AI Practitioner Challenge",
      issuer: "Amazon Web Services / Udacity",
      date: "2026",
      badge: "Cloud AI",
      link: "https://www.udacity.com/certificate/e/ad6b83ec-2ba8-11f1-9e28-236d80e36ec0"
    },
    {
      name: "Claude 101",
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
      name: "Google Prompting Essentials",
      issuer: "Google / Coursera",
      date: "2026",
      badge: "Prompt Engineering",
      link: "https://www.credly.com/badges/e88688bd-c62a-4e5b-ab17-8e2504c45d4d/linked_in_profile"
    },
    {
      name: "Introduction to MongoDB – Certified",
      issuer: "MongoDB University",
      date: "2025",
      badge: "NoSQL & Indexing",
      link: "https://learn.mongodb.com/c/Fw-wdPbHTOSrwassuwPbSw"
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
      title: "Runner-Up – CEATHERION 2025 Full Stack Hackathon",
      organization: "Canara Engineering College (Nov 2025)",
      description: "Developed and presented 'HostelHub', a full-stack complaint management and administrator workflow platform under intensive 24-hour sprint constraints across competitive collegiate engineering teams."
    },
    {
      title: "Regional Finalist – TCS TechBytes 2026",
      organization: "Tata Consultancy Services (TCS) & Karnataka State Board",
      description: "Selected as regional finalist in prestigious state-level technology quiz testing core computer science, software ecosystems, and emerging tech advancements."
    },
    {
      title: "Active Contributor – Aetherion26 & AAKRITI 2026",
      organization: "National Level Techno-Cultural Fest",
      description: "Coordinated technical events, project showcases, and student hackathons representing the Information Science & Engineering department."
    },
    {
      title: "Competitive Problem Solving & Algorithmic Practice",
      organization: "LeetCode & HackerRank",
      description: "Consistent practice in Data Structures, Algorithms (Graphs, Dynamic Programming, Trees), SQL query optimization, and Object-Oriented System Design."
    }
  ],
  languages: [
    { language: "Kannada", proficiency: "Native / Multilingual Specialist" },
    { language: "English", proficiency: "Professional (EF SET B2 Upper Intermediate)" },
    { language: "Hindi", proficiency: "Conversational" }
  ],
  coreStrengths: [
    "Research Skills",
    "Document Reading & Analysis",
    "Attention to Detail",
    "Data Validation",
    "Analytical Problem Solving",
    "Technical Documentation",
    "Clear Communication",
    "Accuracy & Integrity",
    "Time Management"
  ]
};
