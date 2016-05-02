'use strict';

import Track from '../helpers/Track';
import Client from '../Client';

/**
 * Methods for retrieving information about one or more tracks from the Spotify catalog.
 *
 * @see https://developer.spotify.com/web-api/track-endpoints/
 */
class TrackHandler {

    /**
     * Get a collection of tracks that match a keyword string.
     *
     * @see https://developer.spotify.com/web-api/search-item/
     *
     * @public
     * @param {String} name Name of the track.
     * @param {Object} [query] Query parameters.
     * @return {Promise} trackCollection
     */
    search(name, query) {
      return Client.instance.request(`/search?type=track&q=${encodeURIComponent(name)}`, 'GET', query);
    }

    /**
     * Get a single/collection of track/s identified by its unique/list of Spotify ID.
     *
     * @see https://developer.spotify.com/web-api/get-albums-tracks/ FIXME: check the url
     *
     * @public
     * @param {String|Array} ids Track id/ids to retrive
     * @param {Object} [query] Query parameters.
     * @return {Promise} Track|trackCollection
     */
    get(ids, query) {
      if (Array.isArray(ids)) {
        return Client.instance.request(`/tracks/?ids=${ids}`, 'GET', query);
      } else {
        return Client.instance.request(`/tracks/${ids}`, 'GET', query);
      }
    }

    /**
     * Get audio feature information for a single track identified by its unique Spotify ID
     *
     * @see https://developer.spotify.com/web-api/get-audio-features/
     *
     * @public
     * @param {In/Arrayt} ids Track id or ids
     * @return {Promise} Track|trackCollection
     */
    audioFeatures(ids) {
      if (Array.isArray(ids)) {
        return Client.instance.request(`/audio-features`, 'GET', {ids: ids});
      } else {
        return Client.instance.request(`/audio-features/${ids}`, 'GET');
      }
    }

    /**
     * Convert a valid object to a Track entity
     *
     * @public
     * @param {Object} item Object to convert in entity
     * @return {Object}
     */
    convert(item) {
      if (item.uri) {
        return new Track(item);
      } else {
        return new Track(item.track);
      }
    }

}

/**
 * Exports the TrackHandler class.
 */
export default TrackHandler;
