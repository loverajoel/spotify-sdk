'use strict';

import PlaylistEntity from '../entities/PlaylistEntity';

/*
* TODO: add more methods
*/
class PlaylistHandler {

    constructor(client) {
        this._client = client;
    }

    /*
    * featuredPlaylists 
    * @require: OAuth
    */
    featuredPlaylists() {
        return this._client.request(`/browse/featured-playlists`);
    }

    /*
    * categoryPlaylists
    * @require: OAuth
    */
    categoryPlaylists(id) {
        return this._client.request(`/browse/categories/${id}/playlists`);
    }

    /*
    * userPlaylists
    * @require: OAuth
    */
    userPlaylists(user) {
        return this._client.magic(this._client.request(`/users/${user.id}/playlists`), PlaylistEntity, this);
    }

    /*
    * addTrack
    * @require: OAuth
    * @private
    */
    addTracks(playlist, tracks) {
        return this._client.request(
            `/users/${playlist.owner.id}/playlists/${playlist.id}/tracks`,
            'POST', {'uris': tracks.map((track) => {
                return track.uri;
            })}
            );
    }


}

export default PlaylistHandler;