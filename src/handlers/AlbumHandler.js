'use strict';

import Album from '../helpers/Album';

/**
 * Methods for retrieving information about one or more albums from the Spotify catalog.
 *
 * @see https://developer.spotify.com/web-api/album-endpoints/
 */
class AlbumHandler {

  constructor(client) {
    this._client = client;
  }

  /**
   * Get a collection of albums that match a keyword string.
   *
   * @see https://developer.spotify.com/web-api/search-item/
   *
   * @public
   * @param {String} name Name of the album.
   * @param {Object} [query] Query parameters.
   * @returns {Promise} albumsCollection
   */
  search(name, query) {
    return this._client.request(`/search?type=album&q=${encodeURIComponent(name)}`, 'GET', query);
  }

  /**
   * Get a single/collection of album/s identified by its unique/list of Spotify ID.
   *
   * @see https://developer.spotify.com/web-api/get-album/
   *
   * @public
   * @param {String|Array} ids Album id/ids to retrive
   * @param {Object} [query] Query parameters.
   * @returns {Promise} Album|albumsCollection
   */
  get(ids, query) {
    if (Array.isArray(ids)) {
      return this._client.request(`/albums/?ids=${ids}`, 'GET', query);
    } else {
      return this._client.request(`/albums/${ids}`, 'GET', query);
    }
  }

  /**
   * Get a list of new album releases featured in Spotify.
   *
   * @see https://developer.spotify.com/web-api/get-list-new-releases/
   *
   * @public
   * @required {OAuth} user-library-read
   * @param {Object} [query] Query parameters.
   * @returns {Promise} albumsCollection
   */
  newReleases(query) {
    return this._client.request(`/browse/new-releases`, 'GET', query);
  }

  /**
   * Convert a valid object to a Album entity
   *
   * @public
   * @param {Object} item Object to convert in entity
   * @returns {Object} Album
   */
  convert(item, client) {
    return new Album(item, client);
  }

}

/**
 * Exports the AlbumHandler class.
 */
export default AlbumHandler;
