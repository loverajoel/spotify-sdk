'use strict';

import PlaylistEntity from '../entities/PlaylistEntity';
import PlaylistHandler from '../handlers/PlaylistHandler';
import Factory from '../factories/Factory';

class Playlist extends PlaylistEntity {

    constructor(data) {
        super(data);
    }

    /*
     * @public 
     * @override
     * @return {Collection} trackCollection
     */
    get tracks() {
        return Factory(this._tracks);
    }

}

export default Playlist;