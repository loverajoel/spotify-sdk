/*
 * PlaylistHandler
 * Methods for retrieving information about playlists and for managing playlists.
 *
 * Doc: https://developer.spotify.com/web-api/playlist-endpoints/
 */
'use strict';

import Playlist from '../helpers/Playlist';
import Client from '../Client';

class PlaylistHandler {

    /*
     * Get a collection of playlists that match a keyword string.
     * Doc: https://developer.spotify.com/web-api/search-item/
     *
     * @public
     * @param {string} name Name of the playlist.
     * @param {object} query Optional query parameters.
     * @return {Collection} playlistCollection
     */
    search(name, query) {
        return Client.instance.request(`/search?type=playlist&q=${name}`, 'GET', query);
    }

    /*
     * Get a list of Spotify featured playlists.
     * Doc: https://developer.spotify.com/web-api/get-list-featured-playlists/
     *
     * @public
     * @required {OAuth}
     * @param {object} query Optional query parameters.
     * @return {Collection} playlistCollection
     */
    featuredPlaylists(query) {
        return Client.instance.request(`/browse/featured-playlists`, 'GET', query);
    }

    /*
     * Get a list of Spotify playlists tagged with a particular category.
     * Doc: https://developer.spotify.com/web-api/get-categorys-playlists/
     *
     * @public
     * @required {OAuth}
     * @param {int} id Category id
     * @param {object} query Optional query parameters.
     * @return {Collection} playlistCollection
     */
    categoriesPlaylists(id, query) {
        return Client.instance.request(`/browse/categories/${id}/playlists`, 'GET', query);
    }

    /*
     * Add one or more tracks to a user’s playlist.
     * Doc: https://developer.spotify.com/web-api/add-tracks-to-playlist/
     *
     * @public 
     * @required {OAuth}
     * @param {array} tracks List of uri tracks
     * @param {string} userId User id
     * @param {string} playlistId Playlist id
     * @param {object} query Optional query parameters.
     * @return {} 
     */
    addTracks(tracks, userId, playlistId, query) {
        return Client.instance
            .request(
                `/users/${userId}/playlists/${playlistId}/tracks`,
                'POST',
                {uris: tracks}
            );
    }

    /*
     * Remove one or more tracks from a user’s playlist.
     * Doc: https://developer.spotify.com/web-api/remove-tracks-playlist/
     *
     * @public 
     * @required {OAuth}
     * @param {array} tracks List of uri tracks
     * @param {string} userId User id
     * @param {string} playlistId Playlist id
     * @param {object} query Optional query parameters.
     * @return {} 
     */
    removeTracks(tracks, userId, playlistId, query) {
        return Client.instance
            .request(
                `/users/${userId}/playlists/${playlistId}/tracks`,
                'DELETE',
                {uris: tracks}
            );
    }

    /*
     * Add a user as a follower of a playlist.
     * Doc: https://developer.spotify.com/web-api/follow-playlist/
     *
     * @public 
     * @required {OAuth}
     * @param {string} userId User id
     * @param {string} playlistId Playlist id
     * @param {object} query Optional query parameters.
     * @return {} 
     */
    follow(userId, playlistId, query) {
        return Client.instance
            .request(
                `/users/${userId}/playlists/${playlistId}/followers`,
                'PUT'
            );
    }

    /*
     * Remove a user as a follower of a playlist.
     * Doc: https://developer.spotify.com/web-api/unfollow-playlist/
     *
     * @public 
     * @required {OAuth}
     * @param {string} userId User id
     * @param {string} playlistId Playlist id
     * @param {object} query Optional query parameters.
     * @return {} 
     */
    unfollow(userId, playlistId, query) {
        return Client.instance
            .request(
                `/users/${userId}/playlists/${playlistId}/followers`,
                'DELETE'
            );
    }

    /*
     * Create a playlist for a Spotify user.
     * Doc: https://developer.spotify.com/web-api/create-playlist/
     *
     * @public 
     * @required {OAuth}
     * @param {string} userId User id
     * @param {string} name Name of the future playlist
     * @param {bool} public public or private
     * @param {object} query Optional query parameters.
     * @return {} 
     */
    create(userId, name, is_public) {
        return Client.instance
            .request(
                `/users/${userId}/playlists`,
                'POST',
                {name: name, public: is_public}
            );
    }

    /*
     * Change a playlist’s name and public/private state.
     * Doc: https://developer.spotify.com/web-api/change-playlist-details/
     *
     * @public 
     * @required {OAuth}
     * @param {string} userId User id
     * @param {string} playlistId Playlist id
     * @param {string} name Name of the future playlist
     * @param {bool} public public or private
     * @param {object} query Optional query parameters.
     * @return {} 
     */
    create(userId, playlistId, name, is_public) {
        return Client.instance
            .request(
                `/users/${userId}/playlists`,
                'PUT',
                {name: name, public: is_public}
            );
    }

    /*
     * @public 
     * @param {object} item Object to convert in entity
     * @return {Playlist}
     */
    convert(item) {
        return new Playlist(item);
    }

}

export default PlaylistHandler;