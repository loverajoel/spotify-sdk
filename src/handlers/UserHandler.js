'use strict';

import User from '../helpers/User';

/**
 * Methods for retrieving information about one or more user/s from the Spotify catalog.
 *
 * @see https://developer.spotify.com/web-api/user-profile-endpoints/
 */
class UserHandler {

    constructor(client) {
      this._client = client;
    }

  /**
   * Get detailed profile information about the current user.
   *
   * @see https://developer.spotify.com/web-api/get-current-users-profile/
   *
   * @public
   * @required {OAuth}
   * @return {Promise} User
   */
  me() {
    return this._client.request(`/me`);
  }

  /**
   * Get public profile information about a Spotify user.
   *
   * @see https://developer.spotify.com/web-api/get-users-profile/
   *
   * @public
   * @param {String} id User id to retrive
   * @required {OAuth}
   * @return {Promise} User
   */
  get(id) {
    return this._client.request(`/users/${id}`);
  }

  /**
   * Get a list of the playlists owned or followed by a Spotify user.
   *
   * @see https://developer.spotify.com/web-api/get-list-users-playlists/
   *
   * @public
   * @param {String} id User User id
   * @param {String} [playlistId] id to retrive playlists
   * @param {Object} [query] Query parameters.
   * @required {OAuth}
   * @return {Promise} playlistCollection
   */
  playlists(id, playlistId, query) {
    if (playlistId) {
      return this._client.request(`/users/${id}/playlists/${playlistId}`, 'GET', query);
    } else {
      return this._client.request(`/users/${id}/playlists`, 'GET', query);
    }
  }

  /**
   * Check if a user follow an album, artist , track or user
   * @see https://developer.spotify.com/web-api/check-users-saved-albums/
   * @see https://developer.spotify.com/web-api/check-current-user-follows/
   *
   * @public
   * @required {OAuth} user-follow-read scope
   * @param {String} type artist, album or user
   * @param {Array} ids User id list
   * @return {Promise} JSON response
   */
  contains(type, ids) {
    if (type === 'album') {
      return this._client.request(
        `/me/albums/contains`,
        'GET',
        {ids: ids}
      );
    } else if (type === 'track') {
      return this._client.request(
        `/me/tracks/contains`,
        'GET',
        {ids: ids}
      );
    } else {
      return this._client.request(
        `/me/following/contains`,
        'GET',
        {ids: ids, type: type}
      );
    }
  }

  /**
   * Get the current user’s top artists or tracks based on calculated affinity.
   * @see https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/
   *
   * @public
   * @required {OAuth} user-top-read
   * @param {String} type artists or tracks
   * @param {Object} query limit, offset or time_range(long_term, medium_term, short_term)
   * @return {Promise} JSON response
   */
  top(type, query) {
    return this._client.request(`/me/top/${type}`, 'GET', query);
  }

  /**
   * Convert a valid object to a User entity
   *
   * @public
   * @param {object} item Object to convert in entity
   * @return {Object}
   */
  convert(item, client) {
    return new User(item, client);
  }
}

/**
 * Exports the UserHandler class.
 */
export default UserHandler;
