'use strict';

class Collection extends Array {

    set type(data) {
        this._type = `${data}Collection`;
    }

    get type() {
        return this._type;
    }

    set source(data) {
        this._source = data;
    }

    get source() {
        return this._source;
    }
}

export default Collection;