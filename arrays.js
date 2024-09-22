// let arr=[1,2,3,4,5,6,7,11,23,45];
// let sum=0
// for(let i=0;i<arr.length; i++){
// console.log(arr[i].includes(1));
// }
// let filterArr= arr.filter((value)=>{return value})

// console.log(filterArr);

// const arrObj = [
//   { product: "pillow", material: "cotton", stock: 5 },
//   { product: "sheet", material: "cotton", stock: 15 },
//   { product: "pillow", material: "syntetic", stock: 5 },
// ];

// const filterSet ={
//     material:'cotton',
//     stock: (value) => value > 5,
// }

// let filterdArray= arrObj.filter(item=>{return item.material===filterSet.material && filterSet.stock(item.stock)})

// console.log(filterdArray);

//!sommiamo tutti i numeri pari
const numbers = [1, 2, 3, 4, 5, 6];

const numPari = numbers.reduce(num=>{
   
    if(num%2===0){
        let sumNumPari;
       sumNumPari=num++
    }
 }
  
)

console.log(numPari);
console.log(sumNumPari);




document.querySelector("#app").innerHTML = `
  <div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
