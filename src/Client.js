import Factory from './Factory';

let singleton = Symbol();
let singletonEnforcer = Symbol();

/**
 * Client is the responsible of comunicate with the API.
 */
class Client {

  /**
   * Constructor
   *
   * @param {Symbol} enforcer
   */
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

  /**
   * Get the current instance of Client
   *
   * @return {Object} instance
   */
  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Client(singletonEnforcer);
    }
    return this[singleton];
  }

  /**
   * Set settings
   *
   * @param {Object} settings Settings
   */
  set settings(settings) {
    this._token = settings.token;
    this._clientId = settings.clientId;
    this._secretId = settings.secretId;
    this._scopes = settings.scopes;
    this._redirect_uri = settings.redirect_uri;
  }

  /**
   * Set token
   *
   * @param {String} data Token
   */
  set token(data) {
    this._token = data;
  }

  /**
   * Get the current token
   *
   * @return {String} Current token
   */
  get token() {
    return this._token;
  }

  /**
   * This method fires a new window that allow login
   *
   * @param  {Function} callback
   * @return {Function|Promise}
   */
  login(callback) {
    let url_login = 'https://accounts.spotify.com/en/authorize?response_type=token&client_id=' +
      this._clientId + '&redirect_uri=' + encodeURIComponent(this._redirect_uri) +
      ( this._scopes ? '&scope=' + encodeURIComponent(this._scopes) : '');
    if (callback) {
      return callback(url_login);
    } else {
      return new Promise((resolve) => {
        resolve(url_login);
      });
    }
  }

  /**
   * @param  {String} url Endpoint
   * @param  {String} method Method GET, POST, PUT or DELETE
   * @param  {Object} body Object to send in the body
   * @return {Promise}
   */
  request(url, method, body) {
    return this.fetch(url, method, body).then(function (data) {
      return Factory(data);
    }.bind(this));
  }

  /**
   * Function that encode objects
   *
   * @param  {Object} obj Object to encode
   * @return {String} A encode object
   */
  toQueryString(obj) {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  /**
   * @param  {String} endpoint Endpoint
   * @param  {String} method Method GET, POST, PUT or DELETE (default GET)
   * @param  {Object} body Object to send in the body
   * @return {Promise}
   */
  fetch(endpoint, method, body) {
    let _headers = {'Accept': 'application/json'};
    let _url;
    let _body;

    method = method || 'GET';

    if (this._token) {
      _headers.Authorization = `Bearer ${this._token}`;
    }

    if (endpoint.indexOf('https') > -1) {
      _url = endpoint;
    } else {
      _url = `https://api.spotify.com/v1${endpoint}`;
    }

    if (method === 'GET') {
      if (body) {
        let separator = _url.indexOf('?') !== -1 ? "&" : "?";
        _url = _url + separator + this.toQueryString(body);
      }
    } else {
      _body = JSON.stringify(body);
    }

    let checkStatus = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    };

    let parseJSON = (response) => {
      if (response.statusText === 'No Content') {
        return {type: 'undefineds'};
      }
      return response.json();
    };

    return fetch(_url, {
      method : method,
      headers: _headers,
      body   : _body
    }).then(checkStatus)
      .then(parseJSON)
  };
}

/**
 * Exports the Client class.
 */
export default Client;
