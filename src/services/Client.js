"user strict";

// import Fetch from 'node-fetch';
import xhttp from 'xhttp';

class Client {
	
	constructor() {
		this._token = '';
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
			data.client(this.request);
			return this._searchByEntity(data);
		} else {
			return false;
		}
	}

	request(url) {
		return xhttp({
            url: `https://api.spotify.com/v1${url}`,
            method: 'GET',
            headers: {
				'Accept': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
        });
    }
}

export default Client;