/**
 * Main JavaScript
 * Handles cursor, preloader, smooth scrolling, and utility functions
 */

(function() {
    'use strict';

    // ===== PRELOADER =====
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 1500);
    });

    document.addEventListener('DOMContentLoaded', function() {
        
        // ===== CUSTOM CURSOR =====
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        if (window.innerWidth > 768) {
            document.addEventListener('mousemove', function(e) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                
                setTimeout(function() {
                    cursorFollower.style.left = e.clientX + 'px';
                    cursorFollower.style.top = e.clientY + 'px';
                }, 100);
            });

            // Expand cursor on hover
            const hoverElements = document.querySelectorAll('a, button, .stat-card, .skill-tag, .expertise-card, .badge');
            hoverElements.forEach(function(el) {
                el.addEventListener('mouseenter', function() {
                    cursor.classList.add('expand');
                });
                el.addEventListener('mouseleave', function() {
                    cursor.classList.remove('expand');
                });
            });
        }

        // ===== SMOOTH SCROLLING =====
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#' || href === '') {
                    e.preventDefault();
                    return;
                }
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // ===== SCROLL TO TOP BUTTON =====
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '↑';
        scrollTopBtn.className = 'scroll-to-top';
        scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollTopBtn);

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // ===== CONSOLE MESSAGE =====
        if (console && console.log) {
            console.log('%c🎓 Shivam Kumar Singh - M.Tech Student & Analytics Manager', 'color: #d4af37; font-size: 24px; font-weight: bold;');
            console.log('%c📧 shivamk423@gmail.com | 🔗 linkedin.com/in/shivamk423', 'color: #a0a0a0; font-size: 14px;');
        }

    });

    // ===== ERROR HANDLER =====
    window.addEventListener('error', function(e) {
        if (console && console.warn) {
            console.warn('An error occurred:', e.message);
        }
        return true;
    });

})();
