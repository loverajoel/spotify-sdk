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

    first() {
        return this[0];
    }

    last() {
        return this[this.length-1];
    }

    get(id) {
        return this[id];
    }
}

export default Collection;