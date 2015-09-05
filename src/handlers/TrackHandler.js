/*
 * TrackHandler
 * Methods for retrieving information about one or more tracks from the Spotify catalog.
 *
 * API Doc: https://developer.spotify.com/web-api/track-endpoints/
 */
'use strict';

import Track from '../models/Track';
import Client from '../services/Client';

class TrackHandler {

    /*
     * Get a collection of tracks that match a keyword string.
     * Doc: https://developer.spotify.com/web-api/search-item/
     *
     * @public
     * @param {string} name Name of the track.
     * @param {object} query Optional query parameters.
     * @return {Collection} trackCollection
     */
    search(name, query) {
        return Client.instance.request(`/search?type=track&q=${name}`);
    }

    /*
     * Get a single/collection of track/s identified by its unique/list of Spotify ID.
     * Doc: https://developer.spotify.com/web-api/get-albums-tracks/ FIXME: check the url
     *
     * @public 
     * @param {string|array} ids Track id/ids to retrive
     * @param {object} query Optional query parameters.
     * @return {Track|Collection} Track|trackCollection
     */
    get(ids, query) {
        if (Array.isArray(ids)) {
            return Client.instance.request(`/tracks/?ids=${ids}`); 
        } else {
            return Client.instance.request(`/tracks/${ids}`);
        }
    }

    /*
     * @public 
     * @param {object} item Object to convert in entity
     * @return {Playlist}
     */
    convert(item) {
        if (item.uri) {
            return new Track(item);
        } else {
            return new Track(item.track);
        }
    }

}

export default TrackHandler;