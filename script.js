// Clean URL Helper: Immediately strips 'index.html' and '.html' from browser address bar
// Note: Safely preserves .html on GitHub Pages (github.io) to prevent F5 refresh 404 errors
(function cleanUrl() {
    try {
        const hostname = window.location.hostname;
        if (hostname.includes('github.io')) {
            return;
        }
        const path = window.location.pathname;
        if (path.endsWith('/index.html') || path.endsWith('index.html')) {
            const cleanPath = path.replace(/index\.html$/, '') || '/';
            window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
        } else if (path.endsWith('.html')) {
            const cleanPath = path.replace(/\.html$/, '');
            window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
        }
    } catch (e) {}
})();

// Theme Initialization IIFE: Run immediately to prevent Flash of Unstyled Theme (FOUT)
(function initTheme() {
    try {
        let savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            savedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
        document.documentElement.setAttribute('data-theme', savedTheme);
    } catch (e) {}
})();


// Translations Dictionary
const translations = {
    tr: {
        // Navigation
        'nav-home': 'Ana Sayfa',
        'nav-about': 'Hakkımda',
        'nav-achievements': 'Başarılarım',
        'nav-contact': 'İletişim',
        
        // Hero Section
        'hero-badge': 'Gazi Üniversitesi • 2. Sınıf Bilgisayar Mühendisliği',
        'hero-greeting': 'Merhaba, ben',
        'hero-subtitle': 'Gömülü sistemler, Edge AI ve düşük seviyeli yazılım geliştirme üzerine çalışan bilgisayar mühendisliği öğrencisi.',
        'hero-btn-achievements': 'Başarılarımı İncele',
        'hero-btn-contact': 'İletişime Geç',
        
        // About Section
        'about-tag': 'HAKKIMDA',
        'about-title': 'Hakkımda',
        'about-p1': 'Gazi Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Çalışmalarımı ağırlıklı olarak Gömülü Sistemler (Embedded Systems) ve Edge AI (Kenar Yapay Zeka) teknolojileri üzerinde yoğunlaştırıyorum.',
        'about-p2': 'Donanım ve yazılımın kesiştiği noktalarda; C, C++, Java ve Python dillerini kullanarak Nesne Yönelimli Programlama (OOP), Veri Yapıları ve Algoritma Optimizasyonu üzerine pratikler yapıyorum.',
        'about-p3': 'Hedefim, kısıtlı kaynaklara sahip mikrodenetleyici ve uç cihazlarda yüksek performansla çalışan akıllı sistem çözümleri geliştirmektir.',
        'stat-year-label': 'SINIF',
        'stat-year-val': '2. Sınıf',
        'stat-cap-label': 'ÇİFT ANADAL (ÇAP)',
        'stat-cap-val': 'Elektrik-Elektronik Müh.',
        'stat-interests-label': 'İLGİ ALANLARI',
        'stat-int-1': 'Gömülü Sistemler',
        'stat-int-2': 'Edge AI',
        'stat-int-3': 'Makine Öğrenmesi',
        'stat-int-4': 'Siber Güvenlik',
        'stat-int-5': 'Bilgisayar Ağları',

        // Achievements Page (Timeline Roadmap)
        'ach-doc-title': 'Başarılarım — Ahmet Burak Kaynak',
        'ach-tag': 'DERECELER & KİLOMETRE TAŞLARI',
        'ach-title': 'Yıl Yıl Başarılarım & Gelecek Hedeflerim',
        'ach-subtitle': 'YKS derecemden lisans akademisine, çift anadal (ÇAP) hedeflerimden mezuniyet vizyonuma zaman akışı.',
        'ach-status-completed': 'TAMAMLANDI',
        'ach-status-active': 'GÜNCEL / DEVAM EDİYOR',
        'ach-status-future': 'GELECEK HEDEFİ',

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
        
        // Logbook Section (TR)
        'nav-logbook': 'Mühendislik Defteri',
        'logbook-doc-title': 'Mühendislik Defteri — Ahmet Burak Kaynak',
        'logbook-tag': 'ÇALIŞMA GÜNLÜĞÜ',
        'logbook-title': 'Focus Hub & Mühendislik Defteri',
        'logbook-subtitle': 'Gelişim sürecimi, günlük çalışma saatlerimi ve odaklandığım konuları takip ettiğim canlı log defteri.',
        'log-stat-total-hrs': 'TOPLAM ODAK SÜRESİ',
        'log-stat-sessions': 'TOPLAM OTURUM',
        'log-stat-streak': 'AKTİF SERİ (GÜN)',
        'log-stat-hours-unit': 'Saat',
        'log-lock-title': 'Yönetici Girişi',
        'log-lock-subtitle': 'Günlük kaydı eklemek ve araçları yönetmek için 2FA doğrulama kodunu girin.',
        'log-lock-placeholder': '6 Haneli Google Authenticator Kodu',
        'log-lock-btn': 'Kilidi Aç',
        'log-lock-error': 'Hatalı veya süresi geçmiş kod! Lütfen tekrar deneyin.',
        'admin-stopwatch-title': 'Çalışma Kronometresi',
        'admin-stopwatch-start': 'Başlat',
        'admin-stopwatch-pause': 'Duraklat',
        'admin-stopwatch-reset': 'Sıfırla',
        'admin-log-form-title': 'Yeni Oturum Ekle',
        'admin-log-details-label': 'Neler Yapıldı? (Açıklama)',
        'admin-log-submit': 'Deftere Kaydet',

        // Contact Section
        'contact-tag': 'İLETİŞİM',
        'contact-title': 'İletişime Geçin',
        'contact-heading': 'Bana Ulaşın',
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
        'footer-tagline': 'Gazi Üniversitesi • Bilgisayar Mühendisliği Öğrencisi',
        'footer-rights': 'Tüm hakları saklıdır.',
        'copied-email': 'E-posta adresi panoya kopyalandı!',
        'form-success': 'Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağım!',
        'form-error': 'Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta atın.',
        
                // Terminal Code
        'term-code': `#include <stdio.h>

typedef struct {
    const char *name;
    const char *university;
    const char *major;
    const char *focus[3];
} Profile;

int main(void) {
    Profile abk = {
        .name       = "Ahmet Burak Kaynak",
        .university = "Gazi Üniversitesi",
        .major      = "Bilgisayar Müh. (ÇAP: Elektrik-Elektronik Müh.)",
        .focus      = {"Gömülü Sistemler", "Edge AI", "Makine Öğrenmesi"}
    };

    printf(">> SİSTEM BAŞLATILIYOR...\n");
    printf(">> PROFİL: %s | %s\n", abk.name, abk.university);
    printf(">> BÖLÜM: %s\n", abk.major);
    for (int i = 0; i < 3; i++) {
        printf(">> MODÜL[%d]: %s\n", i, abk.focus[i]);
    }
    printf(">> DURUM: Hazır.\n");

    return 0;
}`,
        'term-output': `>> SİSTEM BAŞLATILIYOR...
>> PROFİL: Ahmet Burak Kaynak | Gazi Üniversitesi
>> BÖLÜM: Bilgisayar Müh. (ÇAP: Elektrik-Elektronik Müh.)
>> MODÜL[0]: Gömülü Sistemler
>> MODÜL[1]: Edge AI
>> MODÜL[2]: Makine Öğrenmesi
>> DURUM: Hazır.`
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-achievements': 'Achievements',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-badge': 'Gazi University • 2nd Year Computer Engineering',
        'hero-greeting': 'Hello, I\'m',
        'hero-subtitle': 'Computer Engineering student working on embedded systems, edge AI, and low-level software development.',
        'hero-btn-achievements': 'View Achievements',
        'hero-btn-contact': 'Get In Touch',
        
        // About Section
        'about-tag': 'ABOUT ME',
        'about-title': 'About Me',
        'about-p1': 'I am a 2nd year Computer Engineering student at Gazi University. My primary focus is on Embedded Systems and Edge AI technologies.',
        'about-p2': 'At the intersection of hardware and software, I practice Object-Oriented Programming (OOP), Data Structures, and Algorithm Optimization using C, C++, Java, and Python.',
        'about-p3': 'My goal is to engineer intelligent, high-performance system solutions for resource-constrained microcontrollers and edge devices.',
        'stat-year-label': 'CLASS YEAR',
        'stat-year-val': '2nd Year',
        'stat-cap-label': 'DOUBLE MAJOR (ÇAP)',
        'stat-cap-val': 'Electrical & Electronics Eng.',
        'stat-interests-label': 'INTERESTS',
        'stat-int-1': 'Embedded Systems',
        'stat-int-2': 'Edge AI',
        'stat-int-3': 'Machine Learning',
        'stat-int-4': 'Cybersecurity',
        'stat-int-5': 'Computer Networks',
        
        // Achievements Page (Timeline Roadmap)
        'ach-doc-title': 'Achievements — Ahmet Burak Kaynak',
        'ach-tag': 'MILESTONES & HONORS',
        'ach-title': 'Year-by-Year Achievements & Future Goals',
        'ach-subtitle': 'A timeline from YKS national ranking to double major engineering goals and graduation vision.',
        'ach-status-completed': 'COMPLETED',
        'ach-status-active': 'CURRENT / IN PROGRESS',
        'ach-status-future': 'FUTURE GOAL',

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
        
        // Logbook Section (EN)
        'nav-logbook': 'Engineering Logbook',
        'logbook-doc-title': 'Engineering Logbook — Ahmet Burak Kaynak',
        'logbook-tag': 'FOCUS JOURNAL',
        'logbook-title': 'Focus Hub & Engineering Logbook',
        'logbook-subtitle': 'A live log tracking my development process, daily study hours, and technical focus areas.',
        'log-stat-total-hrs': 'TOTAL FOCUS TIME',
        'log-stat-sessions': 'TOTAL SESSIONS',
        'log-stat-streak': 'ACTIVE STREAK (DAYS)',
        'log-stat-hours-unit': 'Hours',
        'log-lock-title': 'Admin Authorization',
        'log-lock-subtitle': 'Enter the 2FA verification code to add new log entries and manage tools.',
        'log-lock-placeholder': '6-Digit Google Authenticator Code',
        'log-lock-btn': 'Unlock Dashboard',
        'log-lock-error': 'Invalid or expired code! Please check your authenticator app.',
        'admin-stopwatch-title': 'Focus Timer',
        'admin-stopwatch-start': 'Start',
        'admin-stopwatch-pause': 'Pause',
        'admin-stopwatch-reset': 'Reset',
        'admin-log-form-title': 'Log New Session',
        'admin-log-details-label': 'What was done? (Description)',
        'admin-log-submit': 'Log to Journal',

        // Contact Section
        'contact-tag': 'CONTACT',
        'contact-title': 'Get In Touch',
        'contact-heading': 'Contact Me',
        'contact-text': 'Feel free to send a message or email directly regarding embedded systems, software projects, or internship opportunities.',
        'contact-email-label': 'Email',
        'copy-title': 'Copy',
        'contact-location': 'Location',
        'contact-location-val': 'Ankara, Turkey',
        'form-name-label': 'Full Name',
        'form-name': 'John Pork',
        'form-email-label': 'Your Email Address',
        'form-email-placeholder': 'john@example.com',
        'form-msg-label': 'Your Message',
        'form-message': 'Type your message here...',
        'form-submit': 'Send Message',
        'form-sending': 'Sending...',
        
        // Footer & Alerts
        'footer-tagline': 'Gazi University • Computer Engineering Student',
        'footer-rights': 'All rights reserved.',
        'copied-email': 'Email address copied to clipboard!',
        'form-success': 'Your message has been sent successfully. I will get back to you soon!',
        'form-error': 'An error occurred. Please try again or email directly.',
        
                // Terminal Code
        'term-code': `#include <stdio.h>

typedef struct {
    const char *name;
    const char *university;
    const char *major;
    const char *focus[3];
} Profile;

int main(void) {
    Profile abk = {
        .name       = "Ahmet Burak Kaynak",
        .university = "Gazi University",
        .major      = "Computer Eng. (Double Major: Electrical & Electronics Eng.)",
        .focus      = {"Embedded Systems", "Edge AI", "Machine Learning"}
    };

    printf(">> SYSTEM INITIALIZING...\n");
    printf(">> PROFILE: %s | %s\n", abk.name, abk.university);
    printf(">> DEPARTMENT: %s\n", abk.major);
    for (int i = 0; i < 3; i++) {
        printf(">> MODULE[%d]: %s\n", i, abk.focus[i]);
    }
    printf(">> STATUS: Ready.\n");

    return 0;
}`,
        'term-output': `>> SYSTEM INITIALIZING...
>> PROFILE: Ahmet Burak Kaynak | Gazi University
>> DEPARTMENT: Computer Eng. (Double Major: Electrical & Electronics Eng.)
>> MODULE[0]: Embedded Systems
>> MODULE[1]: Edge AI
>> MODULE[2]: Machine Learning
>> STATUS: Ready.`
    }
};

