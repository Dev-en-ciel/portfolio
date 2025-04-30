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

// Initialisation EmailJS
(function() {
  emailjs.init("5kPVxT1oazJjLSpGf");
})();

// Fonction pour afficher les notifications
function showNotification(type, message) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  if (type === "loading") {
    notification.innerHTML = `${message}<span class="dots"><span>.</span><span>.</span><span>.</span></span>`;
  } else {
    notification.textContent = message;
  }

  const notificationsContainer = document.getElementById("notification-container");
  if (notificationsContainer) {
    notificationsContainer.appendChild(notification);
  }

  if (type !== "loading") {
    setTimeout(() => {
      notification.remove();
    }, 4000);
  }
}

// Fonction pour supprimer la notification "loading"
function removeLoadingNotification() {
  const loadingNotification = document.querySelector(".notification.loading");
  if (loadingNotification) {
    loadingNotification.remove();
  }
}

// Fonction de validation de l'email
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Fonction de validation du formulaire
function validateForm(name, email, message) {
  if (!name || name.length < 3) {
    showNotification("error", "Le nom doit contenir au moins 3 caractères.");
    return false;
  }

  if (!validateEmail(email)) {
    showNotification("error", "Veuillez entrer une adresse email valide.");
    return false;
  }

  if (!message || message.length < 10) {
    showNotification("error", "Le message doit contenir au moins 10 caractères.");
    return false;
  }

  return true;
}

// Gestion de la soumission du formulaire
async function handleFormSubmit(form) {
  const from_name = form.nom.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const to_name = "Service Client";

  if (!validateForm(from_name, email, message)) return;

  showNotification("loading", "Envoi en cours");
  
  try {
    await emailjs.send("service_eveux2j", "devenciel_pqvwx7b", {
      from_name,
      to_name,
      email,
      message
    });
    
    showNotification("success", "Message envoyé avec succès !");
    form.reset();
  } catch (error) {
    console.error("Erreur EmailJS:", error);
    showNotification("error", error.text || "Erreur lors de l'envoi");
  } finally {
    removeLoadingNotification();
  }
}

// Initialisation après chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById("contact-form");
  
  if (!contactForm) {
    console.error("Le formulaire #contact-form est introuvable");
    return;
  }

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    handleFormSubmit(contactForm);
  });
});