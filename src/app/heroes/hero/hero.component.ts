import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  heroeName = 'Spiderman';
  realName = 'Peter Parker';
  age = 17;
  country = 'Perú';

  heroes = ['Spiderman', 'Ironman', 'Capitan America', 'Thor'];

  get nameUppercase() {
    return this.realName.toUpperCase();
  }

  anyFunction() {
    return `${this.heroeName} -> ${this.age}`;
  }

  changeHeroe() {
    this.heroeName = 'Iron Man';
    this.realName = 'Tony Stark';
  }

  changeHeroList(heroName: string) {
    this.heroeName = heroName;
  }

}
