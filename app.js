// Obtener la referencia del botón y del formulario
const form = document.getElementById('form');
const button = document.getElementById('submit-button');
const box = document.getElementById('box');

// Función que se encarga de validar el formulario
function validateForm(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Obtener los valores de los inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validar que el nombre no esté vacío
  if (name === '') {
    alert('El nombre no puede estar vacío');
    return;
  }

  // Validar que el correo electrónico sea válido
  if (!isValidEmail(email)) {
    alert('El correo electrónico no es válido');
    return;
  }

  // Validar que el mensaje no esté vacío
  if (message === '') {
    alert('El mensaje no puede estar vacío');
    return;
  }

  // Enviar el formulario si todo está correcto
  alert('El formulario se ha enviado correctamente');
  form.submit();
}

// Función que se encarga de validar el formato del correo electrónico
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Agregar el evento de click al botón de enviar
button.addEventListener('click', function(event) {
  validateForm(event);
  if (form.checkValidity() === false) {
    box.style.backgroundColor = 'red';
  }
});
