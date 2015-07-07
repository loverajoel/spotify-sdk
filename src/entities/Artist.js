"use strict"

class Artist {

	constructor(data) {
		this._id = data.id;
		this._followers = data.followers.total;
		this._genres = data.genres;
		this._images = data.images;
		this._name = data.name;
		this._popularity = data.popularity;
		this._type = data.type;
		this._uri = data.uri;
	}

	get followers() {
		return this._followers;
	}

	set followers(data) {
		this._followers = data;
	}

	get genres() {
		return this._genres;
	}

	set genres(data) {
		this._genres = data;
	}

	get images() {
		return this._images;
	}

	set images(data) {
		this._images = data;
	}

	get name() {
		return this._name;
	}

	set name(data) {
		this._name = data;
	}

	get popularity() {
		return this._popularity;
	}

	set popularity(data) {
		this._popularity = data;
	}

	get type() {
		return this._type;
	}

	get uri() {
		return this._uri;
	}

	set uri(data) {
		this._uri = data;
	}

	get id() {
		return this._id;
	}

	set id(data) {
		this._id = data;
	}

}

export default Artist;