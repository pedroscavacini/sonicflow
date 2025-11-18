// app.js - Adicionar este arquivo
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Modal de Login
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const modalClose = loginModal.querySelector('.modal-close');
    
    loginBtn.addEventListener('click', () => {
        loginModal.setAttribute('aria-hidden', 'false');
    });
    
    modalClose.addEventListener('click', () => {
        loginModal.setAttribute('aria-hidden', 'true');
    });
    
    // Fechar modal clicando fora
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Formulários
    const contactForm = document.getElementById('contact-form');
    const loginForm = document.getElementById('login-form');
    
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implementar envio do formulário
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
    
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implementar login
        alert('Login realizado!');
        loginModal.setAttribute('aria-hidden', 'true');
    });
    
    // Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});