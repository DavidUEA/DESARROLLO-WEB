document.addEventListener('DOMContentLoaded', function() {
    // --- Botón de Alerta Personalizada ---
    const alertButton = document.getElementById('alertButton');
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            // Utiliza un mensaje más descriptivo y amigable
            alert('¡Gracias por tu interés en Innovación Digital Solutions! Estamos aquí para ayudarte.');
        });
    }

    // --- Validación Dinámica del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Evita el envío predeterminado del formulario para manejar la validación manualmente.
            event.preventDefault();
            event.stopPropagation(); // Detiene la propagación del evento.

            let isValidForm = true; // Bandera para verificar la validez del formulario.

            // Validación del campo Nombre
            const nombreInput = document.getElementById('nombre');
            if (nombreInput.value.trim() === '') {
                nombreInput.classList.add('is-invalid'); // Añade clase de Bootstrap para error visual.
                isValidForm = false;
            } else {
                nombreInput.classList.remove('is-invalid'); // Remueve la clase si es válido.
            }

            // Validación del campo Correo Electrónico
            const correoInput = document.getElementById('correo');
            // Expresión regular para una validación de correo más robusta.
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (correoInput.value.trim() === '' || !emailPattern.test(correoInput.value.trim())) {
                correoInput.classList.add('is-invalid');
                isValidForm = false;
            } else {
                correoInput.classList.remove('is-invalid');
            }

            // Validación del campo Mensaje
            const mensajeInput = document.getElementById('mensaje');
            if (mensajeInput.value.trim() === '') {
                mensajeInput.classList.add('is-invalid');
                isValidForm = false;
            } else {
                mensajeInput.classList.remove('is-invalid');
            }

            // Si todos los campos son válidos:
            if (isValidForm) {
                // Muestra un mensaje de éxito más amigable.
                alert('¡Mensaje enviado con éxito! Agradecemos tu consulta y te responderemos a la brevedad.');
                
                // Opcional: Aquí se podría enviar el formulario asincrónicamente (AJAX/Fetch)
                // fetch('tu_url_de_api_o_servidor', {
                //     method: 'POST',
                //     body: new FormData(contactForm)
                // }).then(response => response.json())
                // .then(data => console.log(data))
                // .catch(error => console.error('Error:', error));

                // Limpia el formulario y remueve las clases de validación.
                contactForm.reset();
                contactForm.classList.remove('was-validated'); // Quita la validación visual de Bootstrap.
            } else {
                // Si el formulario no es válido, activa la visualización de los mensajes de error de Bootstrap.
                contactForm.classList.add('was-validated');
            }
        });
    }
});