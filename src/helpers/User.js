/*
 * User
 * Add methods to UserEntity
 */
'use strict';

import UserEntity from '../entities/UserEntity';
import UserHandler from '../handlers/UserHandler';
import Factory from '../Factory';

class User extends UserEntity {

    constructor(data) {
        super(data);
    }

    /*
     * @public 
     * @param {object} id Optional Playlist id.
     * @return {Collection} playlistCollection
     */
    playlists(id) {
    	return new UserHandler().playlists(this.id, id);
    }

}

export default User;
