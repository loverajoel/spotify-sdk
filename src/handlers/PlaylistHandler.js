/*
 * PlaylistHandler
 * Methods for retrieving information about playlists and for managing playlists.
 *
 * Doc: https://developer.spotify.com/web-api/playlist-endpoints/
 */
'use strict';

import Playlist from '../models/Playlist';
import Client from '../services/Client';

class PlaylistHandler {

    /*
     * Get a collection of playlists that match a keyword string.
     * Doc: https://developer.spotify.com/web-api/search-item/
     *
     * @public
     * @param {string} name Name of the playlist.
     * @param {object} query Optional query parameters.
     * @return {Collection} playlistCollection
     */
    search(name, query) {
        return Client.instance.request(`/search?type=playlist&q=${name}`);
    }

    /*
     * Get a list of Spotify featured playlists.
     * Doc: https://developer.spotify.com/web-api/get-list-featured-playlists/
     *
     * @public
     * @required {OAuth}
     * @param {object} query Optional query parameters.
     * @return {Collection} playlistCollection
     */
    featuredPlaylists(query) {
        return Client.instance.request(`/browse/featured-playlists`);
    }

    /*
     * Get a list of Spotify playlists tagged with a particular category.
     * Doc: https://developer.spotify.com/web-api/get-categorys-playlists/
     *
     * @public
     * @required {OAuth}
     * @param {int} id Category id
     * @param {object} query Optional query parameters.
     * @return {Collection} playlistCollection
     */
    categoriesPlaylists(id, query) {
        return Client.instance.request(`/browse/categories/${id}/playlists`);
    }

    /*
     * Get a single playlist identified by its unique of Spotify ID.
     * Doc: https://developer.spotify.com/web-api/get-playlist/
     *
     * @public 
     * @param {string} id Playlit id to retrive
     * @param {object} query Optional query parameters.
     * @return {Track} Plalist
     */
    get(id) {
        return Client.instance.request(`/tracks/${id}`);
    }

    /*
     * @public 
     * @param {object} item Object to convert in entity
     * @return {Playlist}
     */
    convert(item) {
        return new Playlist(item);
    }

}

export default PlaylistHandler;