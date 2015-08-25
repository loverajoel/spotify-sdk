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

    magic(data, entity, handler, key) {
        var _self = this;
        return new Promise((resolve, reject) => {
            data.then((data) => {

                if(key) {
                    data = data[key];
                }

                if (data.items) {
                    let collection = new Collection();
                    data.items.map((item) => {
                        var newEntity = new entity(item, handler);
                        collection.push(newEntity);
                        // TODO: improve this, set every each type 0_0
                        collection.type = newEntity.type;
                    });
                    collection.extras = data.items;
                    delete collection.extras.items;
                    resolve(collection);
                } else {
                    var newEntity = new entity(data, handler);
                    resolve(newEntity);
                }
            });
        });
    }

    request(url, method, data) {
        var headers = { 'Accept': 'application/json'};
        if (this._token) {
            headers.Authorization = `Bearer ${this._token}`;
        }

        var method = method || 'GET';

        return xhttp({
            url: `https://api.spotify.com/v1${url}`,
            method: method,
            data: data,
            headers: headers
        });
    };
}

export default Client;