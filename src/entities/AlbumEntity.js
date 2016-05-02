'use strict';

/**
 * Properties and methods of the Album Entity
 *
 * @see https://developer.spotify.com/web-api/object-model/#album-object-full
 */
class AlbumEntity {

  /**
   * Constructor
   *
   * @param {Object} data Album object
   */
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

  /**
   * @param {Object} data Album object
   */
  set album_type(data) {
    this._album_type = data.album_type
  }

  /**
   * @return {String} Album type
   */
  get album_type() {
    return this._album_type;
  }

  /**
   * @param {Object} data Album object
   */
  set artists(data) {
    this._artists = data.artists
  }

  /**
   * @return {String} Album artists
   */
  get artists() {
    return this._artists;
  }

  /**
   * @param {Object} data Album object
   */
  set available_markets(data) {
    this._available_markets = data.available_markets
  }

  /**
   * @return {String} Album available_markets
   */
  get available_markets() {
    return this._available_markets;
  }

  /**
   * @param {Object} data Album object
   */
  set copyrights(data) {
    this._copyrights = data.copyrights
  }

  /**
   * @return {String} Album copyrights
   */
  get copyrights() {
    return this._copyrights;
  }

  /**
   * @param {Object} data Album object
   */
  set external_ids(data) {
    this._external_ids = data.external_ids
  }

  /**
   * @return {String} Album external_ids
   */
  get external_ids() {
    return this._external_ids;
  }

  /**
   * @param {Object} data Album object
   */
  set external_urls(data) {
    this._external_urls = data.external_urls
  }

  /**
   * @return {String} Album external_urls
   */
  get external_urls() {
    return this._external_urls;
  }

  /**
   * @param {Object} data Album object
   */
  set genres(data) {
    this._genres = data.genres
  }

  /**
   * @return {String} Album genres
   */
  get genres() {
    return this._genres;
  }

  /**
   * @param {Object} data Album object
   */
  set href(data) {
    this._href = data.href
  }

  /**
   * @return {String} Album href
   */
  get href() {
    return this._href;
  }

  /**
   * @param {Object} data Album object
   */
  set id(data) {
    this._id = data.id
  }

  /**
   * @return {String} Album id
   */
  get id() {
    return this._id;
  }

  /**
   * @param {Object} data Album object
   */
  set images(data) {
    this._images = data.images
  }

  /**
   * @return {String} Album images
   */
  get images() {
    return this._images;
  }

  /**
   * @param {Object} data Album object
   */
  set name(data) {
    this._name = data.name
  }

  /**
   * @return {String} Album name
   */
  get name() {
    return this._name;
  }

  /**
   * @param {Object} data Album object
   */
  set popularity(data) {
    this._popularity = data.popularity
  }

  /**
   * @return {String} Album popularity
   */
  get popularity() {
    return this._popularity;
  }

  /**
   * @param {Object} data Album object
   */
  set release_date(data) {
    this._release_date = data.release_date
  }

  /**
   * @return {String} Album release_date
   */
  get release_date() {
    return this._release_date;
  }

  /**
   * @param {Object} data Album object
   */
  set release_date_precision(data) {
    this._release_date_precision = data.release_date_precision
  }

  /**
   * @return {String} Album release_date_precision
   */
  get release_date_precision() {
    return this._release_date_precision;
  }

  /**
   * @param {Object} data Album object
   */
  set tracks(data) {
    this._tracks = data.tracks
  }

  /**
   * @return {String} Album tracks
   */
  get tracks() {
    return this._tracks;
  }

  /**
   * @param {Object} data Album object
   */
  set type(data) {
    this._type = data.type
  }

  /**
   * @return {String} Entity type
   */
  get type() {
    return this._type;
  }

  /**
   * @param {Object} data Album object
   */
  set uri(data) {
    this._uri = data.uri
  }

  /**
   * @return {String} Album uri
   */
  get uri() {
    return this._uri;
  }
}

/**
 * Exports the AlbumEntity class.
 */
export default AlbumEntity;
