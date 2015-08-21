"use strict";

import xhttp from 'xhttp';
import Collection from '../handlers/Collection';

class Client {
    
    constructor(settings = {}) {
        this._token = settings.token;
        this._clientId = settings.clientId;
        this._secretId = settings.secretId;
        this._scopes = settings.scopes;
        this._redirect_uri = settings.redirect_uri;
    }

    set token(data) {
        this._token = data;
    }

    get token() {
        return this._token;
    }
    
    login() {
        // TODO: review all of this method, mix ui with client :s
        var _self = this;
        return new Promise((resolve, reject) => {
            var url_login = 'https://accounts.spotify.com/en/authorize?response_type=token&client_id='+this._clientId+'&redirect_uri='+encodeURIComponent(this._redirect_uri)+ ( this._scopes ? '&scope=' + encodeURIComponent( this._scopes) : '');
            var login_window = window.open(url_login, "Spotify", "menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=350,height=150");
            login_window.onload = function() {
                // TODO: imporove this split
                var token = login_window.location.hash.split('&')[0].split('=')[1];
                _self._token = token;
                login_window.close();
                resolve(token);
            }
        });
    }

    /*
    * This method is in charge of convert responses to entities.
    */
    _magic(data, entity) {
        var _self = this;
        return new Promise((resolve, reject) => {
            data.then((data) => {
                let collection = new Collection();
                collection.type = entity.type;
                data[Object.keys(data)[0]].items.map((item) => {
                    let instance = Object.getPrototypeOf(entity);
                    collection.push(new instance.constructor(item, _self));
                });
                collection.extras = data[Object.keys(data)[0]];
                delete collection.extras.items;
                resolve(collection);
            });
        });
    }

    _isEntity(entity) {
        return ['artist', 'album', 'playlist'].indexOf(entity.type);
    }

    _searchByEntity(entity) {
        if (entity.id) {
            return entity.get();
        } else if (entity.name) {
            return this._magic(this.request(`/search?q=${entity.name}&type=${entity.type}`), entity);
        } else {
            // return throw new Error(`The Entity doesn't have data for search.`);
        }
    }

    search(data) {
        if (this._isEntity(data) > -1) {
            data.client(this);
            return this._searchByEntity(data);
        } else {
            return this.request(`/search?q=${data}`);
        }
    }

    request(url, method, more) {
        var headers = { 'Accept': 'application/json'};
        if (this._token) {
            headers.Authorization = `Bearer ${this._token}`;
        }

        var method = method || 'GET';

        return xhttp({
            url: `https://api.spotify.com/v1${url}`,
            method: method,
            data: {'uris': more},
            headers: headers
        });
    };
}

export default Client;