/**
 * Animations Module
 * Handles all scroll animations, counters, and interactive effects
 */

(function() {
    'use strict';

    // Animated Counter
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
    
    // Initialize counters when they come into view
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(function(counter) {
            counterObserver.observe(counter);
        });
    }

    // Scroll reveal animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const fadeInSections = document.querySelectorAll('.fade-in-section');
        fadeInSections.forEach(function(section) {
            observer.observe(section);
        });

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(function(item) {
            observer.observe(item);
        });
    }

    // Active navigation highlighting
    function initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-links a');

        function highlightNavigation() {
            const scrollY = window.pageYOffset;

            sections.forEach(function(section) {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 120;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navItems.forEach(function(item) {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === '#' + sectionId) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', highlightNavigation);
    }

    // Progress bar
    function initProgressBar() {
        const progressBar = document.querySelector('.progress-bar');
        
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Initialize all animations
    document.addEventListener('DOMContentLoaded', function() {
        initCounters();
        initScrollAnimations();
        initActiveNavigation();
        initProgressBar();
    });

})();
