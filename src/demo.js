"use strict"

import Client from './services/Client';
import Artist from './handlers/Artist';


var mockArtist = {"external_urls" : {"spotify" : "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"}, "followers" : {"href" : null, "total" : 2562949 }, "genres" : [ ], "href" : "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg", "id" : "0TnOYISbd1XYRBk9myaseg", "images" : [ {"height" : 563, "url" : "https://i.scdn.co/image/5f85e5201ae4c5dd50f60ee1feb4e1064683a90a", "width" : 1000 }, {"height" : 360, "url" : "https://i.scdn.co/image/9fd04c1995a00a83c2bee8f1b61cd1985fef1c79", "width" : 640 }, {"height" : 113, "url" : "https://i.scdn.co/image/4047ef29f1bd3f01ccad63284d7d7e6932bbcf54", "width" : 200 }, {"height" : 36, "url" : "https://i.scdn.co/image/776e79508e0e234aa63d9250ebbf1d6556839ef5", "width" : 64 } ], "name" : "Pitbull", "popularity" : 96, "type" : "artist", "uri" : "spotify:artist:0TnOYISbd1XYRBk9myaseg"};

var Spotify = new Client('token');

var artist = new Artist(mockArtist);

console.log(artist.getAlbums());


