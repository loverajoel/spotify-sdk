"use strict"

// Import client
import Spotify from '../src/services/Client';
// Import handlers
import Artist from '../src/handlers/Artist';


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

