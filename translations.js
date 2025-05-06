// Объект с переводами
const translations = {
    ru: {
        // Верхняя панель
        'topbar.followus': 'Следите за нами:',
        'topbar.address': 'Таллин, Эстония',
        'topbar.hours': 'Пн-Сб: 8:00-18:00',
        
        // Меню
        'menu.home': 'ГЛАВНАЯ',
        'menu.services': 'УСЛУГИ',
        'menu.whyus': 'ПОЧЕМУ Я',
        'menu.gallery': 'ГАЛЕРЕЯ',
        'menu.reviews': 'ОТЗЫВЫ',
        'menu.contacts': 'КОНТАКТЫ',
        
        // Логотип
        'logo.text': 'ВЛАД МАСТЕР',
        
        // Главная
        'home.subtitle': 'Более 10 лет опыта',
        'home.title': 'Профессиональный ремонт квартир и домов в Эстонии',
        'home.description': 'Делаю всё — от косметического ремонта до комплексной отделки под ключ. Работаю аккуратно, по договору, с понятными сроками и честными ценами.',
        'home.cta': 'ЗАКАЗАТЬ РЕМОНТ',
        'home.cta2': 'ЗАКАЗАТЬ РЕМОНТ ВАННОЙ',
        'home.cta3': 'ЗАКАЗАТЬ РЕМОНТ КУХНИ',
        'home.subtitle2': 'Доступные цены',
        'home.subtitle3': 'Индивидуальный подход',
        'home.subtitle4': 'Высокое качество',
        'home.title2': 'Ремонт ванных комнат и санузлов',
        'home.title3': 'Ремонт кухонь и жилых помещений',
        'home.title4': 'Ремонт квартир под ключ',
        'home.description2': 'Полный цикл работ по ремонту ванных комнат: замена труб, установка сантехники, плитка, потолки, полы.',
        'home.description3': 'Качественный ремонт кухонь, гостиных, спален и других помещений. Индивидуальный подход к каждому клиенту.',
        'home.description4': 'Комплексный ремонт квартир и домов с гарантией качества. Работаю с любыми помещениями и сложностью проектов.',
        
        // Услуги
        'services.title': 'УСЛУГИ',
        'services.subtitle': 'Предлагаю широкий спектр услуг по ремонту и отделке',
        'services.fullRenovation': 'Ремонт квартир и домов под ключ',
        'services.fullRenovationDesc': 'Полный цикл работ от дизайн-проекта до финальной уборки',
        'services.bathroom': 'Ремонт ванных комнат',
        'services.bathroomDesc': 'Замена сантехники, плитка, гидроизоляция, потолки',
        'services.kitchen': 'Ремонт кухонь',
        'services.kitchenDesc': 'Отделка стен, потолков, установка кухонной мебели',
        'services.flooring': 'Напольные покрытия',
        'services.flooringDesc': 'Ламинат, паркет, плитка, линолеум, наливные полы',
        'services.walls': 'Отделка стен',
        'services.wallsDesc': 'Штукатурка, шпаклевка, покраска, обои, декоративная отделка',
        'services.electrical': 'Электромонтажные работы',
        'services.electricalDesc': 'Замена проводки, установка розеток и выключателей',
        'services.plumbing': 'Сантехнические работы',
        'services.plumbingDesc': 'Замена труб, установка сантехники и оборудования',
        'services.more': 'Подробнее',
        
        // Почему выбирают меня
        'whyus.title': 'ПОЧЕМУ ВЫБИРАЮТ МЕНЯ',
        'whyus.subtitle': 'Принципы моей работы, которые ценят клиенты',
        'whyus.experience': 'ОПЫТ РАБОТЫ',
        'whyus.experienceDesc': 'Более 10 лет опыта в сфере ремонта и отделки',
        'whyus.quality': 'ВЫСОКОЕ КАЧЕСТВО',
        'whyus.qualityDesc': 'Соблюдаю высокие стандарты качества во всех видах работ, использую проверенные материалы и технологии.',
        'whyus.ontime': 'ТОЧНЫЕ СРОКИ',
        'whyus.ontimeDesc': 'Ценю ваше время и всегда соблюдаю согласованные сроки выполнения работ.',
        'whyus.price': 'ЧЕСТНЫЕ ЦЕНЫ',
        'whyus.priceDesc': 'Прозрачное ценообразование без скрытых платежей',
        
        // Галерея
        'gallery.title': 'ГАЛЕРЕЯ РАБОТ',
        'gallery.all': 'Все',
        'gallery.apartments': 'Квартиры',
        'gallery.houses': 'Дома',
        'gallery.bathrooms': 'Ванные',
        'gallery.bathroom': 'Ремонт ванной комнаты',
        'gallery.kitchen': 'Ремонт кухни',
        'gallery.livingroom': 'Ремонт гостиной',
        'gallery.flooring': 'Укладка пола',
        'gallery.bathroomCaption': 'Ремонт ванной комнаты',
        'gallery.kitchenCaption': 'Ремонт кухни',
        'gallery.livingroomCaption': 'Ремонт гостиной',
        'gallery.flooringCaption': 'Укладка пола',
        
        // Отзывы
        'reviews.title': 'ОТЗЫВЫ КЛИЕНТОВ',
        'reviews.text1': 'Влад выполнил ремонт моей квартиры на высшем уровне. Все работы были выполнены качественно и в срок. Особенно порадовала чистота после завершения работ.',
        'reviews.author1': 'Анна, Таллин',
        'reviews.text2': 'Обратился к Владу для ремонта ванной комнаты. Результат превзошел все ожидания! Качество работы на высоте, цена адекватная.',
        'reviews.author2': 'Михаил, Тарту',
        'reviews.review1': 'Влад делал ремонт в нашей ванной комнате. Всё сделано очень качественно и в срок. Очень довольны результатом!',
        'reviews.review2': 'Обратились к Владу для ремонта кухни. Работа выполнена профессионально, быстро и без лишних затрат. Рекомендую!',
        
        // Локация
        'location.title': 'Где работаю',
        'location.area': 'Работаю в Таллине и Харьюмаа',
        'location.travel': 'Возможен выезд по всей Эстонии по договорённости.',
        
        // Контакты
        'contacts.title': 'КОНТАКТЫ',
        'contacts.formTitle': 'ЗАКАЗАТЬ РЕМОНТ',
        'contacts.formSubtitle': 'Заполните форму, и я свяжусь с вами для обсуждения деталей.',
        'contacts.addressTitle': 'Адрес',
        'contacts.address': 'Таллин, Эстония',
        'contacts.phoneTitle': 'Телефон',
        'contacts.emailTitle': 'Email',
        'contacts.hoursTitle': 'Часы работы',
        'contacts.hours': 'Пн-Сб: 8:00-18:00',
        'contacts.followUs': 'Следите за нами:',
        'contacts.name': 'Имя',
        'contacts.phoneNumber': 'Телефон',
        'contacts.email': 'Email',
        'contacts.message': 'Описание задачи',
        'contacts.submit': 'ОТПРАВИТЬ',
        'contacts.telegramLabel': 'Заявка будет отправлена в Telegram',
        'contacts.telegramBadge': 'Заявка будет отправлена в Telegram',
        'contacts.success': 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.',
        'contacts.error': 'При отправке заявки произошла ошибка. Пожалуйста, попробуйте еще раз.',
        
        // Футер
        'footer.rights': 'Все права защищены',
        'footer.copyright': '© 2025 Влад Мастер | Все права защищены'
    },
    et: {
        // Верхняя панель
        'topbar.followus': 'Jälgi meid:',
        'topbar.address': 'Tallinn, Eesti',
        'topbar.hours': 'E-L: 8:00-18:00',
        
        // Меню
        'menu.home': 'AVALEHT',
        'menu.services': 'TEENUSED',
        'menu.whyus': 'MIKS MINA',
        'menu.gallery': 'GALERII',
        'menu.reviews': 'ARVUSTUSED',
        'menu.contacts': 'KONTAKTID',
        
        // Логотип
        'logo.text': 'VLAD MEISTER',
        
        // Главная
        'home.subtitle': 'Rohkem kui 10-aastane kogemus',
        'home.title': 'Professionaalne korterite ja majade remont Eestis',
        'home.description': 'Teen kõike - alates kosmeetilisest remondist kuni kompleksse võtmed-kätte viimistluseni. Töötan hoolikalt, lepingu alusel, selgete tähtaegade ja ausate hindadega.',
        'home.cta': 'TELLI REMONT',
        'home.cta2': 'TELLI VANNITOA REMONT',
        'home.cta3': 'TELLI KÖÖGI REMONT',
        'home.subtitle2': 'Taskukohased hinnad',
        'home.subtitle3': 'Individuaalne lähenemine',
        'home.subtitle4': 'Kõrge kvaliteet',
        'home.title2': 'Vannitubade ja tualettruumide remont',
        'home.title3': 'Köökide ja eluruumide remont',
        'home.title4': 'Võtmed-kätte korterite remont',
        'home.description2': 'Täielik vannitubade remonditööde tsükkel: torude vahetus, sanitaartehnika paigaldamine, plaatimine, laed, põrandad.',
        'home.description3': 'Kvaliteetne köökide, elutubade, magamistubade ja teiste ruumide remont. Individuaalne lähenemine igale kliendile.',
        'home.description4': 'Kompleksne korterite ja majade remont kvaliteedigarantiiga. Töötan igasuguste ruumide ja projektide keerukusega.',
        
        // Услуги
        'services.title': 'TEENUSED',
        'services.subtitle': 'Pakun laia valikut remondi- ja viimistlusteenuseid',
        'services.fullRenovation': 'Korterite ja majade võtmed-kätte remont',
        'services.fullRenovationDesc': 'Täielik töötsükkel disainiprojektist lõppkoristuseni',
        'services.bathroom': 'Vannitubade remont',
        'services.bathroomDesc': 'Sanitaartehnika vahetus, plaatimine, hüdroisolatsioon, laed',
        'services.kitchen': 'Köökide remont',
        'services.kitchenDesc': 'Seinte, lagede viimistlus, köögimööbli paigaldamine',
        'services.flooring': 'Põrandakatted',
        'services.flooringDesc': 'Laminaat, parkett, plaadid, linoleum, valatud põrandad',
        'services.walls': 'Seinte viimistlus',
        'services.wallsDesc': 'Krohvimine, pahteldamine, värvimine, tapeedid, dekoratiivne viimistlus',
        'services.electrical': 'Elektritööd',
        'services.electricalDesc': 'Juhtmete vahetus, pistikupesade ja lülitite paigaldamine',
        'services.plumbing': 'Sanitaartehnilised tööd',
        'services.plumbingDesc': 'Torude vahetus, sanitaartehnika ja seadmete paigaldamine',
        'services.more': 'Rohkem infot',
        
        // Почему выбирают меня
        'whyus.title': 'MIKS VALIDA MIND',
        'whyus.subtitle': 'Minu töö põhimõtted, mida kliendid hindavad',
        'whyus.experience': 'TÖÖKOGEMUS',
        'whyus.experienceDesc': 'Rohkem kui 10-aastane kogemus remondi ja viimistluse valdkonnas',
        'whyus.quality': 'KÕRGE KVALITEET',
        'whyus.qualityDesc': 'Järgin kõigi tööde puhul kõrgeid kvaliteedistandardeid, kasutan kontrollitud materjale ja tehnoloogiaid.',
        'whyus.ontime': 'TÄPSED TÄHTAJAD',
        'whyus.ontimeDesc': 'Hindan teie aega ja järgin alati kokkulepitud tähtaegu.',
        'whyus.price': 'AUSAD HINNAD',
        'whyus.priceDesc': 'Läbipaistev hinnakujundus ilma peidetud tasudeta',
        
        // Галерея
        'gallery.title': 'TÖÖDE GALERII',
        'gallery.all': 'Kõik',
        'gallery.apartments': 'Korterid',
        'gallery.houses': 'Majad',
        'gallery.bathrooms': 'Vannitoad',
        'gallery.bathroom': 'Vannitoa remont',
        'gallery.kitchen': 'Köögi remont',
        'gallery.livingroom': 'Elutoa remont',
        'gallery.flooring': 'Põranda paigaldus',
        'gallery.bathroomCaption': 'Vannitoa remont',
        'gallery.kitchenCaption': 'Köögi remont',
        'gallery.livingroomCaption': 'Elutoa remont',
        'gallery.flooringCaption': 'Põranda paigaldus',
        
        // Отзывы
        'reviews.title': 'KLIENTIDE ARVUSTUSED',
        'reviews.text1': 'Vlad tegi minu korteri remondi kõrgeimal tasemel. Kõik tööd olid tehtud kvaliteetselt ja õigeaegselt. Eriti meeldis puhtus pärast tööde lõpetamist.',
        'reviews.author1': 'Anna, Tallinn',
        'reviews.text2': 'Pöördusin Vladi poole vannitoa remondiks. Tulemus ületas kõik ootused! Töö kvaliteet on kõrgel tasemel, hind mõistlik.',
        'reviews.author2': 'Mihhail, Tartu',
        'reviews.review1': 'Vlad tegi meie vannitoa remondi. Kõik on tehtud väga kvaliteetselt ja õigeaegselt. Oleme tulemusega väga rahul!',
        'reviews.review2': 'Pöördusime Vladi poole köögi remondiks. Töö on tehtud professionaalselt, kiiresti ja ilma lisakuludeta. Soovitan!',
        
        // Локация
        'location.title': 'Kus töötan',
        'location.area': 'Töötan Tallinnas ja Harjumaal',
        'location.travel': 'Võimalik on sõita kogu Eestis kokkuleppel.',
        
        // Контакты
        'contacts.title': 'KONTAKTID',
        'contacts.formTitle': 'TELLI REMONT',
        'contacts.formSubtitle': 'Täitke vorm ja võtan teiega ühendust, et arutada üksikasju.',
        'contacts.addressTitle': 'Aadress',
        'contacts.address': 'Tallinn, Eesti',
        'contacts.phoneTitle': 'Telefon',
        'contacts.emailTitle': 'E-post',
        'contacts.hoursTitle': 'Tööaeg',
        'contacts.hours': 'E-L: 8:00-18:00',
        'contacts.followUs': 'Jälgi meid:',
        'contacts.name': 'Nimi',
        'contacts.phoneNumber': 'Telefon',
        'contacts.email': 'E-post',
        'contacts.message': 'Ülesande kirjeldus',
        'contacts.submit': 'SAADA',
        'contacts.telegramLabel': 'Taotlus saadetakse Telegrami',
        'contacts.telegramBadge': 'Taotlus saadetakse Telegrami',
        'contacts.success': 'Täname teid taotluse eest! Võtame teiega peagi ühendust.',
        'contacts.error': 'Taotluse saatmisel ilmnes viga. Palun proovige uuesti.',
        
        // Футер
        'footer.rights': 'Kõik õigused kaitstud',
        'footer.copyright': '© 2025 Vlad Meister | Kõik õigused kaitstud'
    }
};
