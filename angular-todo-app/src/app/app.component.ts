import { TodoComponent } from './todo/todo.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
