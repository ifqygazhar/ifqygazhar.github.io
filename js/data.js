// Language configuration
const supportedLanguages = ["en", "id"];
const defaultLanguage = "id";

// Personal Information with multilanguage support
const personalInfo = {
  en: {
    name: "Ifqy Gifha Azhar",
    title: "Mobile Developer",
    description:
      "Mobile Developer and UI/UX Designer with experience in Flutter, Dart, and Kotlin. Experienced in cross-platform mobile application development and attractive user interface design. Passionate about creating user-friendly and performant mobile applications.",
    profileImage: "./assets/images/profile.jpeg",
    contacts: [
      {
        type: "email",
        value: "ifqygazhar@gmail.com",
        href: "mailto:ifqygazhar@gmail.com",
        icon: "fas fa-envelope",
      },
      {
        type: "phone",
        value: "+6285156298681",
        href: "tel:+6285156298681",
        icon: "fas fa-phone",
      },
      {
        type: "linkedin",
        value: "LinkedIn",
        href: "https://linkedin.com/in/ifqygazhar",
        icon: "fab fa-linkedin",
      },
      {
        type: "github",
        value: "GitHub",
        href: "https://github.com/ifqygazhar",
        icon: "fab fa-github",
      },
    ],
  },
  id: {
    name: "Ifqy Gifha Azhar",
    title: "Mobile Developer",
    description:
      "Mobile Developer dan UI/UX Designer dengan pengalaman dalam Flutter, Dart, dan Kotlin. Berpengalaman dalam pengembangan aplikasi mobile cross-platform dan desain antarmuka pengguna yang menarik. Passionate dalam menciptakan aplikasi mobile yang user-friendly dan performant.",
    profileImage: "./assets/images/profile.jpeg",
    contacts: [
      {
        type: "email",
        value: "ifqygazhar@gmail.com",
        href: "mailto:ifqygazhar@gmail.com",
        icon: "fas fa-envelope",
      },
      {
        type: "phone",
        value: "+6285156298681",
        href: "tel:+6285156298681",
        icon: "fas fa-phone",
      },
      {
        type: "linkedin",
        value: "LinkedIn",
        href: "https://linkedin.com/in/ifqygazhar",
        icon: "fab fa-linkedin",
      },
      {
        type: "github",
        value: "GitHub",
        href: "https://github.com/ifqygazhar",
        icon: "fab fa-github",
      },
    ],
  },
};

// Skills Data with multilanguage support
const skills = {
  en: [
    {
      category: "Mobile Development",
      color: "blue",
      items: ["Dart", "Kotlin", "Flutter", "Android Native"],
    },
    {
      category: "UI/UX Design",
      color: "purple",
      items: ["Figma", "UI/UX Designer", "Mobile Design", "Prototyping"],
    },
    {
      category: "Backend & Database",
      color: "green",
      items: [
        "PHP",
        "Laravel",
        "Golang",
        "Python",
        "MySQL",
        "SQLite",
        "Cloud Firebase",
      ],
    },
    {
      category: "Tools & Others",
      color: "orange",
      items: ["Linux", "Mac OS", "Windows", "Git", "Firebase", "Supabase"],
    },
  ],
  id: [
    {
      category: "Pengembangan Mobile",
      color: "blue",
      items: ["Dart", "Kotlin", "Flutter", "Android Native"],
    },
    {
      category: "Desain UI/UX",
      color: "purple",
      items: ["Figma", "UI/UX Designer", "Mobile Design", "Prototyping"],
    },
    {
      category: "Backend & Database",
      color: "green",
      items: [
        "PHP",
        "Laravel",
        "Golang",
        "Python",
        "MySQL",
        "SQLite",
        "Cloud Firebase",
      ],
    },
    {
      category: "Tools & Lainnya",
      color: "orange",
      items: ["Linux", "Mac OS", "Windows", "Git", "Firebase", "Supabase"],
    },
  ],
};

