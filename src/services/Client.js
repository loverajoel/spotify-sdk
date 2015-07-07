"user strict";

import xhttp from 'xhttp';

class Client {
	
	constructor(token = null) {
		this._token = token;
	}

	set token(data) {
		this._token = data;
	}

	_isEntity(entity) {
		return ['artist', 'album'].indexOf(entity.type);
	}

	_searchByEntity(entity) {
		if (entity.id) {
			return entity.getArtist();
		} else if (entity.name) {
			return this.request(`/search?q=${entity.name}&type=${entity.type}`)
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