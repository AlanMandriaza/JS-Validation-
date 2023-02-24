const enviarFormulario = (e) => {
  e.preventDefault();

   /*===============================*/
  const inputfName = document.getElementById('fName').value;
  const fNameInput = document.getElementById('fName');
  const error = document.getElementById('error');
  /*===============================*/
  const inputlName = document.getElementById('lName').value;
  const lNameInput = document.getElementById('lName');
  /*===============================*/
  const city = document.getElementById('city').value;
  const inputcity = document.getElementById('city');
 /*===============================*/
 const cardNumber = document.getElementById('cardNumber').value;
  const inputcardNumber = document.getElementById('cardNumber');

  var mensajesError = [];
  /*===============================*/
   

   if (cardNumber.trim() === '') {
    inputcardNumber.classList.add('is-invalid');
    mensajesError.push('Some fields are missing');
  } else {
    inputcardNumber.classList.remove('is-invalid');
  }
  /*===============================*/

  if (city.trim() === '') {
    inputcity.classList.add('is-invalid');
    mensajesError.push('Some fields are missing');
  } else {
    inputcity.classList.remove('is-invalid');
  }
  /*===============================*/

  if (inputfName.trim() === '') {
    fNameInput.classList.add('is-invalid');
    mensajesError.push('Some fields are missing');
  } else {
    fNameInput.classList.remove('is-invalid');
  }
  /*===============================*/
  if (inputlName.trim() === '') {
    lNameInput.classList.add('is-invalid');
    mensajesError.push('Some fields are missing');
  } else {
    lNameInput.classList.remove('is-invalid');
  }
  /*===============================*/
  if (mensajesError.length != 0) {
    error.innerHTML = mensajesError.join();
    error.classList.add('alert', 'alert-danger');
  } else {
    error.innerHTML = '';
    error.classList.remove('alert', 'alert-danger');
    document.getElementById('miFormulario').submit();
  }
};

document.getElementById('enviarBtn').addEventListener('click', (event) => {
  event.preventDefault();
  enviarFormulario(event);
});

























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