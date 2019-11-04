import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import  { ActivatedRoute } from '@angular/router';
import { Location } from  '@angular/common';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges{

  @Input() hero: Hero;
  id: number;  
  constructor(  
    private messageService: MessageService
    , private activatedRoute: ActivatedRoute
    , private location: Location
    , private heroService: HeroService) { 

    }

  ngOnInit() {
    console.log('Initilized Hero Detail component..');
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');  
    console.log('Id: ' + this.id);
    this.getHero(this.id);
  }

  getHero(id: number): void{
    this.heroService.getHero(id).subscribe( hero => { 
      this.hero = hero;
    });
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.hero.currentValue !== undefined){
       this.messageService.add('Hero Detail : ' + this.hero.name);
    }
  }

  save(){ 
    this.heroService.updateHero(this.hero)
    .subscribe(() => { 
      this.goBack();
    });
  }

  goBack():void{ 
    this.location.back();
  }

}
