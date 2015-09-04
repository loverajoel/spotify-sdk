#Spotify Js

> This is under development mode

Library to consume the [Spotify Web API](https://developer.spotify.com/web-api/) for work with Collections and Entities.:dance:
It differs from the other clients beacouse you don't have to work with JSON response, always the client will return entity collections or entities.

## An awesome example

```js
user.me().then((myUser) => {
	myUser.playlists().then((playlistsCollection) => {
		playlistsCollection[0].tracks // -> tracksCollections
		playlistsCollection[0].addTrack(trackEntity) // -> add a track to the playlist
	});
});
```

## Examples

[Basic example](https://github.com/loverajoel/spotify-js/blob/master/examples/basic.js)
[Complex example](https://github.com/loverajoel/spotify-js/blob/master/examples/oauth.js)

## Installation | TODO

You can get it on npm.

`npm install spotify-js --save`

Or bower.

`bower install spotify-js --save`

## Documentation

## Development

`git clone git@github.com:loverajoel/spotify-js.git`

`npm install`

`grunt watch`

## Licence

MIT