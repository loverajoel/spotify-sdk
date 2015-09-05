/*
 * AlbumEntity
 * Properties and methods of the Album Entity.
 *
 * API Doc: https://developer.spotify.com/web-api/object-model/#album-object-full
 */
'use strict';

class AlbumEntity {

    constructor(data = {}) {
        this._album_type = data.album_type;
        this._artists = data.artists;
        this._available_markets = data.available_markets;
        this._copyrights = data.copyrights;
        this._external_ids = data.external_ids;
        this._external_urls = data.external_urls;
        this._genres = data.genres;
        this._href = data.href;
        this._id = data.id;
        this._images = data.images;
        this._name = data.name;
        this._popularity = data.popularity;
        this._release_date = data.release_date;
        this._release_date_precision = data.release_date_precision;
        this._tracks = data.tracks;
        this._type = data.type;
        this._uri = data.uri;
    }
    
    set album_type(data) {
        this._album_type = data.album_type
    }

    get album_type() {
        return this._album_type;
    }
    
    set artists(data) {
        this._artists = data.artists
    }

    get artists() {
        return this._artists;
    }
    
    set available_markets(data) {
        this._available_markets = data.available_markets
    }

    get available_markets() {
        return this._available_markets;
    }
    
    set copyrights(data) {
        this._copyrights = data.copyrights
    }

    get copyrights() {
        return this._copyrights;
    }
    
    set external_ids(data) {
        this._external_ids = data.external_ids
    }

    get external_ids() {
        return this._external_ids;
    }
    
    set external_urls(data) {
        this._external_urls = data.external_urls
    }

    get external_urls() {
        return this._external_urls;
    }
    
    set genres(data) {
        this._genres = data.genres
    }

    get genres() {
        return this._genres;
    }
    
    set href(data) {
        this._href = data.href
    }

    get href() {
        return this._href;
    }
    
    set id(data) {
        this._id = data.id
    }

    get id() {
        return this._id;
    }
    
    set images(data) {
        this._images = data.images
    }

    get images() {
        return this._images;
    }
    
    set name(data) {
        this._name = data.name
    }

    get name() {
        return this._name;
    }
    
    set popularity(data) {
        this._popularity = data.popularity
    }

    get popularity() {
        return this._popularity;
    }
    
    set release_date(data) {
        this._release_date = data.release_date
    }

    get release_date() {
        return this._release_date;
    }
    
    set release_date_precision(data) {
        this._release_date_precision = data.release_date_precision
    }

    get release_date_precision() {
        return this._release_date_precision;
    }
    
    set tracks(data) {
        this._tracks = data.tracks
    }

    get tracks() {
        return this._tracks;
    }
    
    set type(data) {
        this._type = data.type
    }

    get type() {
        return this._type;
    }
    
    set uri(data) {
        this._uri = data.uri
    }

    get uri() {
        return this._uri;
    }

}

export default AlbumEntity;