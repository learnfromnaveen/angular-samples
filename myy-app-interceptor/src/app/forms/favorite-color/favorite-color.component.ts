import { Component, Input }  from  '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    <div>
      Favorite Color: <br/>
      <input type="text" [(ngModel)]="color">
    </div>
    <div>
      You favourite color is : {{color}}
    </div>
  `
})
export class FavoriteColorComponent {
 
  color: string;  
  constructor() {
     this.color = "Green";
  }

}