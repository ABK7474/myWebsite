// Translations
const translations = {
    tr: {
        // Navigation
        'nav-home': 'Ana Sayfa',
        'nav-about': 'Hakkımda',
        'nav-skills': 'Yetenekler',
        'nav-projects': 'Projeler',
        'nav-contact': 'İletişim',
        
        // Hero Section
        'hero-greeting': 'Merhaba, Ben',
        'hero-subtitle': 'Bilgisayar Mühendisliği Öğrencisi',
        'hero-description': 'C, C++, Java, Algoritmalar',
        'hero-btn-projects': 'Projelerimi Gör',
        'hero-btn-contact': 'İletişime Geç',
        
        // About Section
        'about-title': 'Hakkımda',
        'about-p1': 'Merhaba! Ben Gazi Üniversitesi Bilgisayar Mühendisliği bölümünde 1. sınıf öğrencisiyim. Teknoloji ve yazılım geliştirme konusunda tutkulu bir öğrenciyim.',
        'about-p2': 'Programlama, algoritma tasarımı ve problem çözme becerilerimi sürekli geliştirmeye çalışıyorum. C, C++, Java, OOP, veri yapıları ve algoritmalar gibi konularda kendimi geliştiriyorum.',
        'about-p3': 'Hedefim, teknoloji dünyasında iz bırakacak projeler geliştirmek ve yazılım alanında kendimi sürekli ilerletmektir.',
        'stat-year': 'Başlangıç Yılı',
        'stat-projects': 'Tamamlanan Proje',
        'stat-tech': 'Öğrenilen Teknoloji',
        
        // Skills Section
        'skills-title': 'Yetenekler',
        'skill-prog': 'Programlama Dilleri',
        'skill-web': 'Web Geliştirme',
        'skill-db': 'Veritabanı',
        'skill-tools': 'Araçlar & Framework\'ler',
        'skill-algo': 'Veri Yapıları & Algoritmalar',
        'skill-other': 'Diğer',
        
        // Projects Section
        'projects-title': 'Projelerim',
        'project-more': 'Detayları Gör',
        'project1-title': 'Proje Adı 1',
        'project1-desc': 'Projeniz hakkında açıklama buraya gelecek...',
        'project2-title': 'Proje Adı 2',
        'project2-desc': 'Projeniz hakkında açıklama buraya gelecek...',
        'project3-title': 'Proje Adı 3',
        'project3-desc': 'Projeniz hakkında açıklama buraya gelecek...',
        'p1-title': 'Proje Adı 1',
        'p1-subtitle': 'Bu proje hakkında teknik detaylar burada yer alacak.',
        'p2-title': 'Proje Adı 2',
        'p2-subtitle': 'Bu proje hakkında teknik detaylar burada yer alacak.',
        'p3-title': 'Proje Adı 3',
        'p3-subtitle': 'Bu proje hakkında teknik detaylar burada yer alacak.',
        
        // Contact Section
        'contact-title': 'İletişim',
        'contact-heading': 'Benimle İletişime Geçin',
        'contact-text': 'Projeler, iş birlikleri veya herhangi bir konuda benimle iletişime geçmekten çekinmeyin!',
        'contact-phone': 'Telefon',
        'contact-location': 'Konum',
        'form-name': 'Adınız',
        'form-message': 'Mesajınız',
        'form-submit': 'Gönder',
        
        // Footer
        'footer-rights': '© 2026 Ahmet Burak Kaynak. Tüm hakları saklıdır.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': 'Hello, I\'m',
        'hero-subtitle': 'Computer Engineering Student',
        'hero-description': 'C, C++, Java, Algorithms',
        'hero-btn-projects': 'View My Projects',
        'hero-btn-contact': 'Get In Touch',
        
        // About Section
        'about-title': 'About Me',
        'about-p1': 'Hello! I\'m a first-year Computer Engineering student at Gazi University. I\'m passionate about technology and software development.',
        'about-p2': 'I\'m constantly working on improving my programming, algorithm design, and problem-solving skills. I\'m developing myself in areas such as C, C++, Java, OOP, data structures, and algorithms.',
        'about-p3': 'My goal is to develop projects that will make a mark in the technology world and continuously advance myself in the software field.',
        'stat-year': 'Start Year',
        'stat-projects': 'Completed Projects',
        'stat-tech': 'Technologies Learned',
        
        // Skills Section
        'skills-title': 'Skills',
        'skill-prog': 'Programming Languages',
        'skill-web': 'Web Development',
        'skill-db': 'Database',
        'skill-tools': 'Tools & Frameworks',
        'skill-algo': 'Data Structures & Algorithms',
        'skill-other': 'Other',
        
        // Projects Section
        'projects-title': 'My Projects',
        'project-more': 'View Details',
        'project1-title': 'Project Name 1',
        'project1-desc': 'Description of your project will go here...',
        'project2-title': 'Project Name 2',
        'project2-desc': 'Description of your project will go here...',
        'project3-title': 'Project Name 3',
        'project3-desc': 'Description of your project will go here...',
        'p1-title': 'Project Name 1',
        'p1-subtitle': 'Technical details about this project will be located here.',
        'p2-title': 'Project Name 2',
        'p2-subtitle': 'Technical details about this project will be located here.',
        'p3-title': 'Project Name 3',
        'p3-subtitle': 'Technical details about this project will be located here.',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-heading': 'Get In Touch',
        'contact-text': 'Feel free to contact me about projects, collaborations, or any topic!',
        'contact-phone': 'Phone',
        'contact-location': 'Location',
        'form-name': 'Your Name',
        'form-message': 'Your Message',
        'form-submit': 'Send',
        
        // Footer
        'footer-rights': '© 2026 Ahmet Burak Kaynak. All rights reserved.'
    }
};

// Current language (default: Turkish)
let currentLang = 'tr';

// Language Toggle Function
function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    updateLanguage();
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', currentLang);
}

// Update all text elements
function updateLanguage() {
    // Update button text
    const langButton = document.querySelector('.lang-text');
    langButton.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    
    // Update all elements with data-tr attribute
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-tr-placeholder]').forEach(element => {
        const key = element.getAttribute('data-tr-placeholder');
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    // Update page title
    document.title = currentLang === 'tr' 
        ? 'Ahmet Burak Kaynak - Bilgisayar Mühendisi' 
        : 'Ahmet Burak Kaynak - Computer Engineer';
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
    
    // Add event listener to language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// Contact Form Handling (Formspree Entegrasyonu)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        
        try {
            const response = await fetch(e.target.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                const successMsg = currentLang === 'tr' 
                    ? 'Mesajınız başarıyla gönderildi!' 
                    : 'Your message has been sent successfully!';
                alert(successMsg);
                contactForm.reset();
            } else {
                alert('Hata! Lütfen tekrar deneyin.');
            }
        } catch (error) {
            alert('Bağlantı hatası oluştu.');
        }
    });
}

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animasyon eklenecek elementleri seç
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .stat-card');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing Effect for Hero Title (Optional Enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Uncomment the line below to enable typing effect
    // typeWriter();
}

// Current Year in Footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
}

// Add Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to Top Button (Optional)
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.setAttribute('id', 'scrollToTop');
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #2563eb;
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
};

// Scroll to Top butonunu oluştur
createScrollToTopButton();

// Console message for visitors
console.log('%c👋 Merhaba!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cWeb siteme hoş geldiniz! Bu siteyi kendim geliştirdim.', 'font-size: 14px; color: #6b7280;');
console.log('%cİletişim için: ahmetburakresmi@gmail.com', 'font-size: 12px; color: #9ca3af;');
