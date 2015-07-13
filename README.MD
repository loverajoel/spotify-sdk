#Spotify Client | WIP | Propopsal

Spority Client is a [Spotify Web API](https://developer.spotify.com/web-api/) wrapper for work with Collections and Entities.
It differs from the other clients becouse you don't have to work with JSON response, always the client will to return entity collections or entities.


## Example
```javascript
var myArtist = new Artist({name: 'Muse'});

client.search(myArtist).then((artistsCollection) => {
	artistsCollection[0].getAlbums(); // return a list of Albums entities
});
````

## Development
```git clone git@github.com:loverajoel/spotify-client.git```

```npm install```

```grunt watch```

