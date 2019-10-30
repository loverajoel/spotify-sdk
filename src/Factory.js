import Client from './Client';
import Track from './entities/Track';
import Artist from './entities/Artist';
import Album from './entities/Album';

import Collection from './entities/Collection';

const getItems = (data, type) => {
  return Array.isArray(data[type]) ? data[type] : (data[type] ? data[type].items : data.items);
};

const factoryMatches = (key, data) => {
  const keys = {
    track: (data) => new Track(data),
    tracks: (data) => new Collection(getItems(data, 'tracks').map(item => new Track(item))),
    artist: (data) => new Artist(data),
    artists: (data) => new Collection(getItems(data, 'artists').map(item => new Artist(item))),
    album: (data) => new Album(data),
    albums: (data) => new Collection(getItems(data, 'albums').map(item => new Album(item))),
  };
  
  return keys[key] ? keys[key](data) : data;
};

const Factory = function (data) {
  const type = data.type || (data.items && data.items.length > 0 ? data.items[0].type+'s' : false) || Object.keys(data);

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
