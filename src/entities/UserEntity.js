/*
 * UserEntity
 * Properties and methods of the User Entity.
 *
 * API Doc: https://developer.spotify.com/web-api/object-model/#user-object-private
 */
'use strict';

class UserEntity {

    constructor(data = {}) {
        this._id = data.id;
        this._birthdate = data.birthdate;
        this._country = data.country;
        this._display_name = data.display_name;
        this._email = data.email;
        this._external_urls = data.external_urls;
        this._followers = data.followers;
        this._href = data.href;
        this._images = data.images;
        this._product = data.product;
        this._type = 'user';
        this._uri = data.uri;
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