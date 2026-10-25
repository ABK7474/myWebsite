// Strip "index.html" / ".html" from the address bar (kept on github.io, where clean URLs 404 on refresh)
(function cleanUrl() {
    try {
        if (location.hostname.includes('github.io') || location.protocol === 'file:') return;
        const path = location.pathname;
        const clean = path.replace(/index\.html$/, '').replace(/\.html$/, '');
        if (clean !== path) history.replaceState(null, '', (clean || '/') + location.search + location.hash);
    } catch (e) {}
})();

// Translations Dictionary
const translations = {
    tr: {
        'skip': 'İçeriğe geç',

        // Navigation
        'nav-home': 'Ana Sayfa',
        'nav-about': 'Hakkımda',
        'nav-projects': 'Projeler',
        'nav-achievements': 'Başarılarım',
        'nav-contact': 'İletişim',

        // Hero
        'hero-badge': 'Gazi Üniversitesi • 2. Sınıf Bilgisayar Mühendisliği',
        'hero-greeting': 'Merhaba, ben',
        'hero-subtitle': 'Gömülü sistemler, Edge AI ve düşük seviyeli yazılım geliştirme üzerine çalışan bilgisayar mühendisliği öğrencisi.',
        'hero-btn-achievements': 'Başarılarımı İncele',
        'hero-btn-contact': 'İletişime Geç',
        'hero-btn-cv': 'CV İndir',

        // About
        'about-tag': 'Hakkımda',
        'about-heading': 'Donanım ile yazılımın kesiştiği yerde.',
        'about-p1': 'Gazi Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Çalışmalarımı ağırlıklı olarak Gömülü Sistemler (Embedded Systems) ve Edge AI (Kenar Yapay Zeka) teknolojileri üzerinde yoğunlaştırıyorum.',
        'about-p2': 'Donanım ve yazılımın kesiştiği noktalarda; C, C++, Java ve Python dillerini kullanarak Nesne Yönelimli Programlama (OOP), Veri Yapıları ve Algoritma Optimizasyonu üzerine pratikler yapıyorum.',
        'about-p3': 'Hedefim, kısıtlı kaynaklara sahip mikrodenetleyici ve uç cihazlarda yüksek performansla çalışan akıllı sistem çözümleri geliştirmektir.',
        'stat-year-label': 'Sınıf',
        'stat-year-val': '2. Sınıf',
        'stat-year-sub': 'Bilgisayar Mühendisliği',
        'stat-cap-label': 'Çift Anadal (ÇAP)',
        'stat-cap-val': 'Elektrik-Elektronik Müh.',
        'stat-interests-label': 'İlgi Alanları',
        'stat-int-1': 'Gömülü Sistemler',
        'stat-int-2': 'Edge AI',
        'stat-int-3': 'Makine Öğrenmesi',
        'stat-int-4': 'Siber Güvenlik',
        'stat-int-5': 'Bilgisayar Ağları',
        'stack-label': 'Diller',
        'hl-label': 'Öne Çıkanlar',
        'hl-yks': 'YKS Sayısal Türkiye sıralaması',
        'hl-rank-num': '4.',
        'hl-rank': 'sıradan bölüme giriş',
        'hl-b2': 'B2 İngilizce hazırlık, finalsiz muafiyet',
        'hl-link': 'Tüm zaman çizelgesi',
        'now-label': 'Şu An',

        // Projects
        'projects-tag': 'Projeler',
        'projects-title': 'Üzerinde çalıştıklarım.',
        'project-code': 'Kaynak kod',
        'project-demo': 'Demo',

        // Achievements Page
        'ach-doc-title': 'Başarılarım — Ahmet Burak Kaynak',
        'ach-tag': 'Dereceler & Kilometre Taşları',
        'ach-title': 'Yıl yıl başarılarım ve gelecek hedeflerim',
        'ach-subtitle': 'YKS derecemden lisans akademisine, çift anadal (ÇAP) hedeflerimden mezuniyet vizyonuma zaman akışı.',
        'ach-status-completed': 'Tamamlandı',
        'ach-status-active': 'Devam Ediyor',
        'ach-status-future': 'Hedef',

        'ach-2024-title': 'YKS Başarısı & Üniversite Seçimi',
        'ach-2024-desc': 'Yükseköğretim Kurumları Sınavı (YKS) Sayısal alanında Türkiye 10.771.\'si olarak Gazi Üniversitesi Bilgisayar Mühendisliği bölümüne 4. sıradan kabul kazandım.',
        'ach-2025-title': 'Hazırlık Sınıfı — B2 İngilizce Eğitimi & Muafiyet',
        'ach-2025-desc': 'Gazi Üniversitesi Yabancı Diller Yüksekokulu B2 seviye hazırlık sınıfını 87/100 genel başarı puanı ile bitirdim ve yıl sonu final sınavından muafiyet hakkı elde ettim.',
        'ach-2026-title': '1. Sınıf — C, C++ ve Java Eğitimi & Akademik Odak',
        'ach-2026-desc': 'Bilgisayar Mühendisliği 1. sınıfımda tamamen akademiye ve temel yazılım disiplinine odaklandım. C, C++ ve Java dillerinin syntax yapısını, bellek yönetimini ve Nesne Yönelimli Programlama (OOP) prensiplerini derinlemesine öğrenerek kendimi geliştirdim.',
        'ach-2027-title': '2. Sınıf — Elektrik-Elektronik ÇAP & TEKNOFEST / Hackathon',
        'ach-2027-desc': '2. sınıf lisans eğitimimle birlikte Elektrik-Elektronik Mühendisliği Çift Anadal (ÇAP) programına başlayacağım. Gömülü sistemler ve yazılım alanlarında TEKNOFEST ve ulusal/uluslararası hackathon yarışmalarında aktif yer alıp dereceler hedefliyorum.',
        'ach-2028-title': '3. Sınıf — Savunma Sanayii Aday Mühendislik & Stajlar',
        'ach-2028-desc': 'Çift anadal ders yoğunluğumu sürdürürken; gömülü sistemler, kenar yapay zeka (Edge AI) ve mikrodenetleyici mimarileri üzerine önde gelen savunma sanayii ve donanım firmalarında aday mühendislik programlarına katılacak ve yaz stajı deneyimleri edineceğim.',
        'ach-2029-title': '4. Sınıf — Bilgisayar Müh. Bölüm Birinciliği & EEM ÇAP Mezuniyeti',
        'ach-2029-desc': 'Gazi Üniversitesi Bilgisayar Mühendisliği lisans eğitimimi Bölüm Birincisi olarak tamamlayacağım. Elektrik-Elektronik Mühendisliği ÇAP bitirme projelerimi başarıyla sunarak çifte mühendislik diploması ile mezun olacağım.',

        'ach-2024-b2': 'Bölüm 4.\'sü Giriş',
        'ach-2024-b3': 'Gazi Bilgisayar Müh.',
        'ach-2025-b2': 'Finalsiz Muafiyet',
        'ach-2026-b3': 'Akademik Odak',
        'ach-2027-b1': 'EEM ÇAP Başlangıcı',
        'ach-2027-b3': 'Gömülü Sistemler',
        'ach-2028-b1': 'Aday Mühendislik',
        'ach-2028-b2': 'Savunma Sanayii Stajı',
        'ach-2029-b1': 'Bölüm Birincisi Mezuniyet',
        'ach-2029-b2': 'EEM ÇAP Mezuniyeti',
        'ach-2029-b3': 'Çifte Mühendislik Derecesi',

        // Contact
        'contact-tag': 'İletişim',
        'contact-title': 'Birlikte bir şeyler üretelim.',
        'contact-text': 'Gömülü sistemler, projeler veya staj/iş fırsatları hakkında mesaj gönderebilir veya doğrudan e-posta atabilirsiniz.',
        'contact-email-label': 'E-Posta',
        'copy-title': 'Kopyala',
        'contact-location': 'Konum',
        'contact-location-val': 'Ankara, Türkiye',
        'form-name-label': 'Adınız Soyadınız',
        'form-name': 'Ahmet Yılmaz',
        'form-email-label': 'E-Posta Adresiniz',
        'form-email-placeholder': 'ahmet@example.com',
        'form-msg-label': 'Mesajınız',
        'form-message': 'Mesajınızı buraya yazabilirsiniz...',
        'form-submit': 'Mesaj Gönder',
        'form-sending': 'Gönderiliyor...',

        // Footer & Alerts
        'footer-rights': 'Tüm hakları saklıdır.',
        'footer-email': 'E-posta',
        'copied-email': 'E-posta adresi panoya kopyalandı!',
        'form-success': 'Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım!',
        'form-error': 'Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta atın.',

        // Assistant
        'chat-open': 'Asistana sor',
        'chat-title': 'ABK Asistan',
        'chat-sub': 'Gemini ile çalışan yapay zeka · hata yapabilir',
        'chat-close': 'Kapat',
        'chat-welcome': 'Merhaba! Ben Ahmet Burak hakkındaki soruları cevaplayan yapay zeka asistanıyım. Ne öğrenmek istersin?',
        'chat-placeholder': 'Bir soru yaz...',
        'chat-send': 'Gönder',
        'chat-q1': 'Hangi alanlarda çalışıyor?',
        'chat-q2': 'Staj fırsatlarına açık mı?',
        'chat-q3': 'Başarıları neler?',
        'chat-error': 'Şu an cevap veremiyorum. Lütfen biraz sonra tekrar dene ya da e-posta gönder.',
        'chat-limit': 'Çok fazla mesaj gönderildi, biraz bekleyip tekrar dene.',

    },
    en: {
        'skip': 'Skip to content',

        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-achievements': 'Achievements',
        'nav-contact': 'Contact',

        // Hero
        'hero-badge': 'Gazi University • 2nd Year Computer Engineering',
        'hero-greeting': 'Hello, I\'m',
        'hero-subtitle': 'Computer Engineering student working on embedded systems, edge AI, and low-level software development.',
        'hero-btn-achievements': 'View Achievements',
        'hero-btn-contact': 'Get In Touch',
        'hero-btn-cv': 'Download CV',

        // About
        'about-tag': 'About',
        'about-heading': 'Where hardware meets software.',
        'about-p1': 'I am a 2nd year Computer Engineering student at Gazi University. My primary focus is on Embedded Systems and Edge AI technologies.',
        'about-p2': 'At the intersection of hardware and software, I practice Object-Oriented Programming (OOP), Data Structures, and Algorithm Optimization using C, C++, Java, and Python.',
        'about-p3': 'My goal is to engineer intelligent, high-performance system solutions for resource-constrained microcontrollers and edge devices.',
        'stat-year-label': 'Class Year',
        'stat-year-val': '2nd Year',
        'stat-year-sub': 'Computer Engineering',
        'stat-cap-label': 'Double Major (ÇAP)',
        'stat-cap-val': 'Electrical & Electronics Eng.',
        'stat-interests-label': 'Interests',
        'stat-int-1': 'Embedded Systems',
        'stat-int-2': 'Edge AI',
        'stat-int-3': 'Machine Learning',
        'stat-int-4': 'Cybersecurity',
        'stat-int-5': 'Computer Networks',
        'stack-label': 'Languages',
        'hl-label': 'Highlights',
        'hl-yks': 'National YKS ranking (STEM)',
        'hl-rank-num': '4th',
        'hl-rank': 'rank entry into the department',
        'hl-b2': 'B2 English prep, final exam exemption',
        'hl-link': 'Full timeline',
        'now-label': 'Currently',

        // Projects
        'projects-tag': 'Projects',
        'projects-title': 'Things I\'ve been building.',
        'project-code': 'Source code',
        'project-demo': 'Demo',

        // Achievements Page
        'ach-doc-title': 'Achievements — Ahmet Burak Kaynak',
        'ach-tag': 'Milestones & Honors',
        'ach-title': 'Year-by-year achievements and future goals',
        'ach-subtitle': 'A timeline from YKS national ranking to double major engineering goals and graduation vision.',
        'ach-status-completed': 'Completed',
        'ach-status-active': 'In Progress',
        'ach-status-future': 'Goal',

        'ach-2024-title': 'YKS Success & University Selection',
        'ach-2024-desc': 'I achieved a national YKS ranking of 10,771 in STEM, earning admission to Gazi University Computer Engineering department ranked 4th in class entry.',
        'ach-2025-title': 'Prep Year — B2 English Preparatory & Exemption',
        'ach-2025-desc': 'I completed B2 English prep school at Gazi University School of Foreign Languages with an 87/100 average, securing direct final exam exemption.',
        'ach-2026-title': '1st Year — C, C++ & Java Studies & Academic Focus',
        'ach-2026-desc': 'I focused entirely on academia and fundamental software principles during my 1st year in Computer Engineering at Gazi University; mastering syntax, memory management, and Object-Oriented Programming (OOP) in C, C++, and Java.',
        'ach-2027-title': '2nd Year — Electrical-Electronics Double Major & TEKNOFEST',
        'ach-2027-desc': 'I will initiate an Electrical & Electronics Engineering Double Major (ÇAP) alongside my 2nd-year CS coursework, actively competing in TEKNOFEST and national/international hackathons.',
        'ach-2028-title': '3rd Year — Defense Industry Candidate Engineering & Internships',
        'ach-2028-desc': 'I will engage in candidate engineering programs and summer internships at leading defense and hardware firms focusing on embedded systems, Edge AI, and microcontrollers.',
        'ach-2029-title': '4th Year — Valedictorian CS Graduation & EEM Double Degree',
        'ach-2029-desc': 'I will graduate as Department Valedictorian from Gazi University Computer Engineering alongside completing my Electrical & Electronics Engineering Double Major degree.',

        'ach-2024-b2': '4th Rank Entry',
        'ach-2024-b3': 'Gazi Computer Eng.',
        'ach-2025-b2': 'Final Exam Exemption',
        'ach-2026-b3': 'Academic Focus',
        'ach-2027-b1': 'EEM Double Major Start',
        'ach-2027-b3': 'Embedded Systems',
        'ach-2028-b1': 'Candidate Engineering',
        'ach-2028-b2': 'Defense Industry Internship',
        'ach-2029-b1': 'Valedictorian Graduation',
        'ach-2029-b2': 'EEM Double Major Graduation',
        'ach-2029-b3': 'Dual Engineering Degree',

        // Contact
        'contact-tag': 'Contact',
        'contact-title': 'Let\'s build something together.',
        'contact-text': 'Feel free to send a message or email directly regarding embedded systems, software projects, or internship opportunities.',
        'contact-email-label': 'Email',
        'copy-title': 'Copy',
        'contact-location': 'Location',
        'contact-location-val': 'Ankara, Turkey',
        'form-name-label': 'Full Name',
        'form-name': 'Jane Doe',
        'form-email-label': 'Your Email Address',
        'form-email-placeholder': 'jane@example.com',
        'form-msg-label': 'Your Message',
        'form-message': 'Type your message here...',
        'form-submit': 'Send Message',
        'form-sending': 'Sending...',

        // Footer & Alerts
        'footer-rights': 'All rights reserved.',
        'footer-email': 'Email',
        'copied-email': 'Email address copied to clipboard!',
        'form-success': 'Your message has been sent successfully. I will get back to you soon!',
        'form-error': 'An error occurred. Please try again or email directly.',

        // Assistant
        'chat-open': 'Ask the assistant',
        'chat-title': 'ABK Assistant',
        'chat-sub': 'AI powered by Gemini · may make mistakes',
        'chat-close': 'Close',
        'chat-welcome': 'Hi! I\'m an AI assistant that answers questions about Ahmet Burak. What would you like to know?',
        'chat-placeholder': 'Type a question...',
        'chat-send': 'Send',
        'chat-q1': 'What does he work on?',
        'chat-q2': 'Is he open to internships?',
        'chat-q3': 'What are his achievements?',
        'chat-error': 'I can\'t answer right now. Please try again later or send an email.',
        'chat-limit': 'Too many messages, please wait a bit and try again.',

    }
};

