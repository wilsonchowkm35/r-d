import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// routing
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list.component';

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule,
		routing
	],
	declarations: [ 
		AppComponent,
		ListComponent
	],
	bootstrap:    [ AppComponent ]
})

export class AppModule { }
