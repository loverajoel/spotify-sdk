import ArtistHandler from './handlers/ArtistHandler';
import AlbumHandler from './handlers/AlbumHandler';
import Track from './entities/Track';
import Collection from './entities/Collection';
import PlaylistHandler from './handlers/PlaylistHandler';
import UserHandler from './handlers/UserHandler';
import CollectionHandler from './handlers/CollectionHandler';
import Client from './Client';

const getItems = (data, type) => {
  return Array.isArray(data[type]) ? data[type] : data[type].items;
};

const factoryMatches = (key, data) => {
  const keys = {
    track: (data) => new Track(data),
    tracks: (data) => new Collection(getItems(data, 'tracks').map(item => new Track(item))),
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
