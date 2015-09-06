'use strict';

class Collection extends Array {

    constructor(data = {}) {
        super()
        this._href = data.href;
        this._limit = data.limit;
        this._next = data.next;
        this._offset = data.offset;
        this._previous = data.previous;
        this._total = data.total;
    }

    set type(data) {
        this._type = `${data}Collection`;
    }

    get type() {
        return this._type;
    }

    set href(data) {
        this._href = data.href;
    }

    get href() {
        return this._href;
    }

    set limit(data) {
        this._limit = data.limit;
    }

    get limit() {
        return this._limit;
    }

    set next(data) {
        this._next = data.next;
    }

    get next() {
        return this._next;
    }
    
    set offset(data) {
        this._offset = data.offset
    }

    get offset() {
        return this._offset;
    }

    set previous(data) {
        this._previous = data.previous;
    }

    get previous() {
        return this._previous;
    }

    set total(data) {
        this._total = data.total;
    }

    get total() {
        return this._total;
    }
    
}

export default Collection;