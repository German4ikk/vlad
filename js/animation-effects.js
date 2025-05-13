/**
 * Максимально простой и надежный скрипт для анимации элементов при скролле
 * С полифиллом для старых браузеров
 */

// Полифилл для Intersection Observer (IE и старые браузеры)
if (!('IntersectionObserver' in window)) {
    // Замена на простой механизм на основе скролла
    window.IntersectionObserver = function(callback) {
        this.elements = [];
        
        this.check = function() {
            this.elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                // Если элемент в зоне видимости
                if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                    callback([{
                        isIntersecting: true,
                        target: el
                    }], this);
                }
            });
        };
        
        this.observe = function(el) {
            if (!this.elements.includes(el)) {
                this.elements.push(el);
            }
        };
        
        this.unobserve = function(el) {
            this.elements = this.elements.filter(item => item !== el);
        };
        
        // Проверка при скролле
        window.addEventListener('scroll', this.check.bind(this));
        // Начальная проверка
        setTimeout(this.check.bind(this), 100);
    };
}

// Главный скрипт
window.addEventListener('load', function() {
    // Дождемся полной загрузки страницы, включая все скрипты
    setTimeout(function() {
        // Список элементов для анимации
        var animElements = [
            { selector: '.themesflat-headings', effect: 'fadeInDown' },
            { selector: '.service-box', effect: 'fadeInUp' },
            { selector: '.gallery-item', effect: 'fadeIn' },
            { selector: '.process-step', effect: 'fadeInLeft' },
            { selector: '.testimonial-item', effect: 'fadeInRight' },
            { selector: '.pricing-item', effect: 'fadeInUp' },
            { selector: '.contact-form', effect: 'fadeIn' },
            { selector: '.about-content', effect: 'fadeIn' },
            { selector: '.counter-item', effect: 'fadeIn' },
            { selector: '.faq-item', effect: 'fadeInUp' },
            { selector: '.themesflat-content-box', effect: 'fadeIn' },
            { selector: '.themesflat-icon-box', effect: 'fadeInUp' },
            { selector: '.themesflat-image-box', effect: 'fadeIn' }
        ];
        
        // Скрываем все элементы вначале
        animElements.forEach(function(item) {
            var elements = document.querySelectorAll(item.selector);
            elements.forEach(function(el) {
                // Напрямую скрываем элементы CSS свойствами
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
        });
        
        // Создаем наблюдатель за элементами
        var observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    
                    // Плавно показываем элемент
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    
                    // Отключаем наблюдение за этим элементом
                    observer.unobserve(el);
                }
            });
        });
        
        // Подключаем все элементы к наблюдателю
        animElements.forEach(function(item) {
            var elements = document.querySelectorAll(item.selector);
            elements.forEach(function(el) {
                observer.observe(el);
            });
        });
        
        // Не дублируем инициализацию FAQ - она уже есть в main.js
    }, 200);
});
