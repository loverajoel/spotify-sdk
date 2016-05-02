'use strict';

import AlbumEntity from '../entities/AlbumEntity';
import AlbumHandler from '../handlers/AlbumHandler';
import Factory from '../Factory';

/**
 * Add helpers methods to AlbumEntity
 */
class Album extends AlbumEntity {

	/**
   * @param {Object} data Album object
   */
  constructor(data) {
    super(data);
  }
}

/**
 * Exports the Playlist class.
 */
export default Album;
