document.addEventListener('DOMContentLoaded', function() {
    const contactoLink = document.getElementById('contacto-link');
    const modal = document.getElementById('contact-modal');
    const closeBtn = modal.querySelector('.close');

    contactoLink.addEventListener('click', function(e) {
        e.preventDefault();
        openContactModal();
    });

    closeBtn.addEventListener('click', closeContactModal);

    // Funcionalidad del menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Opcional: Animar el ícono de hamburguesa
        menuIcon.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.client-modal-content');
    const modalLetter = modal.querySelector('.modal-letter');
    
    modal.style.display = 'block';
    
    // Forzar un reflow
    modal.offsetHeight;
    
    // Agregar clases show
    requestAnimationFrame(() => {
        modal.classList.add('show');
        modalContent.classList.add('show');
        modalLetter.classList.add('show');
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.client-modal-content');
    const modalLetter = modal.querySelector('.modal-letter');
    
    modalLetter.classList.remove('show');
    modalContent.classList.remove('show');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

// Agregar evento de clic para todos los botones de cerrar
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.client-modal .close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.closest('.client-modal').id;
            closeModal(modalId);
        });
    });
});

function openContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = 'block';
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.style.display = 'none';
}
