'use strict';

/**
 * Properties and methods of the Track Entity
 *
 * @see https://developer.spotify.com/web-api/object-model/#track-object-full
 */
class TrackEntity{

  /**
   * Constructor
   *
   * @param {Object} data Track object
   */
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

  /**
   * @param {Object} data Track object
   */
  set album(data) {
    this._album = data;
  }

  /**
   * @return {String} Track album
   */
  get album() {
    return this._album;
  }

  /**
   * @param {Object} data Track object
   */
  set artists(data) {
    this._artists = data;
  }

  /**
   * @return {String} Track artists
   */
  get artists() {
    return this._artists;
  }

  /**
   * @param {Object} data Track object
   */
  set available_markets(data) {
    this._available_markets = data;
  }

  /**
   * @return {String} Track available_markets
   */
  get available_markets() {
    return this._available_markets;
  }

  /**
   * @param {Object} data Track object
   */
  set disc_number(data) {
    this._disc_number = data;
  }

  /**
   * @return {String} Track disc_number
   */
  get disc_number() {
    return this._disc_number;
  }

  /**
   * @param {Object} data Track object
   */
  set duration_ms(data) {
    this._duration_ms = data;
  }

  /**
   * @return {String} Track duration_ms
   */
  get duration_ms() {
    return this._duration_ms;
  }

  /**
   * @param {Object} data Track object
   */
  set explicit(data) {
    this._explicit = data;
  }

  /**
   * @return {String} Track explicit
   */
  get explicit() {
    return this._explicit;
  }

  /**
   * @param {Object} data Track object
   */
  set external_ids(data) {
    this._external_ids = data;
  }

  /**
   * @return {String} Track external_ids
   */
  get external_ids() {
    return this._external_ids;
  }

  /**
   * @param {Object} data Track object
   */
  set external_urls(data) {
    this._external_urls = data;
  }

  /**
   * @return {String} Track external_urls
   */
  get external_urls() {
    return this._external_urls;
  }

  /**
   * @param {Object} data Track object
   */
  set href(data) {
    this._href = data;
  }

  /**
   * @return {String} Track href
   */
  get href() {
    return this._href;
  }

  /**
   * @param {Object} data Track object
   */
  set id(data) {
    this._id = data;
  }

  /**
   * @return {String} Track id
   */
  get id() {
    return this._id;
  }

  /**
   * @param {Object} data Track object
   */
  set is_playable(data) {
    this._is_playable = data;
  }

  /**
   * @return {String} Track is_playable
   */
  get is_playable() {
    return this._is_playable;
  }

  /**
   * @param {Object} data Track object
   */
  set linked_from(data) {
    this._linked_from = data;
  }

  /**
   * @return {String} Track linked_from
   */
  get linked_from() {
    return this._linked_from;
  }

  /**
   * @param {Object} data Track object
   */
  set name(data) {
    this._name = data;
  }

  /**
   * @return {String} Track name
   */
  get name() {
    return this._name;
  }

  /**
   * @param {Object} data Track object
   */
  set popularity(data) {
    this._popularity = data;
  }

  /**
   * @return {String} Track popularity
   */
  get popularity() {
    return this._popularity;
  }

  /**
   * @param {Object} data Track object
   */
  set preview_url(data) {
    this._preview_url = data;
  }

  /**
   * @return {String} Track preview_url
   */
  get preview_url() {
    return this._preview_url;
  }

  /**
   * @param {Object} data Track object
   */
  set track_number(data) {
    this._track_number = data;
  }

  /**
   * @return {String} Track track_number
   */
  get track_number() {
    return this._track_number;
  }

  /**
   * @param {Object} data Track object
   */
  set type(data) {
    this._type = data;
  }

  /**
   * @return {String} Track type
   */
  get type() {
    return this._type;
  }

  /**
   * @param {Object} data Track object
   */
  set uri(data) {
    this._uri = data;
  }

  /**
   * @return {String} Track uri
   */
  get uri() {
    return this._uri;
  }
}

/**
 * Exports the TrackEntity class.
 */
export default TrackEntity;
