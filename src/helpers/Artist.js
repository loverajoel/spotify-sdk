'use strict';

import ArtistEntity from '../entities/ArtistEntity';
import ArtistHandler from '../handlers/ArtistHandler';
import Factory from '../Factory';

/**
 * Add helpers methods to ArtistEntity
 */
class Artist extends ArtistEntity {

  /**
   * @param {Object} data Artist object
   */
  constructor(data, client) {
    super(data);
    this._client = client;
  }

  /**
   * Get a list of Albums of a Artist.
   *
   * @public
   * @return {Promise}
   */
  albums() {
    return new ArtistHandler(this._client).albums(this.id);
  }

  /**
   * Get an Artist top tracks
   *
   * @public
   * @param {Object} [query] Query parameters.
   * @return {Promise}
   */
  topTracks(query) {
    return new ArtistHandler(this._client).topTracks(this.id, query);
  }

  /**
   * Get related Artists of an Artist
   *
   * @public
   * @param {Object} [query] Query parameters.
   * @return {Promise}
   */
  relatedArtists(query) {
    return new ArtistHandler(this._client).relatedArtists(this.id, query);
  }

  /**
   * Follow an Artist
   *
   * @public
   * @param {Object} query Optional query parameters.
   * @return {Promise}
   */
  follow(query) {
    return new ArtistHandler(this._client).follow([this.id], query);
  }

  /**
   * Unfollow an Artist
   *
   * @public
   * @param {Object} query Optional query parameters.
   * @return {Promise}
   */
  unfollow(query) {
    return new ArtistHandler(this._client).unfollow([this.id], query);
  }

  /**
   * Verify if a user follow an Artist
   *
   * @public
   * @param {Array} [ids] User ids list.
   * @return {Promise}
   */
  contains(ids) {
    return new ArtistHandler(this._client).contains(this.id, ids);
  }
}

/**
 * Exports the Playlist class.
 */
export default Artist;
