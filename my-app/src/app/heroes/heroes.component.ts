import { Component, OnInit } from '@angular/core';

//All custom packages will be refered below 
import { Hero }  from '../hero';


import { HeroService } from './hero.service'
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService
              , private messageService: MessageService) { 
    this.heroes = [];
  }

  ngOnInit() {
    this.messageService.add('Heroes component: Making call to get Heroes')
    this.heroService.getHeroes().subscribe( data => { 
      this.heroes = data;
    });
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

}
