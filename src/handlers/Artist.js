"use strict"

import ArtistEntity from '../entities/Artist';

class Artist extends ArtistEntity {

	constructor(data, client) {
		super(data);
		this._client = client;
	}

	getArtist() {
		return this._client.request(`/artists/${this.id}`);
	}

	getAlbums() {
		return `https://api.spotify.com/v1/artists/${this.id}/albums`;
	}

	getTopTracks() {
		return `https://api.spotify.com/v1/artists/${this.id}/top-tracks`;
	}

	getRelatedArtists() {
		return `https://api.spotify.com/v1/artists/${this.id}/related-artists`;
	}

	client(client) {
		this._client = client;
	}

}

export default Artist;