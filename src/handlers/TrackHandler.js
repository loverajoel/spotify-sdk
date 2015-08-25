'use strict';

import TrackEntity from '../entities/TrackEntity';

/*
* TODO: add more methods
*/
class TrackHandler {

    constructor(client) {
        this._client = client;
    }

    /*
    * featuredPlaylists 
    * @require: OAuth
    */
    search(track, artist) {
        return this._client.magic(
            this._client.request(`/search?type=track&q=track:${track} artist:${artist}`),
            TrackEntity,
            this,
            'tracks'
        );
    }

}

export default TrackHandler;