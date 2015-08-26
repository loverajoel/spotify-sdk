"user strict";

import Collection from '../handlers/Collection';
import ArtistEntity from './ArtistEntity';
import AlbumEntity from './AlbumEntity';

class TrackEntity {

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
        return new AlbumEntity(this._album);
    }

    set album(data) {
        this._album = data;
    }

    get artists() {
        return new Collection(this._artists, ArtistEntity);
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
        let x = ~~( Number( this._duration_ms ) / 1000 );
        let seconds = x % 60;
        seconds = `${ seconds }`.length == 1? `0${ seconds }`: seconds;
        x = ~~( x / 60 );
        let minutes = x % 60;
        return `${ minutes }:${ seconds }`;
    }

    set duration(data) {
        this._duration_ms = data;
    }

}

export default TrackEntity;