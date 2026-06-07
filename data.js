// ===========================================================
//  📝  EDIT FILE INI UNTUK MENGUBAH ISI WEBSITE
//  Tidak perlu sentuh HTML / CSS / JS lainnya.
// ===========================================================

const portfolioData = {
  // ----------- HERO / HOME -----------
  name: "Alyssa Chalondra Adimulyo",
  role: "Industrial Engineering Student | Data & Process Analyst",
  tagline: "I build data-driven operational solutions that improve inventory visibility and process efficiency in manufacturing environments.",
  socials: [
    { icon: "fa-brands fa-linkedin-in", url: "https://linkedin.com/in/alyssachalondra" },
    { icon: "fa-solid fa-envelope",    url: "mailto:alyssachalondra@gmail.com" },
    { icon: "fa-brands fa-instagram",  url: "https://instagram.com/" }, // ganti username
    { icon: "fa-brands fa-github",     url: "https://github.com/" },    // ganti username
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
  projects: [
    {
      title: "Packaging Inventory Control System — PT SMART Tbk",
      tags: ["Power Query", "Excel VBA", "Process Improvement", "ETL"],
      image: "assets/project-ptsmart.jpg", // pakai screenshot dashboard kamu
      description: "Designed a low-cost digital inventory consolidation system for a multi-shift production environment. Automated 3-operator data integration, S_awal lookup, ΔS calculation, and real-time IRI detection. Reduced reconciliation time by 96% (52.4 min → 2.1 min) and achieved 100% anomaly detection.",
      demo: "",   // optional: link demo / file
      repo: "",   // optional: link GitHub
    },
    {
      title: "Inventory Consolidation Research Paper",
      tags: ["Research", "Industrial Engineering", "Automation"],
      image: "",
      description: "Perancangan Sistem Konsolidasi Data Inventory Packaging Berbasis Power Query dan VBA untuk Akurasi Stok (Under submission, May 2026). Built a low-cost inventory control framework, reducing reconciliation time by ~96%.",
      demo: "",
      repo: "",
    },
    {
      title: "Commercial Poultry Site Layout Design",
      tags: ["AutoCAD", "SketchUp", "Lumion", "Technical Design"],
      image: "",
      description: "Freelance project: designed site layouts and facility visualizations for a commercial poultry operation. Delivered technical planning documents and 3D operational layouts.",
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

  // ----------- EMAILJS (isi setelah STEP 6) -----------
  emailjs: {
    publicKey:  "fg106hTHbsrnomGZr",   // ← ganti setelah daftar EmailJS
    serviceId:  "service_p1pvqiq",   // ← ganti
    templateId: "template_q4na4rp",  // ← ganti
  },
};
