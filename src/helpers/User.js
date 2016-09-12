'use strict';

import UserEntity from '../entities/UserEntity';
import UserHandler from '../handlers/UserHandler';
import Factory from '../Factory';

/**
 * Add helpers methods to UserEntity
 */
class User extends UserEntity {

  /**
   * @param {Object} data User object
   */
  constructor(data, client) {
    super(data);
    this._client = client;
  }

  /**
   * Get user Playlists
   *
   * @public
   * @param {String} id Playlist id.
   * @return {Promise}
   */
  playlists(id) {
  	return new UserHandler(this._client).playlists(this.id, id);
  }

  /**
   * Check if a user follow an album, artist or user
   *
   * @public
   * @param {String} type artist, album or user
   * @param {Array} ids User id list
   * @return {Promise} JSON response
   */
  contains(type, ids) {
    return new UserHandler(this._client).contains(type, ids);
  }

  /**
   * Get a User’s Top Artists and Tracks
   *
   * @public
   * @required {OAuth} user-top-read
   * @param {String} type artists or tracks
   * @param {Object} query limit, offset or time_range(long_term, medium_term, short_term)
   * @return {Promise} JSON response
   */
  top(type, query) {
    return new UserHandler(this._client).top(type, query);
  }
}

/**
 * Exports the User class.
 */
export default User;
