'use strict';

/**
 * Properties and methods of the Collection Entity
 */
class Collection {

  /**
   * Constructor
   *
   * @param {Object} data Api object
   */
  constructor(data = {}) {
    this._href = data.href;
    this._limit = data.limit;
    this._next = data.next;
    this._offset = data.offset;
    this._previous = data.previous;
    this._total = data.total;
  }

  /**
   * @param {Object} data Api response type
   */
  set type(data) {
    this._type = `${data}Collection`;
  }

  /**
   * @return {String} Collection type
   */
  get type() {
    return this._type;
  }

  /**
   * @param {Object} data Api response href
   */
  set href(data) {
    this._href = data.href;
  }

  /**
   * @return {String} Collection href
   */
  get href() {
    return this._href;
  }

  /**
   * @param {Object} data Api response limit
   */
  set limit(data) {
    this._limit = data.limit;
  }

  /**
   * @return {String} Collection limit
   */
  get limit() {
    return this._limit;
  }

  /**
   * @param {Object} data Api response next
   */
  set next(data) {
    this._next = data.next;
  }

  /**
   * @return {String} Collection next
   */
  get next() {
    return this._next;
  }

  /**
   * @param {Object} data Api response offset
   */
  set offset(data) {
    this._offset = data.offset
  }

  /**
   * @return {String} Collection offset
   */
  get offset() {
    return this._offset;
  }

  /**
   * @param {Object} data Api response previous
   */
  set previous(data) {
    this._previous = data.previous;
  }

  /**
   * @return {String} Collection previous
   */
  get previous() {
    return this._previous;
  }

  /**
   * @param {Object} data Api response total
   */
  set total(data) {
    this._total = data.total;
  }

  /**
   * @return {String} Collection total
   */
  get total() {
    return this._total;
  }

}

/**
 * Exports the Collection class.
 */
export default Collection;
