import ArtistHandler from './handlers/ArtistHandler';
import AlbumHandler from './handlers/AlbumHandler';
import TrackHandler from './handlers/TrackHandler';
import PlaylistHandler from './handlers/PlaylistHandler';
import UserHandler from './handlers/UserHandler';
import CollectionHandler from './handlers/CollectionHandler';
import Client from './Client';

/**
 * Factory is the responsible of create new entities or collections
 *
 * @param {Object} data Entity object or Api response
 */
let Factory = function(data) {
  let _type;
  let _items;
  let _source;

  if (data.error) {
    return data.error;
  } else if (Object.keys(data).length === 1 && data.snapshot_id) {
    return data;
  }

    // a lot of magic happens here :D
  if (data.type) {
    _type = data.type;
    _items = data;
  } else if (typeof Object.keys(data)[0] === 'string' && !Array.isArray(data) && !data.items) {
    _type = Object.keys(data)[0];
    _items = data[_type].items || data[_type];
    _source = data[_type];
  } else if (Array.isArray(data)){
      _type = data[0].type+'s';
      _items = data;
  } else if (Array.isArray(data.items) && data.items[0].type) {
    _type = data.items[0].type+'s';
    _items = data.items;
    _source = data;
  } else if (Array.isArray(data.items) && !data.items[0].type) {
    _items = data.items;
    _type = Object.keys(data.items[0])[3]+'s';
    _source = data;
  }

  switch(_type) {
    case 'track':
      return new TrackHandler().convert(_items);
      break;
    case 'tracks':
      return new CollectionHandler(_items, TrackHandler, _source);
      break;
    case 'playlist':
      return new PlaylistHandler().convert(_items);
      break;
    case 'playlists':
      return new CollectionHandler(_items, PlaylistHandler, _source);
      break;
    case 'artists':
      return new CollectionHandler(_items, ArtistHandler, _source);
      break;
    case 'album':
      return new AlbumHandler().convert(_items);
      break;
    case 'albums':
      return new CollectionHandler(_items, AlbumHandler, _source);
      break;
    case 'user':
      return new UserHandler().convert(_items);
      break;
    case 'undefineds':
      return data;
      break;
    case 'audio_features':
      return data;
      break;
    default:
      return Client.instance.request(data.href);
  }
};

/**
 * Exports a function that init a new Factory.
 */
export default function(data) {
  return new Factory(data);
};
