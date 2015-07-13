"user strict";

import xhttp from 'xhttp';
import Collection from '../handlers/Collection';

class Client {
	
	constructor(token = null) {
		this._token = token;
	}

	set token(data) {
		this._token = data;
	}

	_magic(data, entity) {
		var _self = this;
		return new Promise((resolve, reject) => {
			data.then((data) => {
				let collection = new Collection();
				collection.type = entity.type;
				data[Object.keys(data)[0]].items.map((item) => {
					collection.push(new entity.__proto__.constructor(item, _self));
				});
				collection.extras = data[Object.keys(data)[0]];
				delete collection.extras.items;
				resolve(collection);
			});
		});
	}

	_isEntity(entity) {
		return ['artist', 'album'].indexOf(entity.type);
	}

	_searchByEntity(entity) {
		if (entity.id) {
			return entity.get();
		} else if (entity.name) {
			return this._magic(this.request(`/search?q=${entity.name}&type=${entity.type}`), entity)
		} else {
			return 'Entity don\'t have info';
		}
	}

	search(data) {
		if (this._isEntity(data) > -1) {
			data.client(this);
			return this._searchByEntity(data);
		} else {
			return this.request(`/search?q=${data}`)
		}
	}

	request(url) {
		var headers = { 'Accept': 'application/json'};
		if (this._token) {
			headers.Authorization = `Bearer ${this._token}`;
		}

		return xhttp({
            url: `https://api.spotify.com/v1${url}`,
            method: 'GET',
            headers
        });
    }
}

export default Client;