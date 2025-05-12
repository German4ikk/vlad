// Основной JavaScript файл для сайта

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация FAQ аккордеона
    initFaqAccordion();
    
    // Инициализация плавной прокрутки
    initSmoothScroll();
    
    // Инициализация эффекта прокрутки для шапки
    initScrollHeader();
    
    // Инициализация мобильного меню
    initMobileMenu();
});

// Инициализация FAQ аккордеона
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
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
    });
}

// Инициализация плавной прокрутки
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Закрываем мобильное меню при клике на ссылку
                const mobileMenu = document.getElementById('main-nav');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.querySelector('.mobile-button').classList.remove('active');
                }
                
                // Плавная прокрутка к элементу
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Инициализация эффекта прокрутки для шапки
function initScrollHeader() {
    const header = document.getElementById('site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Инициализация мобильного меню
function initMobileMenu() {
    const mobileButton = document.querySelector('.mobile-button');
    const mainNav = document.getElementById('main-nav');
    
    if (mobileButton && mainNav) {
        mobileButton.addEventListener('click', () => {
            mobileButton.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
}

// Инициализация слайдера (если нужно)
function initSlider() {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentSlide = 0;
    
    // Показываем первый слайд
    if (sliderItems.length > 0) {
        sliderItems[0].style.display = 'block';
    }
    
    // Функция для переключения слайдов
    function nextSlide() {
        sliderItems[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % sliderItems.length;
        sliderItems[currentSlide].style.display = 'block';
    }
    
    // Автоматическое переключение слайдов каждые 5 секунд
    setInterval(nextSlide, 5000);
}

// Инициализация анимаций при прокрутке
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate__animated');
    
    function checkIfInView() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate__fadeInUp');
            }
        });
    }
    
    // Проверяем при загрузке страницы
    checkIfInView();
    
    // Проверяем при прокрутке
    window.addEventListener('scroll', checkIfInView);
}
