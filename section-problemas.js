const cofeprisSection = document.querySelector('#cofepris-cards').closest('section');
const cofeprisCards   = document.querySelectorAll('#cofepris-cards .card-animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cofeprisCards.forEach(c => c.classList.add('is-visible'));
        } else {
            // Quita esto si NO quieres que se repita al volver a subir la página
            cofeprisCards.forEach(c => c.classList.remove('is-visible'));
        }
    });
}, { threshold: 0.25 }); // dispara cuando el 25% de la sección es visible

observer.observe(cofeprisSection);