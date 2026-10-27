/*===================================
  ISIFISO-SAKHO CARPENTRY - MAIN JAVASCRIPT
  ===================================*/

'use strict';

/*===================================
  NAVIGATION MENU
  ===================================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/*===================================
  ACTIVE LINK ON SCROLL
  ===================================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*===================================
  SCROLL HEADER SHADOW
  ===================================*/
function scrollHeader() {
    const header = document.getElementById('header');
    
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*===================================
  SMOOTH SCROLLING FOR ANCHOR LINKS
  ===================================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only apply smooth scroll to hash links, not empty hashes
        if (href !== '#' && href !== '') {
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/*===================================
  LIGHTBOX GALLERY
  ===================================*/
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item img');

// Open lightbox when clicking gallery images
galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        openLightbox(this);
    });
});

function openLightbox(img) {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt || 'Isifiso-Sakho Carpentry Project';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close lightbox on close button click
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

/*===================================
  INTERSECTION OBSERVER - FADE IN ANIMATIONS
  ===================================*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animatedElements = document.querySelectorAll(`
    .service-card,
    .gallery-item,
    .feature-card,
    .step-card,
    .contact-card
`);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(element);
});

/*===================================
  SCROLL REVEAL FOR SECTIONS
  ===================================*/
const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.05
});

const sectionsToReveal = document.querySelectorAll('.section-header');

sectionsToReveal.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    sectionObserver.observe(section);
});

/*===================================
  DYNAMIC COPYRIGHT YEAR
  ===================================*/
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

/*===================================
  WHATSAPP LINK HELPER
  ===================================*/
// This function ensures all WhatsApp links are properly formatted
function validateWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    const whatsappNumber = '27767206347';
    
    whatsappLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Ensure the link contains the correct number
        if (!href.includes(whatsappNumber)) {
            console.warn('WhatsApp link missing correct number:', href);
        }
        
        // Add target="_blank" if not present
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        
        // Add rel="noopener noreferrer" for security
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// Run validation on page load
validateWhatsAppLinks();

/*===================================
  LOADING OPTIMIZATION
  ===================================*/
// Lazy load images for better performance
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

/*===================================
  PERFORMANCE - DEBOUNCE SCROLL EVENTS
  ===================================*/
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll functions
const debouncedScrollActive = debounce(scrollActive, 20);
const debouncedScrollHeader = debounce(scrollHeader, 20);

window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', scrollHeader);
window.addEventListener('scroll', debouncedScrollActive);
window.addEventListener('scroll', debouncedScrollHeader);

/*===================================
  GALLERY INITIALIZATION
  ===================================*/
function initializeGallery() {
    const galleryGrid = document.getElementById('gallery');
    
    if (!galleryGrid) return;
    
    // Add click handlers to all gallery items
    const items = galleryGrid.querySelectorAll('.gallery-item');
    
    items.forEach((item, index) => {
        item.setAttribute('data-index', index);
        item.style.cursor = 'pointer';
        
        // Add keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View project ${index + 1}`);
        
        // Handle keyboard navigation
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const img = this.querySelector('img');
                if (img) openLightbox(img);
            }
        });
    });
}

// Initialize gallery on page load
initializeGallery();

/*===================================
  SERVICE CARDS ACCESSIBILITY
  ===================================*/
function enhanceAccessibility() {
    // Ensure all interactive elements are keyboard accessible
    const serviceButtons = document.querySelectorAll('.btn-service');
    
    serviceButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

enhanceAccessibility();

/*===================================
  MOBILE MENU - PREVENT BODY SCROLL
  ===================================*/
function preventBodyScroll(prevent) {
    if (prevent) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Update mobile menu handlers
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        preventBodyScroll(true);
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        preventBodyScroll(false);
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        preventBodyScroll(false);
    });
});

/*===================================
  CONTACT SECTION - PHONE LINK TRACKING
  ===================================*/
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Phone call initiated');
        // Can be extended with analytics tracking if needed
    });
});

/*===================================
  ERROR HANDLING - IMAGE LOADING
  ===================================*/
const allImages = document.querySelectorAll('img');

allImages.forEach(img => {
    img.addEventListener('error', function() {
        // If image fails to load, set a placeholder
        this.style.backgroundColor = '#f0f0f0';
        this.style.minHeight = '200px';
        this.alt = 'Image not available';
        console.warn('Failed to load image:', this.src);
    });
});

/*===================================
  HERO SECTION BACKGROUND PARALLAX
  ===================================*/
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}

// Only apply parallax on larger screens
if (window.innerWidth > 768) {
    window.addEventListener('scroll', debounce(parallaxEffect, 10));
}

/*===================================
  BUTTON CLICK FEEDBACK
  ===================================*/
const allButtons = document.querySelectorAll('.btn');

allButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

/*===================================
  PAGE LOADED EVENT
  ===================================*/
window.addEventListener('DOMContentLoaded', function() {
    console.log('Isifiso-Sakho Carpentry website loaded successfully');
    
    // Trigger initial scroll functions
    scrollHeader();
    scrollActive();
    
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
});

/*===================================
  WINDOW RESIZE HANDLER
  ===================================*/
let resizeTimer;

window.addEventListener('resize', function() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show-menu');
        preventBodyScroll(false);
    }
    
    // Debounce resize events
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        console.log('Window resized');
    }, 250);
});

/*===================================
  PRINT STYLES HANDLER
  ===================================*/
window.addEventListener('beforeprint', function() {
    // Close mobile menu before printing
    navMenu.classList.remove('show-menu');
    closeLightbox();
});

/*===================================
  ACCESSIBILITY - SKIP TO CONTENT
  ===================================*/
// Add skip to main content link for screen readers
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

/*===================================
  CONSOLE MESSAGE
  ===================================*/
console.log('%cIsifiso-Sakho Carpentry', 'color: #8B4513; font-size: 24px; font-weight: bold;');
console.log('%cQuality Craftsmanship. Beautiful Spaces.', 'color: #2C2C2C; font-size: 14px;');
console.log('Contact: 076 720 6347 | WhatsApp: https://wa.me/27767206347');
