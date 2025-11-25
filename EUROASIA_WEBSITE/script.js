// ===== PAGE NAVIGATION =====
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);

    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('active');
}

// ===== MENU RENDERING WITH IMAGES =====
function renderMenuData() {
    const categories = menuData[currentLanguage].categories;
    const container = document.getElementById('menuContainer');
    const tabsContainer = document.getElementById('menuTabs');

    container.innerHTML = '';
    tabsContainer.innerHTML = '';

    // Create tabs
    const allTab = document.createElement('button');
    allTab.className = 'tab-btn active';
    allTab.textContent = t('all_categories');
    allTab.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        allTab.classList.add('active');
        document.querySelectorAll('.menu-category-section').forEach(sec => sec.style.display = 'block');
    });
    tabsContainer.appendChild(allTab);

    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'tab-btn';
        tab.textContent = category.name;
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.menu-category-section').forEach(sec => {
                sec.style.display = sec.id === `category-${category.id}` ? 'block' : 'none';
            });
        });
        tabsContainer.appendChild(tab);
    });

    // Create menu items with images
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category-section';
        categoryDiv.id = `category-${category.id}`;

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = category.name;
        categoryDiv.appendChild(title);

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'menu-items-grid';

        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            // RASM RENDER QILISH
            const imageHTML = item.image
                ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 5px;">`
                : '';

            itemDiv.innerHTML = `
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <div class="menu-item-line"></div>
                    <div class="menu-item-price">${item.price} <span class="price-currency">so'm</span></div>
                </div>
                <p class="menu-item-description">${item.desc}</p>
                ${imageHTML}
            `;
            itemsGrid.appendChild(itemDiv);
        });

        categoryDiv.appendChild(itemsGrid);
        container.appendChild(categoryDiv);
    });
}

// ===== FEATURED MENU WITH IMAGES =====
function renderFeaturedMenu() {
    const allItems = menuData[currentLanguage].categories.flatMap(cat => cat.items);
    const featured = allItems.sort(() => Math.random() - 0.5).slice(0, 6);
    const container = document.getElementById('featuredMenu');
    container.innerHTML = '';

    featured.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';

        // RASM RENDER QILISH
        const imageHTML = item.image
            ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 250px; object-fit: cover;">`
            : '<div style="width: 100%; height: 250px; background: linear-gradient(135deg, #1a4d42, #0F2A24); display: flex; align-items: center; justify-content: center; font-size: 60px;">🍽️</div>';

        card.innerHTML = `
            <div class="menu-card-image">${imageHTML}</div>
            <div class="menu-card-content">
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-price">${item.price} <span>so'm</span></p>
            </div>
        `;
        container.appendChild(card);
    });
}

// ===== GALLERY SLIDER DATA =====
const galleryImages = [
    {
        image: 'images/gallery/interior-1.jpg',
        alt: 'Restoran ichki ko\'rinishi 1'
    },
    {
        image: 'images/gallery/interior-2.jpg',
        alt: 'Restoran ichki ko\'rinishi 2'
    },
    {
        image: 'images/gallery/chef-cooking.jpg',
        alt: 'Bashshef ish jarayoni'
    },
    {
        image: 'images/gallery/food-presentation.jpg',
        alt: 'Taom taqdimoti'
    },
    {
        image: 'images/gallery/dining-area.jpg',
        alt: 'Bosh ovqat zali'
    },
    {
        image: 'images/gallery/bar-section.jpg',
        alt: 'Bar qismi'
    },
    {
        image: 'images/gallery/entrance.jpg',
        alt: 'Restoran kirishi'
    },
    {
        image: 'images/gallery/outdoor-seating.jpg',
        alt: 'Tashqi ovqat zali'
    },
    {
        image: 'images/gallery/special-moments.jpg',
        alt: 'Maxsus lahzalar'
    },
    {
        image: 'images/gallery/ambiance.jpg',
        alt: 'Restoran atmosferasi'
    },
    {
        image: 'images/gallery/dish-1.jpg',
        alt: 'Taom 1'
    },
    {
        image: 'images/gallery/dish-2.jpg',
        alt: 'Taom 2'
    }
];

