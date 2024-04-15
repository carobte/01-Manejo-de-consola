
let userName = "Caro"
let userLastName = "Bustamante"
const age = "25 years old"
const userEmail = "caro.bustamante.escobar@gmail.com"
let userPhone = 3113506770
let userAddress = "Envigado"

/* Tres formas de escribir console.log */
console.log("Name: " + userName)
console.log("Name", userName)
console.log(`Name: ${userName}`)

console.log("Hello " + userName + " " + userLastName + ", you're " + age + ", your email is: " + userEmail + ", your phone is: " + userPhone + ", you live in " + userAddress)
console.log("Hello", userName, userLastName, "you're", age, "your email is:", userEmail, "your phone is:", userPhone, "you live in", userAddress)

console.log(`Hello ${userName} ${userLastName}!, 
You're ${age}, 
Your email is: ${userEmail}, 
Your phone is: ${userPhone}, 
You live in ${userAddress}`)

/* 

var: se usaba antes de la actualización de ECMA, ya no se utiliza, 
let: puede sobreescribir su valor, 
const: constante, no sobreescribe su valor

*/

/*

console.log() General
console.info() información, igual al general
console.warn() advertencia -> naranjadito con !
console.error() error -> rojo con x
console.debug () msg para desarrollador, no sale en la consola propiamente, sino en el menu de mensajes -> debug
console.clear() limpia la consola

console.group ("Name del colapsable") -> Empieza a agrupar logs
console.groupEnd() -> finaliza la agrupación de los logs

- Podemos escribir css dentro de las comillas. Pj:

console.log(`%c${userName}`, "background-color:black; color:white" )

*/

/* Mensajes para el usuario

 alert(userAddress) */

/* SweetAlert2 como opción para alertas estilizadas 

let timerInterval;
Swal.fire({
    title: "Auto close alert!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
    },
    willClose: () => {
        clearInterval(timerInterval);
    }
}).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
    }
});

*/


