import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {
	private apiUrl = 'http://52.197.203.179:3000/api/';

	constructor(private http: Http) { }

	doLogin(): Promise<boolean> {
		return Promise.resolve(true);
	};

	/**
	get raw collections list 	
	*/
	getCollections(collection: string, query: any, page: number, pagesize: number): Promise<any> {
		let res = [], q = [], querystring = '';
		if (typeof query !== "undefined")
			q.push('q='+query);
		if (typeof page !== "undefined")
			q.push('page='+page);
		if (typeof query !== "undefined")
			q.push('pagesize='+pagesize);

		if (q.length > 0)
			querystring = '?'+q.join('&')

		console.log(this.apiUrl+'list/'+collection+'?'+querystring)

		return this.http.get(this.apiUrl+'list/'+collection+querystring)
						.toPromise()
						.then(response => response.json().data as any[])
						.catch(this.errorHandler);
//		return Promise.resolve(res)
	}

	getCards(): Promise<any> {
		let cards = []
		return Promise.resolve(cards)
	}

	getBanks(): Promise<any> {
		let banks = []
		return Promise.resolve(banks)
	}

	errorHandler(e): any {
		return {
			'error': e
		}
	}
}
