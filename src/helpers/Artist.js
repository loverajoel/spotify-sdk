/*
 * Artist
 * Add methods to ArtistEntity
 */
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

    /*
     * @public 
     * @return {Collection} tracksCollection
     */
    topTracks(country) {
        return new ArtistHandler().topTracks(this.id, country);
    }

    /*
     * @public 
     * @return {Collection} artistsCollection
     */
    relatedArtists(country) {
        return new ArtistHandler().relatedArtists(this.id);
    }

}

export default Artist;