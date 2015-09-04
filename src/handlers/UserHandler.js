"use strict";

// Entities
import UserEntity from '../entities/UserEntity';
// Handlers
// import PlaylistHandler from './PlaylistHandler';
import Client from '../services/Client';

class UserHandler {

    constructor() {
    }

    get() {
        return Client.instance.request(`/users/${this.id}`);
    }

    me() {
        return Client.instance.get(this._client.request(`/me`), UserEntity, this);
    }

    playlists(user) {
    	return new PlaylistHandler(this._client).userPlaylists(user);
    }

}

export default UserHandler;