let currentLang = 'tr';
try { currentLang = localStorage.getItem('preferredLanguage') === 'en' ? 'en' : 'tr'; } catch (e) {}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
    initChatWidget();
    updateLanguage(currentLang);
    document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);

    initThemeSwitcher();
    initNavigation();
    initScrollReveal();
    initCardSpotlight();
    initCopyButtons();
    initContactForm();

    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ==========================================================================
// Language
// ==========================================================================
function t(key) {
    return translations[currentLang][key] ?? translations.tr[key] ?? '';
}

function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    try { localStorage.setItem('preferredLanguage', currentLang); } catch (e) {}
    updateLanguage(currentLang);
}

function updateLanguage(lang) {
    const dict = translations[lang];
    document.documentElement.lang = lang;

    const langCode = document.querySelector('.lang-code');
    if (langCode) langCode.textContent = lang === 'tr' ? 'EN' : 'TR';

    document.querySelectorAll('[data-tr]').forEach(el => {
        const value = dict[el.dataset.tr];
        if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-tr-placeholder]').forEach(el => {
        const value = dict[el.dataset.trPlaceholder];
        if (value) el.placeholder = value;
    });
    document.querySelectorAll('[data-tr-title]').forEach(el => {
        const value = dict[el.dataset.trTitle];
        if (value) el.title = value;
    });

    if (document.body.dataset.page === 'achievements') {
        document.title = dict['ach-doc-title'];
    } else {
        document.title = lang === 'tr'
            ? 'Ahmet Burak Kaynak — Bilgisayar Mühendisi Adayı'
            : 'Ahmet Burak Kaynak — Computer Engineering Student';
    }

    renderSiteData();
    renderChatWelcome();
}

