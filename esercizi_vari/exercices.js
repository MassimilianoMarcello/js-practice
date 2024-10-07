// Hai un array di progetti, ciascuno dei quali contiene una lista di task. 
// Ogni task ha una proprietà duration (in ore). 
// La tua missione è scrivere una funzione che sommi la durata di tutti i task incompleti all'interno di tutti i progetti.

const projectData = [
  {
    projectId: 1,
    tasks: [
      { taskId: 101, name: 'Task 1', completed: false, duration: 3 },
      { taskId: 102, name: 'Task 2', completed: true, duration: 2 },
      { taskId: 103, name: 'Task 3', completed: false, duration: 4 }
    ]
  },
  {
    projectId: 2,
    tasks: [
      { taskId: 201, name: 'Task A', completed: true, duration: 5 },
      { taskId: 202, name: 'Task B', completed: false, duration: 6 }
    ]
  }
];

const   sumIncompleteTaskDuration =(array,completed)=>{

  const taskDuration=array.flatMap(arr=>arr.tasks.filter(task=>task.completed===completed))
  console.log(taskDuration);
  const totalDuration = taskDuration.reduce((sum, task) => sum + task.duration, 0);
  return totalDuration
}


const totalDuration = sumIncompleteTaskDuration(projectData,true);
console.log(totalDuration); // Output: 13 (3 + 4 + 6)





  