// Work Experience Data with multilanguage support
const workExperience = {
  en: [
    {
      position: "Freelance Mobile Developer",
      company: "Freelance",
      location: "Remote",
      period: "Mar 2023 - Present",
      responsibilities: [
        "Developing mobile applications using Dart and Flutter technologies",
        "Planning to upgrade skills to native Kotlin and Swift",
        "Working with clients to develop innovative mobile solutions",
        "Managing development projects from concept to deployment",
      ],
    },
    {
      position: "Flutter Developer",
      company: "Studyo.io - Math Games",
      location: "Remote",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Working in Flutter team for educational math game development",
        "Collaborating with team to create Essay platform",
        "AI implementation on platform using Firebase",
        "Managing Database and Authentication with Firebase",
      ],
    },
    {
      position: "Freelance UI/UX Designer",
      company: "Freelance",
      location: "Remote",
      period: "Mar 2019 - Mar 2022",
      responsibilities: [
        "Started freelance UI/UX career since high school",
        "Worked on various UI/UX design projects",
        "Collaborated with developers and clients individually and in teams",
        "Developed design systems and intuitive user interfaces",
      ],
    },
    {
      position: "WordPress Web Developer",
      company: "Freelance",
      location: "Remote",
      period: "Jun 2021 - Jul 2021",
      responsibilities: [
        "Developed school website using WordPress",
        "Created SMAN 12 Surabaya website (https://sman12sby.sch.id)",
        "WordPress theme and plugin customization",
        "Website maintenance and content updates",
      ],
    },
    {
      position: "UI/UX Designer",
      company: "PT Warung Usaha Indonesia",
      location: "Jakarta - Remote",
      period: "Jun 2020 - Jan 2021",
      responsibilities: [
        "Worked as UI/UX designer for bankwaqf application",
        "Developed applications for Malaysia and Indonesia",
        "Used Figma software tools for design",
        "Collaborated with development team for design implementation",
      ],
    },
    {
      position: "Flutter Developer",
      company: "Idcamp Dicoding",
      location: "Remote",
      period: "Sep 2023 - Mar 2024",
      responsibilities: [
        "Learned to create mobile applications using Flutter framework",
        "Mastered various case studies from beginner to intermediate level",
        "Developed Flutter mobile application portfolio",
        "Deepened best practices in mobile development",
      ],
    },
    {
      position: "Mobile Developer",
      company: "Bangkit Academy Cohort",
      location: "Remote",
      period: "Sep 2024 - Jan 2025",
      responsibilities: [
        "Learned Android Native Development using Kotlin",
        "Mastered Android Views (XML) and REST API consumption",
        "AI implementation for Android Native development",
        "Collaborated in mobile application development teams",
      ],
    },
    {
      position: "Flutter Developer",
      company: "PT Nongki Kreasi Bangsa",
      location: "Remote",
      period: "Feb 2025 - Apr 2025",
      responsibilities: [
        "Part of flutter developer team",
        "Helped company rewrite applications from native kotlin/java and swift to flutter",
        "Learned clean architecture and latest technologies",
        "Contributed to cross-platform application development",
      ],
    },
  ],
  id: [
    {
      position: "Freelance Mobile Developer",
      company: "Freelance",
      location: "Remote",
      period: "Mar 2023 - Present",
      responsibilities: [
        "Mengembangkan aplikasi mobile menggunakan teknologi Dart dan Flutter",
        "Berencana untuk upgrade skill ke native Kotlin dan Swift",
        "Bekerja dengan klien untuk mengembangkan solusi mobile yang inovatif",
        "Mengelola project development dari konsep hingga deployment",
      ],
    },
    {
      position: "Flutter Developer",
      company: "Studyo.io - Math Games",
      location: "Remote",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Bekerja dalam tim Flutter untuk pengembangan game edukasi matematika",
        "Berkolaborasi dengan tim untuk membuat platform Essay",
        "Implementasi AI pada platform menggunakan Firebase",
        "Mengelola Database dan Authentication dengan Firebase",
      ],
    },
    {
      position: "Freelance UI/UX Designer",
      company: "Freelance",
      location: "Remote",
      period: "Mar 2019 - Mar 2022",
      responsibilities: [
        "Memulai karir UI/UX freelance sejak SMA",
        "Bekerja pada berbagai proyek UI/UX design",
        "Berkolaborasi dengan developer dan klien secara individual maupun tim",
        "Mengembangkan design system dan user interface yang intuitif",
      ],
    },
    {
      position: "WordPress Web Developer",
      company: "Freelance",
      location: "Remote",
      period: "Jun 2021 - Jul 2021",
      responsibilities: [
        "Mengembangkan website sekolah menggunakan WordPress",
        "Membuat website SMAN 12 Surabaya (https://sman12sby.sch.id)",
        "Customization theme dan plugin WordPress",
        "Maintenance dan update konten website",
      ],
    },
    {
      position: "UI/UX Designer",
      company: "PT Warung Usaha Indonesia",
      location: "Jakarta - Remote",
      period: "Jun 2020 - Jan 2021",
      responsibilities: [
        "Bekerja sebagai UI/UX designer untuk aplikasi bankwaqf",
        "Mengembangkan aplikasi untuk Malaysia dan Indonesia",
        "Menggunakan Figma software tools untuk design",
        "Berkolaborasi dengan tim development untuk implementasi design",
      ],
    },
    {
      position: "Flutter Developer",
      company: "Idcamp Dicoding",
      location: "Remote",
      period: "Sep 2023 - Mar 2024",
      responsibilities: [
        "Belajar membuat aplikasi mobile menggunakan Flutter framework",
        "Menguasai berbagai case studies dari level beginner hingga intermediate",
        "Mengembangkan portfolio aplikasi mobile Flutter",
        "Mendalami best practices dalam mobile development",
      ],
    },
    {
      position: "Mobile Developer",
      company: "Bangkit Academy Cohort",
      location: "Remote",
      period: "Sep 2024 - Jan 2025",
      responsibilities: [
        "Belajar Android Native Development menggunakan Kotlin",
        "Menguasai Android Views (XML) dan konsumsi REST API",
        "Implementasi AI untuk Android Native development",
        "Berkolaborasi dalam tim pengembangan aplikasi mobile",
      ],
    },
    {
      position: "Flutter Developer",
      company: "PT Nongki Kreasi Bangsa",
      location: "Remote",
      period: "Feb 2025 - Apr 2025",
      responsibilities: [
        "Bagian dari tim flutter developer",
        "Membantu perusahaan rewrite aplikasi dari native kotlin/java dan swift ke flutter",
        "Mempelajari clean architecture dan teknologi terbaru",
        "Berkontribusi dalam pengembangan aplikasi cross-platform",
      ],
    },
  ],
};

