/**
 * Portfolio Interactive Scripts
 * Nassir Santiago Cárdenas Caldas - Portfolio
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

    // 2. Developer Console Greeting
    console.log(
        '%c Nassir Santiago Cárdenas Caldas %c Ciencia de Datos %c',
        'background:#38bdf8 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #000; font-weight: bold;',
        'background:#34d399 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000; font-weight: bold;',
        'background:transparent'
    );
    console.log('¿Te interesa mi código? Revisa mi perfil en: https://github.com/killerdoller');

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
