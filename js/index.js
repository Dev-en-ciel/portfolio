// Animation des lettres du nom
document.querySelectorAll('.name li').forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
});
// menu burger
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.desktop-menu');
    
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.innerHTML = menu.classList.contains('active') ? '&times;' : '&#9776;';
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.desktop-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.innerHTML = '&#9776;';
            document.body.style.overflow = '';
        });
    });
});

// Gestion du bouton de retour en haut de la page
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



 