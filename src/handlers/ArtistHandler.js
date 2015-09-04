"user strict";

import Artist from '../models/Artist';
import Client from '../services/Client';

class ArtistHandler {

    /*
    * @public 
    * @param {int} id Artist id to retrive
    * @return {Artist} Artist
    */
    get(id) {
        return this._client.request(`/artists/${id}`);
    }

    /*
    * @public 
    * @param {int} id Artist id to retrive albums
    * @return {Collection} AlbumCollection
    */
    getAlbums(id) {
        return Client.instance.fetch(`/artists/${id}/albums`);
    }

    /*
    * @public 
    * @param {int} id Artist id to retrive top tracks
    * @return {Collection} TrackCollection
    */
    getTopTracks(id) {
        return this._client.request(`/artists/${id}/top-tracks`);  
    }

    /*
    * @public 
    * @param {int} id Artist id to retrive related artists
    * @return {Collection} ArtistsCollection
    */
    getRelatedArtists() {
        return this._client.request(`/artists/${id}/related-artists`);
    }

    /*
    * @public 
    * @param {object} item Simple or Full object api
    * @return {Artist}
    */
    convert(item) {
        return new Artist(item);
    }

}

export default ArtistHandler;