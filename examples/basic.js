'use strict'

import Spotify from '../src/services/Client';
import TrackHandler from '../src/handlers/TrackHandler';

var client = Spotify.instance;

client.settings = {
	clientId: '9b32d53872a446b8854a95d0cfccbf43', 
	secretId: '540176b5c66241c59eac65d6f8c1b4c0',
	// scopes: 'user-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private',
	redirect_uri: 'http://localhost:3000/example/example.html'
};


var track = new TrackHandler();

track.search('joel').then((resp) => {
	console.log(resp)
	resp[0].artists[0].getAlbums().then((a)=>{
		console.log(a)
	})
});


// var playlist = new PlaylistHandler(client);

// playlist.userPlaylists({id: '1258448899'}).then((playlistCollection) => {
// 	console.log(playlistCollection);
// });