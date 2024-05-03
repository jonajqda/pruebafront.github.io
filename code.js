const form = document.getElementById('quiz-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const email = form.email.value.trim();
    const selectedAnswer = document.querySelector('#answers li.selected');

    if (!nombre || !apellido || !validateEmail(email) || !selectedAnswer) {
        showMessage('Por favor, completa todos los campos correctamente.');
        return;
    }

    const answer = 'ROMA';
    const selectedAnswerData = selectedAnswer.getAttribute('data-answer');

    if (selectedAnswerData === answer) {
        showMessage('Felicidades, has acertado. Los datos han sido enviados al correo.');
    } else {
        showMessage('Prueba de nuevo, la respuesta es incorrecta.');
    }
});

document.querySelectorAll('#answers li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('#answers li').forEach(item => {
            item.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('message'); 
    document.body.appendChild(messageDiv);

    setTimeout(function() {
        messageDiv.remove();
    }, 3000);
}
