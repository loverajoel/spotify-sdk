/*
 * UserHandler
 * Methods for retrieving information about one or more user/s from the Spotify catalog.
 *
 * API Doc: https://developer.spotify.com/web-api/user-profile-endpoints/
 */
'use strict';

import User from '../helpers/User';
import Client from '../Client';

class UserHandler {

    /*
     * Get detailed profile information about the current user.
     * Doc: https://developer.spotify.com/web-api/get-current-users-profile/
     *
     * @public 
     * @required {OAuth}
     * @return {User} User
     */
    me() {
        return Client.instance.request(`/me`);
    }

    /*
     * Get public profile information about a Spotify user.
     * Doc: https://developer.spotify.com/web-api/get-users-profile/
     *
     * @public 
     * @param {string} id User id to retrive
     * @required {OAuth}
     * @return {User} User
     */
    get(id) {
        return Client.instance.request(`/users/${id}`);
    }

    /*
     * Get a list of the playlists owned or followed by a Spotify user.
     * Doc: https://developer.spotify.com/web-api/get-list-users-playlists/
     *
     * @public 
     * @param {string} id User id to retrive playlists
     * @required {OAuth}
     * @return {Collectoin} playlistCollection
     */
    playlists(id, playlistId) {
        if (playlistId) {
            return Client.instance.request(`/users/${id}/playlists/${playlistId}`);
        } else {
            return Client.instance.request(`/users/${id}/playlists`);
        }
    }

    /*
     * @public 
     * @param {object} item Object to convert in entity
     * @return {User}
     */
    convert(item) {
        return new User(item);
    }
}

export default UserHandler;