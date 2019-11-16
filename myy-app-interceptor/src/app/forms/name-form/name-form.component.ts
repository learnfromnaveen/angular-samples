import { Component, OnInit } from '@angular/core';
import { Settings } from 'http2';

export class Hero { 

  name: string;

}
@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  hero: Hero;
  constructor() { }

  ngOnInit() {
    this.hero = { name: '' }
  }

}
