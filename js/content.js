const cvUrl = "./J.%20Exauce%CC%81%20Jackson%20LOUNTADILADIO.pdf";
const certificateUrl = (filename) => encodeURI(`./Certifications/${filename}`);
const projectImages = (filenames) => filenames.map((filename) => encodeURI(`./Proof of work/${filename}`));

const proofOfWork = {
  briefing: projectImages(["Briefing.png", "Briefing2.png", "Briefing3.png", "Briefing4.png", "Briefing5.png", "Briefing6.png"]),
  cimConvert: projectImages(["CimConvert.png"]),
  cimStage: projectImages(["CimStage.png", "CimStage2.png", "CimStage3.png"]),
  flowConvert: projectImages(["Flowconvert.jpeg"]),
  focuss: projectImages(["Focus.png", "Focus2.png", "Focus3.png", "Focus4.png"]),
  mccat: projectImages(["MCCAT.png", "MCCAT2.png"]),
  raphael: projectImages(["Raphael.jpeg"]),
  sankara: projectImages(["Sankara.png"])
};

export const translations = {
  fr: {
    loading: "Préparation de l’espace",
    motion: "Mouvement",
    mainNavigation: "Navigation principale",
    openMenu: "Ouvrir le menu",
    stageLabel: "Explorer le bureau",
    hotspotsLabel: "Objets interactifs du bureau",
    location: "L’espace de travail",
    heroEyebrow: "INGÉNIEUR LOGICIEL",
    heroTitle: "J. Exaucé Jackson LOUNTADILADIO",
    heroDescription: "Développeur fullstack spécialisé dans la conception et la mise en production de systèmes numériques robustes.",
    explore: "Explorer le bureau",
    footerNote: "UNE EXPLORATION INTERACTIVE DU PARCOURS",
    copyright: "© {year} J. Exaucé Jackson LOUNTADILADIO. Tous droits réservés.",
    hotspotHint: "Cliquez sur un repère lumineux pour ouvrir une rubrique",
    backToOffice: "Retour au bureau",
    nav: {
      about: "À propos",
      expertise: "Expertise",
      projects: "Projets",
      experience: "Expérience",
      education: "Formation",
      contact: "Contacts"
    },
    objects: {
      desk: "À propos",
      skills: "Expertise",
      computer: "Projets",
      books: "Formation",
      documents: "Expérience",
      phone: "Contacts"
    },
    objectHints: {
      desk: "Identité & vision",
      skills: "Compétences techniques",
      computer: "Réalisations à l’écran",
      books: "Certifications",
      documents: "Expériences professionnelles",
      phone: "Réseaux professionnels"
    },
    placeholderShots: {
      office: "",
      detail: "Perspective rapprochée · même espace, cadrage de l’objet sélectionné"
    },
    labels: {
      about: "À PROPOS",
      expertise: "EXPERTISE",
      skillsBoard: "COMPÉTENCES TECHNIQUES",
      projects: "PROJETS",
      experience: "EXPÉRIENCE",
      education: "FORMATION & CERTIFICATIONS",
      contact: "CONTACTS",
      position: "VISION",
      studies: "FORMATION",
      certifications: "CERTIFICATIONS",
      languages: "LANGUES",
      training: "FORMATION COMPLÉMENTAIRE",
      viewProject: "Voir le projet",
      projectScreenshot: "Capture d’écran",
      showMoreScreenshots: "Voir les autres captures",
      hideScreenshots: "Masquer les captures",
      viewCertificate: "Voir la certification",
      downloadCV: "Télécharger mon CV"
    },
    content: {
      aboutTitle: "Conception et mise en production.",
      aboutBody: "Développeur fullstack spécialisé dans la conception et la mise en production de systèmes numériques robustes pour des institutions publiques et des organisations privées. J’interviens sur l’ensemble du cycle de vie produit, de l’analyse stratégique des besoins à l’architecture, jusqu’au développement, avec une approche orientée performance, fiabilité et impact opérationnel.",
      aboutVision: "Performance, fiabilité et impact opérationnel.",
      cvUrl,
      expertiseTitle: "Compétences techniques.",
      expertiseBody: "Frameworks, langages, bases de données, CMS, outils de développement et méthodologies.",
      skills: [
        ["Frameworks", "Frameworks et environnements applicatifs utilisés en développement.", ["Laravel", "Electron", "Streamlit"]],
        ["Langages", "Langages de programmation et technologies web.", ["PHP", "SQL", "JavaScript", "Python", "C", "HTML", "CSS"]],
        ["Bases de données & CMS", "Gestion de données relationnelles et systèmes de gestion de contenu.", ["MySQL", "PostgreSQL", "WordPress"]],
        ["Outils de développement", "Environnements, gestion de code et outils de bases de données.", ["Git", "GitHub", "Visual Studio Code", "Oracle SQL Developer", "XAMPP", "Laragon", "WampServer", "pgAdmin", "Composer", "Cursor", "PyCharm", "Node.js"]],
        ["Outils complémentaires", "Outils de conception, de collaboration, de support et de déploiement.", ["Microsoft 365", "GanttProject", "Figma", "StarUML", "Cisco Secure Client", "Zoom", "Google Drive", "Vercel", "Resend", "Cisco Packet Tracer", "LibreOffice", "Netlify"]],
        ["Méthodologies", "Approches de travail et cycles de développement.", ["Agile", "Cascade", "2TUP", "Cycle en V"]]
      ],
      projectsTitle: "Des projets ancrés dans le réel.",
      projectsBody: "Projets et réalisations en intelligence artificielle, développement web et logiciel desktop.",
      projects: [
        {
          year: "2025",
          type: "Application web",
          title: "MCCAT E-Stage",
          description: "Conception, développement et intégration d’une plateforme de gestion des stages pour le Ministère de la Communication, de la Culture, des Arts et du Tourisme du Burkina Faso.",
          technologies: ["Laravel", "PHP", "PostgreSQL", "AdminLTE"],
          images: proofOfWork.mccat,
          url: null
        },
        {
          year: "",
          type: "Site web institutionnel",
          title: "Mémorial Thomas Sankara",
          description: "Contribution au site officiel du Mémorial Thomas Sankara, avec des améliorations de référencement et d’accessibilité.",
          technologies: ["WordPress", "SEO", "Accessibilité"],
          images: proofOfWork.sankara,
          url: "https://memorialsankara.bf"
        },
        {
          year: "",
          type: "Plateforme web",
          title: "CIMBURKINA — Portail des stages",
          description: "Plateforme de gestion des stages conçue pour centraliser les processus internes et le suivi administratif.",
          technologies: ["Laravel", "PostgreSQL"],
          images: proofOfWork.cimStage,
          url: null
        },
        {
          year: "",
          type: "Plateforme IA conversationnelle",
          title: "Raphael",
          description: "Plateforme d’IA conversationnelle et orchestrateur multi-modèles : conception d’un chatbot exploitant dynamiquement plusieurs API d’IA pour croiser les capacités de réflexion et optimiser la qualité des réponses.",
          technologies: ["API d’IA"],
          images: proofOfWork.raphael,
          url: "https://raphael-ia.vercel.app"
        },
        {
          year: "",
          type: "Application desktop",
          title: "FlowConvert",
          description: "Application desktop de conversion de formats de fichiers distribuée via GitHub (V1 publique).",
          technologies: ["Electron", "Node.js"],
          images: proofOfWork.flowConvert,
          url: "https://github.com/Callmexau/FlowConvert/releases/tag/v1.0.0"
        },
        {
          year: "",
          type: "Application desktop",
          title: "CIMBURKINA Convert",
          description: "Convertisseur de documents Word et Excel vers PDF, réalisé durant mon stage chez CIMBURKINA.",
          technologies: ["Electron", "Node.js"],
          images: proofOfWork.cimConvert,
          url: null
        },
        {
          year: "",
          type: "Application web",
          title: "Focuss",
          description: "Application web de gestion des tâches basée sur la matrice d’Eisenhower, avec interface de planification et calendrier intégré. Version 1 fonctionnelle.",
          technologies: [],
          images: proofOfWork.focuss,
          url: null
        },
        {
          year: "",
          type: "Outil web",
          title: "Briefing",
          description: "Outil web de qualification de projets clients : formulaire guidé pour transformer une idée floue en brief structuré, permettant au développeur de choisir ses projets intelligemment.",
          technologies: [],
          images: proofOfWork.briefing,
          url: "https://github.com/Callmexau/Briefing.git"
        }
      ],
      experienceTitle: "Expériences professionnelles.",
      experienceBody: "Expériences en ingénierie logicielle et en support informatique.",
      experience: [
        {
          organization: "Ecobank (Congo)",
          role: "Ingénieur logiciel & Technicien support IT stagiaire",
          period: "Mai 2026 – Novembre 2026",
          achievements: [
            "Conception et développement d’une plateforme sécurisée de monitoring, de suivi et d’alerte automatisée des transactions bancaires (Laravel + MySQL).",
            "Extraction de données avec Oracle SQL Developer et SQL.",
            "Support de proximité, maintenance et gestion du parc informatique.",
            "Assistance à la configuration de guichets automatiques bancaires (GAB).",
            "Tests fonctionnels des GAB pour valider les opérations de retrait et de dépôt.",
            "Gestion des incidents sur les applications métiers du Groupe Ecobank via un outil d’ITSM et de ticketing.",
            "Participation aux opérations d’infogérance pour le renouvellement du parc d’impression."
          ]
        },
        {
          organization: "CIMBURKINA",
          role: "Ingénieur logiciel & Technicien support IT stagiaire",
          period: "Décembre 2025 – Avril 2026",
          achievements: [
            "Conception et développement d’une plateforme de gestion des stages pour centraliser les processus internes et le suivi administratif (Laravel + PostgreSQL).",
            "Support de proximité, maintenance et gestion du parc informatique.",
            "Développement d’une application multiplateforme (web et desktop) de conversion de formats de fichiers (Electron + Node.js).",
            "Audit de vulnérabilités de premier niveau et sensibilisation du personnel aux bonnes pratiques de sécurité informatique."
          ]
        },
        {
          organization: "Ministère de la Communication, de la Culture, des Arts et du Tourisme (MCCAT) — Burkina Faso",
          role: "Ingénieur logiciel stagiaire",
          period: "Avril 2025 – Juin 2025",
          achievements: [
            "Conception et développement d’une plateforme de gestion des stages, optimisant le traitement des dossiers administratifs (Laravel + PostgreSQL).",
            "Participation à la création du site officiel du Mémorial Thomas Sankara, avec optimisation du SEO et de l’accessibilité (WordPress) : memorialsankara.bf.",
            "Conception de modules de suivi.",
            "Tests fonctionnels des logiciels afin de garantir la stabilité des livrables."
          ]
        }
      ],
      educationTitle: "Formation & certifications.",
      educationBody: "Licence en Technologie du génie informatique · Université Aube Nouvelle, Ouagadougou (Burkina Faso) · 2022–2025.",
      training: { title: "Introduction à IPv6", institution: "Association Burkinabè des Domaines Internet (ABDI)" },
      languages: [["Français", "Natif"], ["Anglais", "Courant"]],
      certifications: [
        { title: "Agile Project Management", issuer: "Coursera", url: certificateUrl("Coursera Agile Project Management.pdf") },
        { title: "Assets, Threats, and Vulnerabilities", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Assets, Threats, and Vulnerabilities.pdf") },
        { title: "Automate Cybersecurity Tasks with Python", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Automate Cybersecurity Tasks with Python.pdf") },
        { title: "Capstone: Applying Project Management in the Real World", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Capstone Applying Project Management in the Real World.pdf") },
        { title: "Connect and Protect: Networks and Network Security", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Connect and Protect Networks and Network Security.pdf") },
        { title: "Cybersecurity for Everyone", issuer: "Coursera", url: certificateUrl("Coursera Cybersecurity for everyone.pdf") },
        { title: "Foundations of Cybersecurity", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Foundations of Cybersecurity.pdf") },
        { title: "Foundations of Project Management", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Foundations of Project Management.pdf") },
        { title: "Generative AI for Everyone", issuer: "Coursera", url: certificateUrl("Coursera Generative AI for Everyone.pdf") },
        { title: "IA pour tous", issuer: "Coursera", url: certificateUrl("Coursera IA pour tous.pdf") },
        { title: "IBM Data Engineering", issuer: "Coursera · IBM", url: certificateUrl("Coursera IBM Data Engineering.pdf") },
        { title: "Play It Safe: Manage Security Risks", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Play It Safe Manage Security Risks.pdf") },
        { title: "Project Execution: Running the Project", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Project Execution Running the Project.pdf") },
        { title: "Project Initiation: Starting a Successful Project", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Project Initiation Starting a Succesful Project.pdf") },
        { title: "Project Planning: Putting It All Together", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Project Planning Put It Together.pdf") },
        { title: "Put It to Work: Prepare for Cybersecurity Jobs", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Put It to Work Prepare for Cybersecurity Jobs.pdf") },
        { title: "Sound the Alarm: Detection and Response", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Sound the Alarm Detection and Response.pdf") },
        { title: "Tools of the Trade: Linux and SQL", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Tools of the Trade Linux and SQL.pdf") },
        { title: "Google Cybersecurity", issuer: "Google · Coursera", url: certificateUrl("Google Cybersecurity.pdf") },
        { title: "Google Cybersecurity Certificate Badge (1)", issuer: "Google · Coursera", url: certificateUrl("GoogleCybersecurityCertificateV2_Badge20250330-26-if4r4e.pdf") },
        { title: "Google Cybersecurity Certificate Badge (2)", issuer: "Google · Coursera", url: certificateUrl("GoogleCybersecurityCertificateV2_Badge20250330-26-ycveb8.pdf") },
        { title: "Google Marketing Digital", issuer: "Google", url: certificateUrl("Google Marketing Digital.pdf") },
        { title: "Google Project Management", issuer: "Google · Coursera", url: certificateUrl("Google Project Management.pdf") },
        { title: "IBM Data Engineering Essentials", issuer: "IBM · Coursera", url: certificateUrl("IBM Data Engineering Essentials.pdf") }
      ],
      contactTitle: "Mes coordonnées.",
      contactBody: "E-mail et profils professionnels.",
      contactItems: [
        { label: "E-mail", value: "exaucejacksonl@gmail.com", href: "mailto:exaucejacksonl@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/exaucéjacksonl", href: "https://www.linkedin.com/in/exauc%C3%A9jacksonl", external: true },
        { label: "GitHub", value: "github.com/Callmexau", href: "https://github.com/Callmexau", external: true }
      ]
    }
  },
  en: {
    loading: "Preparing the space",
    motion: "Motion",
    mainNavigation: "Main navigation",
    openMenu: "Open menu",
    stageLabel: "Explore the office",
    hotspotsLabel: "Interactive office objects",
    location: "The workspace",
    heroEyebrow: "SOFTWARE ENGINEER",
    heroTitle: "J. Exaucé Jackson LOUNTADILADIO",
    heroDescription: "A full-stack developer specializing in the design and deployment of robust digital systems.",
    explore: "Explore the office",
    footerNote: "AN INTERACTIVE EXPLORATION OF MY JOURNEY",
    copyright: "© {year} J. Exaucé Jackson LOUNTADILADIO. All rights reserved.",
    hotspotHint: "Click a glowing marker to open a section",
    backToOffice: "Back to the office",
    nav: {
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    objects: {
      desk: "About",
      skills: "Expertise",
      computer: "Projects",
      books: "Education",
      documents: "Experience",
      phone: "Contact"
    },
    objectHints: {
      desk: "Identity & vision",
      skills: "Technical skills",
      computer: "Projects on the screens",
      books: "Certifications",
      documents: "Professional experience",
      phone: "Professional networks"
    },
    placeholderShots: {
      office: "",
      detail: "Closer perspective · same space, framing the selected object"
    },
    labels: {
      about: "ABOUT",
      expertise: "EXPERTISE",
      skillsBoard: "TECHNICAL SKILLS",
      projects: "PROJECTS",
      experience: "EXPERIENCE",
      education: "EDUCATION & CERTIFICATIONS",
      contact: "CONTACT",
      position: "VISION",
      studies: "EDUCATION",
      certifications: "CERTIFICATIONS",
      languages: "LANGUAGES",
      training: "ADDITIONAL TRAINING",
      viewProject: "View project",
      projectScreenshot: "Screenshot",
      showMoreScreenshots: "Show other screenshots",
      hideScreenshots: "Hide screenshots",
      viewCertificate: "View certificate",
      downloadCV: "Download my CV"
    },
    content: {
      aboutTitle: "Digital system design and production.",
      aboutBody: "A full-stack developer specializing in the design and deployment of robust digital systems for public institutions and private organizations. I work across the product lifecycle, from strategic needs analysis and architecture through development, with a focus on performance, reliability and operational impact.",
      aboutVision: "Performance, reliability and operational impact.",
      cvUrl,
      expertiseTitle: "Technical skills.",
      expertiseBody: "Frameworks, languages, databases, CMS platforms, development tools and methodologies.",
      skills: [
        ["Frameworks", "Frameworks and application environments used in software development.", ["Laravel", "Electron", "Streamlit"]],
        ["Languages", "Programming languages and web technologies.", ["PHP", "SQL", "JavaScript", "Python", "C", "HTML", "CSS"]],
        ["Databases & CMS", "Relational data management and content management systems.", ["MySQL", "PostgreSQL", "WordPress"]],
        ["Development tools", "Development environments, source control and database tools.", ["Git", "GitHub", "Visual Studio Code", "Oracle SQL Developer", "XAMPP", "Laragon", "WampServer", "pgAdmin", "Composer", "Cursor", "PyCharm", "Node.js"]],
        ["Additional tools", "Design, collaboration, support and deployment tools.", ["Microsoft 365", "GanttProject", "Figma", "StarUML", "Cisco Secure Client", "Zoom", "Google Drive", "Vercel", "Resend", "Cisco Packet Tracer", "LibreOffice", "Netlify"]],
        ["Methodologies", "Project approaches and software development lifecycles.", ["Agile", "Waterfall", "2TUP", "V-Model"]]
      ],
      projectsTitle: "Projects grounded in real needs.",
      projectsBody: "Projects and work spanning conversational AI, web development and desktop software.",
      projects: [
        {
          year: "2025",
          type: "Web application",
          title: "MCCAT E-Stage",
          description: "Designed, developed and integrated an internship-management platform for Burkina Faso’s Ministry of Communication, Culture, Arts and Tourism.",
          technologies: ["Laravel", "PHP", "PostgreSQL", "AdminLTE"],
          images: proofOfWork.mccat,
          url: null
        },
        {
          year: "",
          type: "Institutional website",
          title: "Thomas Sankara Memorial",
          description: "Contributed to the official Thomas Sankara Memorial website, including search-engine and accessibility improvements.",
          technologies: ["WordPress", "SEO", "Accessibility"],
          images: proofOfWork.sankara,
          url: "https://memorialsankara.bf"
        },
        {
          year: "",
          type: "Web platform",
          title: "CIMBURKINA — Internship Portal",
          description: "An internship-management platform built to centralize internal processes and administrative tracking.",
          technologies: ["Laravel", "PostgreSQL"],
          images: proofOfWork.cimStage,
          url: null
        },
        {
          year: "",
          type: "Conversational AI platform",
          title: "Raphael",
          description: "A conversational AI platform and multi-model orchestrator: a chatbot dynamically uses multiple AI APIs to combine reasoning capabilities and improve response quality.",
          technologies: ["AI APIs"],
          images: proofOfWork.raphael,
          url: "https://raphael-ia.vercel.app"
        },
        {
          year: "",
          type: "Desktop application",
          title: "FlowConvert",
          description: "A desktop file-format conversion application distributed via GitHub (public V1 release).",
          technologies: ["Electron", "Node.js"],
          images: proofOfWork.flowConvert,
          url: "https://github.com/Callmexau/FlowConvert/releases/tag/v1.0.0"
        },
        {
          year: "",
          type: "Desktop application",
          title: "CIMBURKINA Convert",
          description: "A Word and Excel to PDF document converter developed during my internship at CIMBURKINA.",
          technologies: ["Electron", "Node.js"],
          images: proofOfWork.cimConvert,
          url: null
        },
        {
          year: "",
          type: "Web application",
          title: "Focuss",
          description: "An Eisenhower-matrix task management web app with a planning interface and integrated calendar. Functional V1.",
          technologies: [],
          images: proofOfWork.focuss,
          url: null
        },
        {
          year: "",
          type: "Web tool",
          title: "Briefing",
          description: "A client-project qualification tool with a guided form that turns an initial idea into a structured brief, helping developers choose projects thoughtfully.",
          technologies: [],
          images: proofOfWork.briefing,
          url: "https://github.com/Callmexau/Briefing.git"
        }
      ],
      experienceTitle: "Professional experience.",
      experienceBody: "Experience in software engineering and IT support.",
      experience: [
        {
          organization: "Ecobank (Congo)",
          role: "Software Engineer & IT Support Intern",
          period: "May 2026 – November 2026",
          achievements: [
            "Designed and developed a secure monitoring, tracking and automated alerting platform for banking transactions (Laravel + MySQL).",
            "Extracted database data with Oracle SQL Developer and SQL.",
            "Provided user support, maintenance and IT asset management.",
            "Assisted with configuring automated teller machines (ATMs).",
            "Performed functional ATM tests to validate withdrawals and deposits.",
            "Managed incidents for Ecobank Group business applications using ITSM and ticketing tools.",
            "Participated in outsourcing operations for the printer fleet renewal."
          ]
        },
        {
          organization: "CIMBURKINA",
          role: "Software Engineer & IT Support Intern",
          period: "December 2025 – April 2026",
          achievements: [
            "Designed and developed an internship-management platform to centralize internal processes and administrative tracking (Laravel + PostgreSQL).",
            "Provided user support, maintenance and IT asset management.",
            "Developed a cross-platform (web and desktop) file-format conversion application (Electron + Node.js).",
            "Conducted first-level vulnerability audits and security-awareness sessions for staff."
          ]
        },
        {
          organization: "Ministry of Communication, Culture, Arts and Tourism (MCCAT) — Burkina Faso",
          role: "Software Engineer Intern",
          period: "April 2025 – June 2025",
          achievements: [
            "Designed and developed an internship-management platform to improve administrative file processing (Laravel + PostgreSQL).",
            "Contributed to the official Thomas Sankara Memorial website, including SEO and accessibility improvements (WordPress): memorialsankara.bf.",
            "Designed tracking modules.",
            "Performed functional software tests to help ensure stable deliverables."
          ]
        }
      ],
      educationTitle: "Education & certifications.",
      educationBody: "Bachelor’s degree in Computer Engineering Technology · Université Aube Nouvelle, Ouagadougou (Burkina Faso) · 2022–2025.",
      training: { title: "Introduction to IPv6", institution: "Association Burkinabè des Domaines Internet (ABDI)" },
      languages: [["French", "Native"], ["English", "Fluent"]],
      certifications: [
        { title: "Agile Project Management", issuer: "Coursera", url: certificateUrl("Coursera Agile Project Management.pdf") },
        { title: "Assets, Threats, and Vulnerabilities", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Assets, Threats, and Vulnerabilities.pdf") },
        { title: "Automate Cybersecurity Tasks with Python", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Automate Cybersecurity Tasks with Python.pdf") },
        { title: "Capstone: Applying Project Management in the Real World", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Capstone Applying Project Management in the Real World.pdf") },
        { title: "Connect and Protect: Networks and Network Security", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Connect and Protect Networks and Network Security.pdf") },
        { title: "Cybersecurity for Everyone", issuer: "Coursera", url: certificateUrl("Coursera Cybersecurity for everyone.pdf") },
        { title: "Foundations of Cybersecurity", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Foundations of Cybersecurity.pdf") },
        { title: "Foundations of Project Management", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Foundations of Project Management.pdf") },
        { title: "Generative AI for Everyone", issuer: "Coursera", url: certificateUrl("Coursera Generative AI for Everyone.pdf") },
        { title: "IA pour tous", issuer: "Coursera", url: certificateUrl("Coursera IA pour tous.pdf") },
        { title: "IBM Data Engineering", issuer: "Coursera · IBM", url: certificateUrl("Coursera IBM Data Engineering.pdf") },
        { title: "Play It Safe: Manage Security Risks", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Play It Safe Manage Security Risks.pdf") },
        { title: "Project Execution: Running the Project", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Project Execution Running the Project.pdf") },
        { title: "Project Initiation: Starting a Successful Project", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Project Initiation Starting a Succesful Project.pdf") },
        { title: "Project Planning: Putting It All Together", issuer: "Coursera · Google Project Management", url: certificateUrl("Coursera Project Planning Put It Together.pdf") },
        { title: "Put It to Work: Prepare for Cybersecurity Jobs", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Put It to Work Prepare for Cybersecurity Jobs.pdf") },
        { title: "Sound the Alarm: Detection and Response", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Sound the Alarm Detection and Response.pdf") },
        { title: "Tools of the Trade: Linux and SQL", issuer: "Coursera · Google Cybersecurity", url: certificateUrl("Coursera Tools of the Trade Linux and SQL.pdf") },
        { title: "Google Cybersecurity", issuer: "Google · Coursera", url: certificateUrl("Google Cybersecurity.pdf") },
        { title: "Google Cybersecurity Certificate Badge (1)", issuer: "Google · Coursera", url: certificateUrl("GoogleCybersecurityCertificateV2_Badge20250330-26-if4r4e.pdf") },
        { title: "Google Cybersecurity Certificate Badge (2)", issuer: "Google · Coursera", url: certificateUrl("GoogleCybersecurityCertificateV2_Badge20250330-26-ycveb8.pdf") },
        { title: "Google Digital Marketing", issuer: "Google", url: certificateUrl("Google Marketing Digital.pdf") },
        { title: "Google Project Management", issuer: "Google · Coursera", url: certificateUrl("Google Project Management.pdf") },
        { title: "IBM Data Engineering Essentials", issuer: "IBM · Coursera", url: certificateUrl("IBM Data Engineering Essentials.pdf") }
      ],
      contactTitle: "Contact details.",
      contactBody: "Email and professional profiles.",
      contactItems: [
        { label: "Email", value: "exaucejacksonl@gmail.com", href: "mailto:exaucejacksonl@gmail.com" },
        { label: "LinkedIn", value: "linkedin.com/in/exaucéjacksonl", href: "https://www.linkedin.com/in/exauc%C3%A9jacksonl", external: true },
        { label: "GitHub", value: "github.com/Callmexau", href: "https://github.com/Callmexau", external: true }
      ]
    }
  }
};

export const sectionOrder = ["about", "expertise", "projects", "experience", "education", "contact"];

export const sectionToScene = {
  about: "desk",
  expertise: "skills",
  projects: "computer",
  experience: "documents",
  education: "books",
  contact: "phone"
};
