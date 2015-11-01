/*
 * ArtistHandler
 * Methods for retrieving information about one or more artists from the Spotify catalog.
 *
 * API Doc: https://developer.spotify.com/web-api/artist-endpoints/
 */
'use strict';

import Artist from '../helpers/Artist';
import Client from '../Client';

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
        return Client.instance.request(`/search?type=artist&q=${encodeURIComponent(name)}`, 'GET', query);
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
            return Client.instance.request(`/artists/?ids=${ids}`, 'GET', query);
        } else {
            return Client.instance.request(`/artists/${ids}`, 'GET', query);
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
        return Client.instance.request(`/artists/${id}/albums`, 'GET', query);
    }

    /*
     * Get Spotify catalog information about an artist’s top tracks by country.
     * Doc: https://developer.spotify.com/web-api/get-artists-top-tracks/
     *
     * @public 
     * @param {string} id Artist id to retrive top tracks
     * @param {object} query Optional query parameters. * country is required
     * @return {Collection} tracksCollection
     */
    topTracks(id, query) {
        return Client.instance.request(`/artists/${id}/top-tracks`, 'GET', query);
    }

    /*
     * Get Spotify catalog information about artists similar to a given artist.
     * Doc: https://developer.spotify.com/web-api/get-related-artists/
     *
     * @public 
     * @param {string} id Artist id to retrive related artists
     * @return {Collection} albumsCollection
     */
    relatedArtists(id, query) {
        return Client.instance.request(`/artists/${id}/related-artists`, 'GET', query);
    }

    /*
     * Add the current user as a follower of one or more artists.
     * Doc: https://developer.spotify.com/web-api/follow-artists-users/
     *
     * @public 
     * @required {OAuth}
     * @param {array} artists List of artists ids
     * @return {} 
     */
    follow(artists) {
        return Client.instance
            .request(
                `/me/following?type=artist`,
                'PUT',
                {ids: artists}
            );
    }

     /*
     * Remove the current user as a follower of one or more artists.
     * Doc: https://developer.spotify.com/web-api/unfollow-artists-users/
     *
     * @public 
     * @required {OAuth}
     * @param {array} artists List of artists ids
     * @return {} 
     */
    unfollow(artists) {
        return Client.instance
            .request(
                `/me/following?type=artist`,
                'DELETE',
                {ids: artists}
            );
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