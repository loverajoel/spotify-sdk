'use strict';

import Artists from './Artists';

/**
 * Add helpers methods to ArtistEntity
 */
class Artist {

  /**
   * @param {Object} data Artist object
   */
  constructor(data) {
    return Object.assign(this, data);
  }

  /**
   * Get a list of Albums of a Artist.
   *
   * @public
   * @return {Promise}
   */
  albums() {
    return new Artists().albums(this.id);
  }

  /**
   * Get an Artist top tracks
   *
   * @public
   * @param {Object} [query] Query parameters.
   * @return {Promise}
   */
  topTracks(query) {
    return new Artists().topTracks(this.id, query);
  }

  /**
   * Get related Artists of an Artist
   *
   * @public
   * @param {Object} [query] Query parameters.
   * @return {Promise}
   */
  relatedArtists(query) {
    return new Artists().relatedArtists(this.id, query);
  }

  /**
   * Follow an Artist
   *
   * @public
   * @param {Object} query Optional query parameters.
   * @return {Promise}
   */
  follow(query) {
    return new Artists().follow([this.id], query);
  }

  /**
   * Unfollow an Artist
   *
   * @public
   * @param {Object} query Optional query parameters.
   * @return {Promise}
   */
  unfollow(query) {
    return new Artists().unfollow([this.id], query);
  }

  /**
   * Verify if a user follow an Artist
   *
   * @public
   * @param {Array} [ids] User ids list.
   * @return {Promise}
   */
  contains(ids) {
    return new Artists().contains(this.id, ids);
  }
}

/**
 * Exports the Playlist class.
 */
export default Artist;
