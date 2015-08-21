"use strict";

/*
* TODO: add more methods
*/
class Playlist {

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
    userPlaylists(user_id) {
        return this._client.request(`/users/${user_id}/playlists`);
    }

    /*
    * addTrack
    * @require: OAuth
    */
    addTrack(user_id, id, tracks) {
        return this._client.request(`/users/${user_id}/playlists/${id}/tracks`, 'POST', tracks);
    }


}

export default Playlist;