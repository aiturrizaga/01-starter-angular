import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Valle Grande';
  counter = 0;

  increase(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }

}
