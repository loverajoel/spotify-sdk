'use strict';

import Track from '../models/Track';
import Client from '../services/Client';

class TrackHandler {

    /*
    * @public 
    * @param {string} track Name of the track
    * @return {promise}
    */
    search(track) {
        return Client.instance.request(`/search?type=track&q=${track}`);
    }

    /*
    * @public 
    * @param {object} item Simple or Full object api
    * @return {Track}
    */
    convert(item) {
        return new Track(item);
    }

}

export default TrackHandler;