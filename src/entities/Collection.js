'use strict';


class Collection extends Array {
  constructor(data) {
    super(...data);
  }

  getFirst() {
    return this[0];
  }

  getLast() {
    return this[this.length - 1];
  }

  getByIndex(index) {
    return this[index];
  }

  getNextPage() {
    return [];
  }

  getPrevPage() {
    return [];
  }
  
}

export default Collection;
