'use strict';

import ArtistHandler from './ArtistHandler';
import TrackHandler from './TrackHandler';
import CollectionHandler from './CollectionHandler';

var Factory = function(data) {
    var _type;
    var _items;

    if (data.type) {
        _type = data.type;
        _items = data;
    } else if (typeof Object.keys(data)[0] === 'string' && !Array.isArray(data)) {
        _type = Object.keys(data)[0];
        _items = data[_type].items;
    } else if (Array.isArray(data)){
        _type = data[0].type+'s';
        _items = data;
    }

    switch(_type) {
        case 'track':
            return new TrackHandler.convert(_items);
            break;
        case 'tracks':
            return new CollectionHandler(_items, TrackHandler);
            break;
        case 'artists':
            return new CollectionHandler(_items, ArtistHandler);
            break;
    }

};

export default function(data) {
    return new Factory(data);
};