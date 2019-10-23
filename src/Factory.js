import ArtistHandler from './handlers/ArtistHandler';
import AlbumHandler from './handlers/AlbumHandler';

import PlaylistHandler from './handlers/PlaylistHandler';
import UserHandler from './handlers/UserHandler';
import CollectionHandler from './handlers/CollectionHandler';


import Client from './Client';
import Track from './entities/Track';
import Artist from './entities/Artist';
import Collection from './entities/Collection';

const getItems = (data, type) => {
  return Array.isArray(data[type]) ? data[type] : data[type].items;
};

const factoryMatches = (key, data) => {
  const keys = {
    track: (data) => new Track(data),
    tracks: (data) => new Collection(getItems(data, 'tracks').map(item => new Track(item))),
    artists: (data) => new Collection(getItems(data, 'artists').map(item => new Artist(item))),
    artist: (data) => new Artist(data),
  };
  
  return keys[key] ? keys[key](data) : data;
};

const Factory = function (data) {
  const type = data.type || Object.keys(data);

  if (type) {
    return factoryMatches(type, data)
  } else {
    return data;
  }
  
  return data;
};

/**
 * Exports a function that init a new Factory.
 */
export default function(data) {
  return new Factory(data);
};
