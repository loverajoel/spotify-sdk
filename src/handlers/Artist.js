"use strict"

import ArtistEntity from '../entities/Artist';

class Artist extends ArtistEntity {

	constructor(data, client) {
		super(data);
		this._client = client;
	}

	getAlbums() {
		console.log(this._client.search())
		return `https://api.spotify.com/v1/artists/${this.id}/albums`;
	}

	getTopTracks() {
		return `https://api.spotify.com/v1/artists/${this.id}/top-tracks`;
	}

	getRelatedArtists() {
		return `https://api.spotify.com/v1/artists/${this.id}/related-artists`;
	}

}

export default Artist;