// ==========================================================================
// Theme
// ==========================================================================
function initThemeSwitcher() {
    const toggler = document.getElementById('themeToggle');
    if (!toggler) return;

    toggler.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        const apply = () => document.documentElement.setAttribute('data-theme', next);

        // Smooth cross-fade where the View Transitions API is available
        if (document.startViewTransition && !prefersReducedMotion) {
            document.startViewTransition(apply);
        } else {
            apply();
        }
        try { localStorage.setItem('theme', next); } catch (e) {}
    });
}

// ==========================================================================
// Navigation
// ==========================================================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const hashLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the in-page link of the section currently in view
    const sections = document.querySelectorAll('main section[id]');
    if (sections.length && hashLinks.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                hashLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(section => observer.observe(section));
    }

    if (hamburger && navMenu) {
        const setOpen = open => {
            hamburger.classList.toggle('active', open);
            navMenu.classList.toggle('open', open);
            hamburger.setAttribute('aria-expanded', String(open));
        };
        hamburger.addEventListener('click', () => setOpen(!navMenu.classList.contains('open')));
        navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
        document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
    }
}

// ==========================================================================
// Scroll reveal
// ==========================================================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries
            .filter(entry => entry.isIntersecting)
            .forEach((entry, index) => {
                entry.target.style.transitionDelay = `${index * 70}ms`;
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
}

// Pointer-following highlight on cards (delegated, so rendered project cards get it too)
function initCardSpotlight() {
    if (!window.matchMedia('(hover: hover)').matches) return;
    document.addEventListener('pointermove', e => {
        const card = e.target.closest?.('.card');
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    }, { passive: true });
}

// ==========================================================================
// Content from data.js (photo, CV, "Currently" card, projects)
// ==========================================================================
const siteData = typeof SITE_DATA !== 'undefined' ? SITE_DATA : { photo: null, cv: null, now: null, projects: [] };

function escapeHtml(text) {
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// data.js paths are relative to the site root; pages in subfolders need a prefix
function siteUrl(path) {
    if (/^(https?:|mailto:|\/)/.test(path)) return path;
    return (document.body.dataset.page === 'achievements' ? '../' : '') + path;
}

function renderSiteData() {
    const hasProjects = siteData.projects.length > 0;
    document.querySelectorAll('[data-requires="projects"]').forEach(el => { el.hidden = !hasProjects; });

    const die = document.getElementById('pcbDie');
    if (die && siteData.photo && !die.querySelector('img')) {
        die.innerHTML = `<img src="${escapeHtml(siteUrl(siteData.photo))}" alt="Ahmet Burak Kaynak">`;
    }

    const cvBtn = document.getElementById('cvBtn');
    if (cvBtn && siteData.cv) {
        cvBtn.href = siteUrl(siteData.cv);
        cvBtn.hidden = false;
    }

    const nowCard = document.getElementById('nowCard');
    if (nowCard && siteData.now) {
        nowCard.hidden = false;
        nowCard.closest('.bento').classList.add('bento-has-now');
        document.getElementById('nowText').textContent = siteData.now[currentLang] || siteData.now.tr;
    }

    const section = document.getElementById('projects');
    const grid = document.getElementById('projectsGrid');
    if (!section || !grid) return;
    section.hidden = !hasProjects;
    grid.innerHTML = siteData.projects.map(renderProjectCard).join('');
}

function renderProjectCard(project) {
    const desc = project.desc[currentLang] || project.desc.tr;
    const media = project.image
        ? `<img src="${escapeHtml(siteUrl(project.image))}" alt="" loading="lazy">`
        : `<span class="project-media-fallback">${escapeHtml(project.title.slice(0, 2).toUpperCase())}</span>`;
    const arrow = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
    const links = [
        project.github && `<a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">${t('project-code')} ${arrow}</a>`,
        project.demo && `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">${t('project-demo')} ${arrow}</a>`
    ].filter(Boolean).join('');

    return `
        <article class="card project-card visible reveal">
            <div class="project-media">${media}</div>
            <h3 class="project-title">${escapeHtml(project.title)}</h3>
            <p class="project-desc">${escapeHtml(desc)}</p>
            <div class="chips">${(project.tags || []).map(tag => `<span class="chip chip-mono">${escapeHtml(tag)}</span>`).join('')}</div>
            ${links ? `<div class="project-links">${links}</div>` : ''}
        </article>`;
}

// ==========================================================================
// Copy buttons & toast
// ==========================================================================
function initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const text = btn.dataset.copy;
            if (!text) return;
            try {
                await navigator.clipboard.writeText(text);
            } catch (err) {
                const temp = document.createElement('textarea');
                temp.value = text;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand('copy');
                temp.remove();
            }
            showToast(t('copied-email'));
        });
    });
}

