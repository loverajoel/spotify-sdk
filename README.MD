#Spotify Js

> This is under development mode

SDK entity oriented for work with the [Spotify Web API](https://developer.spotify.com/web-api/).
Enitity oriented? whats? Yes, allways you will recibe entities+helpers how response of the API.

### An awesome example

> Too simple like: Get my User then retrive my Playlist, then add a Track to one Playlist.

```javascript
user.me().then((myUser) => { // -> return a User entity with helpers
    myUser.playlists().then((playlistsCollection) => {
        playlistsCollection[0].tracks // -> tracksCollections
        playlistsCollection[0].addTrack(trackEntity) // -> add a track to the playlist
    });
});
```

## More Examples

[Basic example](https://github.com/loverajoel/spotify-js/blob/master/examples/basic.js)

[Complex example](https://github.com/loverajoel/spotify-js/blob/master/examples/oauth.js)

## Installation

> TODO: do it;

You can get it on npm.

`npm install spotify-js --save`

Or bower.

`bower install spotify-js --save`

## Documentation

After install, you should add the SDK to your project.

```javascript
import {Spotify} from 'spotify-js';
```

You can import all entities, handlers and resources of the library.

### Init the client

```javascript
let client = Spotify.instance;

client.settings = {
    clientId: 'CLIENT_ID', 
    secretId: 'SECRET_ID'
};
```

If your applications required methods that need authentication.

```javascript
client.settings = {
    clientId: 'CLIENT_ID', 
    secretId: 'SECRET_ID',
    scopes: [SCOPE, SCOPE2],
    redirect_uri: 'REDIRECT_URL'
};

client.token = 'TOKEN';
```
[Here](https://github.com/loverajoel/spotify-js/blob/master/examples/oauth.js) are a suggested login implementation.

### Handlers

Methods for retrieving and manage information about entities.

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
* `follow()` TODO
* `unfollow()` TODO
 
### Entities Helpers

Helpers add functionality to Entities.

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
* `follow()` TODO
* `unfollow()` TODO

## Development

`git clone git@github.com:loverajoel/spotify-js.git`

`npm install`

`grunt watch`

## Licence

MIT