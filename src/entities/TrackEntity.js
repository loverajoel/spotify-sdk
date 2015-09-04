/*
 * TrackEntity
 * Properties and methods of the Track Entity.
 *
 * API Doc: https://developer.spotify.com/web-api/object-model/#track-object-full
 */
'use strict';

class TrackEntity{

    constructor(data = {}) {
        this._album = data.album;
        this._artists = data.artists;
        this._available_markets = data.available_markets;
        this._disc_number = data.disc_number;
        this._duration_ms = data.duration_ms;
        this._explicit = data.explicit;
        this._external_ids = data.external_ids;
        this._external_urls = data.external_urls;
        this._href = data.href;
        this._id = data.id;
        // this._is_playable = data.is_playable; @relinking
        // this._linked_from = data.linked_from; @relinking
        this._name = data.name;
        this._popularity = data.popularity;
        this._preview_url = data.preview_url;
        this._track_number = data.track_number;
        this._type = 'track';
        this._uri = data.uri;        
    }

    set album(data) {
        this._album = data;
    }

    get album() {
        return this._album;
    }

    set artists(data) {
        this._artists = data;
    }

    get artists() {
        return this._artists;
    }

    set available_markets(data) {
        this._available_markets = data;
    }

    get available_markets() {
        return this._available_markets;
    }

    set disc_number(data) {
        this._disc_number = data;
    }

    get disc_number() {
        return this._disc_number;
    }

    set duration_ms(data) {
        this._duration_ms = data;
    }

    get duration_ms() {
        return this._duration_ms;
    }

    set explicit(data) {
        this._explicit = data;
    }

    get explicit() {
        return this._explicit;
    }

    set external_ids(data) {
        this._external_ids = data;
    }

    get external_ids() {
        return this._external_ids;
    }

    set external_urls(data) {
        this._external_urls = data;
    }

    get external_urls() {
        return this._external_urls;
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

    set is_playable(data) {
        this._is_playable = data;
    }

    get is_playable() {
        return this._is_playable;
    }

    set linked_from(data) {
        this._linked_from = data;
    }

    get linked_from() {
        return this._linked_from;
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

    set preview_url(data) {
        this._preview_url = data;
    }

    get preview_url() {
        return this._preview_url;
    }

    set track_number(data) {
        this._track_number = data;
    }

    get track_number() {
        return this._track_number;
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

export default TrackEntity;