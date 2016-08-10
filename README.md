# Spotify SDK

[![npm version](https://badge.fury.io/js/spotify-sdk.svg)](http://badge.fury.io/js/spotify-sdk)  [![Documentation Status](https://doc.esdoc.org/github.com/loverajoel/spotify-sdk/badge.svg)](https://doc.esdoc.org/github.com/loverajoel/spotify-sdk/)

> Unofficial SDK recommended for Spotify in his [developer center](https://developer.spotify.com/web-api/code-examples/)

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

## Showcase - Projects using Spotify-SDK

#### - [MagicPlaylist](http://magicplaylist.co/)

#### - [20v](http://20v.co/)

#### - [Infinite Music Trivia](https://imt.rocks/)

## Getting Started

You can get it on npm.

`npm install spotify-sdk --save`


## How to start?

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

## Documentation

[Read the documentation here](https://doc.esdoc.org/github.com/loverajoel/spotify-sdk/)

## Node Support
Now you can use the sdk in node!

## Browser Support

This SDK use Babel and Polyfill in order to add comptiblity with old browseres.

| <img src="http://vignette2.wikia.nocookie.net/inciclopedia/images/4/45/Google_Chrome_Logo.png/revision/20111125001822" width="48px" height="48px" alt="Chrome logo"> | <img src="http://people.mozilla.org/~faaborg/files/shiretoko/firefoxIcon/firefox-512.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://vignette1.wikia.nocookie.net/fallout/images/a/a0/Internet_Explorer_9_logo.png/revision/latest?cb=20110908011258&path-prefix=es" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Opera_O.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://icons.iconarchive.com/icons/hamzasaleem/stock-style-2/512/Safari-icon.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 8 ✔ |


## Development

`git clone git@github.com:loverajoel/spotify-sdk.git`

`npm install`

`npm run watch`

## Contributing

Pull requests and issues are very welcome.
If you have found an bug, please open an issue.

## License

MIT
