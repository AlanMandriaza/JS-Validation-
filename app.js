
const expresiones = {

  nombre: /^[a-zA-ZÀ-ÿ\s]{1,15}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  cvc: /^[0-9]{1,3}$/,
  card: /^[0-9]{12}$/,
  cash: /^[0-9]{1,8}$/,
  textarea: /^.{1,90}$/,
}





const enviarFormulario = (e) => {
  e.preventDefault();

  /*===============================*/
  const inputfName = document.getElementById('fName').value;
  const fName = document.getElementById('fName');
  const error = document.getElementById('error');
  /*===============================*/
  const inputlName = document.getElementById('lName').value;
  const lName = document.getElementById('lName');
  /*===============================*/
  const inputcity = document.getElementById('city').value;
  const city = document.getElementById('city');
  /*===============================*/
  const inputcardNumber = document.getElementById('cardNumber').value;
  const cardNumber = document.getElementById('cardNumber');
  /*===============================*/
  const inputcvc = document.getElementById('cvc').value;
  const cvcNumber = document.getElementById('cvc');
  /*===============================*/
  const inputcashAmount = document.getElementById('cashAmount').value;
  const cashAmount = document.getElementById('cashAmount');
  /*===============================*/
  const state = document.getElementById('state');
  /*===============================*/
  const inputemail = document.getElementById('email').value;
  const email = document.getElementById('email');
  /*===============================*/
  const inputmessage = document.getElementById('message').value;
  const message = document.getElementById('message');


  var mensajesError = 0;

  /*=============NOMBRE==================*/

  if (expresiones.nombre.test(inputfName) === false) {
    fName.classList.add('bg-custom');
    mensajesError++;

  } else {
    fName.classList.remove('bg-custom');
  }
  /*=============APELLIDO==================*/


  if (expresiones.nombre.test(inputlName) === false) {

    lName.classList.add('bg-custom');
    mensajesError++;

  } else {
    lName.classList.remove('bg-custom');
  }

  /*==============cardnumber=================*/
  if (expresiones.card.test(inputcardNumber) === false) {
    cardNumber.classList.add('bg-custom');
    mensajesError++;

  } else {
    cardNumber.classList.remove('bg-custom');
  }
  /*=================city==============*/

  if (expresiones.nombre.test(inputcity) === false) {
    city.classList.add('bg-custom');
    mensajesError++;

  } else {
    city.classList.remove('bg-custom');
  }
  /*=================cvc==============*/

  if (expresiones.cvc.test(inputcvc) === false) {
    cvcNumber.classList.add('bg-custom');
    mensajesError++;
  } else {
    cvcNumber.classList.remove('bg-custom');
  }
  /*=================amount==============*/

  if (expresiones.cash.test(inputcashAmount) === false) {
    cashAmount.classList.add('bg-custom');
    mensajesError++;
  } else {
    cashAmount.classList.remove('bg-custom');
  }
  /*=============state==================*/

  if (state.value === "a") {
    state.classList.add('bg-custom2');
  } else {
    state.classList.remove('bg-custom2');
  }
  /*=================email==============*/

  if (expresiones.correo.test(inputemail) === false) {
    email.classList.add('bg-custom');
    mensajesError++;
  } else {
    email.classList.remove('bg-custom');
  }

  /*=================textarea==============*/

  if (expresiones.textarea.test(inputmessage) === false) {
    message.classList.add('bg-custom');
    mensajesError++;
  } else {
    message.classList.remove('bg-custom');
  }
  /*==============clase=error=========*/

  if (mensajesError > 0) {

    error.classList.add('alert', 'alert-danger');
    error.innerHTML = 'Some fields are missing';
  } else {

    error.classList.remove('alert', 'alert-danger');
    document.getElementById('miFormulario').submit();
  }

};

document.getElementById('enviarBtn').addEventListener('click', (event) => {
  event.preventDefault();
  enviarFormulario(event);
});





















