// Gestion responsive globale
function handleResponsiveLayout() {
    const socialIcons = document.querySelector('.social-links');
    const titleSection = document.querySelector('.title');
    const navTitle = document.querySelector('.nav-title-container');
    const desktopMenu = document.querySelector('.desktop-menu');

    if (window.innerWidth <= 768) {
        // Mode mobile
        if (titleSection) titleSection.style.display = 'none';
        if (desktopMenu) desktopMenu.style.display = 'none';
        if (socialIcons) socialIcons.style.display = 'none';
        if (navTitle) navTitle.style.display = 'block';
    } else {
        // Mode desktop
        if (titleSection) titleSection.style.display = 'flex';
        if (desktopMenu) desktopMenu.style.display = 'flex';
        if (socialIcons) socialIcons.style.display = 'flex';
        if (navTitle) navTitle.style.display = 'none';
    }
}

// Menu burger
const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

burgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    burgerMenu.classList.toggle('toggle');
    body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
});

// Fermeture menu mobile
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        burgerMenu.classList.remove('toggle');
        body.style.overflow = 'auto';
    });
});

// Animation des lettres du nom
document.querySelectorAll('.name li').forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
});

const returnButton = document.querySelector('.return-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        returnButton.classList.add('visible');
    } else {
        returnButton.classList.remove('visible');
    }
});

returnButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Redimensionnement
window.addEventListener('resize', () => {
    handleResponsiveLayout();
    
    // Fermer le menu si on passe en desktop
    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
        burgerMenu.classList.remove('toggle');
        body.style.overflow = 'auto';
    }
});


 