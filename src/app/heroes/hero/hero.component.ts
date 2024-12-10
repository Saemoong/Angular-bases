import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return `${this.name} - ${this.age}`;

  }

  changeHero(value:string):void {
    this.name = value;
  }

  changeAge(value:number):void {
    console.log(value);

    this.age = value;
  }

  resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
  }

}
