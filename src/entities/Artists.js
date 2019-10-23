'use strict';

import Client from '../Client';

/**
 * Methods for retrieving information about one or more artists from the Spotify catalog.
 *
 * @see https://developer.spotify.com/web-api/artist-endpoints/
 */
class Artists {

  /**
   * Get a collection of artists that match a keyword string.
   *
   * @see https://developer.spotify.com/web-api/search-item/
   *
   * @public
   * @param {String} name Name of the artist.
   * @param {Object} [query] Query parameters.
   * @return {Promise} artistCollection
   */
  search(name, query) {
    return Client.instance.request(`/search?type=artist&q=${encodeURIComponent(name)}`, 'GET', query);
  }

  /**
   * Get a single/collection of artist/s identified by its unique/list of Spotify ID.
   *
   * @see https://developer.spotify.com/web-api/get-artist/
   *
   * @public
   * @param {String|Array} ids Artist id/ids to retrive
   * @param {Object} [query] Query parameters.
   * @return {Promise} Artist|artistCollection
   */
  get(ids, query) {
    if (Array.isArray(ids)) {
      return Client.instance.request(`/artists/?ids=${ids}`, 'GET', query);
    } else {
      return Client.instance.request(`/artists/${ids}`, 'GET', query);
    }
  }

  /**
   * Get Spotify catalog information about an artist’s albums.
   *
   * @see https://developer.spotify.com/web-api/get-artists-albums/
   *
   * @public
   * @param {String} id Artist id to retrive
   * @param {Object} [query] Query parameters.
   * @return {Promise} albumsCollection
   */
  getAlbums(id, query) {
    return Client.instance.request(`/artists/${id}/albums`, 'GET', query);
  }

  /**
   * Get Spotify catalog information about an artist’s top tracks by country.
   *
   * @see https://developer.spotify.com/web-api/get-artists-top-tracks/
   *
   * @public
   * @param {String} id Artist id to retrive top tracks
   * @param {Object} [query] Query parameters.
   * @return {Promise} tracksCollection
   */
  getTopTracks(id, query) {
    return Client.instance.request(`/artists/${id}/top-tracks`, 'GET', query);
  }

  /**
   * Get Spotify catalog information about artists similar to a given artist.
   *
   * @see https://developer.spotify.com/web-api/get-related-artists/
   *
   * @public
   * @param {String} id Artist id to retrive related artists
   * @param {Object} [query] Query parameters.
   * @return {Promise} albumsCollection
   */
  getRelatedArtists(id, query) {
    return Client.instance.request(`/artists/${id}/related-artists`, 'GET', query);
  }

  /**
   * Add the current user as a follower of one or more artists.
   *
   * @see https://developer.spotify.com/web-api/follow-artists-users/
   *
   * @public
   * @param {Array} artists List of artists ids
   * @return {Promise} JSON reponse
   */
  follow(artists) {
    return Client.instance
      .request(
        `/me/following?type=artist`,
        'PUT',
        {ids: artists}
      );
  }

   /**
   * Remove the current user as a follower of one or more artists.
   *
   * @see https://developer.spotify.com/web-api/unfollow-artists-users/
   *
   * @public
   * @param {Array} artists List of artists ids
   * @return {Promise} JSON reponse
   */
  unfollow(artists) {
    return Client.instance
      .request(
        `/me/following?type=artist`,
        'DELETE',
        {ids: artists}
      );
  }

}

/**
 * Exports the AlbumHandler class.
 */
export default Artists;
