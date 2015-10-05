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
     * @param {object} query Optional query parameters.
     * @return {Collection} tracksCollection
     */
    topTracks(query) {
        return new ArtistHandler().topTracks(this.id, query);
    }

    /*
     * @public 
     * @param {object} query Optional query parameters.
     * @return {Collection} artistsCollection
     */
    relatedArtists(query) {
        return new ArtistHandler().relatedArtists(this.id, query);
    }

    /*
     * @public 
     * @param {object} query Optional query parameters.
     * @return {object}
     */
    follow(query) {
        return new ArtistHandler().follow([this.id], query);
    }

    /*
     * @public 
     * @param {object} query Optional query parameters.
     * @return {object}
     */
    unfollow(query) {
        return new ArtistHandler().unfollow([this.id], query);
    }
}

export default Artist;