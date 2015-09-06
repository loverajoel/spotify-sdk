'use strict';

import AlbumEntity from '../entities/AlbumEntity';
import AlbumHandler from '../handlers/AlbumHandler';
import Factory from '../Factory';

class Album extends AlbumEntity {

    constructor(data) {
        super(data);
    } 
}

export default Album;