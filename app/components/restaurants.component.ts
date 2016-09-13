import { Component, Input, OnInit, ngOnChanges } from '@angular/core';

import { ListComponent } from './list.component';

@Component({
	selector: 'restaurants-list',
	template: `
 		<list [type]="type"></list>
	`
})

export class RestaurantsComponent implements OnInit {
	type = 'restaurants'
}
