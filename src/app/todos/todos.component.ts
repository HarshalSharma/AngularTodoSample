import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {  UploadTodoService } from '../upload-todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [UploadTodoService]
})
export class TodosComponent implements OnInit {
  todos;
  text;
  appState = "default";
  constructor(private _todoService: TodoService,private _uploadTodoService : UploadTodoService) {
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo(){
    this.todos.push({text : this.text}); 
    this._todoService.updateTodo(this.todos);
    this.text = "";
  }

  deleteTodo(data){
    if(confirm("Sure to delete :" + data + " ?")){
        for(var i=0;i<this.todos.length;i++){
            if(data == this.todos[i].text){
              this.todos.splice(i,1);
            }
        }
        this._todoService.updateTodo(this.todos);
    }
  }

  editingTodo;
  editTodo(editingTodo){
    this.appState = "edit";
    this.text = editingTodo;
    this.editingTodo = editingTodo;
  }

  updateTodo(){
    this.deleteTodo(this.editingTodo);
    this.addTodo();
    this.appState = "default";
  }

  syncToServer(){
     console.log(this._uploadTodoService.makeUpload(this._todoService.getTodos));
  }

}
