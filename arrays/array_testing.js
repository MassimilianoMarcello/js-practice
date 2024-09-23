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
// const trovaMassimo=(array)=>{
// return array.reduce((acc,curVal)=>{return acc>curVal ? acc :curVal})
// }

// console.log(trovaMassimo([1, 5, 3, 9, 2]));

// TODO ===    CONTA LE OCCORRENZE DI UN ELEMENTO ALL INTERNO DELL ARRAY

// const contaOccorrenze =(array)=>{
//     return array.reduce((acc,currVal)=>{return acc===currVal? =1  },{})
// }

const contaOccorrenze = (array) => {
    return array.reduce((acc, currVal) => {
        // Controlla se currVal è già in acc
        if (acc[currVal]) {
            // Incrementa il valore
            acc[currVal]++;
        } else {
            // Aggiungi currVal con valore 1
            acc[currVal] =1;
        }
        return acc; // Restituisci l'accumulatore aggiornato
    }, {});
}


console.log(contaOccorrenze(['a', 'b', 'a', 'c', 'b', 'a']));
// todo accedere a un oggetto con 
const pet= {
    cane:'gatto',
    age:3
}

console.log(pet['cane']);

// todo sommare i valori di un oggetto


const sommaValori=(array)=>{
  return  array.reduce((acc,currVal)=>{
        return acc + currVal['valore']
    },0)
}
const dati = [
    { valore: 10 },
    { valore: 20 },
    { valore: 30 }
];

console.log(sommaValori(dati)
);

// todo CONTA OCCORRENZA LETTERE IN UNA STRINGA

const testo = "Ciao Mondo";

const contaLettere=(string)=>{
    return string.toLowerCase().replace(/\s+/g, '').split("").reduce((acc,currVal)=>{
     
        if(acc[currVal]){
            acc[currVal]++;
        }else{ acc[currVal]=1}
        return acc
    },{})
}


console.log(contaLettere(testo));
// Dovrebbe restituire: { c: 1, i: 1, a: 1, o: 2, m: 1, n: 1, d: 1 }


