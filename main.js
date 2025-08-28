const translations = {
    fa: {
        heroName: "کیارش داراپور",
        heroTitle: "دیجیتال مارکتر",
        aboutTitle: "درباره من",
        aboutPara1: "سلام! من کیارش داراپور هستم، یک دیجیتال مارکتر پرانرژی که از حدود ۵ سال پیش وارد مسیر حرفه‌ای شدم. از آن زمان این حوزه را لمس کرده‌ام و به تدریج در شاخه‌های مختلفی مثل بازاریابی دیجیتال، سوشال مدیا مارکتینگ و طراحی وب رشد و تجربه به دست آورده‌ام.",
        aboutPara2: "تمرکز اصلی من بر ترکیب دانش فنی با خلاقیت بازاریابی است. از تولید و مدیریت محتوای دیجیتال در شبکه‌های اجتماعی گرفته تا طراحی وب‌سایت‌های واکنش‌گرا، همواره تلاشم بر این بوده که تجربه‌ای ارزشمند و متفاوت برای مخاطب ایجاد کنم.",
        aboutPara3: "در کنار تخصص‌های فنی، تجربه‌های کاری‌ام به من فرصت داده تا توانایی‌های مدیریتی و سرپرستی تیم را پرورش بدهم. کار در محیط‌های مختلف باعث شد روحیه رهبری، مسئولیت‌پذیری، توان مذاکره و ارتباط مؤثر را در خودم تقویت کنم؛ مهارت‌هایی که در کنار دانش فنی، مسیر حرفه‌ای من را کامل‌تر کرده‌اند.",
        counterTitle: "مدت حضور در بازار کار",
        yearsLabel: "سال",
        monthsLabel: "ماه",
        contactBtn: "تماس با من",
        projectsBtn: "مشاهده پروژه‌ها",
        skillsTitle: "مهارت‌های من",
        techSkillsTitle: "مهارت‌های فنی",
        softSkillsTitle: "مهارت‌های نرم + تکمیلی",
        learningSkill: "یادگیری مداوم",
        teamworkSkill: "روحیه کار تیمی",
        negotiationSkill: "توان مذاکره",
        leadershipSkill: "رهبری و سرپرستی",
        adaptabilitySkill: "انعطاف‌پذیری",
        communicationSkill: "ارتباط مؤثر",
        computerSkill: "تسلط موثر بر هوش مصنوعی",
        projectsTitle: "پروژه‌های من",
        project1Title: "سایت Finsweet",
        project1Desc: "طراحی در ۸ ساعت - چالش دوستانه",
        project1Demo: "مشاهده دمو",
        project2Title: "لندینگ چای گلستان",
        project2Desc: "نسخه دسکتاپ",
        project2Demo: "مشاهده دمو",
        project3Title: "محاسبات ریاضی",
        project3Desc: "عدد اول، تام و فاکتوریل",
        project3Demo: "مشاهده دمو",
        contactTitle: "ارتباط با من",
        emailLabel: "ایمیل",
        phoneLabel: "تلفن",
        githubLabel: "گیت‌هاب",
        linkedinLabel: "لینکدین",
        locationText: "📍 تهران، تهرانپارس شرق"
    },
    en: {
        heroName: "Kiarash Darapour",
        heroTitle: "Digital Marketer",
        aboutTitle: "About Me",
        aboutPara1: "Hi! I'm Kiarash Darapour, an energetic digital marketer who started this journey about 5 years ago. Since then, I’ve touched the field and gradually developed my expertise in areas such as digital marketing, social media marketing (SMM), and web development.",
        aboutPara2: "My main focus is on blending technical knowledge with marketing creativity. From producing and managing digital content on social media to building responsive websites, I’ve always aimed to deliver valuable and distinctive experiences for audiences.",
        aboutPara3: "Alongside my technical expertise, my professional background has allowed me to cultivate leadership and team management skills. Working in diverse environments strengthened my abilities in leadership, responsibility, negotiation, and effective communication — qualities that complete my technical profile and define my professional growth.",
        counterTitle: "Time in the Job Market",
        yearsLabel: "Years",
        monthsLabel: "Months",
        contactBtn: "Contact Me",
        projectsBtn: "View Projects",
        skillsTitle: "My Skills",
        techSkillsTitle: "Technical Skills",
        softSkillsTitle: "Soft Skills & Complementary Skills",
        learningSkill: "Continuous Learning",
        teamworkSkill: "Teamwork",
        negotiationSkill: "Negotiation",
        leadershipSkill: "Leadership & Team Management",
        adaptabilitySkill: "Adaptability",
        communicationSkill: "Effective Communication",
        computerSkill: "AI Proficiency",
        projectsTitle: "My Projects",
        project1Title: "Finsweet Website",
        project1Desc: "Designed in 8 hours - Friendly challenge",
        project1Demo: "View Demo",
        project2Title: "Golestan Tea Landing",
        project2Desc: "Desktop version",
        project2Demo: "View Demo",
        project3Title: "Math Calculator",
        project3Desc: "Prime, Perfect & Factorial numbers",
        project3Demo: "View Demo",
        contactTitle: "Contact Me",
        emailLabel: "Email",
        phoneLabel: "Phone",
        githubLabel: "GitHub",
        linkedinLabel: "LinkedIn",
        locationText: "📍 Tehran, East Tehranpars"
    }
};


        // Language toggle functionality
        let currentLang = 'fa';
        const langToggle = document.getElementById('langToggle');
        const langText = document.getElementById('langText');
        const html = document.documentElement;
        const body = document.body;

        function updateLanguage(lang) {
            currentLang = lang;
            const t = translations[lang];
            
            // Update text content
            Object.keys(t).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = t[key];
                }
            });
            
            // Update direction and font
            if (lang === 'fa') {
                html.setAttribute('lang', 'fa');
                html.setAttribute('dir', 'rtl');
                body.classList.remove('font-inter', 'ltr');
                body.classList.add('font-vazir', 'rtl');
                langText.textContent = 'EN';
            } else {
                html.setAttribute('lang', 'en');
                html.setAttribute('dir', 'ltr');
                body.classList.remove('font-vazir', 'rtl');
                body.classList.add('font-inter', 'ltr');
                langText.textContent = 'FA';
            }
        }

        langToggle.addEventListener('click', () => {
            updateLanguage(currentLang === 'fa' ? 'en' : 'fa');
        });

        // Live counter functionality with animation
        let currentYears = 0;
        let currentMonths = 0;
        let targetYears = 0;
        let targetMonths = 0;
        
        function calculateTargetValues() {
            // Start date: approximately 5 years, 3 months, 26 days ago
            const startDate = new Date();
            startDate.setFullYear(startDate.getFullYear() - 5);
            startDate.setMonth(startDate.getMonth() - 3);
            startDate.setDate(startDate.getDate() - 26);
            
            const now = new Date();
            const diff = now - startDate;
            
            targetYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            targetMonths = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        }
        
        function animateNumber(elementId, currentValue, targetValue, duration = 2000) {
            const element = document.getElementById(elementId);
            const startTime = Date.now();
            const startValue = currentValue;
            
            function updateValue() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(startValue + (targetValue - startValue) * easeOutCubic);
                
                element.textContent = currentVal;
                element.classList.add('animate-count-up');
                
                if (progress < 1) {
                    requestAnimationFrame(updateValue);
                } else {
                    element.classList.remove('animate-count-up');
                }
            }
            
            updateValue();
            return targetValue;
        }
        
        function updateCounter() {
            calculateTargetValues();
            
            // Only animate if values have changed
            if (currentYears !== targetYears) {
                currentYears = animateNumber('years', currentYears, targetYears);
            }
            if (currentMonths !== targetMonths) {
                currentMonths = animateNumber('months', currentMonths, targetMonths);
            }
        }
        
        // Initial animation on page load
        setTimeout(() => {
            calculateTargetValues();
            currentYears = animateNumber('years', 0, targetYears, 3000);
            currentMonths = animateNumber('months', 0, targetMonths, 3500);
        }, 1000);
        
        // Update counter every minute (since we only show years and months)
        setInterval(updateCounter, 60000);

        // Smooth scrolling for navigation links
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

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.skill-progress, .animate-on-scroll, .animate-scale-in').forEach(el => {
            observer.observe(el);
        });

        // Add staggered animation delays
        document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.1}s`;
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9733cbd051d25012',t:'MTc1NTg4MDY2MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();


