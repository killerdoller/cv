/**
 * Portfolio Interactive Scripts
 * Santiago Nassir - Professional Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Active Class on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for fixed header
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Add scrolled background to header
        const header = document.querySelector('.main-header');
        if (scrollY > 50) {
            header.style.backgroundColor = 'rgba(9, 13, 22, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.backgroundColor = 'rgba(9, 13, 22, 0.8)';
            header.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load

    // 2. Mini Terminal Typing Animation (Simulated)
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
        // Log a hidden greeting in the developer browser console
        console.log(
            '%c Santiago Nassir %c Full-Stack Developer & Creative Technologist %c',
            'background:#38bdf8 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000; font-weight: bold;',
            'background:#8b5cf6 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;',
            'background:transparent'
        );
        console.log('Interesado en mi código? Revisa mis repositorios en: https://github.com/santiagonassir');
    }

    // 3. Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
