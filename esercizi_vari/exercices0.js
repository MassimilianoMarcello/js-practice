// const mockGoal = {
//     id: '1',
//     name: "Imparare JavaScript",
//     description: "Studiare le basi di JavaScript per costruire un'app.",

// };


// const goalbyId =( id)=>{

// if(id==="1"){
//     return mockGoal
// }
// }

// console.log(goalbyId(mockGoal.id) );



// const updateGoal = (id, updates) => {
//     if (id === '1') {
//         // Aggiorna direttamente le proprietà di mockGoal
//         mockGoal.name = updates.name || mockGoal.name;
//         mockGoal.description = updates.description || mockGoal.description;
//     }
//     return mockGoal; 
// };

// const uno = {
//     name: "Imparare Node.js",
//     description: "Studiare Node.js in dettaglio."
// };

// console.log(updateGoal('1', uno)); 

// const mockGoal = {
//     id: '1',
//     name: "Imparare JavaScript",
//     description: "Studiare le basi di JavaScript per costruire un'app.",
//     completed: false
// };

// const completeGoal=(id)=>{
//     if(id==='1'){
//         mockGoal.completed=true

//     }
// }

// completeGoal(mockGoal.id)
// console.log(mockGoal);


// const goals = [
//     {
//         id: '1',
//         name: "Imparare JavaScript",
//         description: "Studiare le basi di JavaScript per costruire un'app.",
//         completed: false
//     },
//     {
//         id: '2',
//         name: "Imparare Node.js",
//         description: "Approfondire Node.js per lo sviluppo server-side.",
//         completed: false
//     },
//     {
//         id: '3',
//         name: "Imparare CSS",
//         description: "Migliorare le competenze di styling e layout.",
//         completed: true
//     }
// ];
// const deletObj =(id)=>{
// const foundIndex=goals.findIndex(goal=>goal.id===id)
// console.log(foundIndex);
// return goals.splice(foundIndex)
// }



// deletObj('1')

// const completedObj =[{id:'1',completed:true},{id:'2',completed:false},{id:'3',completed:false},{id:'4',completed:true},]


// const completedObjects=(array,value)=>{
   
//     const objTrue = array.filter(obj=> obj.completed===value)
//     console.log(objTrue);
// }

// completedObjects(completedObj,true)

// const addGoal=(array,obj)=>{

//   return array.push(obj)
// }
// const newObj={name:'marcus',completed:true,priority:'high'}
// addGoal(completedObj,newObj)
// console.log(completedObj);

// const filterCompleted =(array,value)=>{
//     return array.filter(obj=>obj.completed===value)
// }

// console.log(filterCompleted(completedObj,true));
//  const completedObj =[{id:'1',completed:true},{id:'2',completed:false},{id:'3',completed:false},{id:'4',completed:true},]
// const arrNewObj=(array,obj)=>{
// return array.push(...obj)
// }
// const newObje=[{id:'1',completed:true},{id:'2',completed:false}]
// console.log(arrNewObj(completedObj,newObje));
// console.log(completedObj);
// arrivano nuovi oggetti: se hannno lo stesso id ,sostituiscono il presente se no si aggiungono
const completedObj = [
    { id: '1', completed: true },
    { id: '2', completed: false },
    { id: '3', completed: false },
    { id: '4', completed: true },
];

const newObj1 = { id: '5', completed: true }; // Nuovo oggetto
const newObj2 = { id: '1', completed: false }; // Duplicato

const addUniqueObj = (array, newObj) => {
    // Cerchiamo un oggetto nell'array che abbia lo stesso id del nuovo oggetto passato come parametro
    const objUniqueId = array.find(object => object.id === newObj.id);
    console.log(objUniqueId);
  
    // Se l'oggetto con lo stesso id viene trovato
    if (objUniqueId) {
      // Troviamo l'indice dell'oggetto nell'array che ha lo stesso id del nuovo oggetto
      const findIndexe = array.findIndex(obj => obj.id === objUniqueId.id);
      console.log(findIndexe);
      // Rimuoviamo l'elemento all'indice trovato e lo sostituiamo con il nuovo oggetto
      array.splice(findIndexe, 1, newObj);
    }
  
    // Se non viene trovato un oggetto con lo stesso id, aggiungiamo il nuovo oggetto all'array
    if (!objUniqueId) {
      return array.push(newObj);
    }
  }
  
  addUniqueObj(completedObj, newObj1);
  addUniqueObj(completedObj, newObj2);
  console.log(completedObj);