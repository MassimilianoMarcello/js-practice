//todo --------somma tra loro tutti  i numeri contenuti in un array
// const sum =(array)=>{

//   return  array.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0)
// }

// console.log(sum([1, 2, 3, 4]));

// const sumRest =(...array)=>{

//     return  array.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0)
//   }
  
//   console.log(sumRest(1, 2, 3, 4));



//todo ------filtra i nuemri pari
// const filtraNumeriPari=(array)=>{
// return array.filter(num=>  num % 2 === 0 )
// }


// console.log(filtraNumeriPari([1, 2, 3, 4, 5, 6]));

//todo ------ restituisci il valore piu altro fra i numeri contenuti nell array
const trovaMassimo=(array)=>{
return array.reduce((acc,curVal)=>{return acc>curVal ? acc :curVal})
}

console.log(trovaMassimo([1, 5, 3, 9, 2]));

