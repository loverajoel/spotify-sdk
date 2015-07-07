"user strict";

class Client {
	
	constructor() {
		this._token = '';
	}

	set token(data) {
		this._token = data;
	}

	search(data) {
		return 'search';
	}

	_searchByEntity(entity) {
		if (entity.type) {
			
		}
	}

	request() {
		// make a reuest
	}
}

export default Client;