// Education Data with multilanguage support
const education = {
  en: [
    {
      degree: "Computer and Network Engineering",
      institution: "SMK Negeri 1 Cijulang",
      location: "Pangandaran, West Java, Indonesia",
      period: "2019 - 2022",
      gpa: "Excellent",
    },
    {
      degree: "Informatics Engineering",
      institution: "University Technology Bandung",
      location: "Bandung, West Java, Indonesia",
      period: "2022 - Present",
      gpa: "In Progress",
    },
  ],
  id: [
    {
      degree: "Teknik Komputer dan Jaringan",
      institution: "SMK Negeri 1 Cijulang",
      location: "Pangandaran, Jawa Barat, Indonesia",
      period: "2019 - 2022",
      gpa: "Sangat Baik",
    },
    {
      degree: "Teknik Informatika",
      institution: "University Technology Bandung",
      location: "Bandung, Jawa Barat, Indonesia",
      period: "2022 - Sekarang",
      gpa: "Sedang Berlangsung",
    },
  ],
};

// Certifications Data (same for both languages)
const certifications = [
  {
    name: "CTF Cyber Security Competition (Nasional)",
    issuer: "Telkom University",
    year: "2020",
    certificateUrl:
      "https://drive.google.com/file/d/1Db1FmQ78haoXRUyxJ_hH2LUG2SrgluOE/view?usp=sharing",
  },
  {
    name: "Juara 1 Network Admin System Competition (Kabupaten)",
    issuer: "LKS SMK Negeri",
    year: "2021",
    certificateUrl:
      "https://drive.google.com/file/d/1_VK_I4HZNFo3J6EpEQrDYKW1V8qveh_z/view?usp=sharing",
  },
  {
    name: "Dart Basic",
    issuer: "Dicoding Indonesia",
    year: "2023",
    certificateUrl: "https://www.dicoding.com/certificates/07Z68RL6JXQR",
  },
  {
    name: "Flutter Developer Fundamental",
    issuer: "Dicoding Indonesia",
    year: "2023",
    certificateUrl: "https://www.dicoding.com/certificates/81P2V7KDJPOY",
  },
  {
    name: "Flutter Developer Intermediate",
    issuer: "Dicoding Indonesia",
    year: "2024",
    certificateUrl: "https://www.dicoding.com/certificates/53XEY5V3RPRN",
  },
  {
    name: "Kotlin for Android Developer",
    issuer: "Dicoding Indonesia",
    year: "2024",
    certificateUrl: "https://www.dicoding.com/certificates/GRX54KE63P0M",
  },
  {
    name: "Android Native Intermediate",
    issuer: "Bangkit Academy | Dicoding Indonesia",
    year: "2024",
    certificateUrl: "https://www.dicoding.com/certificates/2VX34RE4JZYQ",
  },
  {
    name: "Machine Learning for Mobile Developer",
    issuer: "Bangkit Academy | Dicoding Indonesia",
    year: "2024",
    certificateUrl: "https://www.dicoding.com/certificates/JMZV49VQ3XN9",
  },
  {
    name: "Bangkit Academy Graduate",
    issuer: "Bangkit Academy",
    year: "2025",
    certificateUrl:
      "https://drive.google.com/file/d/1gM5jSR5-8-NaDSSuletoPoTj73DVUVE7/view?usp=sharing",
  },
];

