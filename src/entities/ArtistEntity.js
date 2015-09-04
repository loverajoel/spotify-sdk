/*
 * ArtistEntity
 * Properties and methods of the Artist Entity.
 *
 * API Doc: https://developer.spotify.com/web-api/object-model/#artist-object-full
 */
'use strict';

class ArtistEntity {

    constructor(data = {}) {
        this._external_urls = data.external_urls;
        this._followers = data.followers;
        this._genres = data.genres;
        this._href = data.href;
        this._id = data.id;
        this._images = data.images;
        this._name = data.name;
        this._popularity = data.popularity;
        this._type = data.type;
        this._uri = data.uri;
    }

    set external_urls(data) {
        this._external_urls = data;
    }

    get external_urls() {
        return this._external_urls;
    }

    set followers(data) {
        this._followers = data;
    }

    get followers() {
        return this._followers;
    }

    set genres(data) {
        this._genres = data;
    }

    get genres() {
        return this._genres;
    }

    set href(data) {
        this._href = data;
    }

    get href() {
        return this._href;
    }

    set id(data) {
        this._id = data;
    }

    get id() {
        return this._id;
    }

    set images(data) {
        this._images = data;
    }

    get images() {
        return this._images;
    }

    set name(data) {
        this._name = data;
    }

    get name() {
        return this._name;
    }

    set popularity(data) {
        this._popularity = data;
    }

    get popularity() {
        return this._popularity;
    }

    set type(data) {
        this._type = data;
    }

    get type() {
        return this._type;
    }

    set uri(data) {
        this._uri = data;
    }

    get uri() {
        return this._uri;
    }

}

export default ArtistEntity;