// Current Active Language (Default: Turkish)
let currentLang = localStorage.getItem('preferredLanguage') || 'tr';

document.addEventListener('DOMContentLoaded', () => {
    // 0. Initialize VS Code Introduction Screen
    initIntroAnimation();

    // 1. Initialize Language
    updateLanguage(currentLang);
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // 1.5. Initialize Theme Switcher
    initThemeSwitcher();

    // 2. Navigation & Mobile Menu
    initNavigation();

    // 3. Scroll Reveal Animations
    initScrollReveal();

    // 4. Counter Animation for Stats
    initStatsCounter();

    // 5. Copy to Clipboard Buttons & Toast
    initCopyButtons();

    // 6. Contact Form Handling
    initContactForm();

    // 7. Update Footer Year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 8. Typewriter Effect (only auto-start if intro screen has already played)
    if (sessionStorage.getItem('introPlayed') === 'true') {
        initTypewriter();
    }

    // 9. Matrix Hacker Background
    initMatrix();

    // 10. Interactive Hover & Click Sounds
    initInteractiveSounds();

    // 11. Study Logbook & Focus Tools (Deactivated)
    // initLogbookDashboard();
});

function initMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Letters, numbers, and symbols for the matrix
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array for the drops - randomize initial heights to distribute rainfall evenly
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * -60);
    }

    // Formulas for scientific light background
    const scientificFormulas = [
        "E = mc²",
        "e^(iπ) + 1 = 0",
        "∫ e^x dx = e^x + C",
        "d/dx [sin(x)] = cos(x)",
        "F = G * (m1*m2)/r²",
        "∇ × E = -∂B/∂t",
        "iℏ ∂/∂t Ψ = Ĥ Ψ",
        "lim (x→∞) (1 + 1/x)^x = e",
        "∫ x^n dx = (x^(n+1))/(n+1) + C",
        "PV = nRT",
        "Δx * Δp ≥ ℏ/2",
        "∇ · E = ρ/ε₀",
        "d/dx [ln(x)] = 1/x",
        "a² + b² = c²",
        "∑ (n=1 to ∞) 1/n² = π²/6",
        "F = ma",
        "V = IR",
        "S = k * ln(W)",
        "H(t) = -∑ p_i log(p_i)",
        "∮ B · dl = μ₀ I_enc",
        "f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
        "∇ × B = μ₀J + μ₀ε₀∂E/∂t",
        "∮ E · dA = Q/ε₀",
        "∮ B · dA = 0",
        "L = r × p",
        "λ = h/p",
        "df = (∂f/∂x)dx + (∂f/∂y)dy",
        "∫∫_S (∇×F)·dS = ∮_C F·dr"
    ];

    // Initialize particles for formulas
    const formulaParticles = [];
    const maxParticles = 25;
    for (let i = 0; i < maxParticles; i++) {
        formulaParticles.push({
            text: scientificFormulas[Math.floor(Math.random() * scientificFormulas.length)],
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: 0.15 + Math.random() * 0.35, // Slow horizontal drift
            vy: -0.05 + Math.random() * 0.15, // Very slow vertical drift
            opacity: 0.06 + Math.random() * 0.09, // Balanced visual presence (6% to 15% opacity)
            size: Math.floor(11 + Math.random() * 6) // Font size range
        });
    }
    
    // Drawing the characters
    function draw() {
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';

        if (isLightTheme) {
            // Light theme scientific formula layout
            ctx.fillStyle = 'rgba(237, 241, 246, 0.15)'; // Trail fade matching --bg-dark
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let p of formulaParticles) {
                ctx.font = p.size + 'px "Fira Code", monospace';
                ctx.fillStyle = `rgba(15, 23, 42, ${p.opacity})`;
                ctx.fillText(p.text, p.x, p.y);

                // Update particle coordinates
                p.x += p.vx;
                p.y += p.vy;

                // Reset position if it moves off-screen
                if (p.x > canvas.width + 150 || p.y < -50 || p.y > canvas.height + 50) {
                    p.x = -150;
                    p.y = Math.random() * canvas.height;
                    p.text = scientificFormulas[Math.floor(Math.random() * scientificFormulas.length)];
                }
            }
        } else {
            // Dark theme classic matrix rain
            ctx.fillStyle = 'rgba(5, 8, 10, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0F0'; // Default green
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                drops[i]++;
                
                // Send drop back to top randomly after it has crossed the screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.94) {
                    drops[i] = 0;
                }
            }
        }
    }
    
    setInterval(draw, 33);
    
    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const newColumns = Math.floor(canvas.width / fontSize);
        if (newColumns > drops.length) {
            for (let x = drops.length; x < newColumns; x++) {
                drops[x] = Math.floor(Math.random() * -60);
            }
        }
    });
}

