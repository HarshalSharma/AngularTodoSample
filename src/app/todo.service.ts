import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log("TODO service initialized...");
    this.load();
  }

  updateTodo(todoList){
    localStorage.setItem('todos',JSON.stringify(todoList));
  }

   getTodos(){
     try{
      var todos = JSON.parse(localStorage.getItem('todos'));
     }
     catch(err){
       localStorage.removeItem('todos');
     }
     return todos;
   }
}
