"use strict"

import Spotify from '../src/services/Client';
import TrackHandler from '../src/handlers/TrackHandler';
import PlaylistHandler from '../src/handlers/PlaylistHandler';

var client = Spotify.instance;

client.settings = {
	clientId: '9b32d53872a446b8854a95d0cfccbf43', 
	secretId: '540176b5c66241c59eac65d6f8c1b4c0',
	scopes: 'user-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private',
	redirect_uri: 'http://localhost:3000/demo/demo.html',
	// token: 'BQC44f-6UoWqp2kiHyTykOTpOiJN4ei3xmCAE0_any0JgxCADwLgW25qZlSYJVjnq4fOGLReyCc3q0VwAhnyH88LHhzJVbIwcj9GDaWN9avdC9C3TiYeeT8iqaodqintSx5aLbMOPFwW3un-wnHMUyJZs-06cwwskM6IpVHeJYt6CEkx6jmDu2f940Qgq4t0O14xQvUdDEfMkON4NCG5ezC4MjBt6PiN_wnMoAj0ZZkUiEOQHZRrwRCCwRI'
};

// client.login().then((a) => {
// 	console.log(a)
// });

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