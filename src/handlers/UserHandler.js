'use strict';

import User from '../helpers/User';
import Client from '../Client';

/**
 * Methods for retrieving information about one or more user/s from the Spotify catalog.
 *
 * @see https://developer.spotify.com/web-api/user-profile-endpoints/
 */
class UserHandler {

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
    return Client.instance.request(`/me`);
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
    return Client.instance.request(`/users/${id}`);
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
      return Client.instance.request(`/users/${id}/playlists/${playlistId}`, 'GET', query);
    } else {
      return Client.instance.request(`/users/${id}/playlists`, 'GET', query);
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
      return Client.instance.request(
        `/me/albums/contains`,
        'GET',
        {ids: ids}
      );
    } else if (type === 'track') {
      return Client.instance.request(
        `/me/tracks/contains`,
        'GET',
        {ids: ids}
      );
    } else {
      return Client.instance.request(
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
    return Client.instance.request(`/me/top/${type}`, 'GET', query);
  }

  /**
   * Get the current user’s saved tracks.
   * @see https://developer.spotify.com/web-api/get-users-saved-tracks/
   *
   * @public
   * @required {OAuth}
   * @return {Promise} Tracks saved
   */
  tracks() {
    return Client.instance.request(`/me/tracks`);
  }

  /**
   * Get the current user’s saved albums.
   * @see https://developer.spotify.com/web-api/get-users-saved-albums/
   *
   * @public
   * @required {OAuth}
   * @return {Promise} Albums saved
   */
  albums() {
    return Client.instance.request(`/me/albums`);
  }

  /**
   * Convert a valid object to a User entity
   *
   * @public
   * @param {object} item Object to convert in entity
   * @return {Object}
   */
  convert(item) {
    return new User(item);
  }
}

/**
 * Exports the UserHandler class.
 */
export default UserHandler;
