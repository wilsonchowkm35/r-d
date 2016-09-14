import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';
import { ListComponent } from './components/list.component';

import { DashboardComponent } from './components/dashboard.component';
import { CardsComponent } from './components/cards.component';
import { RewardCardsComponent } from './components/rewardcards.component';
import { RestaurantsComponent } from './components/restaurants.component';

import { DetailComponent } from './components/detail.component';

const appRoutes: Routes = [
  { 
	path: '',
	redirectTo: '/dashboard',
	pathMatch: 'full'
  },
  {
  	path: 'dashboard',
  	component: DashboardComponent
  },
  {
    path: 'list/cards',
    component: CardsComponent
  },
  {
    path: 'list/restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'list/reward-card',
    component: RewardCardsComponent
  }, 
  {
    path: 'detail/:type/:id',
    component: DetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
