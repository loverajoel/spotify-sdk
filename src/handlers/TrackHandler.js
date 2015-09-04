/*
 * TrackHandler
 * Methods for retrive information about tracks.
 *
 * API Doc: https://developer.spotify.com/web-api/track-endpoints/
 */
'use strict';

import Track from '../models/Track';
import Client from '../services/Client';

class TrackHandler {

    /*
     * Get a single pr collection track identified by its unique/list of Spotify ID.
     *
     * @public 
     * @param {string|array} ids Track id/ids to retrive
     * @return {Track|Collection} Track|trackCollection
     */
    get(ids) {
        if (Array.isArray(ids)) {
            return Client.instance.request(`/tracks/?ids=${ids}`); 
        } else {
            return Client.instance.request(`/tracks/${ids}`);
        }
    }

    /*
    * @public 
    * @param {string} track Name of the track
    * @return {Collection} trackCollection
    */
    search(track) {
        return Client.instance.request(`/search?type=track&q=${track}`);
    }

    /*
    * @public 
    * @param {object}
    * @return {Track}
    */
    convert(item) {
        return new Track(item);
    }

}

export default TrackHandler;