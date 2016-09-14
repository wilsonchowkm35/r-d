import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
	selector: 'detail',      
	template: `
	<div>
		<h2>{{ title }}</h2>
        
        <form class="ui form" *ngIf="record">
            <div class="field" *ngFor="let f of fields">
                <label>{{ f }} :</label>
                <input *ngIf="nfields[f] !== true" type="text" name="{{ f }}" value="{{ record[f] }}" placeholder="{{ f }}">
                <span *ngIf="nfields[f] === true">{{ record[f] }}</span>
            </div>
            <button class="ui button" type="button"
                (click)="onSubmit()"
            >Submit</button>
        </form>
	</div>
  	`
})

export class DetailComponent implements OnInit, OnChanges { 
	//@Input()
	//type: string;

    //@Input()
    //id: string;

    //@Input()
    mapping: any;

    // uneditable 
    nfields = {
        _id: true
    };

    record: any;

	fields: any[];

	title = 'Detail';

	constructor(private apiservice: ApiService, 
				private route: ActivatedRoute) {

		console.log("detail component: ", this.type)
	}

    onSubmit(): void {
    }

	ngOnInit(): void {

		this.route.params.forEach((params: Params) => {
			this.table = params['type'];
            this.id = params['id'];
		});

		let that = this
        this.apiservice.getRecord(this.table, this.id).then(function(data) {
            console.log(data)
            let record = data[0], fields = []
            if (record.code)
		        that.title = (record.code.toUpperCase() || '')+ ' Detail';
            that.record = record
            if (typeof that.record !== "undefined")
                for (let key in that.record)
                    fields.push(key); 
            that.fields = fields;
        })
	}

    ngOnChanges(): void {
        console.log("on changes") 
    }
	//ngOnChanges(changes: {[type: string]: SimpleChange}) {
	//	console.log("ngOnChanges")
	//}

}


