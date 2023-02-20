
const cuadro = document.getElementById("cvc");


function validar() {
 
  const datos = cuadro.value;

  if (isNaN(datos)) {
  
    cuadro.style.backgroundColor = "red";
  } else {
   
    cuadro.style.backgroundColor = "white";
  }
}
