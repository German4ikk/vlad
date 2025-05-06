document.addEventListener('DOMContentLoaded', function() {
    // Инициализация слайдера
    initSlider();
    
    // Анимация при скролле
    initScrollAnimations();
    
    // Эффект параллакса
    initParallaxEffect();
    
    // Обработка скролла шапки
    handleHeaderScroll();
    
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Фильтрация галереи
    initGalleryFilter();
    
    // Анимация счетчиков
    initCounters();
    
    // Плавная прокрутка к якорям
    initSmoothScroll();
    
    // Текущий язык (по умолчанию русский)
    let currentLang = localStorage.getItem('language') || 'ru';
    
    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update all elements with data-i18n-alt attribute (for image alt text)
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            if (translations[lang][key]) {
                element.alt = translations[lang][key];
            }
        });
        
        // Update all elements with data-i18n-placeholder attribute (for input placeholders)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // Update all elements with data-i18n-value attribute (for input values)
        document.querySelectorAll('[data-i18n-value]').forEach(element => {
            const key = element.getAttribute('data-i18n-value');
            if (translations[lang][key]) {
                element.value = translations[lang][key];
            }
        });
        
        // Update document title
        document.title = lang === 'ru' ? 'Ремонт квартир и домов в Эстонии | Влад Мастер' : 'Korterite ja majade remont Eestis | Vlad Meister';
        
        // Update active language in the selector
        document.querySelectorAll('.lang-btn').forEach(el => {
            el.classList.remove('active');
            if (el.getAttribute('data-lang') === lang) {
                el.classList.add('active');
            }
        });
        
        // Update form status messages
        const formStatus = document.getElementById('formStatus');
        if (formStatus) {
            if (formStatus.classList.contains('success')) {
                formStatus.textContent = translations[lang]['contacts.success'];
            } else if (formStatus.classList.contains('error')) {
                formStatus.textContent = translations[lang]['contacts.error'];
            }
        }
    }
    
    // Language selector click event
    function initLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', langButtonClickHandler);
        });
    }
    
    // Функция-обработчик клика по кнопке языка
    function langButtonClickHandler() {
        const lang = this.getAttribute('data-lang');
        if (lang) {
            changeLanguage(lang);
        }
    }
    
    // Инициализируем кнопки языка при загрузке страницы
    initLanguageButtons();
    
    // Set initial language
    changeLanguage(currentLang);
    
    // Функция для инициализации слайдера
    function initSlider() {
        const slider = document.getElementById('rev-slider');
        if (!slider) return;
        
        const slides = slider.querySelectorAll('.slider-item');
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Показываем первый слайд
        showSlide(0);
        
        // Автоматическое переключение слайдов каждые 5 секунд
        setInterval(nextSlide, 5000);
    }
    
    // Функция для анимации элементов при скролле
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate__animated');
        
        function checkScroll() {
            animatedElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight * 0.8) {
                    const animationClass = element.classList.contains('animate__fadeIn') ? 'animate__fadeIn' :
                                          element.classList.contains('animate__fadeInLeft') ? 'animate__fadeInLeft' :
                                          element.classList.contains('animate__fadeInRight') ? 'animate__fadeInRight' :
                                          element.classList.contains('animate__fadeInUp') ? 'animate__fadeInUp' :
                                          element.classList.contains('animate__fadeInDown') ? 'animate__fadeInDown' : '';
                    
                    if (animationClass) {
                        element.classList.add(animationClass);
                    }
                }
            });
        }
        
        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Проверяем при загрузке страницы
    }
    
    // Функция для эффекта параллакса
    function initParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        function updateParallax() {
            parallaxElements.forEach(element => {
                const scrollTop = window.pageYOffset;
                const elementTop = element.offsetTop;
                const elementHeight = element.offsetHeight;
                
                if (scrollTop > elementTop - window.innerHeight && scrollTop < elementTop + elementHeight) {
                    const speed = element.getAttribute('data-speed') || 0.5;
                    const yPos = (scrollTop - elementTop) * speed;
                    element.style.backgroundPositionY = yPos + 'px';
                }
            });
        }
        
        window.addEventListener('scroll', updateParallax);
        updateParallax(); // Инициализация при загрузке
    }
    
    // Функция для обработки скролла шапки
    function handleHeaderScroll() {
        const header = document.getElementById('site-header');
        if (!header) return;
        
        function updateHeader() {
            if (window.scrollY > 100) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        }
        
        window.addEventListener('scroll', updateHeader);
        updateHeader(); // Инициализация при загрузке
    }
    
    // Функция для инициализации мобильного меню
    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-button');
        const mobileMenu = document.querySelector('#main-nav');
        const body = document.body;
        
        if (!menuToggle || !mobileMenu) return;
        
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Закрытие меню при клике на пункт меню
        const menuItems = mobileMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 991) {
                    mobileMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    body.classList.remove('menu-open');
                }
            });
        });
    }
    
    // Функция для фильтрации галереи
    function initGalleryFilter() {
        const filterButtons = document.querySelectorAll('.gallery-filter button');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        if (filterButtons.length === 0 || galleryItems.length === 0) return;
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Удаляем активный класс со всех кнопок
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Добавляем активный класс на текущую кнопку
                this.classList.add('active');
                
                const category = this.getAttribute('data-filter');
                
                // Фильтруем элементы галереи
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (category === 'all' || category === itemCategory) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Функция для анимации счетчиков
    function initCounters() {
        const counters = document.querySelectorAll('.counter-number');
        
        function animateCounter(counter, target) {
            let count = 0;
            const duration = 2000; // 2 секунды
            const step = target / (duration / 16); // 16ms примерно равно одному кадру при 60fps
            
            function updateCount() {
                count += step;
                if (count >= target) {
                    counter.textContent = target;
                } else {
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(updateCount);
                }
            }
            
            updateCount();
        }
        
        function checkCounters() {
            counters.forEach(counter => {
                const counterTop = counter.getBoundingClientRect().top;
                
                if (counterTop < window.innerHeight * 0.8 && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    animateCounter(counter, target);
                }
            });
        }
        
        window.addEventListener('scroll', checkCounters);
        checkCounters(); // Проверяем при загрузке страницы
    }
    
    // Функция для плавной прокрутки к якорям
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                const headerHeight = document.querySelector('#site-header')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню, если оно открыто
                const mobileMenu = document.querySelector('#main-nav-mobi');
                const menuToggle = document.querySelector('.mobile-button');
                
                if (mobileMenu?.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    menuToggle?.classList.remove('active');
                }
            });
        });
    }
    
    // Обработка отправки формы
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const sendToTelegram = document.getElementById('telegram')?.checked || false;
            
            // Form validation
            if (!name || !phone || !email || !message) {
                showFormStatus('error', translations[currentLang]['contacts.error']);
                return;
            }
            
            // Show loading state
            showFormStatus('loading', translations[currentLang]['contacts.sending']);
            
            if (sendToTelegram) {
                // Telegram Bot API settings
                const botToken = '5555555555:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'; // Замените на ваш токен
                const chatId = '-1001234567890'; // Замените на ваш ID чата
                
                // Format message for Telegram
                const telegramMessage = `
                    🔔 Новая заявка с сайта!
                    
                    👤 Имя: ${name}
                    📞 Телефон: ${phone}
                    ✉️ Email: ${email}
                    
                    📝 Сообщение:
                    ${message}
                    
                    📅 Дата: ${new Date().toLocaleString()}
                `;
                
                // Send to Telegram
                fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: telegramMessage,
                        parse_mode: 'HTML'
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        // Success
                        showFormStatus('success', translations[currentLang]['contacts.success']);
                        contactForm.reset();
                    } else {
                        // Error
                        showFormStatus('error', translations[currentLang]['contacts.error']);
                    }
                })
                .catch(error => {
                    console.error('Error sending message to Telegram:', error);
                    showFormStatus('error', translations[currentLang]['contacts.error']);
                });
            } else {
                // Если отправка в Telegram отключена, просто показываем успешное сообщение
                showFormStatus('success', translations[currentLang]['contacts.success']);
                contactForm.reset();
            }
        });
    }
    
    // Функция для отображения статуса формы
    function showFormStatus(status, message) {
        const formStatus = document.getElementById('formStatus');
        if (!formStatus) return;
        
        formStatus.textContent = message;
        formStatus.className = status;
        
        if (status === 'success' || status === 'error') {
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = '';
            }, 5000);
        }
    }
    
    // Telegram Mini App integration
    if (window.Telegram && window.Telegram.WebApp) {
        // Add Telegram-specific class to body
        document.body.classList.add('telegram-webapp');
        
        // Initialize Telegram Web App
        window.Telegram.WebApp.ready();
        
        // Expand the Web App to its maximum size
        window.Telegram.WebApp.expand();
        
        // Set header color
        window.Telegram.WebApp.setHeaderColor('#1a1a1a');
        
        // Handle back button
        window.Telegram.WebApp.BackButton.onClick(() => {
            window.history.back();
        });
        
        // Show back button when navigating away from home
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                window.Telegram.WebApp.BackButton.show();
            } else {
                window.Telegram.WebApp.BackButton.hide();
            }
        });
    }
});
