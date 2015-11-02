'use strict';

/**
 * Properties and methods of the Artist Entity
 *
 * @see https://developer.spotify.com/web-api/object-model/#album-object-full
 */
class ArtistEntity {

    /**
     * Constructor
     * 
     * @param {Object} data Artist object
     */
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

    /**
     * @param {Object} data Artist object
     */
    set external_urls(data) {
        this._external_urls = data;
    }

    /**
     * @return {String} Artist external_urls
     */
    get external_urls() {
        return this._external_urls;
    }

    /**
     * @param {Object} data Artist object
     */
    set followers(data) {
        this._followers = data;
    }

    /**
     * @return {String} Artist followers
     */
    get followers() {
        return this._followers;
    }

    /**
     * @param {Object} data Artist object
     */
    set genres(data) {
        this._genres = data;
    }

    /**
     * @return {String} Artist genres
     */
    get genres() {
        return this._genres;
    }

    /**
     * @param {Object} data Artist object
     */
    set href(data) {
        this._href = data;
    }

    /**
     * @return {String} Artist href
     */
    get href() {
        return this._href;
    }

    /**
     * @param {Object} data Artist object
     */
    set id(data) {
        this._id = data;
    }

    /**
     * @return {String} Artist id
     */
    get id() {
        return this._id;
    }

    /**
     * @param {Object} data Artist object
     */
    set images(data) {
        this._images = data;
    }

    /**
     * @return {String} Artist images
     */
    get images() {
        return this._images;
    }

    /**
     * @param {Object} data Artist object
     */
    set name(data) {
        this._name = data;
    }

    /**
     * @return {String} Artist name
     */
    get name() {
        return this._name;
    }

    /**
     * @param {Object} data Artist object
     */
    set popularity(data) {
        this._popularity = data;
    }

    /**
     * @return {String} Artist popularity
     */
    get popularity() {
        return this._popularity;
    }

    /**
     * @param {Object} data Artist object
     */
    set type(data) {
        this._type = data;
    }

    /**
     * @return {String} Entity type
     */
    get type() {
        return this._type;
    }

    /**
     * @param {Object} data Artist object
     */
    set uri(data) {
        this._uri = data;
    }

    /**
     * @return {String} Artist uri
     */
    get uri() {
        return this._uri;
    }

}

/**
 * Exports the AlbumEntity class.
 */
export default ArtistEntity;
