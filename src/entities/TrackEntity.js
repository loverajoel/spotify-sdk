"user strict";

class TrackEntity {

    constructor(data = {}) {
        this._id = data.id || null;
        this._album = data.album || null;
        this._artist = data.artist || null;
        this._name = data.name || null;
        this._type = 'track';
        this._uri = data.uri || null;
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

    get artist() {
        return this._artist;
    }

    set artist(data) {
        this._artist = data;
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

}

export default TrackEntity;