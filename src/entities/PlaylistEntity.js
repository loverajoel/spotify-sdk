'use strict';

/**
 * Properties and methods of the Playlist Entity
 *
 * @see https://developer.spotify.com/web-api/object-model/#playlist-object-full
 */
class PlaylistEntity {

  /**
   * Constructor
   *
   * @param {Object} data Playlist object
   */
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

  /**
   * @param {Object} data Playlist object
   */
  set collaborative(data) {
    this._collaborative = data;
  }

  /**
   * @return {String} Playlist collaborative
   */
  get collaborative() {
    return this._collaborative;
  }

  /**
   * @param {Object} data Playlist object
   */
  set description(data) {
    this._description = data;
  }

  /**
   * @return {String} Playlist description
   */
  get description() {
    return this._description;
  }

  /**
   * @param {Object} data Playlist object
   */
  set external_urls(data) {
    this._external_urls = data;
  }

  /**
   * @return {String} Playlist external_urls
   */
  get external_urls() {
    return this._external_urls;
  }

  /**
   * @param {Object} data Playlist object
   */
  set followers(data) {
    this._followers = data;
  }

  /**
   * @return {String} Playlist followers
   */
  get followers() {
    return this._followers;
  }

  /**
   * @param {Object} data Playlist object
   */
  set href(data) {
    this._href = data;
  }

  /**
   * @return {String} Playlist href
   */
  get href() {
    return this._href;
  }

  /**
   * @param {Object} data Playlist object
   */
  set id(data) {
    this._id = data;
  }

  /**
   * @return {Playlist} Album id
   */
  get id() {
    return this._id;
  }

  /**
   * @param {Object} data Playlist object
   */
  set images(data) {
    this._images = data;
  }

  /**
   * @return {String} Playlist images
   */
  get images() {
    return this._images;
  }

  /**
   * @param {Object} data Playlist object
   */
  set name(data) {
    this._name = data;
  }

  /**
   * @return {String} Playlist name
   */
  get name() {
    return this._name;
  }

  /**
   * @param {Object} data Playlist object
   */
  set owner(data) {
    this._owner = data;
  }

  /**
   * @return {String} Playlist owner
   */
  get owner() {
    return this._owner;
  }

  /**
   * @param {Object} data Playlist object
   */
  set public(data) {
    this._public = data;
  }

  /**
   * @return {String} Playlist public
   */
  get public() {
    return this._public;
  }

  /**
   * @param {Object} data Playlist object
   */
  set snapshot_id(data) {
    this._snapshot_id = data;
  }

  /**
   * @return {String} Playlist snapshot_id
   */
  get snapshot_id() {
    return this._snapshot_id;
  }

  /**
   * @param {Object} data Playlist object
   */
  set tracks(data) {
    this._tracks = data;
  }

  /**
   * @return {String} Playlist tracks
   */
  get tracks() {
    return this._tracks;
  }

  /**
   * @param {Object} data Playlist object
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
   * @param {Object} data Playlist object
   */
  set uri(data) {
    this._uri = data;
  }

  /**
   * @return {Playlist} Album uri
   */
  get uri() {
    return this._uri;
  }
}

/**
 * Exports the AlbumEntity class.
 */
export default PlaylistEntity;