let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==========================================================================
// Contact form (Formspree, AJAX)
// ==========================================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const label = submitBtn.querySelector('span');
        submitBtn.disabled = true;
        label.textContent = t('form-sending');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (!response.ok) throw new Error(response.statusText);
            showToast(t('form-success'));
            form.reset();
        } catch (err) {
            showToast(t('form-error'));
        } finally {
            submitBtn.disabled = false;
            label.textContent = t('form-submit');
        }
    });
}

// ==========================================================================
// AI assistant (Gemini via /api/chat)
// ==========================================================================
const chatHistory = [];
let chatBusy = false;

function initChatWidget() {
    const root = document.createElement('div');
    root.className = 'chat';
    root.innerHTML = `
        <div class="chat-panel" id="chatPanel" role="dialog" aria-labelledby="chatTitle" hidden>
            <div class="chat-head">
                <div class="chat-avatar" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 100 100" fill="none"><path d="M30 72 L50 26 L70 72 M38 56 H62" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="chat-head-text">
                    <strong id="chatTitle" data-tr="chat-title"></strong>
                    <span data-tr="chat-sub"></span>
                </div>
                <button class="icon-btn" id="chatClose" data-tr-aria="chat-close">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                </button>
            </div>
            <div class="chat-log" id="chatLog" aria-live="polite"></div>
            <div class="chat-suggestions" id="chatSuggestions">
                <button class="chip" data-tr="chat-q1"></button>
                <button class="chip" data-tr="chat-q2"></button>
                <button class="chip" data-tr="chat-q3"></button>
            </div>
            <form class="chat-form" id="chatForm">
                <input id="chatInput" type="text" maxlength="1000" autocomplete="off" data-tr-placeholder="chat-placeholder" data-tr-aria="chat-placeholder" required>
                <button type="submit" class="chat-send" id="chatSend" data-tr-aria="chat-send">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                </button>
            </form>
        </div>
        <button class="chat-fab" id="chatFab" aria-expanded="false" aria-controls="chatPanel">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
            <span data-tr="chat-open"></span>
        </button>`;
    document.body.appendChild(root);

    const panel = root.querySelector('#chatPanel');
    const fab = root.querySelector('#chatFab');
    const input = root.querySelector('#chatInput');

    const setOpen = open => {
        panel.hidden = !open;
        root.classList.toggle('open', open);
        fab.setAttribute('aria-expanded', String(open));
        if (open) input.focus();
        else fab.focus();
    };
    fab.addEventListener('click', () => setOpen(panel.hidden));
    root.querySelector('#chatClose').addEventListener('click', () => setOpen(false));
    panel.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });

    root.querySelector('#chatForm').addEventListener('submit', e => {
        e.preventDefault();
        sendChatMessage(input.value);
    });
    root.querySelectorAll('#chatSuggestions .chip').forEach(chip => {
        chip.addEventListener('click', () => sendChatMessage(chip.textContent));
    });
}

