"use strict";
// [1, 2].forEach(alert);

// alert(message); // muestra el contenido de la variable

// let age = 100;

// cambiando el valor a undefined
// age = undefined;

// alert(age+"o"); // "undefined"

// alert(typeof 3);

// let message = "Introduzca el nombre";
// let result = prompt("Formulario", message);
// document.getElementById("testing").innerHTML = result;

// let isBoss = confirm("¿Eres el jefe?");
// if (isBoss) {
//     document.getElementById("testing").innerHTML = "Hola jefe";
// }else {
//     document.getElementById("testing").innerHTML = "hoola invitado";
// }

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0

// let counter = 1;
// let a = counter++; // (*)
// document.getElementById("testing").innerHTML = counter + " " + a;

// let a = prompt("¿Primer número?", 1);
// let b = prompt("¿Segundo número?", 2);

// alert(+a + +b); // 12

// alert( null > 0 ); /// (1) false
// alert( null == 0 ); /// (2) false
// alert( null >= 0 ); // (3) true

// let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');

// if (year == 2015) alert( '¡Estás en lo cierto!' );

// let age = prompt("Que edad tienes", 18);
// let accessAllowed = age > 18 ? true : false;
// let message =
//     age < 3
//         ? "¡Hola, bebé!"
//         : age < 18
//         ? "¡Hola!"
//         : age < 100
//         ? "¡Felicidades!"
//         : "¡Qué edad tan inusual!";

// alert(message);

// let company = prompt("¿Qué compañía creó JavaScript?", "");

// let user = company == 'Netscape' ? "¡Correcto!" : "Equivocado.";
// document.getElementById("testing").innerHTML = user;

// let numb = prompt("Introduzca un numero", 0);
// let out = numb === '0' ? 0 : numb < 0 ? -1 : numb > 0 ? 1 : "No me lo esperaba";
// document.getElementById("testing").innerHTML = out;

// document.getElementById('testing').innerHTML = (null || 0 || undefined);

// alert( alert(1) || 2 || alert(3) );

// let age = prompt("Age: ");
// let trueAge = age>=14 && age<=90 ? alert("Felicidades"): alert("Disculpa");
// alert(trueAge);
// age<=14 || !(age<90) ? alert("Felicidades"): alert("Disculpa");

//! Ejercicio importante:

// let whoIs = prompt("Who is: ");

// if (whoIs === "Admin") {
//     let pass = prompt("Password: ");
//     if (pass === "TheMaster") {
//         alert("Bienvenido");
//     }else{
//         pass ? alert("Clave Incorrecta") : alert("Cancelado");
//     }
// }else if( whoIs === '' || whoIs === null){
//     alert("Cancelado");
// }else{
//     alert("No te conosco");
// }

// let firstName = null, lastName = "Font",nickName = null;

// alert(firstName ?? lastName ?? nickName ?? "Anonymous");

// for (let i = 0; i < 3; i++) {
//     // muestra 0, luego 1, luego 2
//     alert(i);
// }

// let sum = 0;

// while (true) {
//     let value = +prompt("Ingresa un número", "");

//     if (!value) break; // (*)

//     sum += value;
// }
// alert("Suma: " + sum);

// let i = +prompt("Ingresa un número");
// for (; i > 0; i--) {
//     // si es verdadero, saltar el resto del cuerpo
//     if (i % 2 == 0) continue;

//     alert(i); // 1, luego 3, 5, 7, 9
// }

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Value at coords (${i},${j})`, "");

//         // Si es una cadena de texto vacía o se canceló, entonces salir de ambos bucles
//         if (!input) break outer; // (*)

//         // hacer algo con el valor...
//     }
// }

// alert("Listo!");

// for (let i = 2; i <= 10; i++) {
//     if(i%2 == 0) {
//         alert(i)
//     }
// }
// let i = 2;
// while ( i <= 10) {
//     if(i%2 == 0) {
//         alert(i);
//     }
//     i++;
// }
// let i = 0;
// while (i < 3) {
//     alert(`numero ${i}`);
//     i++;
// }

// let numero;
// do {
//     numero = +prompt("Ingrese un numero mayor que 100");
// } while (numero < 100 && numero);

// let tope = +prompt("Ingrese un numero");
// lab: for (let i = 2; i < tope; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             continue lab;
//         }
//     }
//     console.log(i);
// }

// function showCount(count) {
//     // si count es undefined o null, muestra "desconocido"
//     console.log(count ?? "desconocido");
// }

// showCount(0); // 0
// showCount(null); // desconocido
// showCount(); // desconocido

// function checkAge(age) {
//     return (age > 18) || confirm("¿Tienes permiso de tus padres?");
// }

// let i = +prompt("Ingresa tu edad", 18);
// checkAge(i);

// console.log(min(8, 10));
// function min(a, b) {
//     return a < b ? a : b;
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// function showOk() {
//   alert("Estás de acuerdo.");
// }

// function showCancel() {
//     alert("Cancelaste la ejecución.");
// }

// // uso: las funciones showOk, showCancel son pasadas como argumentos de ask
// ask("Estás de acuerdo?", showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// let age = prompt("¿Su Edad?", 18);

// switch (+age) {
//   case 18:
//     alert("¡Funciona!");
//     break;

//   default:
//     alert("Todo valor que no sea igual a uno de arriba");
// }

// let user = {     // un objeto
//   name: "John",  // En la clave "name" se almacena el valor "John"
//   age: 30,        // En la clave "age" se almacena el valor 30
//   isAdmin: true
// };

// user.isAdmin = true;
// console.log(user);
// delete user.isAdmin;
// console.log(user);
// console.log("name" in user);
// user.isAdmin = true;

// let fruit = prompt("¿Qué fruta comprar?", "Manzana");
// let price = prompt("A q precio la desea", 10);

// let bag = {
//   [fruit]: [price], // El nombre de la propiedad se obtiene de la variable fruit
// };

// console.log( bag[fruit] ); // 5 si fruit es="apple"

// for (let key in user) {
//   // claves
//   console.log( key );  // name, age, isAdmin
//   // valores de las claves
//   console.log( user[key] ); // John, 30, true
// }
//  function isEmpty(objeto) {
//   for (let key in objeto) return false;
//   return true;
//  }

//  delete user.isAdmin;
//  delete user.name;
//  console.log(user);
//  console.log(isEmpty(user));

// let john = prompt("Introdusca el salario de John", 200);
// let ann = prompt("Introdusca el salario de Ann", 300);
// let pete = prompt("Introdusca el salario de Pete", 500);

// let salario = {
//   john: 34,
//   ann: 20,
//   pete: 23,
//   isLate: true,
//   name: "Lucas"
// }
// // let sum = 0;
// // for (const key in salario) {
// //   sum += +salario[key];
// // }

// console.log(multpX2(salario));

// function multpX2(objt) {
//   for (let key in objt) {
//     if (typeof objt[key] === "number") {
//       objt[key] *= 2;
//     }
//   }
//   return objt;
// }

let user = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user);

console.log(clone.name); // John
console.log(clone.age); // 30

let user1 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log( user1.sizes.height ); // 182

let user3 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone1 = structuredClone(user3);

alert( user3.sizes === clone1.sizes ); // false, objetos diferentes

// ahora user y clone están totalmente separados
user3.sizes.width = 60;    // cambia una propiedad de un lugar
console.log(clone1.sizes.width); // 50, no están relacionados
