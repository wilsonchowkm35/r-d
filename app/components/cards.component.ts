import { Component, Input, OnInit, ngOnChanges } from '@angular/core';

import { ListComponent } from './list.component';

@Component({
	selector: 'cards-list',
	template: `
 		<list [type]="type"></list>
	`
})

export class CardsComponent implements OnInit {
	type = 'cards'
}