function renderChatWelcome() {
    document.querySelectorAll('[data-tr-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.trAria)));
    const log = document.getElementById('chatLog');
    if (!log || chatHistory.length) return;
    log.innerHTML = '';
    appendChatBubble('model', t('chat-welcome'));
}

function appendChatBubble(role, text) {
    const log = document.getElementById('chatLog');
    const bubble = document.createElement('div');
    bubble.className = `chat-msg chat-msg-${role}`;
    bubble.textContent = text;
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
    return bubble;
}

async function sendChatMessage(rawText) {
    const text = rawText.trim();
    if (!text || chatBusy) return;

    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');
    const log = document.getElementById('chatLog');
    document.getElementById('chatSuggestions').hidden = true;

    chatBusy = true;
    sendBtn.disabled = true;
    input.value = '';

    appendChatBubble('user', text);
    chatHistory.push({ role: 'user', text });

    const reply = appendChatBubble('model', '');
    reply.classList.add('is-typing');

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: chatHistory })
        });
        if (!response.ok || !response.body) {
            throw new Error(response.status === 429 ? 'limit' : 'error');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let answer = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            answer += decoder.decode(value, { stream: true });
            reply.classList.remove('is-typing');
            reply.textContent = answer;
            log.scrollTop = log.scrollHeight;
        }
        if (!answer.trim()) throw new Error('error');
        chatHistory.push({ role: 'model', text: answer });
    } catch (err) {
        // Drop the unanswered question so the history keeps alternating turns
        chatHistory.pop();
        reply.classList.remove('is-typing');
        reply.classList.add('chat-msg-error');
        reply.textContent = t(err.message === 'limit' ? 'chat-limit' : 'chat-error');
    } finally {
        chatBusy = false;
        sendBtn.disabled = false;
        input.focus();
    }
}
