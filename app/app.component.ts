import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { ApiService } from './services/api.service';

import { Hero } from './models/Hero';

const HEROS: Hero[] = [
	{ id: 11, name: 'Mr. Chow' },
	{ id: 12, name: 'Miss Chau'},
	{ id: 13, name: 'Cathering Fung'}
]

@Component({
	selector: 'my-app',
	providers: [ApiService],
	styles: [`
		.wrapper { margin: 0 auto; padding: 20px; }
	`],
	template: `
		<div class="wrapper">
		<h1>{{ site.title }}</h1>
		<!-- main navigation -->
		<div class="ui secondary pointing menu blue">
	  		<a class="item" *ngFor="let nav of site.main_nav" routerLink="{{ nav.url }}" routerLinkActive="active">{{ nav.name }}</a>
			<div class="right menu">
				<a class="ui item">Logout</a>
	  		</div>
		</div>
		<div class="ui segment">
	  		<router-outlet></router-outlet>
		</div>
<!--
      <div class="nav" *ngFor="let nav of site.main_nav">
      	<a routerLink="{{ nav.url }}" class="nav-item" routerLinkActive="active">{{ nav.name }}</a>
      </div>
      <ul class="nav" >
      	<li class="menu" *ngFor="let nav of site.main_nav"
      	routerLinkActive="active"
      	(click)="goNav(nav)"
      	>
      	{{ nav.name }}
      	</li>
      </ul>
      -->		
		</div>		
      `
})

export class AppComponent implements OnInit { 

	constructor(private route: Router,
		private apiService: ApiService) { }
	site = {
		title: 'Credit Card Administration',
		main_nav: [
			/*{
				url: '#',
				name: 'Configuration',
				items: [
					{
						url: '/list/bank',
						name: 'Bank'
					}
				],
				status: false
			},*/
			{
				url: '/dashboard',
				name: 'Dashboard'
			},
			{
				url: '/list/cards',
				name: 'Cards'
			},
			{
				url: '/list/restaurants',
				name: 'Restaurants'
			},
			{
				url: '/list/reward-card',
				name: 'Reward Cards'
			}
		]
	}
 	title = 'Tour of Heroes';
 	type = "list-type";
 	apiCall = "api-call";
	heroes = HEROS;
	hero: Hero = {
		id: 1, 
		name: 'Windstorm2'
	};
	currentNav: any;
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

 	goNav(nav: any): void {
 		this.currentNav = nav;
 		let link = [nav.url];
 		 		console.log("goNav", link)

 		this.route.navigate(link);
 	}

	onSelect(hero: Hero): void {
		//console.log("Here", hero)
		this.selectedHero = hero
	};
}

