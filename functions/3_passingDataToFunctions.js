// y-- PASSING DATA TO FUNCTIONS:
    /* ARUMENTS:
    1)UNDERSTANDING PARAMETERS AND ARGUMENTS
    2)PASS BY VALUE /PASS BY REFERENCE
    3)DEFAULT PARAMETERS
    4)REST PARAMENTERS
    5) THE ARGUMENT OBJECT 
    6) PASSING FUNCTION AS A ARGUMENT OF OTHER FUNCTIONS
  
     */

// Y  1a)  FUNCTIONS PARAMETERS
// names given to pieces of data that are provided to a function:i parametri 
// sono le variabili che vengono dichiarate nella definizione di una funzione 
// e che rappresentano 
// i valori che la funzione può ricevere quando viene chiamata.
// Y  1b)  FUNCTIONS Arguments:
// The actual values that are transmitted  when calling a function. inside a  function, the value of
// arguments is read by using the names in the parmaeter list

//P 2) Pass by value vs by reference

// p    by value
/*
Quando si passa un valore per valore a una funzione, 
si passa una copia del valore originale.
 Qualsiasi modifica fatta al valore all'interno della funzione non influisce 
 sul valore originale al di fuori della funzione. Questo comportamento 
 si applica ai tipi primitivi in JavaScript, come:

Numeri (number) Stringhe (string) Booleani (boolean)
undefined null Simboli (symbol) BigInt
*/

function increment(value) {
    value += 1;
    return value;
  }
  
  let x = 5;
  let y = increment(x);
  
  console.log(x); // 5
  console.log(y); // 6

// p  by reference

/**
 Quando si passa un valore per riferimento, 
 si passa un riferimento all'oggetto originale, non una copia.
  Qualsiasi modifica fatta all'oggetto all'interno della funzione 
  influenzerà l'oggetto originale al di fuori della funzione. 
  Questo comportamento si applica agli oggetti e alle array in JavaScript.
 */

  function addProperty(obj) {
    obj.newProperty = 'new value';
  }
  
  let myObject = { existingProperty: 'existing value' };
  addProperty(myObject);
  
  console.log(myObject); // { existingProperty: 'existing value', newProperty: 'new value' }
  

//p DEFAULT PARAMETERS "

/*"
I parametri predefiniti (o default parameters) in JavaScript 
sono una funzionalità che consente di assegnare un valore di default 
a un parametro di una funzione nel caso in cui non venga passato 
alcun argomento durante la chiamata della funzione. Questo è particolarmente 
utile per evitare che una funzione fallisca o comporti in modo imprevisto 
quando i parametri non sono forniti.
*/

function greet(name = 'Guest') {
    return `Hello, ${name}!`;
  }

  console.log(greet()); // Output: "Hello, Guest!"
  console.log(greet('Alice')); // Output: "Hello, Alice!"
  
//5) THE ARGUMENT OBJECT
// an arraylike object present in all non-arrow functions 
// that contains the cvalues of the arguments passed to a function

// praticamente se non  metto parametri nella dichiarazione della funzione quando la chiamo posso 
// utilizzare tutti gli argomenti che preferisco. Possiamo usare arguments come un array con indexn

// nell arrow functions devo usare il ...rest parameter
// y ...rest `e meglio in quanto arguments: È un oggetto simile a un array, 
// ma non è un vero array. Non ha i metodi degli array come map, filter, forEach, ecc.
//  È disponibile solo nelle funzioni tradizionali.

function somma(...numeri) {
  return numeri.reduce((acc, curr) => acc + curr, 0);
}
console.log(somma(1, 2, 3)); // Output: 6

// Rest parameter
// const displayFlights = function (...flights){
//   flights.forEach(f => {
//       createFlightEntry(f.flight, f.from, f.status, f.color);
//   });
// }

// displayFlights(
//   {flight: 'RO12345', from: 'Paris', status: 'On time'},
//   {flight: 'US67957', from: 'Berlin', status: 'On time'},
//   {flight: 'AF89756', from: 'New York', status: 'Delayed', color: 'yellow'},
//   {flight: 'UAL7897', from: 'Bucharest', status: 'Cancelled', color: 'red'},
//   {flight: 'OS4782', from: 'Vienna', status: 'On time'}
// );


// y  CALLBACK: passing a function like an argument
