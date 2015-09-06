#Spotify Js

> This is under development mode

Use the [Spotify Web API](https://developer.spotify.com/web-api/) and always obtain Collections or Entities.

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

## Wrappers
That's library is develpment in plain JS, so you can use or create a wrapper for the framework that 
you want. (Angular, Backbone, ...)

## Documentation

After install, you should add the library to your project.

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
 
### Entities Helpers

Helpers add functionality to Entities

##### Collection

* `first()`
* `last()`
* `get(index)`

##### Playlist

* `addTrack([TrackEntity])`
* `removeTrack([TrackEntity])`
* `follow()`
* `unfollow()`
* `edit()`
* `reorder()` TODO
* `replace()` TODO

## Development

`git clone git@github.com:loverajoel/spotify-js.git`

`npm install`

`grunt watch`

## Licence

MIT