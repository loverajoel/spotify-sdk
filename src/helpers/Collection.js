/*
 * Collection
 * Add methods to CollectionEntity
 */
'use strict';

import CollectionEntity from '../entities/CollectionEntity';
import Factory from '../Factory';

class Collection extends CollectionEntity {

    constructor(data) {
        super(data);
    }

    /*
     * @public 
     * @override
     * @return {Collection} Collection
     */
    get next() {
        return Factory({href: this._next});
    }

    /*
     * @public 
     * @override
     * @return {Collection} Collection
     */
    get previous() {
        return Factory({href: this._next});
    }

    /*
     * @public 
     * @return {Entity} Entity
     */
    first() {
        return this[0];
    }

    /*
     * @public 
     * @return {Entity} Entity
     */
    last() {
        return this[this.length-1];
    }

    /*
     * @public 
     * @return {Entity} Entity
     */
    index(id) {
        return this[id];
    }
}

export default Collection