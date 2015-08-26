"use strict"

// Import client
import Spotify from '../src/services/Client';
// Import handlers
import UserHandler from '../src/handlers/UserHandler';
import PlaylistHandler from '../src/handlers/PlaylistHandler';
import TrackHandler from '../src/handlers/TrackHandler';

var client = new Spotify({
	clientId: '9b32d53872a446b8854a95d0cfccbf43', 
	secretId: '540176b5c66241c59eac65d6f8c1b4c0',
	// scopes: 'user-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private',
	// redirect_uri: 'http://localhost:3000/demo/demo.html',
	// token: 'BQABQaTbfG9Mm92pn9GopqovvIGtORXSf1caGAN4AluaVnx6BN1p4VwwAN2vmUkE3DHNJZBJdd-JvyqmJ6xm8n2tEXJz0B-wlmjMuiUQWSQfAuKpllmQ6LE2DWLDY_59G8nXH6DiNRBOUWMm8KGACLQGeN33orgfFyT-9XKPDIq4H4Pf5oBGzrvrxIEojcgSqbZ_UJ6UMDUIkhSjc8ra3q5u1MecZOiz6HpHQuo8g-Q7qewVwQv4A-dxv1o'
});

var myUser;
var myTrack;

document.querySelector('#loginBtn').onclick = function() {login()};
document.querySelector('#getUserInfoBtn').onclick = function() {getUserInfo()};
document.querySelector('#getUserPlaylistBtn').onclick = function() {getUserPlaylist()};
document.querySelector('#addTrackBtn').onclick = function() {addTrackToPlaylist()};
document.querySelector('#searchBtn').onclick = function() {searchTrack()};

var user = new UserHandler(client);
var playlist = new PlaylistHandler(client);
var track = new TrackHandler(client);

var login = function() {
	client.login()
		.then((token) => {
			console.log('---client.login()----', token);
		});	
};

var getUserInfo = function() {
	user.me()
		.then((response) => {
			console.log('---user.me()----', response);
			myUser = response;
			myUser.playlists().then(function(playlistsCollection) {
				playlistsCollection[0].addTracks([myTrack]);
			})
		});
};

var getUserPlaylist = function() {
	playlist.userPlaylists(myUser)
		.then((playlistsCollection) => {
			console.log('---playlist.userPlaylists()----', playlistsCollection);
		});
};

var searchTrack = function() {
	track.search('Nena', 'Marama').then((trackCollections) => {
		// console.log('---track.search()----', trackCollections);
		myTrack = trackCollections[0];
		console.log(myTrack.artists);
	});
}
