'use strict';

import PlaylistEntity from '../entities/PlaylistEntity';
import PlaylistHandler from '../handlers/PlaylistHandler';
import Factory from '../factories/Factory';

class Playlist extends PlaylistEntity {

    constructor(data) {
        super(data);
    }

}

export default Playlist;