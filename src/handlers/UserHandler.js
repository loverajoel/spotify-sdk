"use strict";

// Entities
import UserEntity from '../entities/UserEntity';
// Handlers
import PlaylistHandler from './PlaylistHandler';

class UserHandler {

    constructor(client) {
        this._client = client;
    }

    get() {
        return this._client.request(`/users/${this.id}`);
    }

    me() {
        return this._client.magic(this._client.request(`/me`), UserEntity, this);
    }

    playlists(user) {
    	return new PlaylistHandler(this._client).userPlaylists(user);
    }

}

export default UserHandler;