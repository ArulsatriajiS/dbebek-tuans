/* ============================================================
   D'BEBEK TUANS — Landing Page JavaScript
   Theme toggle, language toggle, navbar scroll,
   particles, lightbox, scroll progress, and more
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        disable: () => window.innerWidth < 480
    });

    // ======================== THEME TOGGLE ========================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlEl = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('dbebek-theme') || 'light';
    htmlEl.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = htmlEl.getAttribute('data-bs-theme');
        const next = current === 'light' ? 'dark' : 'light';
        htmlEl.setAttribute('data-bs-theme', next);
        localStorage.setItem('dbebek-theme', next);
        updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill';
            themeIcon.style.color = '#E9A84E';
        } else {
            themeIcon.className = 'bi bi-moon-stars-fill';
            themeIcon.style.color = '';
        }
    }


    // ======================== LANGUAGE TOGGLE ========================
    const langToggle = document.getElementById('langToggle');
    const langLabel = document.getElementById('langLabel');
    let currentLang = localStorage.getItem('dbebek-lang') || 'id';

    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.menu': 'Menu',
            'nav.gallery': 'Gallery',
            'nav.contact': 'Contact',
            'hero.badge': 'Sembalun, Lombok',
            'hero.title': 'Savor the Best Duck<br>in Sembalun',
            'hero.subtitle': 'Delicious food and breathtaking mountain views',
            'cta.contact': 'Contact Us',
            'cta.menu': 'View Menu',
            'cta.whatsapp': 'Contact via WhatsApp',
            'trust.stars': 'Stars on Google',
            'trust.reviews': 'Reviews',
            'trust.authentic': 'Authentic Taste',
            'about.label': 'About Us',
            'about.title': 'Authentic Flavors in the Heart of Sembalun',
            'about.text1': "D'Bebek Tuans offers a unique dining experience in the highlands of Sembalun, Lombok. With an open-air dining concept, you can enjoy the finest duck dishes while gazing at the beauty of Mount Rinjani and the stunning green hills.",
            'about.text2': 'We use generational recipes with rich Lombok spices full of flavor. Every duck is prepared with love — fried to perfect crispiness or grilled over selected charcoal for an unforgettable taste.',
            'about.badge.number': 'Since',
            'about.badge.text': 'Sembalun',
            'about.f1.title': 'Open-Air Dining',
            'about.f1.text': 'Dine in the open air',
            'about.f2.title': 'Authentic Spices',
            'about.f2.text': 'Generational recipe',
            'about.f3.title': 'Family Friendly',
            'about.f3.text': 'Suitable for all ages',
            'menu.label': 'Our Menu',
            'menu.title': 'Featured Dishes',
            'menu.subtitle': 'Made with fresh selected ingredients and secret family recipes',
            'menu.badge.popular': '⭐ Popular',
            'menu.item1.desc': 'Perfectly crispy fried duck with sambal matah and fresh vegetables',
            'menu.item2.desc': 'Grilled duck with honey glaze and spices, irresistible smoky aroma',
            'menu.item3.desc': 'Duck with spicy rica-rica sauce Manado style, a delightful spicy sensation',
            'menu.item4.title': 'Fresh Drinks',
            'menu.item4.desc': 'Iced orange, young coconut, and various fresh tropical fruit juices',
            'gallery.label': 'Gallery',
            'gallery.title': 'Moments at D\'Bebek Tuans',
            'contact.label': 'Contact',
            'contact.title': 'Find Us',
            'contact.address.title': 'Address',
            'contact.hours.title': 'Opening Hours',
            'contact.hours.text': 'Every Day: 10:00 AM – 8:00 PM WITA',
            'contact.price.title': 'Price Range',
            'contact.price.per': 'per person',
            'contact.services.title': 'Services',
            'contact.services.text': 'Dine-in · Curbside pickup',
            'footer.desc': 'The best duck restaurant in the highlands of Sembalun, Lombok. Enjoy delicious dishes with stunning natural views.',
            'footer.quicklinks': 'Quick Links',
            'footer.info': 'Information',
            'footer.hours': 'Open Daily: 10:00 AM – 8:00 PM',
            'footer.rights': 'All Rights Reserved.'
        },
        id: {
            'nav.home': 'Beranda',
            'nav.about': 'Tentang',
            'nav.menu': 'Menu',
            'nav.gallery': 'Galeri',
            'nav.contact': 'Kontak',
            'hero.badge': 'Sembalun, Lombok',
            'hero.title': 'Nikmati Bebek Terbaik<br>di Sembalun',
            'hero.subtitle': 'Hidangan lezat dengan pemandangan pegunungan yang memukau',
            'cta.contact': 'Hubungi Kami',
            'cta.menu': 'Lihat Menu',
            'cta.whatsapp': 'Hubungi via WhatsApp',
            'trust.stars': 'Bintang di Google',
            'trust.reviews': 'Ulasan',
            'trust.authentic': 'Cita Rasa Otentik',
            'about.label': 'Tentang Kami',
            'about.title': 'Cita Rasa Otentik di Tengah Alam Sembalun',
            'about.text1': "D'Bebek Tuans menghadirkan pengalaman bersantap unik di dataran tinggi Sembalun, Lombok. Dengan konsep <em>open-air dining</em>, Anda bisa menikmati hidangan bebek terbaik sambil memandang keindahan Gunung Rinjani dan perbukitan hijau yang memukau.",
            'about.text2': 'Kami menggunakan resep turun-temurun dengan bumbu rempah khas Lombok yang kaya akan cita rasa. Setiap bebek diolah dengan penuh cinta — digoreng garing sempurna atau dibakar dengan arang pilihan untuk menghasilkan kelezatan yang tak terlupakan.',
            'about.badge.number': 'Sejak',
            'about.badge.text': 'Sembalun',
            'about.f1.title': 'Open-Air Dining',
            'about.f1.text': 'Makan di alam terbuka',
            'about.f2.title': 'Bumbu Rempah Asli',
            'about.f2.text': 'Resep turun-temurun',
            'about.f3.title': 'Ramah Keluarga',
            'about.f3.text': 'Cocok untuk semua usia',
            'menu.label': 'Menu Kami',
            'menu.title': 'Hidangan Pilihan',
            'menu.subtitle': 'Dibuat dengan bahan segar pilihan dan resep rahasia keluarga',
            'menu.badge.popular': '⭐ Favorit',
            'menu.item1.desc': 'Bebek goreng renyah sempurna dengan sambal matah dan lalapan segar',
            'menu.item2.desc': 'Bebek bakar dengan olesan madu dan rempah, aroma smoke yang menggoda',
            'menu.item3.desc': 'Bebek dengan bumbu rica pedas khas Manado, sensasi pedas nikmat',
            'menu.item4.title': 'Minuman Segar',
            'menu.item4.desc': 'Es jeruk, es kelapa muda, dan aneka jus buah tropis segar',
            'gallery.label': 'Galeri',
            'gallery.title': 'Momen di D\'Bebek Tuans',
            'contact.label': 'Kontak',
            'contact.title': 'Temukan Kami',
            'contact.address.title': 'Alamat',
            'contact.hours.title': 'Jam Buka',
            'contact.hours.text': 'Setiap Hari: 10:00 – 20:00 WITA',
            'contact.price.title': 'Kisaran Harga',
            'contact.price.per': 'per orang',
            'contact.services.title': 'Layanan',
            'contact.services.text': 'Makan di tempat · Ambil di tepi jalan',
            'footer.desc': 'Restoran bebek terbaik di dataran tinggi Sembalun, Lombok. Nikmati hidangan lezat dengan pemandangan alam yang menakjubkan.',
            'footer.quicklinks': 'Tautan Cepat',
            'footer.info': 'Informasi',
            'footer.hours': 'Buka Setiap Hari: 10:00 – 20:00',
            'footer.rights': 'Hak Cipta Dilindungi.'
        }
    };

    // Apply initial language
    applyLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('dbebek-lang', currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        langLabel.textContent = lang === 'id' ? 'EN' : 'ID';
        const dict = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });
        htmlEl.setAttribute('lang', lang);
    }


    // ======================== NAVBAR SCROLL EFFECT ========================
    const navbar = document.getElementById('mainNavbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = scrollY;
    }, { passive: true });


    // ======================== ACTIVE NAV LINK ON SCROLL ========================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();


    // ======================== CLOSE OFFCANVAS ON LINK CLICK ========================
    const offcanvasEl = document.getElementById('mobileMenu');
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            offcanvas.hide();
        });
    });


    // ======================== HERO PARTICLES ========================
    function createParticles() {
        const container = document.getElementById('heroParticles');
        if (!container) return;

        const count = window.innerWidth < 768 ? 12 : 25;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-10px';
            particle.style.animationDuration = (5 + Math.random() * 8) + 's';
            particle.style.animationDelay = (Math.random() * 8) + 's';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }

    createParticles();


    // ======================== LIGHTBOX ========================
    // Create lightbox overlay
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML = `
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <img src="" alt="Lightbox image">
    `;
    document.body.appendChild(lightboxOverlay);

    const lightboxImg = lightboxOverlay.querySelector('img');
    const lightboxClose = lightboxOverlay.querySelector('.lightbox-close');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });


    // ======================== SCROLL PROGRESS BAR ========================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, { passive: true });


    // ======================== SMOOTH SCROLL FOR ANCHOR LINKS ========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // ======================== WHATSAPP BUTTON VISIBILITY ========================
    const floatingWA = document.getElementById('floatingWA');
    
    function toggleWAVisibility() {
        if (window.scrollY > 400) {
            floatingWA.style.opacity = '1';
            floatingWA.style.pointerEvents = 'auto';
        } else {
            floatingWA.style.opacity = '0';
            floatingWA.style.pointerEvents = 'none';
        }
    }

    // Start hidden
    floatingWA.style.opacity = '0';
    floatingWA.style.pointerEvents = 'none';
    floatingWA.style.transition = 'all 0.35s ease';

    window.addEventListener('scroll', toggleWAVisibility, { passive: true });


    // ======================== COUNTER ANIMATION ========================
    function animateCounters() {
        const counters = document.querySelectorAll('.trust-item strong');
        counters.forEach(counter => {
            const text = counter.textContent;
            const match = text.match(/[\d.]+/);
            if (!match) return;

            const target = parseFloat(match[0]);
            const suffix = text.replace(match[0], '');
            const isDecimal = text.includes('.');
            const duration = 1500;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = target * eased;

                counter.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
        });
    }

    // Trigger counters when trust banner is visible
    const trustBanner = document.querySelector('.trust-banner');
    if (trustBanner) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(trustBanner);
    }
});
