'use strict';

import UserEntity from '../entities/UserEntity';
import UserHandler from '../handlers/UserHandler';
import Factory from '../Factory';

/**
 * Add helpers methods to UserEntity
 */
class User extends UserEntity {

    /**
     * @param {Object} data User object
     */
    constructor(data) {
        super(data);
    }

    /**
     * Get user Playlists
     * 
     * @public 
     * @param {String} id Playlist id.
     * @return {Promise}
     */
    playlists(id) {
    	return new UserHandler().playlists(this.id, id);
    }

    /**
     * Check if a user follow an album, artist or user
     *
     * @public 
     * @param {String} type artist, album or user
     * @param {Array} ids User id list
     * @return {Promise} JSON response
     */
    contains(type, ids) {
        return new UserHandler().contains(type, ids);
    }

}

/**
 * Exports the User class.
 */
export default User;
