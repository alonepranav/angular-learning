import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  num = 10
  onChange(e: Event) {
    const a = (e.target as HTMLInputElement).value;
    
  }
  inc = () => {
    this.num += 1
  }
  dec = () => {
    this.num -= 1
  }
}
