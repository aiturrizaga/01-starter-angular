import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {

    counter = 0;

    increase(value: number) {
      this.counter += value;
    }
  
    resetCounter() {
      this.counter = 0;
    }

}