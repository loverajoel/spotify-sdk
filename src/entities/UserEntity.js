'use strict';

/**
 * Properties and methods of the User Entity
 *
 * @see https://developer.spotify.com/web-api/object-model/#user-object-private
 */
class UserEntity {

  /**
   * Constructor
   *
   * @param {Object} data User object
   */
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

  /**
   * @return {String} User birthdate
   */
  get birthdate() {
    return this._birthdate;
  }

  /**
   * @param {Object} data User object
   */
  set birthdate(data) {
    this._birthdate = data;
  }

  /**
   * @return {String} User country
   */
  get country() {
    return this._country;
  }

  /**
   * @param {Object} data User object
   */
  set country(data) {
    this._country = data;
  }

  /**
   * @return {String} User display_email
   */
  get display_email() {
    return this._display_email;
  }

  /**
   * @param {Object} data User object
   */
  set display_email(data) {
    this._display_email = data;
  }

  /**
   * @return {String} User name
   */
  get name() {
    return this._name;
  }

  /**
   * @param {Object} data User object
   */
  set name(data) {
    this._name = data;
  }

  /**
   * @return {String} User external_urls
   */
  get external_urls() {
    return this._external_urls;
  }

  /**
   * @param {Object} data User object
   */
  set external_urls(data) {
    this._external_urls = data;
  }

  /**
   * @return {String} User followers
   */
  get followers() {
    return this._followers;
  }

  /**
   * @param {Object} data User object
   */
  set followers(data) {
    this._followers = data;
  }

  /**
   * @return {String} User href
   */
  get href() {
    return this._href;
  }

  /**
   * @param {Object} data User object
   */
  set href(data) {
    this._href = data;
  }

  /**
   * @return {String} User images
   */
  get images() {
    return this._images;
  }

  /**
   * @param {Object} data User object
   */
  set images(data) {
    this._images = data;
  }

  /**
   * @return {String} User product
   */
  get product() {
    return this._product;
  }

  /**
   * @param {Object} data User object
   */
  set product(data) {
    this._product = data;
  }

  /**
   * @return {String} Entity type
   */
  get type() {
    return this._type;
  }

  /**
   * @return {String} User uri
   */
  get uri() {
    return this._uri;
  }

  /**
   * @param {Object} data User object
   */
  set uri(data) {
    this._uri = data;
  }

  /**
   * @return {User} Track id
   */
  get id() {
    return this._id;
  }

  /**
   * @param {Object} data User object
   */
  set id(data) {
    this._id = data;
  }
}

/**
 * Exports the UserEntity class.
 */
export default UserEntity;
