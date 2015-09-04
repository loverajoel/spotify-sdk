'use strict';

class PlaylistEntity {

    constructor(data = {}) {
        this._id = data.id || null;
        this._collaborative = data.collaborative || null;
        this._followers = data.followers || null;
        this._images = data.images || null;
        this._name = data.name || null;
        this._public = data.public || null;
        this._owner = data.owner || null;
        this._type = 'playlist';
        this._uri = data.uri || null;
    }

    get collaborative() {
        return this._collaborative;
    }

    set collaborative(data) {
        this._collaborative = data;
    }

    get followers() {
        return this._followers;
    }

    set followers(data) {
        this._followers = data;
    }

    get images() {
        return this._images;
    }

    set images(data) {
        this._images = data;
    }

    get name() {
        return this._name;
    }

    set name(data) {
        this._name = data;
    }

    get public() {
        return this._public;
    }

    set public(data) {
        this._public = data;
    }

    get type() {
        return this._type;
    }

    get uri() {
        return this._uri;
    }

    set uri(data) {
        this._uri = data;
    }

    get id() {
        return this._id;
    }

    set id(data) {
        this._id = data;
    }

    get owner() {
        return this._owner;
    }

    set owner(data) {
        this._owner = data;
    }

    /*
     * @public
     */
    addTracks(tracks) {
        return this._handler.addTracks(this, tracks);
    }

}

export default PlaylistEntity;