let typewriterTimeoutId = null;
let outputTimeoutId = null;
let compileTimeoutId = null;

function initTypewriter(lang = currentLang) {
    const typewriterEl = document.getElementById('typewriter');
    const runBtn = document.getElementById('runCodeBtn');
    const outputWrapper = document.getElementById('terminalOutputWrapper');
    const outputEl = document.getElementById('terminalOutput');
    const cursor = document.getElementById('typewriterCursor');

    if (!typewriterEl) return;

    // Clear any running timeouts if language changes while typing
    clearTimeout(typewriterTimeoutId);
    clearTimeout(outputTimeoutId);
    clearTimeout(compileTimeoutId);

    // Reset UI state
    typewriterEl.textContent = '';
    if (outputWrapper) outputWrapper.style.display = 'none';
    if (outputEl) outputEl.textContent = '';
    if (cursor) cursor.style.display = 'inline-block';

    // Clone runBtn to remove old event listeners
    let newRunBtn = runBtn;
    if (runBtn) {
        newRunBtn = runBtn.cloneNode(true);
        runBtn.parentNode.replaceChild(newRunBtn, runBtn);
        newRunBtn.classList.remove('visible');
        newRunBtn.style.pointerEvents = 'auto';
        newRunBtn.style.opacity = '1';
    }

    const codeText = translations[lang]['term-code'];
    const outputText = translations[lang]['term-output'];

    function renderHighlightedCCode(rawText) {
        const escaped = rawText
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const tokenRegex = /(\/\/.*$|#include\s+&lt;[^&]+&gt;|"(?:\\.|[^"\\])*"|\b(?:typedef|struct|const|int|char|return|for|void)\b|\b(?:Profile)\b|\b(?:main|printf)\b)/g;

        return escaped.replace(tokenRegex, (match) => {
            if (match.startsWith('//')) {
                return `<span class="com">${match}</span>`;
            } else if (match.startsWith('#include')) {
                return `<span class="inc">#include</span> <span class="str">&lt;stdio.h&gt;</span>`;
            } else if (match.startsWith('"')) {
                return `<span class="str">${match}</span>`;
            } else if (/^(typedef|struct|const|int|return|for|void|char)$/.test(match)) {
                return `<span class="kwd">${match}</span>`;
            } else if (match === 'Profile') {
                return `<span class="typ">${match}</span>`;
            } else if (/^(main|printf)$/.test(match)) {
                return `<span class="fn">${match}</span>`;
            }
            return match;
        });
    }

    let i = 0;
    const writeChunkSize = 4;
    function typeWriter() {
        if (i < codeText.length) {
            i += writeChunkSize;
            const currentText = codeText.substring(0, i);
            typewriterEl.innerHTML = renderHighlightedCCode(currentText);
            playKeyboardTypeSound();
            typewriterTimeoutId = setTimeout(typeWriter, 12); // Snappy 12ms ticks
        } else {
            typewriterEl.innerHTML = renderHighlightedCCode(codeText);
            
            // Typing finished, show Run button
            if (newRunBtn) {
                newRunBtn.classList.add('visible');
            }
        }
    }
    
    // Start typing after a short delay
    typewriterTimeoutId = setTimeout(typeWriter, 800);

    // Handle Run button click
    if (newRunBtn) {
        newRunBtn.addEventListener('click', () => {
            playClickSound();
            if (cursor) cursor.style.display = 'none'; // Hide blinking cursor in editor
            if (outputWrapper) outputWrapper.style.display = 'flex';
            if (outputEl) outputEl.textContent = lang === 'tr' ? 'Derleniyor...' : 'Compiling...';
            newRunBtn.style.pointerEvents = 'none';
            newRunBtn.style.opacity = '0.5';

            compileTimeoutId = setTimeout(() => {
                if (outputEl) outputEl.textContent = '';
                let j = 0;
                const outputChunkSize = 3;
                
                function typeOutput() {
                    if (j < outputText.length) {
                        outputEl.textContent += outputText.substring(j, j + outputChunkSize);
                        j += outputChunkSize;
                        playKeyboardTypeSound();
                        outputTimeoutId = setTimeout(typeOutput, 15);
                    } else {
                        // Re-enable button if they want to run again
                        newRunBtn.style.pointerEvents = 'auto';
                        newRunBtn.style.opacity = '1';
                        if (cursor) cursor.style.display = 'inline-block';
                    }
                }
                typeOutput();
                
            }, 600); // Simulate compile time
        });
    }
}

// Toggle Language
function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('preferredLanguage', currentLang);
    updateLanguage(currentLang);
}

