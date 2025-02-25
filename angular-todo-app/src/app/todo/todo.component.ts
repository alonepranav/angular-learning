import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

type TodoType = {
  title: string;
  completed: boolean;
  id: string;
}

const getRandomId = (): string => Math.random().toString();

@Component({
  selector: 'Todo',
  // imports: [BrowserModule, FormsModule],
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html'
})

export class TodoComponent {

  date = new Date().toDateString()
  todo: TodoType[] = []
  inputText = ""

  constructor() {
    const a = localStorage.getItem("_TODO_");
    if (a != null) {
      const r = JSON.parse(a);
      this.todo = r as TodoType[];
    }
  }

  addTodo = () => {
    if (!this.inputText.trim()) return;
    this.todo = [...this.todo, { completed: false, title: this.inputText.trim(), id: getRandomId() }]
    this.inputText = "";
    localStorage.setItem("_TODO_", JSON.stringify(this.todo));
  }

  deleteTodo = (id: string) => {
    this.todo = [...this.todo.filter(a => a.id != id)]
    localStorage.setItem("_TODO_", JSON.stringify(this.todo));
  }

  setTodoComplete = (id: string) => {
    const a = this.todo.find(s => s.id == id);
    if (a) {
      const i = this.todo.indexOf(a);
      const temp = [...this.todo];
      temp[i].completed = !temp[i].completed;
      this.todo = temp;
      localStorage.setItem("_TODO_", JSON.stringify(this.todo));
    }
  }
}
