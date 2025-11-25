// ===== MENU DATA WITH IMAGES =====
const menuData = {
    uz: {
        categories: [
            {
                id: 1,
                name: 'HOLODNIE ZAKUSKI',
                slug: 'cold-appetizers',
                items: [
                    {
                        id: 1,
                        name: 'Mясной ассорти',
                        price: '110,000',
                        desc: 'Selekta et mavaddalar',
                        image: 'images/menu/assorted-meat.jpg'  // RASM QUYISH
                    },
                    {
                        id: 2,
                        name: 'Sеледka по-русски',
                        price: '45,000',
                        desc: 'Klassik ruscha salat',
                        image: 'images/menu/seledka.jpg'  // RASM QUYISH
                    },
                    {
                        id: 3,
                        name: 'Фруктовое ассорти',
                        price: '110,000',
                        desc: 'Yangi mevalar assortimenti',
                        image: 'images/menu/fruktoviy_assorti.jpg'  // RASM QUYISH
                    },
                    {
                        id: 4,
                        name: 'Соленое ассорти',
                        price: '30,000',
                        desc: 'Tuzlangan yog\'li taomlar',
                        image: 'images/menu/solenoye.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 2,
                name: 'SALATLAR',
                slug: 'salads',
                items: [
                    {
                        id: 5,
                        name: 'Оливье',
                        price: '33,000',
                        desc: 'Eng mashhur ruscha salat',
                        image: 'images/menu/olivier-salad.jpg'  // RASM QUYISH
                    },
                    {
                        id: 6,
                        name: 'Ачник чучук',
                        price: '20,000',
                        desc: 'Qolatog\'li salat',
                        image: 'images/menu/image.png'  // RASM QUYISH
                    },
                    {
                        id: 7,
                        name: 'Чирокчи',
                        price: '24,000',
                        desc: 'Marjonli salat',
                        image: 'images/menu/cucumber-salad.jpg'  // RASM QUYISH
                    },
                    {
                        id: 8,
                        name: 'Японский',
                        price: '35,000',
                        desc: 'Yapon uslubida salat',
                        image: 'images/menu/japanese-salad.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 3,
                name: 'KOTLETLAR',
                slug: 'cutlets',
                items: [
                    {
                        id: 9,
                        name: 'Turkskiy kotlet',
                        price: '58,000',
                        desc: 'Qovurilgan go\'shtdan tayyorlangan',
                        image: 'images/menu/turkish-cutlet.jpg'  // RASM QUYISH
                    },
                    {
                        id: 10,
                        name: 'Po-donabrevу kotlet',
                        price: '45,000',
                        desc: 'Qadimiy usuli',
                        image: 'images/menu/homestyle-cutlet.jpg'  // RASM QUYISH
                    },
                    {
                        id: 11,
                        name: 'Kotlet s bachirinoy',
                        price: '55,000',
                        desc: 'Maslihatli yog\'li',
                        image: 'images/menu/bacon-cutlet.jpg'  // RASM QUYISH
                    },
                    {
                        id: 12,
                        name: 'Kotlet EURO-ASIA',
                        price: '48,000',
                        desc: 'Bizning maxsus retsepti',
                        image: 'images/menu/euroasia-cutlet.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 4,
                name: 'STEAK',
                slug: 'steaks',
                items: [
                    {
                        id: 13,
                        name: 'Steak bon fild',
                        price: '225,000',
                        desc: 'Premium go\'shtdan',
                        image: 'images/menu/steak-bonfild.jpg'  // RASM QUYISH
                    },
                    {
                        id: 14,
                        name: 'Steak Bek',
                        price: '188,000',
                        desc: 'Yupqa pirinchli',
                        image: 'images/menu/steak-bek.jpg'  // RASM QUYISH
                    },
                    {
                        id: 15,
                        name: 'Steak klassicheskoy',
                        price: '95,000',
                        desc: 'Klassik steak',
                        image: 'images/menu/steak-classic.jpg'  // RASM QUYISH
                    },
                    {
                        id: 16,
                        name: 'Steak Prani',
                        price: '120,000',
                        desc: 'Nomdosh ko\'rgazmali',
                        image: 'images/menu/steak-prani.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 5,
                name: 'NACIONALNIE BLUDA',
                slug: 'national-dishes',
                items: [
                    {
                        id: 17,
                        name: 'Jiz iz barenini',
                        price: '248,000',
                        desc: 'Yangi go\'shtdan',
                        image: 'images/menu/lamb-jiz.jpg'  // RASM QUYISH
                    },
                    {
                        id: 18,
                        name: 'Jiz iz govyadini',
                        price: '230,000',
                        desc: 'Klassik tayyorlangan',
                        image: 'images/menu/beef-jiz.jpg'  // RASM QUYISH
                    },
                    {
                        id: 19,
                        name: 'Ungusskiy jiz',
                        price: '240,000',
                        desc: 'Tarixiy resepti',
                        image: 'images/menu/ungus-jiz.jpg'  // RASM QUYISH
                    },
                    {
                        id: 20,
                        name: 'VASUGRI',
                        price: '248,000',
                        desc: 'Mahalliy ta\'m',
                        image: 'images/menu/vasugri.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 6,
                name: 'RYBNIE BLUDA',
                slug: 'fish-dishes',
                items: [
                    {
                        id: 21,
                        name: 'Zapechenniy losos',
                        price: '200,000',
                        desc: 'Yuqori sifatli baliq',
                        image: 'images/menu/salmon-baked.jpg'  // RASM QUYISH
                    },
                    {
                        id: 22,
                        name: 'SAZАН',
                        price: '160,000',
                        desc: 'Klassik baliq',
                        image: 'images/menu/carp.jpg'  // RASM QUYISH
                    },
                    {
                        id: 23,
                        name: 'СУДАК',
                        price: '180,000',
                        desc: 'Yangi baliq',
                        image: 'images/menu/pike-perch.jpg'  // RASM QUYISH
                    },
                    {
                        id: 24,
                        name: 'PANGAL SAZАН',
                        price: '200,000',
                        desc: 'Maxsus tayyorlangan',
                        image: 'images/menu/carp-special.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 7,
                name: 'SPAGETTI',
                slug: 'pasta',
                items: [
                    {
                        id: 25,
                        name: 'BOLONEZE',
                        price: '68,000',
                        desc: 'Klassik pasta',
                        image: 'images/menu/pasta-bolonese.jpg'  // RASM QUYISH
                    },
                    {
                        id: 26,
                        name: 'ALFREDO',
                        price: '50,000',
                        desc: 'Kremli pasta',
                        image: 'images/menu/pasta-alfredo.jpg'  // RASM QUYISH
                    },
                    {
                        id: 27,
                        name: 'PENNE ARAHATA',
                        price: '60,000',
                        desc: 'Aciq pasta',
                        image: 'images/menu/penne-arrabbiata.jpg'  // RASM QUYISH
                    },
                ]
            },
        ]
    },
    ru: {
        categories: [
            {
                id: 1,
                name: 'ХОЛОДНЫЕ ЗАКУСКИ',
                slug: 'cold-appetizers',
                items: [
                    {
                        id: 1,
                        name: 'Мясной ассорти',
                        price: '110,000',
                        desc: 'Отборные мясные деликатесы',
                        image: 'images/menu/assorted-meat.jpg'  // RASM QUYISH
                    },
                    {
                        id: 2,
                        name: 'Селедка по-русски',
                        price: '45,000',
                        desc: 'Классический русский салат',
                        image: 'images/menu/seledka.jpg'  // RASM QUYISH
                    },
                    {
                        id: 3,
                        name: 'Фруктовое ассорти',
                        price: '110,000',
                        desc: 'Свежее фруктовое ассортимент',
                        image: 'images/menu/fruktoviy_assorti.jpg'  // RASM QUYISH
                    },
                    {
                        id: 4,
                        name: 'Соленое ассорти',
                        price: '30,000',
                        desc: 'Соленые закуски',
                        image: 'images/menu/solenoye.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 2,
                name: 'САЛАТЫ',
                slug: 'salads',
                items: [
                    {
                        id: 5,
                        name: 'Оливье',
                        price: '33,000',
                        desc: 'Самый популярный русский салат',
                        image: 'images/menu/olivier-salad.jpg'  // RASM QUYISH
                    },
                    {
                        id: 6,
                        name: 'Острый салат',
                        price: '20,000',
                        desc: 'Острый вкус',
                        image: 'images/menu/spicy-salad.jpg'  // RASM QUYISH
                    },
                    {
                        id: 7,
                        name: 'Салат с огурцами',
                        price: '24,000',
                        desc: 'Свежий салат',
                        image: 'images/menu/cucumber-salad.jpg'  // RASM QUYISH
                    },
                    {
                        id: 8,
                        name: 'Японский салат',
                        price: '35,000',
                        desc: 'Салат в японском стиле',
                        image: 'images/menu/japanese-salad.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 3,
                name: 'КОТЛЕТЫ',
                slug: 'cutlets',
                items: [
                    {
                        id: 9,
                        name: 'Турецкий котлет',
                        price: '58,000',
                        desc: 'Приготовлено из жареного мяса',
                        image: 'images/menu/turkish-cutlet.jpg'  // RASM QUYISH
                    },
                    {
                        id: 10,
                        name: 'Котлет по-домашнему',
                        price: '45,000',
                        desc: 'Готово по традиции',
                        image: 'images/menu/homestyle-cutlet.jpg'  // RASM QUYISH
                    },
                    {
                        id: 11,
                        name: 'Котлет с беконом',
                        price: '55,000',
                        desc: 'С жирным соусом',
                        image: 'images/menu/bacon-cutlet.jpg'  // RASM QUYISH
                    },
                    {
                        id: 12,
                        name: 'Котлет EURO-ASIA',
                        price: '48,000',
                        desc: 'Наш специальный рецепт',
                        image: 'images/menu/euroasia-cutlet.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 4,
                name: 'СТЕЙКИ',
                slug: 'steaks',
                items: [
                    {
                        id: 13,
                        name: 'Стейк бон филе',
                        price: '225,000',
                        desc: 'Из премиум мяса',
                        image: 'images/menu/steak-bonfild.jpg'  // RASM QUYISH
                    },
                    {
                        id: 14,
                        name: 'Стейк бек',
                        price: '188,000',
                        desc: 'С тонким рисом',
                        image: 'images/menu/steak-bek.jpg'  // RASM QUYISH
                    },
                    {
                        id: 15,
                        name: 'Стейк классический',
                        price: '95,000',
                        desc: 'Классический стейк',
                        image: 'images/menu/steak-classic.jpg'  // RASM QUYISH
                    },
                    {
                        id: 16,
                        name: 'Стейк пани',
                        price: '120,000',
                        desc: 'Достойный выбор',
                        image: 'images/menu/steak-prani.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 5,
                name: 'НАЦИОНАЛЬНЫЕ БЛЮДА',
                slug: 'national-dishes',
                items: [
                    {
                        id: 17,
                        name: 'Жиз из баранины',
                        price: '248,000',
                        desc: 'Из свежего мяса',
                        image: 'images/menu/lamb-jiz.jpg'  // RASM QUYISH
                    },
                    {
                        id: 18,
                        name: 'Жиз из говядины',
                        price: '230,000',
                        desc: 'Классически приготовлено',
                        image: 'images/menu/beef-jiz.jpg'  // RASM QUYISH
                    },
                    {
                        id: 19,
                        name: 'Манты',
                        price: '240,000',
                        desc: 'Историческое блюдо',
                        image: 'images/menu/ungus-jiz.jpg'  // RASM QUYISH
                    },
                    {
                        id: 20,
                        name: 'ВАГУРИ',
                        price: '248,000',
                        desc: 'Местный вкус',
                        image: 'images/menu/vasugri.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 6,
                name: 'РЫБНЫЕ БЛЮДА',
                slug: 'fish-dishes',
                items: [
                    {
                        id: 21,
                        name: 'Запеченный лосось',
                        price: '200,000',
                        desc: 'Высокое качество рыбы',
                        image: 'images/menu/salmon-baked.jpg'  // RASM QUYISH
                    },
                    {
                        id: 22,
                        name: 'Сазан',
                        price: '160,000',
                        desc: 'Классическая рыба',
                        image: 'images/menu/carp.jpg'  // RASM QUYISH
                    },
                    {
                        id: 23,
                        name: 'Судак',
                        price: '180,000',
                        desc: 'Свежая рыба',
                        image: 'images/menu/pike-perch.jpg'  // RASM QUYISH
                    },
                    {
                        id: 24,
                        name: 'Панчал сазан',
                        price: '200,000',
                        desc: 'Специально приготовлено',
                        image: 'images/menu/carp-special.jpg'  // RASM QUYISH
                    },
                ]
            },
            {
                id: 7,
                name: 'СПАГЕТТИ',
                slug: 'pasta',
                items: [
                    {
                        id: 25,
                        name: 'Болоньезе',
                        price: '68,000',
                        desc: 'Классическая паста',
                        image: 'images/menu/pasta-bolonese.jpg'  // RASM QUYISH
                    },
                    {
                        id: 26,
                        name: 'Альфредо',
                        price: '50,000',
                        desc: 'Сливочная паста',
                        image: 'images/menu/pasta-alfredo.jpg'  // RASM QUYISH
                    },
                    {
                        id: 27,
                        name: 'Пенне арахата',
                        price: '60,000',
                        desc: 'Острая паста',
                        image: 'images/menu/penne-arrabbiata.jpg'  // RASM QUYISH
                    },
                ]
            },
        ]
    }
};