// Update UI Text Content based on selected language
function updateLanguage(lang) {
    const langCodeBtn = document.querySelector('.lang-code');
    if (langCodeBtn) {
        langCodeBtn.textContent = lang === 'tr' ? 'EN' : 'TR';
    }

    document.querySelectorAll('[data-tr]').forEach(el => {
        const key = el.getAttribute('data-tr');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-tr-placeholder]').forEach(el => {
        const key = el.getAttribute('data-tr-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-tr-title]').forEach(el => {
        const key = el.getAttribute('data-tr-title');
        if (translations[lang] && translations[lang][key]) {
            el.title = translations[lang][key];
        }
    });

    if (document.querySelector('[data-tr="ach-doc-title"]')) {
        document.title = translations[lang]['ach-doc-title'];
    } else {
        document.title = lang === 'tr'
            ? 'Ahmet Burak Kaynak — Bilgisayar Mühendisi Adayı'
            : 'Ahmet Burak Kaynak — Computer Engineering Student';
    }

    // Re-initialize typewriter with new language if terminal element exists
    if (document.getElementById('typewriter')) {
        initTypewriter(lang);
    }
}

// Navigation scroll effects and active link tracking
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky shadow header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlight
        let currentSectionId = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Hamburger Mobile Menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Scroll Reveal with Intersection Observer
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for child grid elements
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, 80 * (index % 4));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(el => revealObserver.observe(el));
}

