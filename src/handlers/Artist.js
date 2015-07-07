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
		return this._client.request(`/artists/${this.id}/albums`);
	}

	getTopTracks() {
		return this._client.request(`/artists/${this.id}/top-tracks`);
	}

	getRelatedArtists() {
		return this._client.request(`/artists/${this.id}/related-artists`);
	}

	client(client) {
		this._client = client;
	}

}

export default Artist;