// Projects Data with multilanguage support
const projects = {
  en: [
    {
      id: "Job Scraper API",
      title: "Job Scraper Glints,Jobstreet,LinkedIn",
      description:
        "Creating API for scraping job data from various job sites like Glints, Jobstreet, and LinkedIn using Python and Flask.",
      image:
        "https://raw.githubusercontent.com/ifqygazhar/jobscraper-api/main/image/poster.webp",
      technologies: ["Python", "Flask", "Web Scraping", "REST API"],
      color: "blue",
      githubUrl: "https://github.com/ifqygazhar/jobscraper-api",
    },
    {
      id: "Isyara App",
      title: "Isyara App - Learn Sign Language",
      description:
        "Mobile application to help ordinary people recognize sign language with dictionary, quiz, and AI sign language translate features.",
      image: "./assets/images/isyara.png",
      technologies: ["Kotlin", "Android", "Tensorflow-lite", "CameraX"],
      color: "green",
      githubUrl: "https://github.com/Isyara-App",
    },
    {
      id: "Mangaloom",
      title: "Mangaloom - Read Comics for Free",
      description:
        "Free comic reading application with complete features and no ads!, Built with Flutter.",
      image: "./assets/images/mangaloom.png",
      technologies: [
        "Flutter",
        "Dart",
        "Drift (sqlite)",
        "riverpod",
        "Dio",
        "Shared Preferences",
        "auto route",
        "notification",
      ],
      color: "indigo",
      githubUrl: "#",
    },
    {
      id: "Sman 12",
      title: "SMAN 12 Surabaya Website",
      description:
        "Official school website with content management system using WordPress. Responsive design and user-friendly interface.",
      image: "./assets/images/sman12.png",
      technologies: ["WordPress", "PHP", "MySQL", "Elementor"],
      color: "purple",
      githubUrl: "https://sman12sby.sch.id/",
    },
    {
      id: "jumpdium",
      title: "Jumpdium Bypass Medium Premium",
      description:
        "Application to read Medium articles for free without premium limitations.",
      image: "./assets/images/jumpdium.png",
      technologies: ["Flutter", "WebView"],
      color: "orange",
      githubUrl: "https://github.com/ifqygazhar/jumpdium",
    },
    {
      id: "Mangapp",
      title: "Mangapp Read Comics for Free",
      description: "Free comic reading application",
      image: "./assets/images/banner.png",
      technologies: ["Flutter", "Bloc", "Dio", "SQLite", "Clean Architecture"],
      color: "orange",
      githubUrl: "https://github.com/ifqygazhar/mangap",
    },
  ],
  id: [
    {
      id: "Job Scraper API",
      title: "Job Scraper Glints,Jobstreet,LinkedIn",
      description:
        "Membuat API untuk scraping data pekerjaan dari berbagai situs lowongan kerja seperti Glints, Jobstreet, dan LinkedIn menggunakan Python dan Flask.",
      image:
        "https://raw.githubusercontent.com/ifqygazhar/jobscraper-api/main/image/poster.webp",
      technologies: ["Python", "Flask", "Web Scraping", "REST API"],
      color: "blue",
      githubUrl: "https://github.com/ifqygazhar/jobscraper-api",
    },
    {
      id: "Isyara App",
      title: "Isyara App - Belajar Bahasa Isyarat",
      description:
        "Aplikasi Mobile untuk membantu orang awam mengenal bahasa isyarat dengan fitur kamus,quiz,dan ai translate bahasa isyarat.",
      image: "./assets/images/isyara.png",
      technologies: ["Kotlin", "Android", "Tensorflow-lite", "CameraX"],
      color: "green",
      githubUrl: "https://github.com/Isyara-App",
    },
    {
      id: "Mangaloom",
      title: "Mangaloom - Baca Komik Gratis",
      description:
        "Aplikasi baca komik gratis dengan fitur lengkap dan tanpa iklan!, Dibuat dengan Flutter.",
      image: "./assets/images/mangaloom.png",
      technologies: [
        "Flutter",
        "Dart",
        "Drift (sqlite)",
        "riverpod",
        "Dio",
        "Shared Preferences",
        "auto route",
        "notification",
      ],
      color: "indigo",
      githubUrl: "#",
    },
    {
      id: "Sman 12",
      title: "SMAN 12 Surabaya Website",
      description:
        "Website resmi sekolah dengan sistem manajemen konten menggunakan WordPress. Responsive design dan user-friendly interface.",
      image: "./assets/images/sman12.png",
      technologies: ["WordPress", "PHP", "MySQL", "Elementor"],
      color: "purple",
      githubUrl: "https://sman12sby.sch.id/",
    },
    {
      id: "jumpdium",
      title: "Jumpdium Bypass Medium Premium",
      description:
        "Aplikasi untuk membaca artikel di Medium secara gratis tanpa batasan premium.",
      image: "./assets/images/jumpdium.png",
      technologies: ["Flutter", "WebView"],
      color: "orange",
      githubUrl: "https://github.com/ifqygazhar/jumpdium",
    },
    {
      id: "Mangapp",
      title: "Mangapp Baca Komik Gratis",
      description: "Aplikasi membaca komik gratis",
      image: "./assets/images/banner.png",
      technologies: ["Flutter", "Bloc", "Dio", "SQLite", "Clean Architecture"],
      color: "orange",
      githubUrl: "https://github.com/ifqygazhar/mangap",
    },
  ],
};

