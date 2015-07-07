# Spotify Client
OOP wrapper write in ECMA6. Allow you use all [Spotify Web API](https://developer.spotify.com/web-api/) endpoints.
This wrapper is Entity oriented.

It's inlude helpers for all API endpoints.

## Installation
```npm install spotify-sdk```

## Simple usage
Import the client

```import Client from './services/Client';```

Import handlers

```import Artist from './handlers/Artist';
import Track from './handlers/Track';```

Set token
*That's not necessary if you don't will use private endpoints*
```var client = new Client('token')```

Make a search

```var artist = new Artist({name: 'Muse'});
Client.search(artist)
		.then((response) => {
			// log(response);
		});
});```


## Entity Oriented
