'use strict';
import Albums from './Albums';

/**
 * Add helpers methods to AlbumEntity
 */
class Album  {

  /**
   * @param {Object} data Album object
   */
  constructor(data) {
    return Object.assign(this, data);
  }

  /**
   * Get a list of Tracks of an Album.
   *
   * @public
   * @return {Promise}
   */
  getTracks() {
    return new Albums().getTracks(this.id);
  }

}

/**
 * Exports the Playlist class.
 */
export default Album;
