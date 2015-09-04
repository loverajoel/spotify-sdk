'use strict';

import ArtistEntity from '../entities/ArtistEntity';
import ArtistHandler from '../handlers/ArtistHandler';
import Factory from '../handlers/Factory';

class Artist extends ArtistEntity {

    constructor(data) {
        super(data);
    }

    getAlbums() {
        return new ArtistHandler().getAlbums(this.id);
    }

}

export default Artist;