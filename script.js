// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect cho hero (nâng cao)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    hero.style.transform = `translateY(${scrollPosition * 0.3}px) scale(${1 - scrollPosition * 0.0005})`;
    hero.style.opacity = `${1 - scrollPosition * 0.001}`;
});

// Animation khi cuộn vào section (nâng cao)
const sections = document.querySelectorAll('.features, .services, .projects, .testimonials, .team, .pricing, .blog, .faq, .contact');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('services')) {
                entry.target.style.background = 'radial-gradient(circle, rgba(194,24,91,0.1) 0%, rgba(0,196,204,0.1) 100%)'; /* Đỏ cherry */
            }
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Particle.js cho Hero (đổi màu thành đỏ cherry)
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#c2185b' }, /* Đỏ cherry thay trắng */
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#c2185b', opacity: 0.4, width: 1 }, /* Đỏ cherry */
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Responsive Menu Toggle cho di động
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰';
navToggle.style.display = 'none';
document.querySelector('.nav-container').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

if (window.innerWidth <= 768) {
    navToggle.style.display = 'block';
    navToggle.style.fontSize = '30px';
    navToggle.style.color = '#c2185b'; /* Đỏ cherry thay vàng */
    navToggle.style.cursor = 'pointer';
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
    } else {
        navToggle.style.display = 'none';
        navMenu.classList.remove('active');
    }
});