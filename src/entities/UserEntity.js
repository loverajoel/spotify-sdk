'use strict';

class UserEntity {

    constructor(data = {}) {
        this._id = data.id || null;
        this._birthdate = data.birthdate || null;
        this._country = data.country || null;
        this._display_name = data.display_name || null;
        this._email = data.email || null;
        this._external_urls = data.external_urls || null;
        this._followers = data.followers || null;
        this._href = data.href || null;
        this._images = data.images || null;
        this._product = data.product || null;
        this._type = 'user';
        this._uri = data.uri || null;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(data) {
        this._birthdate = data;
    }

    get country() {
        return this._country;
    }

    set country(data) {
        this._country = data;
    }

    get display_email() {
        return this._display_email;
    }

    set display_email(data) {
        this._display_email = data;
    }

    get name() {
        return this._name;
    }

    set name(data) {
        this._name = data;
    }

    get external_urls() {
        return this._external_urls;
    }

    set external_urls(data) {
        this._external_urls = data;
    }

    get followers() {
        return this._followers;
    }

    set followers(data) {
        this._followers = data;
    }

    get href() {
        return this._href;
    }

    set href(data) {
        this._href = data;
    }

    get images() {
        return this._images;
    }

    set images(data) {
        this._images = data;
    }

    get product() {
        return this._product;
    }

    set product(data) {
        this._product = data;
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

export default UserEntity;