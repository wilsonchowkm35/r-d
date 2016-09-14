import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { ListComponent } from './list.component';

@Component({
	selector: 'restaurants-list',
	template: `
 		<list [type]="type"></list>
	`
})

export class RestaurantsComponent implements OnInit {
	type = 'restaurants'

    ngOnInit(): void {
    }
}
