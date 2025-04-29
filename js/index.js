// Animation des lettres du nom
document.querySelectorAll(".name li").forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.1}s`;
});
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('header');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    
    // Animation du header au scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Gestion du menu burger
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = this.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fermeture du menu
    function closeMenu() {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Fermer en cliquant sur l'overlay ou un lien
    overlay.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
    
    // Fermer si la fenêtre est redimensionnée
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});

// Gestion du bouton de retour en haut de la page
const returnButton = document.querySelector(".return-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    returnButton.classList.add("visible");
  } else {
    returnButton.classList.remove("visible");
  }
});

returnButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
