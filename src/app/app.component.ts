import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';

//allows to add metadata to component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app works!';
}
