'use strict';

import ArtistHandler from '../handlers/ArtistHandler';
import TrackHandler from '../handlers/TrackHandler';
import PlaylistHandler from '../handlers/PlaylistHandler';
import CollectionHandler from '../handlers/CollectionHandler';

var Factory = function(data) {
    var _type;
    var _items;

    // a lot of magic happens here :D
    if (data.type) {
        _type = data.type;
        _items = data;
    } else if (typeof Object.keys(data)[0] === 'string' && !Array.isArray(data)) {
        _type = Object.keys(data)[0];
        _items = data[_type].items || data[_type];
    } else if (Array.isArray(data)){
        _type = data[0].type+'s';
        _items = data;
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
    }

};

export default function(data) {
    return new Factory(data);
};