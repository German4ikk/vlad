// JavaScript для обработки мобильного меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileButton = document.querySelector('.mobile-button');
    const mainNav = document.getElementById('main-nav');
    
    // Функция для обработки клика по мобильной кнопке
    if (mobileButton) {
        mobileButton.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Закрытие мобильного меню при клике на пункт меню
    const menuItems = document.querySelectorAll('#main-nav .menu-item a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 991) {
                mobileButton.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    });
    
    // Закрытие мобильного меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            mobileButton.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
    
    // Добавление класса scrolled к шапке при прокрутке
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Вызываем событие прокрутки сразу, чтобы установить начальное состояние
    window.dispatchEvent(new Event('scroll'));
});