// Stat Counters Animation
function initStatsCounter() {
    const statCards = document.querySelectorAll('.stat-card');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statCards.forEach(card => {
                    const numberEl = card.querySelector('.stat-number');
                    if (!numberEl || !numberEl.hasAttribute('data-target')) return;
                    const targetAttr = numberEl.getAttribute('data-target');
                    const target = parseInt(targetAttr || '0', 10);
                    if (isNaN(target) || target === 0) return;

                    let start = 0;
                    const duration = 1200;
                    const stepTime = Math.max(Math.floor(duration / Math.abs(target)), 30);

                    const timer = setInterval(() => {
                        start += 1;
                        if (target > 1000) {
                            numberEl.textContent = Math.min(start * 50, target);
                            if (start * 50 >= target) clearInterval(timer);
                        } else {
                            numberEl.textContent = start + (targetAttr.endsWith('.') ? '.' : '');
                            if (start >= target) clearInterval(timer);
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-column');
    if (statsSection) observer.observe(statsSection);
}

// Copy Buttons and Toast Messages
function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;

            try {
                await navigator.clipboard.writeText(textToCopy);
                const msgKey = textToCopy.includes('@') ? 'copied-email' : 'copied-phone';
                showToast(translations[currentLang][msgKey]);
            } catch (err) {
                // Fallback for older browsers
                const tempInput = document.createElement('input');
                tempInput.value = textToCopy;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                showToast('Kopyalandı!');
            }
        });
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Contact Form AJAX Submission
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = translations[currentLang]['form-sending'];

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                playSuccessSound();
                showToast(translations[currentLang]['form-success']);
                form.reset();
            } else {
                playErrorSound();
                showToast(translations[currentLang]['form-error']);
            }
        } catch (err) {
            playErrorSound();
            showToast(translations[currentLang]['form-error']);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

function initIntroAnimation() {
    const introScreen = document.getElementById('intro-screen');
    const blackout = document.getElementById('intro-blackout');
    const introCodeArea = document.getElementById('introCodeArea');
    const runBtn = document.getElementById('introRunBtn');
    const cursor = document.getElementById('fake-cursor');
    const desktopEnv = document.getElementById('desktopEnv');
    const winLockScreen = document.getElementById('winLockScreen');
    const skipBtn = document.getElementById('skipIntroBtn');
    const vscodeWindow = document.getElementById('vscodeWindow');
    const lockTime = document.getElementById('lockTime');
    const lockDate = document.getElementById('lockDate');
    const tbTime = document.getElementById('tbTime');
    const tbDate = document.getElementById('tbDate');

    if (!introScreen) return;

    // Fast-path bypass checks:
    // 1. Already played in this session
    // 2. Screen width < 768px (Mobile requirement)
    // 3. Accessibility prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (sessionStorage.getItem('introPlayed') === 'true' || window.innerWidth < 768 || prefersReducedMotion) {
        introScreen.remove();
        if (blackout) blackout.remove();
        document.body.style.overflow = '';
        initTypewriter();
        return;
    }

    // Lock page scroll during intro
    document.body.style.overflow = 'hidden';

    // Live Clock & Date in Turkish (tr-TR)
    function updateClocks() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timeStr = `${hours}:${minutes}`;

        const day = now.getDate();
        const monthNames = [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
        ];
        const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        const lockDateStr = `${day} ${monthNames[now.getMonth()]} ${dayNames[now.getDay()]}`;

        const dayStr = String(day).padStart(2, '0');
        const monthStr = String(now.getMonth() + 1).padStart(2, '0');
        const yearStr = now.getFullYear();
        const tbDateStr = `${dayStr}.${monthStr}.${yearStr}`;

        if (lockTime) lockTime.textContent = timeStr;
        if (lockDate) lockDate.textContent = lockDateStr;
        if (tbTime) tbTime.textContent = timeStr;
        if (tbDate) tbDate.textContent = tbDateStr;
    }

    updateClocks();
    const clockInterval = setInterval(updateClocks, 1000);

    // Realistic Embedded C++ Code (Profile - exactly 25 lines)
    const cppCodeLines = [
        '#include <iostream>',
        '#include <string>',
        '',
        'struct Profile {',
        '    std::string name;',
        '    std::string university;',
        '    std::string major;',
        '    std::string focus[3];',
        '};',
        '',
        'int main() {',
        '    Profile abk = {',
        '        "Ahmet Burak Kaynak",',
        '        "Gazi Üniversitesi",',
        '        "Bilgisayar Müh. (ÇAP: Elektrik-Elektronik Müh.)",',
        '        {"Gömülü Sistemler", "Edge AI", "Makine Öğrenmesi"}',
        '    };',
        '',
        '    std::cout << ">> SİSTEM BAŞLATILIYOR..." << std::endl;',
        '    std::cout << ">> PROFİL: " << abk.name << " | " << abk.university << std::endl;',
        '    for (const auto& area : abk.focus) {',
        '        std::cout << ">> MODÜL: " << area << std::endl;',
        '    }',
        '    return 0;',
        '}'
    ];

    // Single-pass syntax tokenizer for VS Code Dark+
    function renderCodeLine(line, isLastLine) {
        if (!line) return '&nbsp;';
        
        const escaped = line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const tokenRegex = /(\/\/.*$|#include\s+&lt;[^&]+&gt;|"(?:\\.|[^"\\])*"|\b(?:struct|const|auto|return|for|int)\b|\b(?:std::string|std::vector|std::cout|std::endl|DeveloperProfile)\b|\b(?:main)\b)/g;

        const highlighted = escaped.replace(tokenRegex, (match) => {
            if (match.startsWith('//')) {
                return `<span class="com">${match}</span>`;
            } else if (match.startsWith('#include')) {
                return `<span class="inc">${match}</span>`;
            } else if (match.startsWith('"')) {
                return `<span class="str">${match}</span>`;
            } else if (/^(struct|const|auto|return|for|int)$/.test(match)) {
                return `<span class="kwd">${match}</span>`;
            } else if (match === 'main') {
                return `<span class="fn">${match}</span>`;
            } else {
                return `<span class="typ">${match}</span>`;
            }
        });

        return isLastLine ? highlighted + ' <span class="cursor-blink"></span>' : highlighted;
    }

    // Update status bar Ln Col dynamically
    const lnColEl = document.getElementById('vscodeLnCol');
    if (lnColEl) lnColEl.textContent = `Ln ${cppCodeLines.length}, Col 2`;

    // Pre-populate VS Code code area with line numbers
    if (introCodeArea) {
        let lineNumsHtml = '';
        let codeLinesHtml = '';
        for (let i = 0; i < cppCodeLines.length; i++) {
            const lineNum = i + 1;
            lineNumsHtml += `${lineNum}<br>`;
            const isLast = (i === cppCodeLines.length - 1);
            codeLinesHtml += `<div>${renderCodeLine(cppCodeLines[i], isLast)}</div>`;
        }

        introCodeArea.innerHTML = `
            <div class="code-wrapper">
                <div class="line-numbers">${lineNumsHtml}</div>
                <div class="code-content">${codeLinesHtml}</div>
            </div>
        `;
    }

    // Skip intro helper
    function skipIntro() {
        clearInterval(clockInterval);
        sessionStorage.setItem('introPlayed', 'true');
        introScreen.style.transition = 'opacity 0.25s ease';
        introScreen.style.opacity = '0';
        setTimeout(() => {
            introScreen.remove();
            if (blackout) blackout.remove();
            document.body.style.overflow = '';
            initTypewriter();
        }, 250);
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            skipIntro();
        });
    }

    // Windows 11 Titlebar Close Button
    const winCloseBtn = document.querySelector('.win-control-btn.win-close');
    if (winCloseBtn) {
        winCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            skipIntro();
        });
    }

    // Desktop icons click to select & double click to focus
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    desktopIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopIcons.forEach(i => i.classList.remove('selected'));
            icon.classList.add('selected');
        });
        icon.addEventListener('dblclick', () => {
            if (vscodeWindow) {
                vscodeWindow.classList.add('open');
            }
        });
    });

    if (desktopEnv) {
        desktopEnv.addEventListener('click', (e) => {
            if (!e.target.closest('.desktop-icon')) {
                desktopIcons.forEach(i => i.classList.remove('selected'));
            }
        });
    }

    // Unlock & Launch Sequence
    let sequenceStarted = false;

    function unlockAndStart() {
        if (sequenceStarted) return;
        sequenceStarted = true;

        // Unlock audio context and play Windows startup success chime
        getAudioContext();
        playSuccessSound();

        // Slide up / fade out lockscreen
        if (winLockScreen) {
            winLockScreen.classList.add('unlocked');
        }

        // Open VS Code window with scale(.96 -> 1) animation
        setTimeout(() => {
            if (vscodeWindow) {
                vscodeWindow.classList.add('open');
            }
        }, 200);

        // Start mouse movement after short pause (~600ms)
        setTimeout(startCursorMovement, 600);
    }

    if (winLockScreen) {
        winLockScreen.addEventListener('click', unlockAndStart);
    }
    
    function onKeyDown(e) {
        if (!sequenceStarted && introScreen.parentElement) {
            document.removeEventListener('keydown', onKeyDown);
            unlockAndStart();
        }
    }
    document.addEventListener('keydown', onKeyDown);

    // Camera track and cursor animation to Run button
    function startCursorMovement() {
        if (!runBtn || !cursor || !desktopEnv) return;

        const desktopRect = desktopEnv.getBoundingClientRect();
        const btnRect = runBtn.getBoundingClientRect();
        const tx = btnRect.left - desktopRect.left + (btnRect.width / 2);
        const ty = btnRect.top - desktopRect.top + (btnRect.height / 2);

        const startX = desktopRect.width * 0.62;
        const startY = desktopRect.height * 0.72;

        const centerX = desktopRect.width / 2;
        const centerY = desktopRect.height / 2;

        const duration = 1400; // 1.4s cursor glide
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth cubic ease-in-out
            const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const cx = startX + (tx - startX) * ease;
            const cy = startY + (ty - startY) * ease;

            const maxZoom = window.innerWidth < 768 ? 1.5 : 1.9;
            const scale = 1.0 + (maxZoom - 1.0) * ease;

            cursor.style.left = cx + 'px';
            cursor.style.top = cy + 'px';

            const rawDx = (centerX - cx) * ease;
            const rawDy = (centerY - cy) * ease;

            const maxShiftX = (scale - 1.0) * (desktopRect.width / 2);
            const maxShiftY = (scale - 1.0) * (desktopRect.height / 2);

            const currentDx = Math.max(-maxShiftX, Math.min(maxShiftX, rawDx));
            const currentDy = Math.max(-maxShiftY, Math.min(maxShiftY, rawDy));

            desktopEnv.style.transform = `translate(${currentDx}px, ${currentDy}px) scale(${scale})`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Click the run button
                playClickSound();

                runBtn.style.transform = 'scale(0.9)';
                runBtn.style.background = 'rgba(56, 189, 248, 0.45)';

                // Blackout transition
                if (blackout) blackout.classList.add('active');

                setTimeout(() => {
                    clearInterval(clockInterval);
                    introScreen.remove();
                    if (blackout) blackout.remove();
                    document.body.style.overflow = '';
                    sessionStorage.setItem('introPlayed', 'true');
                    initTypewriter();
                }, 900);
            }
        }

        requestAnimationFrame(animate);
    }
}

// Global Audio Manager for Synthesizing Clean UI Sounds
let globalAudioCtx = null;

function getAudioContext() {
    if (!globalAudioCtx) {
        globalAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (globalAudioCtx.state === 'suspended') {
        globalAudioCtx.resume();
    }
    return globalAudioCtx;
}

// 1. Synthesize soft mechanical keyboard/UI hover tick (soft bubble/pop sound)
function playHoverSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);

        osc.type = 'sine';
        // Gentle frequency glide downwards (C5 -> G4) for a organic bubble pop feel
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(392.00, now + 0.025);

        // Soft, highly audible but non-intrusive volume curve
        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.025);
    } catch (e) {}
}

// 2. Synthesize mechanical switch click/snap sound
function playClickSound() {
    try {
        const audioCtx = getAudioContext();
        const now = audioCtx.currentTime;

        // Layer 1: Mechanical Body Bump (sine frequency drop)
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.06);

        oscGain.gain.setValueAtTime(0.32, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(oscGain);
        oscGain.connect(audioCtx.destination);

        // Layer 2: Tactile Switch Snap (bandpass noise burst)
        const bufferSize = Math.floor(audioCtx.sampleRate * 0.025); // 25ms noise buffer
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = noiseBuffer;

        const noiseFilter = audioCtx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(1400, now);
        noiseFilter.Q.value = 1.5;

        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(0.28, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.06);

        noise.start(now);
        noise.stop(now + 0.025);
    } catch (e) {
        console.warn('Audio Context error', e);
    }
}

