/*
 * Basic examples
 * Test a lot of handlers that don't require user login.
 *
 */
'use strict'

import Spotify from '../src/services/Client';
import TrackHandler from '../src/handlers/TrackHandler';
import PlaylistHandler from '../src/handlers/PlaylistHandler';
import ArtistHandler from '../src/handlers/ArtistHandler';

let client = Spotify.instance;

client.settings = {
	clientId: '9b32d53872a446b8854a95d0cfccbf43', 
	secretId: '540176b5c66241c59eac65d6f8c1b4c0',
	redirect_uri: 'http://localhost:3000/example/example.html'
};

/*
 * TrackHandler Examples
 *
 */
var track = new TrackHandler();

/*
 * #1 example
 * Get tracks with the name 'R U mine?', shoud return a Collection of tracks.
 */
track.search('R U mine?').then((response) => {
	console.log('-----TrackHandler - #1 Example-----');
	console.log(response);
});

/*
 * #2 example
 * Get tracks with by single Id, shoud return a Track.
 */
// track.get('2UzMpPKPhbcC8RbsmuURAZ').then((response) => {
// 	console.log('-----TrackHandler - #2 Example-----');
// 	console.log(response);
// });

/*
 * #3 example
 * Get tracks with by a list of Ids, shoud return a Collection.
 */
// track.get(['4kTd0TND65MUY4BlcmJ2cM', '7iqTu4OPL3KYs4FMdtLZsy']).then((response) => {
// 	console.log('-----TrackHandler - #3 Example-----');
// 	console.log(response);
// });

/*
 * PlaylistHandler Examples
 *
 */
// var playlist = new PlaylistHandler();

/*
 * #4 example
 * Get playlists with the name 'Previon De Fiesta', shoud return a Collection of playlists.
 */
// playlist.search('Previon De Fiesta').then((response) => {
// 	console.log('-----PlaylistHandler - #4 Example-----');
// 	console.log(response);
// });

/*
 * PlaylistHandler Examples
 *
 */
// var artist = new ArtistHandler();

/*
 * #4 example
 * Get artit with the name 'Muse', shoud return a Collection of artists.
 */
// artist.search('Muse').then((response) => {
// 	console.log('-----ArtistHandler - #5 Example-----');
// 	console.log(response);
// });
