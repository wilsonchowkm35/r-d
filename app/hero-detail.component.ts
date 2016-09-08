import { Component, Input } from '@angular/core';

import { Hero } from './models/Hero';

const HEROS: Hero[] = [
	{ id: 11, name: 'Mr. Chow' },
	{ id: 12, name: 'Miss Chau'},
	{ id: 13, name: 'Cathering Fung'}
]

@Component({
      selector: 'hero-detail',      
      template: `
      <div *ngIf="hero">
	      <h1>{{title}}</h1>
	      <h2>{{hero.name}} details!</h2>
	      <div><label>id: </label>{{hero.id}}</div>
	      <div>
	      	<label>name: </label>
	      	<input [(ngModel)]="hero.name" placeholder="name" >
	      </div>   
      </div>
      `
})

export class HeroDetailComponent { 
	title = 'Tour of Heroes';
	heroes = HEROS;
	hero: Hero = {
		id: 1, 
		name: 'Windstorm2'
	};
	selectedHero: Hero;
	onSelect(hero: Hero): void {
		//console.log("Here", hero)
		this.selectedHero = hero
	}
}

