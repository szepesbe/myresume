// Fordítási kulcsok
const translations = {
    hu: {
      // Navigáció
      navWho: "Ki vagyok?",
      navContact: "Elérhetőség",
      navEducation: "Tanulmányok",
      navEmployment: "Tapasztalat",
      navSkills: "Szakma",
      navHobbies: "Szabadidő",
  
      // Tartalom
      welcome: "Szia,",
      name: "SZEPESVÁRI BENCE",
      iam: "vagyok.",
      title: "projekt menedzser / product owner",
      contactTitle: "Hol találsz meg?",
      educationTitle: "Hol tanultam?",
      employmentTitle: "Hol dolgoztam?",
      skillsTitle: "Mivel foglalkozom?",
      hobbiesTitle: "Mivel töltöm a szabadidőm?",
      email: "bence.szepesvari@gmail.com",
      phone: "+36302400617",
      location: "Budapest",
      educationText: "<p>Gazdasági informatika szak<br>e-business szakirány<br>Budapesti Corvinus Egyetem<br>2004-2009</p>",
      footerText: "Copyright © 2024 Szepesvári Bence. Minden jog fenntartva.",
  
      // Munkatapasztalat
      wecanTitle: "Termékfelelős / Tesztcsapat vezető",
      wecanDesc: "Dubaji székhelyű streaming szolgáltató (agilis) fejlesztéseinek, valamint automatizált teszteléseinek koordinálása.",
      mvmTitle: "Üzleti elemző / Projekt menedzser",
      mvmDesc: "Fejlesztésekkel kapcsolatos üzleti igények felmérése. MVM cégcsoport portál redesign projekt felügyelete.",
      otpTitle: "Rendszerszervező",
      otpDesc: "Online számlanyitás, áruhitel és ingatlanhitel fejlesztések teljeskörű menedzselése.",
      telekomTitle: "E-business menedzser",
      telekomDesc: "KKV szektorban online selfcare és sales fejlesztések menedzselése üzleti igényfelmérésétől élesítésig.",
      bcaTitle: "IT tanácsadó",
      bcaDesc: "Üzleti igények felmérése, tervezési / fejlesztési / oktatási feladatok koordinálása.",
  
      //Szakma
      tasklisting: "Feladat összeírás",
      organizing: "Szervezés",
      emailing: "Emailezés",
      meeting: "Megbeszélés",
      planning: "Tervezés",
      specifying: "Specifikálás",
      presenting: "Prezentálás",
      communication: "Kapcsolat-tartás",
      handling: "Intézkedés",
      workflowdesign: "Workflow kialakítás",
      ticketing: "Ticketelés",
      taskmanagement: "Feladat menedzselés",
      agile: "Agilis fejlesztés",

      // Hobbik
      cycling: "Biciklizés",
      travel: "Utazás",
      winter: "Téli nyaralás",
      hiking: "Túrázás",
      gym: "Kondi",
      cafe: "Kávézás",
      food: "Jókat enni",
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      node: "NodeJS",
      flutter: "Flutter",
      
      //Footer
      footer: "Szepesvári Bence. Minden Jog Fenntartva.",
    },
    en: {
      // Navigation
      navWho: "Who am I?",
      navContact: "Contact",
      navEducation: "Education",
      navEmployment: "Experience",
      navSkills: "Skills",
      navHobbies: "Hobbies",
  
      // Content
      welcome: "Hi, I'm",
      name: "BENCE SZEPESVÁRI",
      iam: "",
      title: "project manager / product owner",
      contactTitle: "Where can you find me?",
      educationTitle: "Where did I study?",
      employmentTitle: "Where did I work?",
      skillsTitle: "What do I do?",
      hobbiesTitle: "What do I do in my free time?",
      email: "bence.szepesvari@gmail.com",
      phone: "+36302400617",
      location: "Budapest, Hungary",
      educationText: "<p>Business Informatics BSc<br>E-business specialization<br>Corvinus University of Budapest<br>2004-2009</p>",
      footerText: "Copyright © 2024 Szepesvári Bence. All Rights Reserved.",
  
      // Work Experience
      wecanTitle: "Product owner / Test-team lead",
      wecanDesc: "Coordinating agile development and automated testing for a Dubai-based streaming service.",
      mvmTitle: "Business analyst / Project manager",
      mvmDesc: "Business analysis and supervision of the MVM corporate portal redesign project.",
      otpTitle: "System analyst",
      otpDesc: "End-to-end management of online account opening, consumer loan, and mortgage developments.",
      telekomTitle: "E-business manager",
      telekomDesc: "Managing online selfcare and sales developments for SMEs, from requirements to go-live.",
      bcaTitle: "IT consultant",
      bcaDesc: "Business needs analysis and coordination of IT development/training projects.",
  
      // Skills
      tasklisting: "Task Listing",
      organizing: "Organizing",
      emailing: "Emailing",
      meeting: "Meeting",
      planning: "Planning",
      specifying: "Specifying",
      presenting: "Presenting",
      communication: "Communi-cation",
      handling: "Task handling",
      workflowdesign: "Workflow design",
      ticketing: "Ticketing",
      taskmanagement: "Task management",
      agile: "Agile development",

      // Hobbies
      cycling: "Cycling",
      travel: "Travel",
      winter: "Winter Holidays",
      hiking: "Hiking",
      gym: "Gym",
      cafe: "Café Hopping",
      food: "Foodie Adventures",
      html: "HTML",
      css: "CSS",
      js: "Javascript",
      node: "NodeJS",
      flutter: "Flutter",

      //Footer
      footer: "Bence Szepesvári. All Rights Reserved.",
    }
  };
  
  // Nyelvkezelés
  let currentLang = localStorage.getItem('lang') || 'hu';
  
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Szövegek frissítése
    document.querySelectorAll('[data-translate]').forEach(el => {
      if (!el.classList.contains('image-container')) { // Kizárja az image-container-t
        const key = el.getAttribute('data-translate');
        el.innerHTML = translations[lang][key];
      }
    });
  
    // Képek alt szövegei
    document.querySelectorAll('.image-container').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('data-alt', translations[lang][key]);
      }
    });
  
    // Aktív gomb stílusa
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }
  
  // Eseménykezelők
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  
  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.hiddenanimation').forEach(el => observer.observe(el));
  
  // Flip animációk
  document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', () => {
      container.classList.toggle('flip');
      container.querySelector('.logo-activity').classList.toggle('flip');
    });
  });
  
  // Oldal betöltése
  setLanguage(currentLang);