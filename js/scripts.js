/*    El formulario se validará al darle al botón de confirm y sólo tenéis que validar que el campo tenga contenido.
    Los textos de la tarjeta cambiarán según escribamos en la tarjeta, y si borramos el contenido del formulario la tarjeta volverá a tener su texto por defecto
    Olvidaos de las animaciones y de todo lo que no esté en el figma*/

/*elementos

mensajes de error
cada texto de las tarjetas
cada input 
boton*/

const rootStyles = document.documentElement.style;

/*tarjetas*/
const cvcCardElement = document.getElementById("cvcCard");
const cardnumberCardElement = document.getElementById("cardnumberCard");
const cardnameCardElement = document.getElementById("cardnameCard");
const expdateCardElement = document.getElementById("expdateCard");

/*inputs*/

const cardnameElement = document.getElementById("cardname");
const cardnumberElement = document.getElementById("cardnumber");
const expmonthElement = document.getElementById("expmonth");
const expyearElement = document.getElementById("expyear");
const cvcElement = document.getElementById("cvc");

/*errors*/

const nameErrorElement = document.getElementById("nameError");
const numberErrorElement = document.getElementById("numberError");
const monthErrorElement = document.getElementById("monthError");
const yearErrorElement = document.getElementById("yearError");
const cvcErrorElement = document.getElementById("cvcError");

/*boton*/
const button = document.getElementById("confirmation");

/*formulario entero*/
const formElement = document.getElementById("form");

const start = () => {
  nameErrorElement.style.display = "none";
  numberErrorElement.style.display = "none";
  monthErrorElement.style.display = "none";
  yearErrorElement.style.display = "none";
  cvcErrorElement.style.display = "none";
};

const validation = (event) => {
  event.preventDefault();

  start();

  /*nombre*/
  if (cardnameElement.value === "") {
    nameErrorElement.style.display = "block";
    console.log("campo no validado");
  } else {
    nameErrorElement.style.display = "none";
    console.log("campo validado");
  }
  /*numero*/
  if (cardnumberElement.value === "") {
    numberErrorElement.style.display = "block";
    console.log("campo no validado");
  } else {
    numberErrorElement.style.display = "none";
    console.log("campo validado");
  }
  /*mes*/
  if (expmonthElement.value === "") {
    monthErrorElement.style.display = "block";
    console.log("campo no validado");
  } else {
    monthErrorElement.style.display = "none";
    console.log("campo validado");
  }
  /*año*/
  if (expyearElement.value === "") {
    yearErrorElement.style.display = "block";
    console.log("campo no validado");
  } else {
    yearErrorElement.style.display = "none";
    console.log("campo validado");
  }
  /*cvc*/
  if (cvcElementElement.value === "") {
    cvcErrorElement.style.display = "block";
    console.log("campo no validado");
  } else {
    cvcErrorElement.style.display = "none";
    console.log("campo validado");
  }
};

formElement.addEventListener("submit", validation);

/*que se rellene el campo de input a la vez que el de las tarjetas*/

/*impresion del nombre*/
const printCardName = () => {
  if (cardnameElement.value !== "") {
    cardnameCardElement.textContent = cardnameElement.value;
  } else {
    cardnameCardElement.textContent = "JANE APPLESEED";
  }
};

cardnameElement.addEventListener("input", printCardName);

/*Impresion del numero*/

const printNumber = () => {
  if (cardnumberElement.value !== "") {
    cardnumberCardElement.textContent = cardnumberElement.value;
  } else {
    cardnumberCardElement.textContent = "0000 0000 0000 0000";
  }
};
cardnumberElement.addEventListener("input", printNumber);

/*Impresion del expmonth solo 2 num de los dos campos en un solo campo*/

const printMonth = () => {
  if (expmonthElement.value !== "") {
    expdateCardElement.textContent = expmonthElement.value;
  } else {
    expdateCardElement.textContent = "00/00";
  }
};
cardnumberElement.addEventListener("input", printMonth);

/*Impresion del expyear*/

/*Impresion del cvc ¿como hacer que printee solo 3 valores*/

const printCvc = () => {
  if (cvcElement.value !== "") {
    cvcCardElement.textContent = cvcElement.value;
  } else {
    cvcCardElement.textContent = "000";
  }
};
cvcElement.addEventListener("input", printCvc);
