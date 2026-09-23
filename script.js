document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animations Setup
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-up, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    // 2. Navigation State Management
    const mobileMenuBtns = document.querySelectorAll('.menu-icon');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    
    // Menu Drawer Toggle
    mobileMenuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(mobileMenuOverlay) {
                mobileMenuOverlay.classList.add('open');
                document.body.style.overflow = 'hidden'; // prevent scrolling
            }
        });
    });

    if (closeMenuBtn && mobileMenuOverlay) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('open');
            document.body.style.overflow = ''; // restore scrolling
        });
    }

    // Logo Click - Scroll to top
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // 3. Category Filter Logic for Shop Section
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
        });
    });

    // 4. Quick Add to Cart
    const quickAddBtns = document.querySelectorAll('.quick-add');
    quickAddBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            alert('Item added to cart!');
        });
    });

    // 5. Video Lightbox trigger
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            alert('Video Player Modal would open here.');
        });
    }
});
