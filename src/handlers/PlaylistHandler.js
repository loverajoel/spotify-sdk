'use strict';

import Playlist from '../helpers/Playlist';

/**
 * Methods for retrieving information about playlists and for managing playlists.
 *
 * @see https://developer.spotify.com/web-api/playlist-endpoints/
 */
class PlaylistHandler {

  constructor(client) {
    this._client = client;
  }

  /**
   * Get a collection of artists that match a keyword string.
   *
   * @see https://developer.spotify.com/web-api/search-item/
   *
   * @public
   * @param {String} name Name of the playlist.
   * @param {Object} [query] Query parameters.
   * @return {Promise} playlistCollection
   */
  search(name, query) {
    return this._client.request(`/search?type=playlist&q=${encodeURIComponent(name)}`, 'GET', query);
  }

  /**
   * Get a list of Spotify featured playlists.
   * @see https://developer.spotify.com/web-api/get-list-featured-playlists/
   *
   * @public
   * @required {OAuth}
   * @param {Object} [query] Query parameters.
   * @return {Promise} playlistCollection
   */
  featuredPlaylists(query) {
    return this._client.request(`/browse/featured-playlists`, 'GET', query);
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   * @see https://developer.spotify.com/web-api/get-categorys-playlists/
   *
   * @public
   * @required {OAuth}
   * @param {int} id Category id
   * @param {Object} [query] Query parameters.
   * @return {Promise} playlistCollection
   */
  categoriesPlaylists(id, query) {
    return this._client.request(`/browse/categories/${id}/playlists`, 'GET', query);
  }

  /**
   * Add one or more tracks to a user’s playlist.
   * @see https://developer.spotify.com/web-api/add-tracks-to-playlist/
   *
   * @public
   * @required {OAuth}
   * @param {array} tracks List of uri tracks
   * @param {String} userId User id
   * @param {String} playlistId Playlist id
   * @param {Object} [query] Query parameters.
   * @return {Promise} JSON response
   */
  addTracks(tracks, userId, playlistId, query) {
    console.log('addTracks URIS', tracks)
    return this._client
      .request(
        `/users/${userId}/playlists/${playlistId}/tracks`,
        'POST',
        {uris: tracks}
      );
  }

  /**
   * Remove one or more tracks from a user’s playlist.
   * @see https://developer.spotify.com/web-api/remove-tracks-playlist/
   *
   * @public
   * @required {OAuth}
   * @param {array} tracks List of uri tracks
   * @param {String} userId User id
   * @param {String} playlistId Playlist id
   * @param {Object} [query] Query parameters.
   * @return {Promise} JSON response
   */
  removeTracks(tracks, userId, playlistId, query) {
    return this._client
      .request(
        `/users/${userId}/playlists/${playlistId}/tracks`,
        'DELETE',
        {uris: tracks}
      );
  }

  /**
   * Add a user as a follower of a playlist.
   * @see https://developer.spotify.com/web-api/follow-playlist/
   *
   * @public
   * @required {OAuth}
   * @param {String} userId User id
   * @param {String} playlistId Playlist id
   * @param {Object} [query] Query parameters.
   * @return {Promise} JSON response
   */
  follow(userId, playlistId, query) {
    return this._client
      .request(
        `/users/${userId}/playlists/${playlistId}/followers`,
        'PUT'
      );
  }

  /**
   * Remove a user as a follower of a playlist.
   * @see https://developer.spotify.com/web-api/unfollow-playlist/
   *
   * @public
   * @required {OAuth}
   * @param {String} userId User id
   * @param {String} playlistId Playlist id
   * @param {Object} [query] Query parameters.
   * @return {Promise} JSON response
   */
  unfollow(userId, playlistId, query) {
    return this._client
      .request(
        `/users/${userId}/playlists/${playlistId}/followers`,
        'DELETE'
      );
  }

  /**
   * Check to see if one or more Spotify users are following a specified playlist.
   * @see https://developer.spotify.com/web-api/check-user-following-playlist/
   *
   * @public
   * @required {OAuth}
   * @param {Array} ids User id list
   * @param {String} userId User id
   * @param {String} playlistId Playlist id
   * @return {Promise} JSON response
   */
  contains(userId, playlistId, ids) {
    return this._client.request(
      `/users/${userId}/playlists/${playlistId}/followers/contains`,
      'GET',
      {ids: ids}
    );
  }

  /**
   * Create a playlist for a Spotify user.
   * @see https://developer.spotify.com/web-api/create-playlist/
   *
   * @public
   * @required {OAuth}
   * @param {String} userId User id
   * @param {String} name Name of the future playlist
   * @param {Bool} is_public public or private
   * @return {Promise} JSON response
   */
  create(userId, name, is_public) {
    return this._client
      .request(
        `/users/${userId}/playlists`,
        'POST',
        {name: name, public: is_public}
     );
  }

  /**
   * Change a playlist’s name and public/private state.
   * @see https://developer.spotify.com/web-api/change-playlist-details/
   *
   * @public
   * @required {OAuth}
   * @param {String} userId User id
   * @param {String} playlistId Playlist id
   * @param {String} name Name of the future playlist
   * @param {Bool} is_public public or private
   * @return {Promise} JSON response
   */
  edit(userId, playlistId, name, is_public) {
    return this._client
      .request(
        `/users/${userId}/playlists/${playlistId}`,
        'PUT',
        {name: name, public: is_public}
      );
  }

  /**
   * Update a playlist for a Spotify user.
   * @see https://developer.spotify.com/web-api/create-playlist/
   *
   * @public
   * @required {OAuth}
   */
  update(userId, playlistId, uris) {
    return this._client
      .request(
        `/users/${userId}/playlists/${playlistId}`,
        'POST',
        {uris: uris}
     );
  }

  /**
   * Convert a valid object to a Playlist entity
   *
   * @public
   * @param {Object} item Object to convert in entity
   * @return {Object}
   */
  convert(item, Client) {
    return new Playlist(item, Client);
  }

}

/**
 * Exports the PlaylistHandler class.
 */
export default PlaylistHandler;
