/**
 * Скрипт для управления переключением языков на сайте
 */

// Глобальная переменная для хранения текущего языка
let currentLanguage = 'ru';

document.addEventListener('DOMContentLoaded', function() {
    // Определяем текущий язык при загрузке страницы
    initializeLanguage();
    
    // Добавляем обработчики событий для кнопок переключения языка
    setupLanguageSwitchers();
});

/**
 * Инициализация языка при загрузке страницы
 */
function initializeLanguage() {
    // Проверяем сохраненный язык в localStorage
    const savedLang = localStorage.getItem('siteLang');
    if (savedLang && (savedLang === 'ru' || savedLang === 'et')) {
        currentLanguage = savedLang;
    } else {
        // Проверяем язык страницы по атрибуту html
        const htmlLang = document.documentElement.lang;
        if (htmlLang === 'et') {
            currentLanguage = 'et';
        }
        
        // Проверяем URL на наличие параметра языка
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam === 'et') {
            currentLanguage = 'et';
        }
    }
    
    // Применяем язык к странице
    applyLanguage(currentLanguage);
}

/**
 * Настройка обработчиков событий для кнопок переключения языка
 */
function setupLanguageSwitchers() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang && (lang === 'ru' || lang === 'et')) {
                // Сохраняем выбор языка
                localStorage.setItem('siteLang', lang);
                currentLanguage = lang;
                
                // Применяем язык к странице
                applyLanguage(lang);
                
                // Обновляем уведомление о cookie, если оно отображается
                updateCookieNotice(lang);
            }
        });
    });
}

/**
 * Применение выбранного языка к странице
 * @param {string} lang - Код языка ('ru' или 'et')
 */
function applyLanguage(lang) {
    // Обновляем активную кнопку языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Обновляем тексты на странице, если доступен объект переводов
    if (typeof translations !== 'undefined') {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }
}

/**
 * Обновление уведомления о cookie при смене языка
 * @param {string} lang - Код языка ('ru' или 'et')
 */
function updateCookieNotice(lang) {
    const cookieNotice = document.getElementById('cookie-notice');
    if (cookieNotice) {
        // Если функция доступна из cookie-consent.js
        if (typeof updateCookieNoticeContent === 'function') {
            // Вызываем функцию из cookie-consent.js
            updateCookieNoticeContent();
        } else if (typeof getCookieNoticeContent === 'function') {
            // Запасной вариант, если функция updateCookieNoticeContent недоступна
            cookieNotice.innerHTML = getCookieNoticeContent(lang);
            
            // Повторно добавляем обработчик события для кнопки принятия
            document.getElementById('accept-cookies').addEventListener('click', function() {
                if (typeof acceptCookies === 'function') {
                    acceptCookies();
                }
            });
        }
    }
}
