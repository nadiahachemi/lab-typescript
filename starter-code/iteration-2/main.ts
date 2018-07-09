// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface"
// interface TodoInterface{
//     tasks:Array<string>;
//     addTask (task: string);
//     listAllTask();
//     deleteTask( task:string);
// }
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
    constructor(
        public tasks=[]
    )
    {}

    listAllTask(){
        console.log(this.tasks.length)
    };

    addTask (task: string){
        this.tasks.push(task);
        console.log(task + " has been added")
        return this.tasks.length
    }

    deleteTask( task:string){
        this.tasks.splice(this.tasks.indexOf(task));
        return this.tasks.length;
    }
};

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTask();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTask();