let currentSlideIndex = 0;

// ===== GALLERY SLIDER INIT =====
function initGallerySlider() {
    const slider = document.getElementById('gallerySlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('indicators');
    const currentSlideSpan = document.getElementById('currentSlide');
    const totalSlidesSpan = document.getElementById('totalSlides');

    if (!slider) return; // Gallery page ochilmasa

    const totalImages = galleryImages.length;

    // RASMLARNI RENDER QILISH
    function renderSliderImages() {
        slider.innerHTML = '';
        galleryImages.forEach((item) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slider-image';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.alt;

            // Rasm error bo'lganda fallback
            img.addEventListener('error', function () {
                slideDiv.innerHTML = `<div class="slider-image-placeholder">📷</div>`;
            });

            slideDiv.appendChild(img);
            slider.appendChild(slideDiv);
        });
    }

    // INDICATORS RENDER QILISH
    function renderIndicators() {
        indicatorsContainer.innerHTML = '';
        galleryImages.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === 0) indicator.classList.add('active');

            indicator.addEventListener('click', () => {
                currentSlideIndex = index;
                updateSlider();
            });

            indicatorsContainer.appendChild(indicator);
        });
    }

    // SLIDER UPDATE QILISH
    function updateSlider() {
        const offset = -currentSlideIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;

        // Indicators update
        document.querySelectorAll('.indicator').forEach((ind, index) => {
            ind.classList.remove('active');
            if (index === currentSlideIndex) {
                ind.classList.add('active');
            }
        });

        // Counter update
        currentSlideSpan.textContent = currentSlideIndex + 1;
        totalSlidesSpan.textContent = totalImages;
    }

    // NEXT SLIDE
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % totalImages;
        updateSlider();
    }

    // PREV SLIDE
    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + totalImages) % totalImages;
        updateSlider();
    }

    // BUTTON LISTENERS
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // KEYBOARD SUPPORT
    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('menu').classList.contains('active') &&
            document.getElementById('gallery').classList.contains('active')) {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        }
    });

    // TOUCH SUPPORT (MOBILE SWIPE)
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;

        if (touchStartX - touchEndX > 50) {
            nextSlide();
        }
        if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });

    // RENDER
    renderSliderImages();
    renderIndicators();
    updateSlider();
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function () {
    // Set initial language
    setLanguage(currentLanguage);

    // Update lang switcher active state
    document.querySelectorAll('.lang-link').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });

    // Language switcher
    document.querySelectorAll('.lang-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.lang-link').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setLanguage(btn.getAttribute('data-lang'));
            renderMenuData();
            renderFeaturedMenu();
        });
    });

    // Page navigation
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`[data-page="${pageId}"]`).forEach(l => l.classList.add('active'));
        });
    });

    // Mobile menu toggle
    document.getElementById('mobileToggle').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('active');
    });

    // Close mobile menu when link clicked
    document.querySelectorAll('.mobile-nav-menu [data-page]').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.remove('active');
        });
    });

    // Initial render
    updatePageContent();
    renderMenuData();
    renderFeaturedMenu();

    // Initialize gallery slider
    initGallerySlider();
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Alt+H - Home
    if (e.altKey && e.code === 'KeyH') {
        showPage('home');
    }
    // Alt+M - Menu
    if (e.altKey && e.code === 'KeyM') {
        showPage('menu');
    }
    // Alt+C - Contact
    if (e.altKey && e.code === 'KeyC') {
        showPage('contact');
    }
    // Alt+U - UZ Lang
    if (e.altKey && e.code === 'KeyU') {
        setLanguage('uz');
        document.querySelectorAll('.lang-link').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-lang="uz"]').classList.add('active');
    }
    // Alt+R - RU Lang
    if (e.altKey && e.code === 'KeyR') {
        setLanguage('ru');
        document.querySelectorAll('.lang-link').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-lang="ru"]').classList.add('active');
    }
});