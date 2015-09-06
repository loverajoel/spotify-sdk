'use strict';

import PlaylistEntity from '../entities/PlaylistEntity';
import PlaylistHandler from '../handlers/PlaylistHandler';
import Factory from '../factories/Factory';

class Playlist extends PlaylistEntity {

    constructor(data) {
        super(data);
    }

    /*
     * @public 
     * @override
     * @return {Collection} trackCollection
     */
    get tracks() {
        return Factory(this._tracks);
    }

    addTrack(tracks, query) {
        let trackList = tracks.map(track => {
            return track.uri;
        });
        return new PlaylistHandler().addTracks(trackList, this, query);
    }

    removeTrack(tracks, query) {
        let trackList = tracks.map(track => {
            return track.uri;
        });
        return new PlaylistHandler().removeTracks(trackList, this, query);
    }

}

export default Playlist;