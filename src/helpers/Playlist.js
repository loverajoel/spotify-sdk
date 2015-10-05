/*
 * Plalist
 * Add methods to PlaylistEntity
 */
'use strict';

import PlaylistEntity from '../entities/PlaylistEntity';
import PlaylistHandler from '../handlers/PlaylistHandler';
import Factory from '../Factory';

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

    /*
     * @public 
     * @param {array} tracks Tracks list
     * @param {object} query Optional query parameters.
     * @return {object}
     */
    addTrack(tracks, query) {
        let trackList = tracks.map(track => {
            return track.uri;
        });
        return new PlaylistHandler().addTracks(trackList, this.owner.id, this.id, query);
    }

    /*
     * @public 
     * @param {array} tracks Tracks list
     * @param {object} query Optional query parameters.
     * @return {object}
     */
    removeTrack(tracks, query) {
        let trackList = tracks.map(track => {
            return track.uri;
        });
        return new PlaylistHandler().removeTracks(trackList, this.owner.id, this.id, query);
    }

    /*
     * @public 
     * @param {object} query Optional query parameters.
     * @return {object}
     */
    follow(query) {
        return new PlaylistHandler().follow(this.owner.id, this.id, query);
    }

    /*
     * @public 
     * @param {object} query Optional query parameters.
     * @return {object}
     */
    unfollow(query) {
        return new PlaylistHandler().unfollow(this.owner.id, this.id, query);
    }

    /*
     * @public 
     * @return {object}
     */
    edit() {
        return new PlaylistHandler().edit(this.owner.id, this.id, this.name, this.public);
    }

}

export default Playlist;
