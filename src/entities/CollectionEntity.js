'use strict';

class Collection extends Array {

    set type(data) {
        this._type = `${data}Collection`;
    }

    get type() {
        return this._type;
    }

    set extras(data) {
        this._extras = data;
    }

    get extras() {
        return this._extras;
    }
}

export default Collection;