// Function to show/hide the mobile menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

// Remove mobile menu when a nav link is clicked
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// Highlight the active section in the navigation menu based on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navMenuItem = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navMenuItem.classList.add('active');
        } else {
            navMenuItem.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

// Scroll Reveal for different sections
const scrollRevealConfig = {
    home: ['.home__title', '.home__scroll', '.home__img'],
    about: ['.about__img', '.about__subtitle', '.about__profession', '.about__text', '.about__social-icon'],
    skills: ['.skills__subtitle', '.skills__name', '.skills__img'],
    portfolio: ['.portfolio__img'],
    contact: ['.contact__subtitle', '.contact__text', '.contact__input', '.contact__button'],
};

Object.entries(scrollRevealConfig).forEach(([section, elements]) => {
    elements.forEach((element, index) => {
        sr.reveal(element, { delay: index * 200, interval: 200 });
    });
});
