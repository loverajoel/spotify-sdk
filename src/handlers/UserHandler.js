'use strict';

import User from '../helpers/User';
import Client from '../Client';

/**
 * Methods for retrieving information about one or more user/s from the Spotify catalog.
 *
 * @see https://developer.spotify.com/web-api/user-profile-endpoints/
 */
class UserHandler {

    /**
     * Get detailed profile information about the current user.
     * 
     * @see https://developer.spotify.com/web-api/get-current-users-profile/
     *
     * @public 
     * @required {OAuth}
     * @return {Promise} User
     */
    me() {
        return Client.instance.request(`/me`);
    }

    /**
     * Get public profile information about a Spotify user.
     * 
     * @see https://developer.spotify.com/web-api/get-users-profile/
     *
     * @public 
     * @param {String} id User id to retrive
     * @required {OAuth}
     * @return {Promise} User
     */
    get(id) {
        return Client.instance.request(`/users/${id}`);
    }

    /**
     * Get a list of the playlists owned or followed by a Spotify user.
     * 
     * @see https://developer.spotify.com/web-api/get-list-users-playlists/
     *
     * @public 
     * @param {String} id User User id
     * @param {String} [playlistId] id to retrive playlists
     * @param {Object} [query] Query parameters.
     * @required {OAuth}
     * @return {Promise} playlistCollection
     */
    playlists(id, playlistId, query) {
        if (playlistId) {
            return Client.instance.request(`/users/${id}/playlists/${playlistId}`, 'GET', query);
        } else {
            return Client.instance.request(`/users/${id}/playlists`, 'GET', query);
        }
    }

    /**
     * Convert a valid object to a User entity
     * 
     * @public 
     * @param {object} item Object to convert in entity
     * @return {Object}
     */
    convert(item) {
        return new User(item);
    }
}

/**
 * Exports the UserHandler class.
 */
export default UserHandler;