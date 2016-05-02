/*
 * Basic examples
 * Test a lot of handlers that don't require user login.
 *
 */
'use strict'

import Client from '../src/Client';
import TrackHandler from '../src/handlers/TrackHandler';
import PlaylistHandler from '../src/handlers/PlaylistHandler';
import ArtistHandler from '../src/handlers/ArtistHandler';

let client = Client.instance;

client.settings = {
	clientId: 'CLIENT_ID',
    secretId: 'SECRET_ID'
};

/*
 * TrackHandler Examples
 *
 */
var track = new TrackHandler();

/*
 * #1 example
 * Get tracks with the name 'R U mine?', should return a Collection of tracks.
 */
track.search('R U mine?', {limit: 5}).then((trackCollection) => {
	console.log(trackCollection);
});

/*
 * #2 example
 * Get tracks by single Id, should return a Track entity with his helpers.
 */
track.get('2UzMpPKPhbcC8RbsmuURAZ').then((TrackEntity) => {
	console.log(TrackEntity);
});

/*
 * #3 example
 * Get tracks by a list of Ids, should return a Collection.
 */
track.get(['4kTd0TND65MUY4BlcmJ2cM', '7iqTu4OPL3KYs4FMdtLZsy']).then((trackCollection) => {
	console.log(trackCollection);
});

/*
 * PlaylistHandler Examples
 *
 */
var playlist = new PlaylistHandler();

/*
 * #4 example
 * Get playlists with the name 'Previon De Fiesta', should return a Collection of playlists.
 */
playlist.search('Previon De Fiesta').then((playlistCollection) => {
	console.log(playlistCollection);
});

/*
 * PlaylistHandler Examples
 *
 */
var artist = new ArtistHandler();

/*
 * #4 example
 * Get artist with the name 'Muse', should return a Collection of artists.
 */
artist.search('Muse').then((artistCollection) => {
	console.log(artistCollection);
});
