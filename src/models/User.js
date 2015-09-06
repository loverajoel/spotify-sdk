'use strict';

import UserEntity from '../entities/UserEntity';
import UserHandler from '../handlers/UserHandler';
import Factory from '../factories/Factory';

class User extends UserEntity {

    constructor(data) {
        super(data);
    }

    playlists(id) {
    	return new UserHandler().playlists(this.id, id);
    }

}

export default User;