import { Component, Input } from '@angular/core';

import { List } from '../models/list';
import { Listitem } from '../models/listitem';

@Component({
	selector: 'list',      
	template: `
	<div>
		<h2>{{ title }} {{ type }} {{ apiCall }}</h2>
		<ul class="list-{{list.id}}>" *ngIf="list">
			<li class="ui item" *ngFor="let item of list.data"
			[class.selected]="item === selectedItem"
 	     	(click)="onSelect(item)"
			>
				<div *ngFor="let f of list.fields">
					{{ item[f] }}
				</div>
			</li>
		</ul>	     	
	</div>
  	`
})

export class ListComponent { 
	@Input()
	type: string;

	@Input()
	apiCall: string;

	title = 'List';

	fields: any[];

	list: List;

	selectedItem: Listitem;

	onSelect(item: Listitem): void {
		this.selectedItem = item
	}

	ngOnInit(): void {
		console.log("list init")

		// get list 
		let rList: any[] = [
			{ id: 11, name: 'Mr. Chow' },
			{ id: 12, name: 'Miss Chau'},
			{ id: 13, name: 'Cathering Fung'}
		]

		this.list = new List('test', 'name', rList)
	}

}

