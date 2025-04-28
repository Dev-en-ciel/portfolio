// Animation des lettres du nom
document.querySelectorAll('.name li').forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
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



 