document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const ageInput = document.getElementById('age');
    const submitButton = document.getElementById('submitButton');
    const resetButton = document.getElementById('resetButton');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const ageError = document.getElementById('ageError');

    const inputs = [nameInput, emailInput, passwordInput, confirmPasswordInput, ageInput];

    // Función para validar el nombre
    function validateName() {
        if (nameInput.value.length >= 3) {
            nameInput.classList.remove('invalid');
            nameInput.classList.add('valid');
            nameError.textContent = '';
            return true;
        } else {
            nameInput.classList.remove('valid');
            nameInput.classList.add('invalid');
            nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
            return false;
        }
    }

    // Función para validar el correo electrónico
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailInput.value)) {1
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            emailError.textContent = '';
            return true;
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            emailError.textContent = 'Ingrese un formato de correo electrónico válido.';
            return false;
        }
    }

    // Función para validar la contraseña
    function validatePassword() {
        // Al menos 8 caracteres, un número y un carácter especial
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
        if (passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            passwordError.textContent = '';
            return true;
        } else {
            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.';
            return false;
        }
    }

    // Función para validar la confirmación de la contraseña
    function validateConfirmPassword() {
        if (confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value !== '') {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
            confirmPasswordError.textContent = '';
            return true;
        } else {
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
            confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
            return false;
        }
    }

    // Función para validar la edad
    function validateAge() {
        const age = parseInt(ageInput.value, 10);
        if (!isNaN(age) && age >= 18) {
            ageInput.classList.remove('invalid');
            ageInput.classList.add('valid');
            ageError.textContent = '';
            return true;
        } else {
            ageInput.classList.remove('valid');
            ageInput.classList.add('invalid');
            ageError.textContent = 'Debe ser mayor de 18 años.';
            return false;
        }
    }

    // Función para verificar si todos los campos son válidos
    function checkFormValidity() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isAgeValid = validateAge();

        submitButton.disabled = !(isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isAgeValid);
    }

    // Event listeners para validación en tiempo real
    nameInput.addEventListener('input', () => { validateName(); checkFormValidity(); });
    emailInput.addEventListener('input', () => { validateEmail(); checkFormValidity(); });
    passwordInput.addEventListener('input', () => { validatePassword(); validateConfirmPassword(); checkFormValidity(); });
    confirmPasswordInput.addEventListener('input', () => { validateConfirmPassword(); checkFormValidity(); });
    ageInput.addEventListener('input', () => { validateAge(); checkFormValidity(); });

    // Event listener para el botón de envío
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío por defecto del formulario

        // Volver a validar todos los campos antes de enviar
        const isValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword() && validateAge();

        if (isValid) {
            alert('¡Formulario enviado con éxito!');
            // Aquí podrías enviar los datos a un servidor
            // form.submit(); // Si quieres enviar el formulario realmente
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    });

    // Event listener para el botón de reiniciar
    resetButton.addEventListener('click', () => {
        // Limpiar los campos y los mensajes de error
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('valid', 'invalid');
        });
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        ageError.textContent = '';
        submitButton.disabled = true; // Deshabilitar el botón de envío
    });

    // Validar el formulario al cargar la página si ya hay valores (útil para recargas)
    checkFormValidity();
});