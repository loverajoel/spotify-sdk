"user strict";

class AlbumEntity {

    constructor(data = {}) {
        this._id = data.id || null;
        this._images = data.images || null;
        this._name = data.name || null;
        this._popularity = data.popularity || null;
        this._type = 'album';
        this._uri = data.uri || null;
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

    get popularity() {
        return this._popularity;
    }

    set popularity(data) {
        this._popularity = data;
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

}

export default AlbumEntity;