// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-content, .project-card, .skill-category, .interest-card').forEach(el => {
    observer.observe(el);
});

// Photo placeholder function
function loadProfilePhoto() {
    // Pour ajouter ta photo, remplace ce code par :
    const photoUrl = 'chemin/vers/ta-photo.jpg';
    document.querySelector('.profile-photo-container').innerHTML = `
    <img src="${photoUrl}" alt="Zakari Boutayna" class="profile-photo">
     `;
    
    // Version temporaire avec placeholder amélioré
    const placeholder = document.querySelector('.photo-placeholder');
    if (placeholder) {
        placeholder.innerHTML = `
            <i class="fas fa-user-tie"></i>
            <p>Zakari Boutayna</p>
            <p><small>Ingénieure en Génie Électrique</small></p>
            <p><small><em>Pour ajouter ta photo : remplace le placeholder dans le code</em></small></p>
        `;
    }
}

// Appeler la fonction au chargement
window.addEventListener('DOMContentLoaded', loadProfilePhoto);