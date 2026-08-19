
const portfolioData = {
  // ----------- HERO / HOME -----------
  name: "Alyssa Chalondra Adimulyo",
  role: "Industrial Engineering Student | Data & Process Analyst",
  tagline: " I help teams see their operations more clearly by turning raw, scattered data into structured insights, automated reporting, and process improvements that stick.",
  socials: [
    { icon: "fa-brands fa-linkedin-in", url: "https://linkedin.com/in/alyssachalondra" },
    { icon: "fa-solid fa-envelope",    url: "mailto:alyssachalondra@gmail.com" },
    { icon: "fa-brands fa-instagram",  url: "https://instagram.com/lyschlndr" }, 
    { icon: "fa-brands fa-github",     url: "https://github.com/alyssachalondra1" },   
  ],

  // ----------- ABOUT -----------
  aboutText: `Industrial Engineering student at Universitas Sebelas Maret (GPA 3.50) with strong interests in process improvement, data analysis, and operational system automation. During my internship at PT SMART Tbk, I developed an inventory consolidation and monitoring system using Power Query and Excel VBA that reduced manual reconciliation time by approximately 96%. I'm passionate about translating operational issues into data-driven improvement solutions.`,
  aboutCards: [
    { title: "I'm based in",  detail: "SURAKARTA, CENTRAL JAVA, INDONESIA" },
    { title: "I studied at",  detail: "SEBELAS MARET UNIVERSITY (UNS) — INDUSTRIAL ENGINEERING" },
    { title: "My focus areas",detail: "PROCESS IMPROVEMENT, DATA ANALYSIS, INVENTORY CONTROL, AUTOMATION" },
    { title: "Languages",     detail: "BAHASA INDONESIA (NATIVE), ENGLISH (ADVANCED — TOEIC 835)" },
  ],

  // ----------- SKILLS -----------
  skills: [
    { icon: "fa-solid fa-file-excel",      title: "Excel VBA",       desc: "Macro automation" },
    { icon: "fa-solid fa-bolt",            title: "Power Query",     desc: "ETL & data transformation" },
    { icon: "fa-solid fa-database",        title: "SQL",             desc: "Database querying" },
    { icon: "fa-brands fa-python",         title: "Python",          desc: "Data analysis basics" },
    { icon: "fa-solid fa-chart-line",      title: "Data Analysis",   desc: "Statistical & operational" },
    { icon: "fa-solid fa-chart-column",    title: "Dashboard Dev",   desc: "Excel & visual reporting" },
    { icon: "fa-solid fa-warehouse",       title: "Inventory Mgmt",  desc: "Multi-shift control" },
    { icon: "fa-solid fa-pen-ruler",       title: "AutoCAD / SketchUp", desc: "Technical design" },
  ],

  // ----------- EXPERIENCE -----------
  experience: [
    {
      date: "Aug 2026 – Present",
      title: "Business Planning & Sales Support Intern",
      company: "PT Serasi Autoraya",
      points: [
        "Supported business planning activities through performance monitoring and periodic review of business plan targets against actual performance.",
        "Prepared and consolidated branch-level data extracted from SAP for business performance reviews and coordination with Serasi Logistics branches.",
        "Analyzed expenditure data and identified anomalies requiring further clarification with respective branches.",
        "Developed a sales performance dashboard to monitor project progress, sales achievements, and salesperson performance.",
      ],
    },
    {
      date: "Sept 2025 – Present",
      title: "Assistant Laboratory — System Engineering & Industrial Policy Analysis",
      company: "Universitas Sebelas Maret",
      points: [
        "Assisted laboratory sessions on system modeling, programming, and industrial data analysis.",
        "Supported students in data processing and machine learning applications for industrial cases.",
        "Contributed to laboratory documentation and improvement of automation learning materials.",
      ],
    },
    {
      date: "Jan 2026 – Feb 2026",
      title: "Filling Plant Intern",
      company: "PT SMART Tbk (Sinarmas Agribusiness & Food)",
      points: [
        "Analyzed inefficiencies in multi-shift packaging inventory recording processes.",
        "Developed an inventory consolidation system using Power Query and Excel VBA, automating multi-file integration.",
        "Built an automated stock continuity mechanism, reducing manual reconciliation time by ~96%.",
        "Supported real-time IRI detection and dashboard-based inventory monitoring.",
      ],
    },
    {
      date: "Feb 2026 – Present",
      title: "Freelance Technical Designer",
      company: "Commercial Poultry Project",
      points: [
        "Designed site layouts and facility visualizations using AutoCAD, SketchUp, and Lumion.",
        "Supported technical planning and documentation for poultry infrastructure development.",
      ],
    },
    {
      date: "Apr 2025 – June 2025",
      title: "Head of Media Division",
      company: "INSTING FT UNS 2025",
      points: [
        "Led media coordination and publication planning for a faculty-level engineering competition.",
        "Managed branding, visual communication, and publication workflows.",
      ],
    },
    {
      date: "Apr 2025 – June 2025",
      title: "Creative Staff",
      company: "Peduly Surakarta",
      points: [
        "Created engaging Instagram & TikTok content on volunteerism and social issues.",
        "Designed visual assets — successfully increased account engagement and followers.",
      ],
    },
  ],

  // ----------- PROJECTS (tambah/edit di sini) -----------
  // 💡 Kalau project punya field "demo" atau "repo", SELURUH kartu otomatis
  //    bisa diklik & membuka link tersebut di tab baru. Demo diprioritaskan.
  //    Set "wip: true" untuk menampilkan badge 🚧 In Progress di samping judul.
  projects: [
    {
      title: "Packaging Inventory Control System — PT SMART Tbk",
      tags: ["Power Query", "Excel VBA", "Process Improvement", "ETL"],
      image: "assets/project-ptsmart.jpg",
      description: "Designed a low-cost digital inventory consolidation system for a multi-shift production environment. Automated 3-operator data integration, S_awal lookup, ΔS calculation, and real-time IRI detection. Reduced reconciliation time by 96% (52.4 min → 2.1 min) and achieved 100% anomaly detection.",
      demo: "https://www.linkedin.com/posts/alyssachalondra_packaging-operations-pt-smart-tbk-ugcPost-7466442767804682240-qSNu/",
      repo: "",
    },
     {
      title: "HR Attrition Dashboard — Power BI",
      tags: ["Power BI", "DAX", "Power Query", "HR Analytics"],
      image: "assets/project-powerbi-hr.png",
      description: "Interactive Power BI dashboard analyzing employee attrition across 1,470 employees (35 attributes from the IBM HR sample dataset). Built the full pipeline in Power Query — cleaning, type-casting, and engineering banded features (Age Group, Income Band, Distance Band) — then layered DAX measures for Attrition %, High-Risk headcount, and average tenure. Signature feature: an Employee Attrition Risk score (High / Medium / Low) that blends OverTime, JobSatisfaction, DistanceFromHome, and MonthlyIncome into a single retention-risk indicator. Visualized through combo charts (bar + line) by Department, Age Group, and OverTime, donut breakdowns by Gender and Risk, a Risk × OverTime heatmap matrix, and a custom tooltip page for drill-down — all in a navy-blue theme with a sidebar filter panel.",
      demo: "",
      repo: "https://github.com/alyssachalondra1/power-bi-hr-attrition.git",
    },
     {
      title: "Sloe — AI Internship Workspace",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini AI", "Vercel"],
      image: "assets/project-sloe.png",
      description:"AI-powered internship workspace designed to streamline the entire application process in one place. Users can import internship opportunities by uploading recruitment posters or pasting LinkedIn job links, where Google Gemini automatically extracts key details into a Kanban-style application tracker. Built collaborative group workspaces that allow students to share opportunities within their communities, enabling members to save shared listings directly into their personal trackers. Additional features include AI-powered job match scoring based on uploaded CVs, motivation letter generation, document checklists, reminders, and a lightweight gamification system (XP, streaks, levels, and mascot interactions) to encourage consistent applications. Developed with Next.js App Router, TypeScript, Tailwind CSS, Supabase Authentication & Database, Google Gemini AI, and deployed on Vercel.",
      demo: "https://sloe.my.id",
      repo: "https://github.com/alyssachalondra1/internquest.git",
    },
     {
      title: "Global Happiness Dashboard — Tableau",
      tags: ["Tableau", "Data Visualization", "Dashboard", "Analytics"],
      image: "assets/project-tableau.jpg",
      description: "Interactive Tableau dashboard exploring how GDP, health, and freedom shape global happiness (2015–2019). Built scatter plots, correlation analysis (R²), country rankings, and a world happiness map to surface the strongest drivers of well-being.",
      demo: "https://drive.google.com/drive/folders/1hm_9ak8z6WPFilQxgYxkfaJm0p3BT7K7?usp=sharing",
      repo: "",
    },
    {
      title: "Commercial Poultry Site Layout Design",
      tags: ["AutoCAD", "SketchUp", "Lumion", "Technical Design"],
      image: "assets/project-poultry.jpg",
      description: "Freelance project: designed site layouts and 3D facility visualizations for a commercial poultry operation. Delivered technical planning documents and realistic operational renders — silos, housing, access road, and perimeter fencing.",
      demo: "",
      repo: "",
    },
    // ➕ Tambah project baru? Copy block di atas dan ubah isinya.
  ],

  // ----------- CERTIFICATIONS & ACHIEVEMENTS -----------
  funFacts: [
    {
      icon: "🏅",
      title: "IBM Certified — Databases & SQL for Data Science with Python",
      desc: "Professional course covering relational databases, SQL fundamentals, and Python integration. Issued by IBM via Coursera.",
    },
    {
      icon: "🐍",
      title: "IBM Certified — Python for Data Science, AI & Development",
      desc: "Foundational Python certification for data analysis, automation, and application development. Issued by IBM via Coursera.",
    },
    {
      icon: "🌐",
      title: "TOEIC Score 835 — Advanced English Proficiency",
      desc: "Official TOEIC certificate by ETS, demonstrating strong professional English communication (April 2026).",
    },
    {
      icon: "🏆",
      title: "Semifinalist — Makara Business Plan Competition 2025",
      desc: "Selected as semifinalist in a national business plan competition organized by HIPMI PT Universitas Indonesia.",
    },
  ],

  // ----------- CONTACT -----------
  contact: {
    email: "alyssachalondra@gmail.com",
    phone: "+62 815 9182 757",
    location: "Surakarta, Central Java, Indonesia",
    linkedin: "linkedin.com/in/alyssachalondra",
  },

  // ----------- EMAILJS -----------
  emailjs: {
    publicKey:  "fg106hTHbsrnomGZr",   // 
    serviceId:  "service_p1pvqiq",   // 
    templateId: "template_q4na4rp",  // 
  },
};