// 2B. Synthesize keyboard typing click clack sound
let lastTypeSoundTime = 0;

function playKeyboardTypeSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        // Prevent browser AudioContext thread flooding & clipping (minimum 40ms cooldown)
        if (now - lastTypeSoundTime < 0.040) {
            return;
        }
        lastTypeSoundTime = now;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        // Random pitch in high-mid range to simulate organic keycap sounds
        const pitch = 850 + Math.random() * 500;
        osc.frequency.setValueAtTime(pitch, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.015);

        filter.type = 'bandpass';
        filter.frequency.value = 1400;
        filter.Q.value = 2.5;

        // Soft, crisp clack sound envelope
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.015);
    } catch (e) {}
}

// 3. Synthesize beautiful ascending clean chime for success
function playSuccessSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.value = freq;

            const noteTime = now + (idx * 0.08);

            gain.gain.setValueAtTime(0, noteTime);
            gain.gain.linearRampToValueAtTime(0.1, noteTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.25);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(noteTime);
            osc.stop(noteTime + 0.25);
        });
    } catch (e) {}
}

// 4. Synthesize soft buzz alert for error
function playErrorSound() {
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        const buzzTimes = [0, 0.12];
        buzzTimes.forEach(delay => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(140, now + delay);
            osc.frequency.linearRampToValueAtTime(100, now + delay + 0.08);

            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 300;

            gain.gain.setValueAtTime(0.05, now + delay);
            gain.gain.linearRampToValueAtTime(0.0001, now + delay + 0.08);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + delay);
            osc.stop(now + delay + 0.08);
        });
    } catch (e) {}
}

// 5. Initialize sounds on hover & click for all interactive elements using Event Delegation
let lastHoveredElement = null;

function initInteractiveSounds() {
    // A. Click Snap Sound delegation on body
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('a, button, .lang-toggle, .hamburger, .social-link, .copy-btn, .run-btn, .editor-play-btn, .stat-card, .tree-item, .vscode-tab');
        if (target) {
            if (target.matches(':disabled') || target.classList.contains('disabled')) return;
            playClickSound();
        }
    });

    // B. Hover Pop Sound delegation on body
    document.body.addEventListener('mouseover', (e) => {
        const target = e.target.closest('a, button, .lang-toggle, .hamburger, .social-link, .copy-btn, .run-btn, .editor-play-btn, .stat-card, .tree-item, .vscode-tab');
        if (target) {
            if (target === lastHoveredElement) return; // avoid repeats
            if (target.matches(':disabled') || target.classList.contains('disabled') || target.style.opacity === '0') return;

            lastHoveredElement = target;
            playHoverSound();
        }
    });

    // C. Reset tracking on mouseout
    document.body.addEventListener('mouseout', (e) => {
        const target = e.target.closest('a, button, .lang-toggle, .hamburger, .social-link, .copy-btn, .run-btn, .editor-play-btn, .stat-card, .tree-item, .vscode-tab');
        if (target && target === lastHoveredElement) {
            lastHoveredElement = null;
        }
    });
}

// ==========================================================================
// 6. Cryptographic 2FA (TOTP) & Focus Logbook Engine
// ==========================================================================

// Google Authenticator Base32 Secret Key for Ahmet Burak Kaynak
const TOTP_SECRET = 'ABKSTUDYLOGBOOK2FA';

// Default static logbook history (starts empty as requested)
const defaultLogs = [];

// Base32 Decoder Helper
function base32ToBytes(b32) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    b32 = b32.replace(/=+$/, '').toUpperCase();
    const len = b32.length;
    const bytes = new Uint8Array(Math.floor((len * 5) / 8));
    let val = 0;
    let count = 0;
    let index = 0;

    for (let i = 0; i < len; i++) {
        const idx = alphabet.indexOf(b32[i]);
        if (idx === -1) continue;
        val = (val << 5) | idx;
        count += 5;
        if (count >= 8) {
            bytes[index++] = (val >>> (count - 8)) & 255;
            count -= 8;
        }
    }
    return bytes;
}

// HMAC-SHA1 Cryptographic function in pure JS
function hmacSha1(keyBytes, msgBytes) {
    const block = new Uint8Array(64);
    if (keyBytes.length > 64) {
        block.set(sha1Bytes(keyBytes));
    } else {
        block.set(keyBytes);
    }

    const ipad = new Uint8Array(64);
    const opad = new Uint8Array(64);
    for (let i = 0; i < 64; i++) {
        ipad[i] = block[i] ^ 0x36;
        opad[i] = block[i] ^ 0x5c;
    }

    const inner = new Uint8Array(64 + msgBytes.length);
    inner.set(ipad, 0);
    inner.set(msgBytes, 64);
    const innerHash = sha1Bytes(inner);

    const outer = new Uint8Array(64 + innerHash.length);
    outer.set(opad, 0);
    outer.set(innerHash, 64);
    return sha1Bytes(outer);
}

function sha1Bytes(data) {
    const len = data.length;
    const wordCount = ((len + 8) >> 6) + 1;
    const words = new Uint32Array(wordCount * 16);

    for (let i = 0; i < len; i++) {
        words[i >> 2] |= data[i] << (24 - (i % 4) * 8);
    }
    words[len >> 2] |= 0x80 << (24 - (len % 4) * 8);
    words[words.length - 1] = len * 8;

    let h0 = 0x67452301;
    let h1 = 0xEFCDAB89;
    let h2 = 0x98BADCFE;
    let h3 = 0x10325476;
    let h4 = 0xC3D2E1F0;

    const w = new Uint32Array(80);
    for (let i = 0; i < words.length; i += 16) {
        for (let t = 0; t < 16; t++) w[t] = words[i + t];
        for (let t = 16; t < 80; t++) {
            const val = w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16];
            w[t] = (val << 1) | (val >>> 31);
        }

        let a = h0; let b = h1; let c = h2; let d = h3; let e = h4;
        for (let t = 0; t < 80; t++) {
            let f, k;
            if (t < 20) {
                f = (b & c) | (~b & d);
                k = 0x5A827999;
            } else if (t < 40) {
                f = b ^ c ^ d;
                k = 0x6ED9EBA1;
            } else if (t < 60) {
                f = (b & c) | (b & d) | (c & d);
                k = 0x8F1BBCDC;
            } else {
                f = b ^ c ^ d;
                k = 0xCA62C1D6;
            }

            const temp = (((a << 5) | (a >>> 27)) + f + e + k + w[t]) | 0;
            e = d; d = c; c = (b << 30) | (b >>> 2); b = a; a = temp;
        }

        h0 = (h0 + a) | 0;
        h1 = (h1 + b) | 0;
        h2 = (h2 + c) | 0;
        h3 = (h3 + d) | 0;
        h4 = (h4 + e) | 0;
    }

    const result = new Uint8Array(20);
    const view = new DataView(result.buffer);
    view.setUint32(0, h0, false);
    view.setUint32(4, h1, false);
    view.setUint32(8, h2, false);
    view.setUint32(12, h3, false);
    view.setUint32(16, h4, false);
    return result;
}

