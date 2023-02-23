// Obtener la referencia del botón y del formulario
var error=document.getElementById('nombre');
var error=document.getElementById('pasword');
var error=document.getElementById('error');
var form = document.getElementById('form');



const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  password: /^.{4,12}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/
}

function enviarFormulario() {
  console.log('enviando formulario');

  var mensajesError = [];
  var inputVal = document.getElementById('nombre').value;
  var passwordInput = document.getElementById('password');

  if (inputVal === null || inputVal === '') {
    mensajesError.push('Ingresa tu nombre');
    document.getElementById('nombre').style.backgroundColor = 'red';
  } else {
    document.getElementById('nombre').style.backgroundColor = '';
  }

  if (passwordInput.value === null || passwordInput.value === '') {
    mensajesError.push('Ingresa tu contraseña');
    passwordInput.style.backgroundColor = 'red';
  } else {
    passwordInput.style.backgroundColor = '';
  }

  document.getElementById('error').innerHTML = mensajesError.join(', ');

  return mensajesError.length === 0;
}



/*
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
*/