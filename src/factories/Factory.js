'use strict';

import ArtistHandler from '../handlers/ArtistHandler';
import TrackHandler from '../handlers/TrackHandler';
import PlaylistHandler from '../handlers/PlaylistHandler';
import UserHandler from '../handlers/UserHandler';
import CollectionHandler from '../handlers/CollectionHandler';
import Client from '../services/Client';

var Factory = function(data) {
    var _type;
    var _items;

    // a lot of magic happens here :D
    if (data.type) {
        _type = data.type;
        _items = data;
    } else if (typeof Object.keys(data)[0] === 'string' && !Array.isArray(data) && !data.items) {
        _type = Object.keys(data)[0];
        _items = data[_type].items || data[_type];
    } else if (Array.isArray(data)){
        _type = data[0].type+'s';
        _items = data;
    } else if (Array.isArray(data.items) && data.items[0].type) {
        _type = data.items[0].type+'s';
        _items = data.items;
    } else if (Array.isArray(data.items) && !data.items[0].type) {
        _items = data.items;
        _type = Object.keys(data.items[0])[3]+'s';
    }

    switch(_type) {
        case 'track':
            return new TrackHandler().convert(_items);
            break;
        case 'tracks':
            return new CollectionHandler(_items, TrackHandler);
            break;
        case 'playlist':
            return new PlaylistHandler().convert(_items);
            break;
        case 'playlists':
            return new CollectionHandler(_items, PlaylistHandler);
            break;
        case 'artists':
            return new CollectionHandler(_items, ArtistHandler);
            break;
        case 'user':
            return new UserHandler().convert(_items);
            break;
        default:
            return Client.instance.request(data.href);
    }

};

export default function(data) {
    return new Factory(data);
};