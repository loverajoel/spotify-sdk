'use strict';

import PlaylistEntity from '../entities/PlaylistEntity';

class PlaylistHandler {

    /*
    * @public 
    * @return {Collection} PlaylistCollection
    */
    featuredPlaylists() {
        return this._client.request(`/browse/featured-playlists`);
    }

    /*
    * @public 
    * @param {int} id Id of the category to retrive playlists
    * @return {Collection} PlaylistCollection
    */
    categoryPlaylists(id) {
        return this._client.request(`/browse/categories/${id}/playlists`);
    }

    /*
    * @public 
    * @require {scopes} playlist-read-collaborative TODO: add more scopes
    * @param {int} id Id of the user to retrive playlists
    * @return {Collection} PlaylistCollection
    */
    userPlaylists(id) {
        return this._client.get(`/users/${id}/playlists`, this);
    }

    // 
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