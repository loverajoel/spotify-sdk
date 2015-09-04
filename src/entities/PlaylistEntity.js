/*
 * PlaylistEntity
 * Properties and methods of the Playlist Entity.
 *
 * API Doc: https://developer.spotify.com/web-api/object-model/#playlist-object-full
 */
'use strict';

class PlaylistEntity {

    constructor(data = {}) {
        this._collaborative = data.collaborative;
        this._description = data.description;
        this._external_urls = data.external_urls;
        this._followers = data.followers;
        this._href = data.href;
        this._id = data.id;
        this._images = data.images;
        this._name = data.name;
        this._owner = data.owner;
        this._public = data.public;
        this._snapshot_id = data.snapshot_id;
        this._tracks = data.tracks;
        this._type = data.type;
        this._uri = data.uri;
    }

    set collaborative(data) {
        this._collaborative = data;
    }

    get collaborative() {
        return this._collaborative;
    }

    set description(data) {
        this._description = data;
    }

    get description() {
        return this._description;
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

    set owner(data) {
        this._owner = data;
    }

    get owner() {
        return this._owner;
    }

    set public(data) {
        this._public = data;
    }

    get public() {
        return this._public;
    }

    set snapshot_id(data) {
        this._snapshot_id = data;
    }

    get snapshot_id() {
        return this._snapshot_id;
    }

    set tracks(data) {
        this._tracks = data;
    }

    get tracks() {
        return this._tracks;
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

export default PlaylistEntity;