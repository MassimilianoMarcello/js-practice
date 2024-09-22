//* Function anatomy:
//p  Name, Paramaters,body,return statement


//* 4 ways to declare functions

//b1 Function declaration       
//b2 Function expression
//b3 Arrow Function
//b4 Function Constructor

//1 Function declaration = function that returna a value

//r the Function keyword
//r the Function name
//r the parameterd
//r The body
//r The return statement if we need to return a value
//r Invoke/Call the function
//r CAN BE INVOKED BEFORE DECLARED =ARE HOISTED

// LIKE HERE INVOKED BEFORE  TO BE DECLARED
console.log(convertLiters(10)); 
function convertLiters(gallons){
     return gallons * 3.785 
    //  body (the logic of the function) 
}



//2  Function expression:
// r  assigned to a variable
//  r  can aninomous
// r  but we can call it by the variable
const convertorLiters = function (gallones){
    return gallones*3.878
}

let result = convertorLiters(10)
console.log(result);

//3 ARROW FUNCTION

//R  a compact alternative of a function expression with some limitations
// r se si usano le graffe serve return
let sum = (a,b)=> a+b
console.log(sum(2,2));
let summa = (a,b)=> {return a+b}
console.log(summa(2,3));
let summar = (a,b)=> {const usumm= a+b
    return usumm
}
console.log(summar(2,3));

let galloniConvert = galloni => galloni *3

console.log(galloniConvert(22));

// ! limitations of arrow functions:
//B1 Arrow functions are not hoisted
//B2 Can not be used as constructor functions
//B3 Can not use the arguments object
//B4 They dont have their own 'this' binding
//B5 Cant be used a s Constructor functions

// esempio di errore con costruttore:

// const Aircraft = ( model,capacity)=>{
//     this.model = model;
//     this.capacity = capacity;
// }
// const boeing737 = new Aircraft('Boeing 737',200)

//B6 Arrow Functions can not access the arguments object
//b ma puoi fare una cosa simile con  parametri ...rest
// Questo genererà un errore: 'arguments is not defined'
// const example = () => {
//     console.log(arguments); 
//   };
  // Errore: arguments is not defined
//   example(1, 2, 3); 
//b con ...args funziona

const example = (...args) => {
    console.log(args); // args è un array che contiene tutti gli argomenti passati alla funzione
  };
  
  example(1, 2, 3); // Output: [1, 2, 3]
  

//4 Function Constructor
// CREATES a new Function Object from a list of arguments and
//  a body provided as a string



const convertToLiterss = new Function('gallons', "return gallons * 3.567");
console.log(convertToLiterss(10)); // Restituisce 35.67

// Costruttore Function:

// new Function('param1', 'param2', ..., 'body') crea una funzione il cui codice viene passato come stringa. 
// In questo caso, il parametro è 'gallons' e il corpo della funzione è "return gallons * 3.567".
// r  This method is prone of errors and security issues

//b RECURSIVE CALL

function decremetnAltitude(alt){
    console.log(alt);
    if(alt>500){
        decremetnAltitude(alt-100)
    }else{
        console.log('done');
    }
}

console.log(decremetnAltitude(650));

// a function need a stop condition


//Y  IIFE Immediately Invoked Function Expression = executes immediately after her declaration


//y 1)declare function 2) wrap it in parentheses 3) invoke it by using();
// in poche parole la stessa funzione inserita tra parentesi si autochimera  appena dichiarata

(function printDate(){
    let date = new Date().toLocaleDateString();
    console.log(date);
})();