// Compute TOTP Code (Time-based One-Time Password)
function getTotpCode(secret, stepOffset = 0) {
    const key = base32ToBytes(secret);
    const epoch = Math.floor(Date.now() / 1000);
    const steps = Math.floor(epoch / 30) + stepOffset;

    const msg = new Uint8Array(8);
    let val = steps;
    for (let i = 7; i >= 0; i--) {
        msg[i] = val & 0xff;
        val = Math.floor(val / 256);
    }

    const hash = hmacSha1(key, msg);
    const offset = hash[19] & 0xf;
    const binary = ((hash[offset] & 0x7f) << 24) |
                   ((hash[offset + 1] & 0xff) << 16) |
                   ((hash[offset + 2] & 0xff) << 8) |
                   (hash[offset + 3] & 0xff);

    const otp = binary % 1000000;
    return otp.toString().padStart(6, '0');
}

// 2FA TOTP code validator (Checks current time, T-1, and T+1)
function checkTotpCode(code) {
    const cleanCode = code.trim().replace(/\s/g, '');
    for (let offset = -1; offset <= 1; offset++) {
        if (getTotpCode(TOTP_SECRET, offset) === cleanCode) {
            return true;
        }
    }
    return false;
}

// Focus Hub Logbook Initialization
function initLogbookDashboard() {
    const listEl = document.getElementById('logbookList');
    if (!listEl) return;

    // Load active logs (stored logs + static defaults if not overridden)
    let logs = JSON.parse(localStorage.getItem('study_logs'));
    // Auto-purge old mock entries if present on user browser
    if (logs && logs.some(log => log.id === 1 || log.id === 2 || log.id === 3)) {
        logs = [];
        localStorage.setItem('study_logs', JSON.stringify(logs));
    }
    if (!logs || logs.length === 0) {
        logs = [...defaultLogs];
        localStorage.setItem('study_logs', JSON.stringify(logs));
    }

    // A. 1. Render Log Timeline Cards in Drawer (Date, Hours, Content only)
    function renderLogs() {
        listEl.innerHTML = '';
        
        // Sort chronologically in descending order
        logs.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (logs.length === 0) {
            listEl.innerHTML = `<div style="text-align:center; padding: 2rem; color: #8892b0; font-family: var(--font-mono)">No log found. / Günlük kaydı bulunamadı.</div>`;
            return;
        }

        logs.forEach(log => {
            const isTr = currentLang === 'tr';
            let details = isTr ? (log.details_tr || []) : (log.details_en || log.details_tr || []);
            if (!isTr && Array.isArray(details)) {
                details = details.map(d => {
                    if (typeof d === 'string' && d.includes('ALES') && d.includes('denemesi')) {
                        return 'Practiced for tomorrow\'s exam one last time by solving an ALES (Academic Personnel and Postgraduate Education Entrance Exam) practice test.';
                    }
                    if (typeof d === 'string' && d.includes('Denemede yaptığım sayısal puan')) {
                        return d.replace('Denemede yaptığım sayısal puan:', 'Quantitative score achieved in the practice test:');
                    }
                    return d;
                });
            }
            
            const dateObj = new Date(log.date);
            const dateStr = isTr 
                ? dateObj.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' })
                : dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

            const card = document.createElement('div');
            card.className = 'log-card reveal';
            card.innerHTML = `
                <div class="log-card-header">
                    <span class="log-card-date">${dateStr}</span>
                    <span class="log-card-hours" style="background: rgba(56, 189, 248, 0.08); padding: 4px 10px; border-radius: 6px; font-weight: 600; color: var(--accent-cyan);">
                        ${log.duration.toFixed(1)} ${translations[currentLang]['log-stat-hours-unit']}
                    </span>
                </div>
                <ul class="log-card-details" style="margin-top: 1rem; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.75rem;">
                    ${details.map(d => `<li>${d}</li>`).join('')}
                </ul>
            `;
            listEl.appendChild(card);
        });
        
        if (typeof initScrollReveal === 'function') initScrollReveal();
    }

    // A. 2. Compute Dashboard Statistics
    function updateStats() {
        const totalHours = logs.reduce((sum, log) => sum + log.duration, 0);
        document.getElementById('totalHoursVal').textContent = totalHours.toFixed(1);
        document.getElementById('totalSessionsVal').textContent = logs.length;

        // Calculate Day Streak
        const uniqueDates = [...new Set(logs.map(l => l.date))].sort((a, b) => new Date(b) - new Date(a));
        let streak = 0;
        if (uniqueDates.length > 0) {
            const todayStr = new Date().toISOString().split('T')[0];
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            let checkDate = new Date(uniqueDates[0]);
            const startDiff = (new Date(todayStr) - checkDate) / (1000 * 60 * 60 * 24);

            if (startDiff <= 1) {
                streak = 1;
                for (let i = 1; i < uniqueDates.length; i++) {
                    const d1 = new Date(uniqueDates[i - 1]);
                    const d2 = new Date(uniqueDates[i]);
                    const diffDays = (d1 - d2) / (1000 * 60 * 60 * 24);
                    if (diffDays === 1) {
                        streak++;
                    } else if (diffDays > 1) {
                        break;
                    }
                }
            }
        }
        document.getElementById('activeStreakVal').textContent = streak;
    }

    // B. Setup Log Drawer slide out logic
    const drawerToggleBtn = document.getElementById('drawerToggleBtn');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const logsDrawer = document.getElementById('logsDrawer');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');

    function openDrawer() {
        logsDrawer.classList.add('open');
        drawerOverlay.classList.add('open');
    }

    function closeDrawer() {
        logsDrawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
    }

    if (drawerToggleBtn) drawerToggleBtn.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // C. Stopwatch (Focus Timer) Logic
    let stopwatchSeconds = 0;
    let stopwatchInterval = null;
    const stopwatchDisplay = document.getElementById('stopwatchDisplay');
    const startBtn = document.getElementById('stopwatchStartBtn');
    const pauseBtn = document.getElementById('stopwatchPauseBtn');
    const resetBtn = document.getElementById('stopwatchResetBtn');
    const timerStatusText = document.getElementById('timerStatusText');

    function formatTime(sec) {
        const hrs = Math.floor(sec / 3600);
        const mins = Math.floor((sec % 3600) / 60);
        const secs = sec % 60;
        return [hrs, mins, secs].map(v => v.toString().padStart(2, '0')).join(':');
    }

    startBtn.addEventListener('click', () => {
        if (stopwatchInterval) return;
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            stopwatchDisplay.textContent = formatTime(stopwatchSeconds);
        }, 1000);

        startBtn.disabled = true;
        pauseBtn.disabled = false;
        if (timerStatusText) {
            timerStatusText.textContent = currentLang === 'tr' ? 'Çalışma Aktif' : 'Focus Session Active';
            timerStatusText.style.borderColor = 'rgba(56, 189, 248, 0.4)';
            timerStatusText.style.color = 'var(--accent-cyan)';
        }
    });

    pauseBtn.addEventListener('click', () => {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        if (timerStatusText) {
            timerStatusText.textContent = currentLang === 'tr' ? 'Duraklatıldı' : 'Session Paused';
            timerStatusText.style.borderColor = 'rgba(245, 158, 11, 0.4)';
            timerStatusText.style.color = '#f59e0b';
        }
    });

    // D. Reset click handler: Handles 2FA log wizard logic or standard reset
    const savePromptOverlay = document.getElementById('savePromptModalOverlay');
    const saveStep1 = document.getElementById('saveStep1');
    const saveStep2 = document.getElementById('saveStep2');
    const savePromptDurationText = document.getElementById('savePromptDurationText');
    const savePromptDiscardBtn = document.getElementById('savePromptDiscardBtn');
    const savePromptAddBtn = document.getElementById('savePromptAddBtn');
    const savePromptTitle = document.getElementById('savePromptTitle');

    resetBtn.addEventListener('click', () => {
        const isAdmin = sessionStorage.getItem('defterAdmin') === 'true';

        // Check if recorded focus session is at least 1 hour (3600 seconds) AND admin is logged in
        if (stopwatchSeconds >= 3600 && isAdmin) {
            // Open Save Prompt Modal
            const hours = parseFloat((stopwatchSeconds / 3600).toFixed(1));
            
            // Format Modal Text
            if (savePromptDurationText) {
                savePromptDurationText.textContent = currentLang === 'tr' 
                    ? `Çalışma süresi: ${hours} Saat` 
                    : `Focus duration: ${hours} Hours`;
            }
            if (savePromptTitle) {
                savePromptTitle.textContent = currentLang === 'tr'
                    ? 'Çalışmayı deftere eklemek ister misiniz?'
                    : 'Log this session to your defter?';
            }

            // Show step 1, hide step 2
            saveStep1.style.display = 'block';
            saveStep2.style.display = 'none';
            savePromptOverlay.classList.add('open');
        } else {
            // Not admin or less than 1 hour: Reset timer directly
            directResetTimer();
        }
    });

    function directResetTimer() {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        stopwatchSeconds = 0;
        stopwatchDisplay.textContent = '00:00:00';
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        if (timerStatusText) {
            timerStatusText.textContent = currentLang === 'tr' ? 'Hazır' : 'Ready';
            timerStatusText.style.borderColor = 'var(--border-subtle)';
            timerStatusText.style.color = '#8892b0';
        }
    }

    // Modal Actions: Discard session
    if (savePromptDiscardBtn) {
        savePromptDiscardBtn.addEventListener('click', () => {
            directResetTimer();
            savePromptOverlay.classList.remove('open');
            showToast(currentLang === 'tr' ? 'Seans kaydedilmeden silindi.' : 'Session discarded.');
        });
    }

    // Modal Actions: Proceed to Step 2 (fill details)
    if (savePromptAddBtn) {
        savePromptAddBtn.addEventListener('click', () => {
            saveStep1.style.display = 'none';
            saveStep2.style.display = 'block';
            
            const detailsInput = document.getElementById('logDetailsTr') || document.getElementById('logDetails');
            if (detailsInput) detailsInput.focus();
        });
    }

    // Modal Actions: Cancel step 2 and go back to step 1
    const saveLogCancelBtn = document.getElementById('saveLogCancelBtn');
    if (saveLogCancelBtn) {
        saveLogCancelBtn.addEventListener('click', () => {
            saveStep2.style.display = 'none';
            saveStep1.style.display = 'block';
        });
    }

    // E. Admin 2FA Authentication Overlay Trigger
    const authModalOverlay = document.getElementById('authModalOverlay');
    const authLockBtn = document.getElementById('authLockBtn');
    const authModalCloseBtn = document.getElementById('authModalCloseBtn');
    const lockStateIcon = document.getElementById('lockStateIcon');
    const lockStateText = document.getElementById('lockStateText');

    function updateAuthUIState() {
        const isAdmin = sessionStorage.getItem('defterAdmin') === 'true';
        if (isAdmin) {
            if (lockStateText) lockStateText.textContent = currentLang === 'tr' ? 'Oturum Açık (Çıkış)' : 'Admin Active (Logout)';
            if (lockStateIcon) {
                // Change padlock to unlocked
                lockStateIcon.innerHTML = '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>';
                lockStateIcon.style.color = 'var(--accent-emerald)';
            }
        } else {
            if (lockStateText) lockStateText.textContent = currentLang === 'tr' ? 'Yönetici Girişi' : 'Admin Login';
            if (lockStateIcon) {
                // Change back to locked
                lockStateIcon.innerHTML = '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
                lockStateIcon.style.color = '#8892b0';
            }
        }
    }

    if (authLockBtn) {
        authLockBtn.addEventListener('click', () => {
            const isAdmin = sessionStorage.getItem('defterAdmin') === 'true';
            if (isAdmin) {
                // Log out
                sessionStorage.removeItem('defterAdmin');
                updateAuthUIState();
                showToast(currentLang === 'tr' ? 'Yönetici oturumu kapatıldı.' : 'Admin logged out.');
            } else {
                // Open auth modal
                authModalOverlay.classList.add('open');
                const totpInput = document.getElementById('totpInput');
                if (totpInput) totpInput.focus();
            }
        });
    }

    if (authModalCloseBtn) {
        authModalCloseBtn.addEventListener('click', () => {
            authModalOverlay.classList.remove('open');
        });
    }

    // Google Authenticator 2FA validation
    const totpForm = document.getElementById('totpForm');
    const totpInput = document.getElementById('totpInput');
    const totpError = document.getElementById('totpError');

    if (totpForm) {
        totpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = totpInput.value;
            
            if (checkTotpCode(code)) {
                playSuccessSound();
                totpError.style.display = 'none';
                authModalOverlay.classList.remove('open');
                sessionStorage.setItem('defterAdmin', 'true');
                updateAuthUIState();
                showToast(currentLang === 'tr' ? 'Giriş başarılı! Yönetici modu aktif.' : 'Authenticated successfully! Admin mode active.');
                totpInput.value = '';
            } else {
                playErrorSound();
                totpError.style.display = 'block';
                totpInput.value = '';
                totpInput.focus();
            }
        });
    }

    // F. Logging Form Submit inside Modal (Admin only)
    const logForm = document.getElementById('logSessionForm');
    if (logForm) {
        logForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const detailsTrEl = document.getElementById('logDetailsTr');
            const detailsEnEl = document.getElementById('logDetailsEn');
            const legacyDetailsEl = document.getElementById('logDetails');
            
            const detailsTr = detailsTrEl ? detailsTrEl.value.split('\n').filter(line => line.trim() !== '') : (legacyDetailsEl ? legacyDetailsEl.value.split('\n').filter(line => line.trim() !== '') : []);
            const detailsEn = detailsEnEl ? detailsEnEl.value.split('\n').filter(line => line.trim() !== '') : [];
            const duration = Math.max(0.1, parseFloat((stopwatchSeconds / 3600).toFixed(1)));

            const newLog = {
                id: Date.now(),
                date: new Date().toISOString().split('T')[0],
                duration: duration,
                details_tr: detailsTr.length > 0 ? detailsTr : detailsEn,
                details_en: detailsEn.length > 0 ? detailsEn : detailsTr
            };

            logs.push(newLog);
            localStorage.setItem('study_logs', JSON.stringify(logs));
            
            // Success audio, direct timer reset and UI updates
            playSuccessSound();
            logForm.reset();
            directResetTimer();
            savePromptOverlay.classList.remove('open');

            showToast(currentLang === 'tr' ? 'Çalışma başarıyla deftere kaydedildi!' : 'Study logged successfully to defter!');
            renderLogs();
            updateStats();
        });
    }

    // Initialize UI
    updateAuthUIState();
    renderLogs();
    updateStats();
}

// 12. Theme Switcher Handler
function initThemeSwitcher() {
    const toggler = document.getElementById('themeToggle');
    if (!toggler) return;

    toggler.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Play tactile mechanical click switch sound
        playClickSound();
    });
}