// UI Text translations
const uiTexts = {
  en: {
    // Navigation
    cv: "CV",
    projects: "Projects",
    contact: "Contact",

    // Sections
    skills: "Skills",
    workExperience: "Work Experience",
    education: "Education",
    certifications: "Certifications",
    myProjects: "My Projects",

    // Buttons and actions
    printCV: "Print CV",
    open: "Open",
    certificate: "Certificate",

    // Footer
    letsConnect: "Let's Connect",
    footerDescription:
      "Interested in working together? Feel free to reach out!",
    allRightsReserved: "All rights reserved.",

    // Notifications
    openingProject: "Opening project in new tab...",

    // Misc
    gpa: "GPA",
    present: "Present",
    inProgress: "In Progress",
  },
  id: {
    // Navigation
    cv: "CV",
    projects: "Proyek",
    contact: "Kontak",

    // Sections
    skills: "Keahlian",
    workExperience: "Pengalaman Kerja",
    education: "Pendidikan",
    certifications: "Sertifikasi",
    myProjects: "Proyek Saya",

    // Buttons and actions
    printCV: "Cetak CV",
    open: "Buka",
    certificate: "Sertifikat",

    // Footer
    letsConnect: "Mari Terhubung",
    footerDescription:
      "Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi!",
    allRightsReserved: "Semua hak dilindungi.",

    // Notifications
    openingProject: "Membuka proyek di tab baru...",

    // Misc
    gpa: "IPK",
    present: "Sekarang",
    inProgress: "Sedang Berlangsung",
  },
};

// Language management
let currentLanguage = defaultLanguage;

// Helper functions to get current language data
function getCurrentPersonalInfo() {
  return personalInfo[currentLanguage];
}

function getCurrentSkills() {
  return skills[currentLanguage];
}

function getCurrentWorkExperience() {
  return workExperience[currentLanguage];
}

function getCurrentEducation() {
  return education[currentLanguage];
}

function getCurrentProjects() {
  return projects[currentLanguage];
}

function getCurrentUITexts() {
  return uiTexts[currentLanguage];
}

function setLanguage(lang) {
  if (supportedLanguages.includes(lang)) {
    currentLanguage = lang;
    localStorage.setItem("selectedLanguage", lang);
    updateLanguageUI();
    // Re-render all content
    initializePage();
  }
}

function updateLanguageUI() {
  const languageButtons = document.querySelectorAll(".language-btn");
  languageButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.lang === currentLanguage) {
      btn.classList.add("active");
    }
  });
}

function initializeLanguage() {
  const savedLanguage =
    localStorage.getItem("selectedLanguage") || defaultLanguage;
  setLanguage(savedLanguage);
}
