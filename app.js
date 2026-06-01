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
      navDownload: "Letöltés",
  
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
      downloadTitle: "Letöltés",
      resumeLabel: "curriculum vitae",
      downloadButton: "letöltöm",
      email: "bence.szepesvari@gmail.com",
      phone: "+36302400617",
      location: "Budapest",
      educationText: "<p>Gazdasági informatika szak<br>e-business szakirány<br>Budapesti Corvinus Egyetem<br>2004-2009</p>",
      footerText: "Copyright © 2024 Szepesvári Bence. Minden jog fenntartva.",
  
      // Munkatapasztalat
      ittszabadTitle: "Termékfelelős / e2e implementáció",
      ittszabadDesc: '<a href="https://ittszabad.hu" class="card-link" target="_blank" rel="noopener noreferrer">ittszabad.hu</a> web/mobilalkalmazás üzleti és technikai tervezése/implementálása. Tesztelés/publikálás.',
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
      vibecoding: "Vibe coding",

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
      navDownload: "Download",
  
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
      downloadTitle: "Download",
      resumeLabel: "curriculum vitae",
      downloadButton: "download",
      email: "bence.szepesvari@gmail.com",
      phone: "+36302400617",
      location: "Budapest, Hungary",
      educationText: "<p>Business Informatics BSc<br>E-business specialization<br>Corvinus University of Budapest<br>2004-2009</p>",
      footerText: "Copyright © 2024 Szepesvári Bence. All Rights Reserved.",
  
      // Work Experience
      ittszabadTitle: "Product Owner / end-to-end implementation",
      ittszabadDesc: 'Business and technical design/implementation of <a href="https://ittszabad.hu" class="card-link" target="_blank" rel="noopener noreferrer">ittszabad.hu</a> web/mobile application. Testing and publishing.',
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
      vibecoding: "Vibe coding",

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
        if (translations[lang] && translations[lang][key]) {
          // Gomboknál textContent-et használunk, egyébként innerHTML-t
          if (el.tagName === 'BUTTON') {
            el.textContent = translations[lang][key];
          } else {
            el.innerHTML = translations[lang][key];
          }
        }
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
    
    // QR kód és letöltés gomb frissítése
    if (typeof window.updateDownloadSection === 'function') {
      window.updateDownloadSection(lang);
    }
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
  function setIconFlip(container, flipped) {
    const logo = container.querySelector('.logo-activity');
    container.classList.toggle('flip', flipped);
    if (logo) {
      logo.classList.toggle('flip', flipped);
    }
  }

  document.querySelectorAll('.image-container').forEach((container) => {
    container.addEventListener('click', () => {
      setIconFlip(container, !container.classList.contains('flip'));
    });
  });

  function isIconVisibleOnScreen(el) {
    const nav = document.getElementById('myTopnav');
    const navHeight = nav ? nav.offsetHeight : 0;
    const rect = el.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) return false;

    const visibleTop = Math.max(rect.top, navHeight);
    const visibleBottom = Math.min(rect.bottom, window.innerHeight);
    const visibleLeft = Math.max(rect.left, 0);
    const visibleRight = Math.min(rect.right, window.innerWidth);

    if (visibleBottom <= visibleTop || visibleRight <= visibleLeft) return false;

    const visibleArea =
      (visibleBottom - visibleTop) * (visibleRight - visibleLeft);
    const elementArea = rect.width * rect.height;

    return visibleArea / elementArea >= 0.35;
  }

  function getVisibleIcons(logoContainer) {
    return [...logoContainer.querySelectorAll('.image-container')].filter(
      (el) => el.dataset.autoFlipping !== 'true' && isIconVisibleOnScreen(el)
    );
  }

  function playRandomIconFlip(logoContainer, onSkipped) {
    const flipDelay = 700;
    const holdDuration = 1800;

    setTimeout(() => {
      const visible = getVisibleIcons(logoContainer);
      if (!visible.length) {
        if (typeof onSkipped === 'function') onSkipped();
        return;
      }

      const container =
        visible[Math.floor(Math.random() * visible.length)];
      container.dataset.autoFlipping = 'true';

      setIconFlip(container, true);
      setTimeout(() => {
        setIconFlip(container, false);
        delete container.dataset.autoFlipping;
      }, holdDuration);
    }, flipDelay);
  }

  function initLogoSectionAutoFlip(logoContainer) {
    if (!logoContainer) return;

    let canTrigger = true;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && canTrigger) {
            canTrigger = false;
            playRandomIconFlip(logoContainer, () => {
              canTrigger = true;
            });
          } else if (!entry.isIntersecting) {
            canTrigger = true;
          }
        });
      },
      { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
    );

    sectionObserver.observe(logoContainer);
  }

  function initLogoAutoFlips() {
    const skillsTitle = document.getElementById('skills');
    const hobbiesTitle = document.getElementById('hobbies');
    const skillsIcons = skillsTitle?.nextElementSibling;
    const hobbiesIcons = hobbiesTitle?.nextElementSibling;

    initLogoSectionAutoFlip(skillsIcons);
    initLogoSectionAutoFlip(hobbiesIcons);
  }
  
  // Sticky menü magassága → görgetési offset (anchor linkek, mobil + desktop)
  function updateNavScrollOffset() {
    const nav = document.getElementById('myTopnav');
    if (nav) {
      document.documentElement.style.setProperty('--nav-height', `${nav.offsetHeight}px`);
    }
  }
  window.updateNavScrollOffset = updateNavScrollOffset;

  function getScrollOffset() {
    updateNavScrollOffset();
    const paddingTop = parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop
    );
    return Number.isFinite(paddingTop) ? paddingTop : 0;
  }

  function scrollToHash(hash, behavior = 'smooth') {
    if (!hash || hash === '#') return;
    const target = document.querySelector(hash);
    if (!target) return;
    const offset = getScrollOffset();
    const top =
      window.pageYOffset + target.getBoundingClientRect().top - offset;
    window.scrollTo({ top: Math.max(0, top), behavior });
  }
  window.scrollToHash = scrollToHash;

  function closeMobileNav() {
    const nav = document.getElementById('myTopnav');
    if (nav) {
      nav.className = 'topnav';
    }
  }

  function initNavScroll() {
    updateNavScrollOffset();
    const nav = document.getElementById('myTopnav');
    if (nav && typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(updateNavScrollOffset).observe(nav);
    }

    document.querySelectorAll('.toptop a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const hash = link.getAttribute('href');
        closeMobileNav();
        // Mobil: menü bezárása után várunk egy layout-frissítésre, majd görgetünk
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToHash(hash);
          });
        });
      });
    });

    window.addEventListener('resize', updateNavScrollOffset);
    window.addEventListener('orientationchange', () => {
      setTimeout(updateNavScrollOffset, 150);
    });

    window.addEventListener('load', () => {
      if (location.hash) {
        scrollToHash(location.hash, 'auto');
      }
    });
  }

  // Oldal betöltése
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setLanguage(currentLang);
      initNavScroll();
      initLogoAutoFlips();
    });
  } else {
    setLanguage(currentLang);
    initNavScroll();
    initLogoAutoFlips();
  }