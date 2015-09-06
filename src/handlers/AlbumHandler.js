/*
 * AlbumHandler
 * Methods for retrieving information about one or more albums from the Spotify catalog.
 *
 * API Doc: https://developer.spotify.com/web-api/album-endpoints/
 */
'use strict';

import Album from '../helpers/Album';
import Client from '../Client';

class AlbumHandler {

    /*
     * Get a collection of albums that match a keyword string.
     * Doc: https://developer.spotify.com/web-api/search-item/
     *
     * @public
     * @param {string} name Name of the album.
     * @param {object} query Optional query parameters.
     * @return {Collection} albumsCollection
     */
    search(name, query) {
        return Client.instance.request(`/search?type=album&q=${name}`);
    }

    /*
     * Get a single/collection of album/s identified by its unique/list of Spotify ID.
     * Doc: https://developer.spotify.com/web-api/get-album/
     *
     * @public 
     * @param {string|array} ids Album id/ids to retrive
     * @param {object} query Optional query parameters.
     * @return {Album|Collection} Album|artistCollection
     */
    get(ids, query) {
        if (Array.isArray(ids)) {
            return Client.instance.request(`/albums/?ids=${ids}`); 
        } else {
            return Client.instance.request(`/albums/${ids}`);
        }
    }

    /*
     * @public 
     * @param {object} item Object to convert in entity
     * @return {Album}
     */
    convert(item) {
        return new Album(item);
    }

}

export default AlbumHandler;