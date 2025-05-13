// Объединенный JavaScript файл для сайта

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация FAQ аккордеона
    initFaqAccordion();
    
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
    
    // Инициализируем кнопки языка при загрузке страницы
    initLanguageButtons();
    
    // Текущий язык (по умолчанию русский)
    let currentLang = localStorage.getItem('language') || 'ru';
    
    // Устанавливаем начальный язык
    changeLanguage(currentLang);
});

// Инициализация FAQ аккордеона
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Закрываем все другие элементы
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Переключаем активный класс для текущего элемента
                item.classList.toggle('active');
            });
        }
    });
}

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
            header.classList.add('scrolled');
        } else {
            header.classList.remove('fixed');
            header.classList.remove('scrolled');
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
    
    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

// Функция для фильтрации галереи
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (!filterButtons.length || !galleryItems.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Активируем первую кнопку по умолчанию
    if (filterButtons[0]) {
        filterButtons[0].click();
    }
}

// Функция для анимации счетчиков
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (!counters.length) return;
    
    let counted = false;
    
    function startCounting() {
        if (counted) return;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            const duration = 2000; // 2 секунды
            const step = target / (duration / 16); // 16мс - примерное время кадра
            
            let current = 0;
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
        
        counted = true;
    }
    
    // Начинаем считать, когда секция становится видимой
    function checkVisibility() {
        const counterSection = document.querySelector('.counter-section');
        if (!counterSection) return;
        
        const position = counterSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if (position < screenHeight * 0.8) {
            startCounting();
        }
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверяем при загрузке страницы
}

// Функция для плавной прокрутки к якорям
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Плавная прокрутка к элементу
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Работа с переводами
// Функция для изменения языка
function changeLanguage(lang) {
    const currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all elements with data-i18n-alt attribute (for image alt text)
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });
    
    // Update all elements with data-i18n-placeholder attribute (for input placeholders)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update all elements with data-i18n-value attribute (for input values)
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        if (translations[lang] && translations[lang][key]) {
            element.value = translations[lang][key];
        }
    });
    
    // Update document title
    document.title = lang === 'ru' ? 'Ремонт квартир и домов в Эстонии | SpecMontage Oü' : 'Korterite ja majade remont Eestis | SpecMontage Oü';
    
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

// Обработка отправки формы
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formStatus = document.getElementById('formStatus');
        const currentLang = localStorage.getItem('language') || 'ru';
        
        // Очищаем предыдущий статус
        if (formStatus) {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }
        
        // Показываем индикатор загрузки
        const submitButton = this.querySelector('button[type="submit"]');
        if (submitButton) {
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = currentLang === 'ru' ? 'Отправка...' : 'Saatmine...';
        }
        
        // Имитация отправки данных (в реальном проекте здесь был бы fetch или XMLHttpRequest)
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% вероятность успеха (для демонстрации)
            
            if (success) {
                showFormStatus('success', currentLang === 'ru' ? 
                    'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.' : 
                    'Teie sõnum on edukalt saadetud! Võtame teiega peagi ühendust.');
                contactForm.reset();
            } else {
                showFormStatus('error', currentLang === 'ru' ? 
                    'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз позже.' : 
                    'Sõnumi saatmisel ilmnes viga. Palun proovige hiljem uuesti.');
            }
            
            // Восстанавливаем кнопку
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        }, 1500);
    });
}

// Функция для отображения статуса формы
function showFormStatus(status, message) {
    const formStatus = document.getElementById('formStatus');
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + status;
    
    // Прокручиваем к сообщению о статусе
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Скрываем сообщение через 5 секунд при успехе
    if (status === 'success') {
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }
}

// Telegram Mini App integration
if (window.Telegram && window.Telegram.WebApp) {
    // Add Telegram-specific class to body
    document.body.classList.add('telegram-webapp');
    
    // Initialize Telegram WebApp
    Telegram.WebApp.ready();
    
    // Expand the WebApp to its maximum allowed height
    Telegram.WebApp.expand();
    
    // Add event listener for MainButton
    const mainButton = Telegram.WebApp.MainButton;
    if (mainButton) {
        mainButton.setText('Связаться с нами');
        mainButton.onClick(function() {
            const contactSection = document.getElementById('contacts');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        mainButton.show();
    }
}
