/*
 * Basic examples
 * Test a lot of handlers that don't require user login.
 *
 */
'use strict'

import Spotify from '../src/services/Client';
import UserHandler from '../src/handlers/UserHandler';
import TrackHandler from '../src/handlers/TrackHandler';
import PlaylistHandler from '../src/handlers/PlaylistHandler';
import ArtistHandler from '../src/handlers/ArtistHandler';

let client = Spotify.instance;

client.settings = {
    clientId: '9b32d53872a446b8854a95d0cfccbf43', 
    secretId: '540176b5c66241c59eac65d6f8c1b4c0',
    redirect_uri: 'http://localhost:3000/examples/oauth.html'
};

/*
 * Login user
 * This is a way, you can do it how you want
 */
function session() {
    if (sessionStorage.token) {
        client.token = sessionStorage.token;
    } else if (window.location.hash.split('&')[0].split('=')[1]) {
        sessionStorage.token = window.location.hash.split('&')[0].split('=')[1];
        client.token = sessionStorage.token;
    }
}
session();
function login() {
    client.login().then((url) => {
        window.location.href = url;
	});
}
document.querySelector('#login').onclick = login;

/*
 * UserHandler Examples
 *
 */
var user = new UserHandler();

/*
 * #1 example
 * Get the current user.
 */
// user.me().then((response) => {
//     console.log(response);
// });

/*
 * #2 example
 * Get the user by id, should return a User entity.
 */
// user.get('1258448899').then((response) => {
//     console.log(response);
// });

/*
 * #3 example
 * Get the playlists by user id, should return a Playlist collection.
 */
// user.playlists('1258448899').then((response) => {
//     console.log(response);
// });

/*
 * Awesome Exmaple
 *
 * me()
 * playlists = me.playlists()
 * tracks = playlists[0].tracks();
 * artists = tracks[0].artists();
 * albums = artists[0].albums();
 */

user.me().then((user) => {
    user.playlists().then((playlistCollection) => {
        playlistCollection[0].tracks.then( TrackEntity => {
            TrackEntity[0].artists().then( artistsCollection => {
                artistsCollection[0].albums().then(albumsCollection => {
                    console.log(albumsCollection); // Wooo!!!
                });
            });
        });
    });
});
