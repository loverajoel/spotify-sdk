'use strict';

import Factory from '../factories/Factory';

var singleton = Symbol();
var singletonEnforcer = Symbol();

class Client {
    
    constructor(enforcer) {
        this._token = null;
        this._clientId = null;
        this._secretId = null;
        this._scopes = null;
        this._redirect_uri = null;
        
        if (enforcer != singletonEnforcer) {
            throw "Cannot construct singleton";   
        }
    }

    static get instance() {
        if(!this[singleton]) {
          this[singleton] = new Client(singletonEnforcer);
        }
        return this[singleton];
    }

    set settings(settings) {
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
        return new Promise((resolve, reject) => {
            var url_login = 'https://accounts.spotify.com/en/authorize?response_type=token&client_id='+this._clientId+'&redirect_uri='+encodeURIComponent(this._redirect_uri)+ ( this._scopes ? '&scope=' + encodeURIComponent( this._scopes) : '');
            resolve(url_login);
        });
    }

    request(url, method, body) {
        return this.fetch(url, method, body).then((data) => {
            return Factory(data);
        }.bind(this));
    }

    fetch(endpoint, method, body, format) {
        let headers = { 'Accept': 'application/json'};
        let url;

        if (this._token) {
            headers.Authorization = `Bearer ${this._token}`;
        }

        if (endpoint.indexOf('https') > -1) {
            url = endpoint;
        } else {
            url = `https://api.spotify.com/v1${endpoint}`;
        }

        return fetch(url, {
            method: method || 'GET',
            headers: headers,
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json();
        });
    };
}

export default Client;