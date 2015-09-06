/*
 * ArtistHandler
 * Methods for retrieving information about one or more artists from the Spotify catalog.
 *
 * API Doc: https://developer.spotify.com/web-api/artist-endpoints/
 */
'use strict';

import Artist from '../helpers/Artist';
import Client from '../services/Client';

class ArtistHandler {

    /*
     * Get a collection of artists that match a keyword string.
     * Doc: https://developer.spotify.com/web-api/search-item/
     *
     * @public
     * @param {string} name Name of the artist.
     * @param {object} query Optional query parameters.
     * @return {Collection} artistCollection
     */
    search(name, query) {
        return Client.instance.request(`/search?type=artist&q=${name}`);
    }

    /*
     * Get a single/collection of artist/s identified by its unique/list of Spotify ID.
     * Doc: https://developer.spotify.com/web-api/get-artist/
     *
     * @public 
     * @param {string|array} ids Artist id/ids to retrive
     * @param {object} query Optional query parameters.
     * @return {Artist|Collection} Artist|artistCollection
     */
    get(ids, query) {
        if (Array.isArray(ids)) {
            return Client.instance.request(`/artists/?ids=${ids}`); 
        } else {
            return Client.instance.request(`/artists/${ids}`);
        }
    }

    /*
     * Get Spotify catalog information about an artist’s albums.
     * Doc: https://developer.spotify.com/web-api/get-artists-albums/
     *
     * @public 
     * @param {string} id Artist id to retrive
     * @param {object} query Optional query parameters.
     * @return {Collection} albumsCollection
     */
    albums(id, query) {
        return Client.instance.request(`/artists/${id}/albums`);
    }

    /*
     * @public 
     * @param {object} item Object to convert in entity
     * @return {Playlist}
     */
    convert(item) {
        return new Artist(item);
    }

}

export default ArtistHandler;