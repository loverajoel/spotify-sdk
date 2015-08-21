"use strict"

// Import client
import Spotify from '../src/services/Client';
// Import handlers
import User from '../src/handlers/User';
import Playlist from '../src/handlers/Playlist';

/*
// New client
var Client = new Spotify();

// New artist
var myArtist = new Artist();
myArtist.name = 'Muse';

// should return a collection of artists entities
Client.search(myArtist)
	.then((artisCollection) => {
		artisCollection.map((artist) => {
			artist.getAlbums(); // should return a collection of albums
		})
	});
*/

/* Demo 2
1 - Login user
2 - Get mylists
3 - Add to one list
*/
let client = new Spotify({
	clientId: '9b32d53872a446b8854a95d0cfccbf43', 
	secretId: '540176b5c66241c59eac65d6f8c1b4c0',
	scopes: 'user-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private',
	redirect_uri: 'http://localhost:3000/demo/demo.html',
	token: 'BQAeDAxI5X5obYbB1GgXjnv4fPcPZdLiqEgCvWG9WzPnQykguFPS9I_WOG-jUpZFvlbAkSWz5cummHX_HqtFkyMXUpL-3umjB90QZEhCzSl58ggstWXq9DNStJLicPMK5erUV_9QCW4d7BrLotosC5Z0Zqoakb0e_1ekREJnoHfKXHNasNjDSx7hIDVCMMtqlFaIJtXyar2_lcOefwAjYGADwD_QcjvThyTTgKLOro5j-VBHjDNz1OHmkR0'
});

let myUser;

document.querySelector('#loginBtn').onclick = function() {login()};
document.querySelector('#getUserInfoBtn').onclick = function() {getUserInfo()};
document.querySelector('#getUserPlaylistBtn').onclick = function() {getUserPlaylist()};
document.querySelector('#addTrackBtn').onclick = function() {addTrackToPlaylist()};

var user = new User(client);
var playlist = new Playlist(client);

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
		});
};

var getUserPlaylist = function() {
	playlist.userPlaylists(myUser.id)
		.then((response) => {
			console.log('---playlist.userPlaylists()----', response);
		});
};

var addTrackToPlaylist = function() {
	console.log('addTrackToPlaylist')
	var traks = ['spotify:track:4iV5W9uYEdYUVa79Axb7Rh'];
	playlist.addTrack(myUser.id, '4kkmtjnPyHhjKZghURophv', traks)
		.then((response) => {
			console.log('---playlist.addTrack()----', response);
		});
};
