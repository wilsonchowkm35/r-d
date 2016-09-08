export class List {
    //id: string;
    //name: string;
    //data: any[];
    fields: any[];

	constructor(private id: String, private name: String, private data: any[]) { 
		//console.log("list constructor here", this.fields)
		this.fields = []
		//console.log("list constructor here", this.fields)
		if (typeof data !== "undefined" && data.length > 0)
			for (let key in data[0])
				this.fields.push(key);
		//console.log("constructor end", this.fields);
	}

}
