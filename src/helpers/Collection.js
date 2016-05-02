'use strict';

import CollectionEntity from '../entities/CollectionEntity';
import Factory from '../Factory';


/**
 * Add helpers methods to CollectionEntity
 */
class Collection extends CollectionEntity {

  /**
   * @param {Object} data Collection object
   */
  constructor(data) {
    super(data);
  }

  /**
   * Get the next page of the Collection
   *
   * @public
   * @override
   * @return {Promise}
   */
  get next() {
    return Factory({href: this._next});
  }

  /**
   * Get the prev page of the Collection
   *
   * @public
   * @override
   * @return {Promise}
   */
  get previous() {
    return Factory({href: this._next});
  }

  /**
   * Get the first Entity of the Collection
   *
   * @public
   * @override
   * @return {Object} Entity
   */
  first() {
    return this[0];
  }

  /**
   * Get the last Entity of the Collection
   *
   * @public
   * @override
   * @return {Object} Entity
   */
  last() {
    return this[this.length-1];
  }

  /**
   * Get a Entity based of a index
   *
   * @public
   * @override
   * @return {Object} Entity
   */
  index(id) {
    return this[id];
  }
}

/**
 * Exports the Collection class.
 */
export default Collection
