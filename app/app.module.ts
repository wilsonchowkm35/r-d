import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

// routing
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list.component';

import { DashboardComponent } from './components/dashboard.component';
import { CardsComponent } from './components/cards.component';
import { RestaurantsComponent } from './components/restaurants.component';
import { RewardCardsComponent } from './components/rewardcards.component';

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule,
		HttpModule,
		//InMemoryWebApiModule.forRoot(InMemoryDataService),
		routing
	],
	declarations: [ 
		AppComponent,
		ListComponent,		
		DashboardComponent,
		CardsComponent,
		RestaurantsComponent,
		RewardCardsComponent
	],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }
