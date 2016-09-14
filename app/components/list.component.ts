import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router }              from '@angular/router';


import { ApiService } from '../services/api.service';

import { List } from '../models/list';
import { Listitem } from '../models/listitem';

@Component({
	selector: 'list',      
	template: `
	<div>
		<h2>{{ title }}</h2>

		<table class="ui blue table" *ngIf="list">
		  <thead>
		    <tr>
		    <th *ngFor="let f of list.fields">{{ f }}</th>
		  </tr></thead><tbody>		    
		    <tr *ngFor="let item of list.data"
			[class.selected]="item === selectedItem"
 	     	(click)="onSelect(item)"
		    >
		      	<td *ngFor="let f of list.fields">
					{{ item[f] }}
				</td>
		    </tr>
		  </tbody>
		</table>
<!--
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
-->
	</div>
  	`
})

export class ListComponent implements OnInit, OnChanges { 
	@Input()
	type: string;

	table: string;

	fields: any[];

	list: List;

	selectedItem: Listitem;

	title = '';

	constructor(private apiservice: ApiService, 
				private route: ActivatedRoute,
                private router: Router) {

		console.log("list component: ", this.type)
	}

	onSelect(item: Listitem): void {
		this.selectedItem = item
        this.router.navigate(['/detail', this.type, item._id]);
	}

	ngOnInit(): void {

		console.log("ListComponent onInit")
/**
		this.route.params.forEach((params: Params) => {
			this.table = params['type'];
			this.title = params['type'].toUpperCase() + ' LIST';
		});
*/
		this.table = this.type
		this.title = this.type.toUpperCase() + ' LIST';

		let that = this
		this.apiservice.getCollections(this.table, '', 1, 20).then(function(data) {
			console.log("cards: ", data)
			that.list = new List('test', 'name', data)
		})
	}

    ngOnChanges(): void {
        console.log("on changes") 
    }
	//ngOnChanges(changes: {[type: string]: SimpleChange}) {

	//	console.log("ngOnChanges")
	//}

}

