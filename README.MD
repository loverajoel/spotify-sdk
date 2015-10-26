#Spotify SDK

[![npm version](https://badge.fury.io/js/spotify-sdk.svg)](http://badge.fury.io/js/spotify-sdk)

Entity oriented SDK to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

Entity oriented? What? Yes, you will always receive entities+helpers as the API's response.

### An awesome example

> Too simple like: Get my User then retrieve my Playlist, then add a Track to one Playlist.

```javascript
user.me().then((myUser) => { // -> return a User entity with helpers
    myUser.playlists().then((playlistsCollection) => {
        playlistsCollection.first().tracks // -> tracksCollections
        playlistsCollection.first().addTrack(trackEntity) // -> add a track to the playlist
    });
});
```

## More Examples

[Basic example](https://github.com/loverajoel/spotify-sdk/blob/master/examples/basic.js)

[Complex example](https://github.com/loverajoel/spotify-sdk/blob/master/examples/oauth.js)

## Showcase

### MagicPlaylist

[Go to the site](http://magicplaylist.co/)

![MagicPlaylist](https://github.com/loverajoel/magicplaylist/blob/master/app/img/iphone%402x.png)

## Installation

You can get it on npm.

`npm install spotify-sdk --save`

or bower.

`bower install spotify-sdk`


## Documentation

After installing, you should add the SDK to your project.

```javascript
import {Client, TrackHandler, PlaylistHandler} from 'spotify-sdk';
```

You can import all entities, handlers and resources of the library.

### Init the client

```javascript
let client = Client.instance;

client.settings = {
    clientId: 'CLIENT_ID',
    secretId: 'SECRET_ID'
};
```

If your applications require methods that need authentication:

```javascript
client.settings = {
    clientId: 'CLIENT_ID',
    secretId: 'SECRET_ID',
    scopes: [SCOPE, SCOPE2],
    redirect_uri: 'REDIRECT_URL'
};

client.token = 'TOKEN';
```
[Here](examples/oauth.js) there is a suggested implementation for login.

### Handlers

Methods for retrieving and managing information about entities.

##### Commons methods

* `convert(object)`

##### Playlist

* `search(name)`
* `featuredPlaylists()`
* `categoriesPlaylists(id)`
* `addTracks([uris], user_id, playlist_id)`
* `removeTracks([uris], user_id, playlist_id)`
* `follow()`
* `unfollow()`
* `create()`
* `edit()`
* `reorder()` TODO
* `replace()` TODO
* `isFollowing()` TODO

##### Track

* `search(name)`
* `get(id|[ids])`

##### Album

* `search(name)`
* `get(id|[ids])`
* `newReleases()`

##### Artist

* `search(name)`
* `get(id|[ids])`
* `albums(id)`
* `topTracks(user_id, country_iso)`
* `relatedArtists(user_id)`
* `follow()`
* `unfollow()`

### Entities Helpers

Helpers add functionality for Entities.

##### Collection

* `first()`
* `last()`
* `index(index)`
* `next()`
* `previous()`

##### Playlist

* `addTrack([TrackEntity])`
* `removeTrack([TrackEntity])`
* `follow()`
* `unfollow()`
* `edit()`
* `reorder()` TODO
* `replace()` TODO

##### Track

* `durationM()`

##### Album

##### Artist

* `albums()`
* `topTracks(country_iso)`
* `relatedArtists()`
* `follow()`
* `unfollow()`

## Development

`git clone git@github.com:loverajoel/spotify-sdk.git`

`npm install`

`npm run watch`

## License

MIT
