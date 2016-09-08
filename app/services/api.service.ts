import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

	doLogin(): Promise<boolean> {
		return Promise.resolve(true);
	};

	/**
	get raw collections list 	
	*/
	getCollections(collection: string, query: any, page: integer, pagesize: integer): Promise<any> {
		let res = []
		return Promise.resolve(res)
	}

	getCards(): Promise<any> {
		let cards = []
		return Promise.resolve(cards)
	}

	getBanks(): Promise<any> {
		let banks = []
		return Promise.resolve(banks)
	}


}
