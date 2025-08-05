document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        let valid = true;
        const email = form.querySelector('input[type="email"]');
        const password = form.querySelector('input[type="password"]');
        const phone = form.querySelector('input[type="tel"]');

        form.querySelectorAll('.error-message').forEach(el => el.remove());

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            showError(email, 'E-mail inválido.');
            valid = false;
        }

        if (password && password.value.trim().length < 6) {
            showError(password, 'A senha deve ter pelo menos 6 caracteres.');
            valid = false;
        }

        if (phone && !/^\d{10,11}$/.test(phone.value.replace(/\D/g, ''))) {
            showError(phone, 'Telefone inválido. Informe DDD e número.');
            valid = false;
        }

        if (!valid) e.preventDefault();
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'red';
        error.style.fontSize = '0.9em';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }
});                