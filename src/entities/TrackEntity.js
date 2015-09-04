'use strict';

class TrackEntity{

    constructor(data = {}) {
        this._id = data.id || null;
        this._album = data.album || null;
        this._artists = data.artists || null;
        this._name = data.name || null;
        this._type = 'track';
        this._uri = data.uri || null;
        this._duration_ms = data.duration_ms || null;
    }

    get id() {
        return this._id;
    }

    set id(data) {
        this._id = data;
    }

    get album() {
        return this._album;
    }

    set album(data) {
        this._album = data;
    }

    get artists() {
        return this._artists;
    }

    set artists(data) {
        this._artists = data;
    }

    get name() {
        return this._name;
    }

    set name(data) {
        this._name = data;
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

    get duration() {
        return this._duration_ms;
    }

    set duration(data) {
        this._duration_ms = data;
    }

}

export default TrackEntity;