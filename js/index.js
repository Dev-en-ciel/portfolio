 // Gestion du menu burger
 const burgerMenu = document.querySelector('.burger-menu');
 const mobileNav = document.querySelector('.mobile-nav');
 const body = document.body;
 
 burgerMenu.addEventListener('click', () => {
     mobileNav.classList.toggle('active');
     burgerMenu.classList.toggle('toggle');
     body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
 });
 
 // Fermeture du menu au clic sur un lien
 document.querySelectorAll('.mobile-nav a').forEach(link => {
     link.addEventListener('click', () => {
         mobileNav.classList.remove('active');
         burgerMenu.classList.remove('toggle');
         body.style.overflow = 'auto';
     });
 });
 
 // Fermer le menu si on redimensionne vers desktop
 window.addEventListener('resize', () => {
     if (window.innerWidth > 768) {
         mobileNav.classList.remove('active');
         burgerMenu.classList.remove('toggle');
         body.style.overflow = 'auto';
     }
 });