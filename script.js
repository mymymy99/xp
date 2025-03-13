// Chờ DOM tải xong
document.addEventListener('DOMContentLoaded', () => {
    // TOGGLE MENU CHO MOBILE
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        navToggle.classList.toggle('active');
        if (mainNav.classList.contains('active')) {
            mainNav.style.animation = 'slideIn 0.8s ease-out';
        } else {
            mainNav.style.animation = 'none';
        }
    });

    // HIỆU ỨNG KHI CUỘN HEADER
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // HIỆU ỨNG PARALLAX VÀ XUẤT HIỆN KHI CUỘN
    const sections = document.querySelectorAll('.services-section, .portfolio-section, .pricing-section, .team-section, .contact-section, .footer-container');
    const heroOverlay = document.querySelector('.hero-overlay');
    const heroImage = document.querySelector('.hero-img');
    const serviceCards = document.querySelectorAll('.service-card');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const pricingCards = document.querySelectorAll('.pricing-card');
    const teamMembers = document.querySelectorAll('.team-member');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                if (entry.target.classList.contains('hero-section')) {
                    entry.target.querySelector('.hero-overlay').style.animation = 'parallax 10s infinite alternate';
                }
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });

    // PARALLAX CHO HERO
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (heroOverlay) {
            const overlayOffset = scrollPosition * 0.1;
            heroOverlay.style.transform = `translateY(${overlayOffset}px)`;
        }
        if (heroImage) {
            const imageOffset = scrollPosition * 0.3;
            heroImage.style.transform = `translateY(${imageOffset}px)`;
        }
        serviceCards.forEach(card => {
            const cardOffset = scrollPosition * 0.1;
            card.style.transform = `translateY(${cardOffset}px)`;
        });
        portfolioItems.forEach(item => {
            const itemOffset = scrollPosition * 0.15;
            item.style.transform = `translateY(${itemOffset}px)`;
        });
        pricingCards.forEach(card => {
            const cardOffset = scrollPosition * 0.12;
            card.style.transform = `translateY(${cardOffset}px)`;
        });
        teamMembers.forEach(member => {
            const memberOffset = scrollPosition * 0.1;
            member.style.transform = `translateY(${memberOffset}px)`;
        });
    });

    // BACK-TO-TOP
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // HIỆU ỨNG ĐẾM GIÁ
    const prices = document.querySelectorAll('.pricing-price');
    const pricingSection = document.querySelector('#pricing');
    const priceObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            prices.forEach(price => {
                const target = parseInt(price.textContent.replace(/[^0-9]/g, '')) || 0;
                let current = 0;
                const increment = target / 200;
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(counter);
                    }
                    price.textContent = `${Math.round(current).toLocaleString('vi-VN')} VNĐ`;
                    price.style.transition = 'transform 0.5s ease';
                    price.style.transform = 'scale(1.2)';
                    setTimeout(() => price.style.transform = 'scale(1)', 500);
                }, 15);
            });
            priceObserver.disconnect();
        }
    }, { threshold: 0.5 });
    priceObserver.observe(pricingSection);

    // HIỆU ỨNG HOVER HÌNH ẢNH THÀNH VIÊN
    const memberImgs = document.querySelectorAll('.member-img');
    if (memberImgs.length > 0) {
        memberImgs.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.2) rotate(5deg)';
                img.style.transition = 'transform 0.6s ease';
                img.style.boxShadow = '0 0 40px rgba(0, 113, 227, 0.6)';
            });
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1) rotate(0)';
                img.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
            });
        });
    }
});