// filtra gli oggetti con una specifica priorita'


// const tasks = [
//     { id: 1, title: 'Completare progetto', priority: 'alta' },
//     { id: 2, title: 'Lavare i piatti', priority: 'bassa' },
//     { id: 3, title: 'Fare esercizio', priority: 'media' },
//     { id: 4, title: 'Studiare JavaScript', priority: 'alta' },
//   ];

// const filterByPriority = (array,priority)=>{
// return array.filter(obj=>obj.priority===priority)
// }

  
// console.log(filterByPriority(tasks, 'alta'));


// array mutidimensionale con filtro multiplo
// implementare una funzione chiamata findIncompleteTasksByPriority(projects, priority) che accetta l'array projects e 
// una priority come input, e restituisce un array di task che hanno quella priorità e che non sono completati.

const projects = [
    {
      name: 'Progetto 1',
      tasks: [
        { name: 'Task 1', priority: 'alta', completed: false },
        { name: 'Task 2', priority: 'media', completed: true },
      ],
    },
    {
      name: 'Progetto 2',
      tasks: [
        { name: 'Task 3', priority: 'bassa', completed: false },
        { name: 'Task 4', priority: 'alta', completed: false },
      ],
    },
  ];


  const findIncompleteTasksByPriority=(objectsi, priority)=>{
    return objectsi.flatMap(object=>object.tasks.filter(obj=>obj.priority===priority && !obj.completed))
  
  }

console.log(  findIncompleteTasksByPriority(projects, 'alta'));
  
  
  







