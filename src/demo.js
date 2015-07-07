"use strict"

import Spotify from './services/Client';
import Artist from './handlers/Artist';


var Client = new Spotify();

// var artist = new Artist();

// artist.uri = 'spotify:artist:0TnOYISbd1XYRBk9myaseg';
// artist.id = '0TnOYISbd1XYRBk9myaseg';
// artist.name = 'Muse';

// Client.search(artist)
// 	.then((response) => {
// 		artist = new Artist(response, Client);
// 		artist.getRelatedArtists().then((a) => {
// 			console.log(a)
// 		});
// 	});

var artist = new Artist({id:'0TnOYISbd1XYRBk9myaseg'}, Client);
artist.getRelatedArtists().then((a) => {
	console.log(a)
});