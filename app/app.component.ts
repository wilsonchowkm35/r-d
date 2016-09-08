import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';

import { Hero } from './models/Hero';

//import { Bank } from './schema/bank.json'

//let Bank = require('../schema/bank.json')

//import { ApiService } from './components/api.service';

/*export class Hero {
	id: number;
	name: string;
}*/

const HEROS: Hero[] = [
	{ id: 11, name: 'Mr. Chow' },
	{ id: 12, name: 'Miss Chau'},
	{ id: 13, name: 'Cathering Fung'}
]

@Component({
      selector: 'my-app',
      providers: [ApiService],
      styles: [`
		  .selected {
		    background-color: #CFD8DC !important;
		    color: white;
		  }
		  .heroes {
		    margin: 0 0 2em 0;
		    list-style-type: none;
		    padding: 0;
		    width: 15em;
		  }
		  .heroes li {
		    cursor: pointer;
		    position: relative;
		    left: 0;
		    background-color: #EEE;
		    margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
		  }
		  .heroes li.selected:hover {
		    background-color: #BBD8DC !important;
		    color: white;
		  }
		  .heroes li:hover {
		    color: #607D8B;
		    background-color: #DDD;
		    left: .1em;
		  }
		  .heroes .text {
		    position: relative;
		    top: -3px;
		  }
		  .heroes .badge {
		    display: inline-block;
		    font-size: small;
		    color: white;
		    padding: 0.8em 0.7em 0 0.7em;
		    background-color: #607D8B;
		    line-height: 1em;
		    position: relative;
		    left: -1px;
		    top: -4px;
		    height: 1.8em;
		    margin-right: .8em;
		    border-radius: 4px 0 0 4px;
		  }
		`],
      template: `
      <h2>My Heros</h2>
      <ul class="heroes" *ngIf="isLogin">
      	<li *ngFor="let hero of heroes"
      	[class.selected]="hero === selectedHero"
      	(click)="onSelect(hero)">
      		<span class="badge">{{ hero.id }}</span> {{hero.name}}
      	</li>
      </ul>      
      <div *ngIf="selectedHero">
      	<h2>{{selectedHero.name}} details!</h2>
		<div><label>id: </label>{{selectedHero.id}}</div>
		<div>
		    <label>name: </label>
		    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
		</div>
      </div>
<!--      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
      	<label>name: </label>
      	<input [(ngModel)]="hero.name" placeholder="name" >
      </div>   
-->   
		<hr />
 		<list [type]="type" [apiCall]="apiCall"></list>
      	<a routerLink="/list">List Heroes</a>
	   <router-outlet></router-outlet>
      `
})

export class AppComponent implements OnInit { 

	constructor(private apiService: ApiService) { }
 	title = 'Tour of Heroes';
 	type = "list-type";
 	apiCall = "api-call";
	heroes = HEROS;
	hero: Hero = {
		id: 1, 
		name: 'Windstorm2'
	};
	selectedHero: Hero;
	ready: Boolean;
	isLogin: Boolean;

	ngOnInit(): void {
		console.log("ng on init")
		let that = this
		console.log(this.heroes)
		for (let key in this.heroes[0])
			console.log(key)
		this.apiService.doLogin().then(val => that.isLogin = val);
 	};

	onSelect(hero: Hero): void {
		//console.log("Here", hero)
		this.selectedHero = hero
	};
}

