'use strict';

import ArtistEntity from '../entities/ArtistEntity';
import ArtistHandler from '../handlers/ArtistHandler';
import Factory from '../Factory';

class Artist extends ArtistEntity {

    constructor(data) {
        super(data);
    }

    /*
     * @public 
     * @return {Collection} albumsCollection
     */
    albums() {
        return new ArtistHandler().albums(this.id);
    }

}

export default Artist;