'use strict';

import TrackEntity from '../entities/TrackEntity';
import TrackHandler from '../handlers/TrackHandler';
import Factory from '../Factory';

/**
 * Add helpers methods to TrackEntity
 */
class Track extends TrackEntity {

  /**
   * @param {Object} data Track object
   */
  constructor(data) {
    super(data);
  }

  /**
   * Get a list of Tracks of an Artist.
   *
   * @public
   * @return {Promise}
   */
  get artists() {
    return Factory(this._artists);
  }

  /**
   * Convert duration from ms to m
   *
   * @public
   * @return {String} mm:ss
   */
  get durationM() {
    let x = ~~( Number( this._duration_ms ) / 1000 );
    let seconds = x % 60;
    seconds = `${ seconds }`.length == 1? `0${ seconds }`: seconds;
    x = ~~( x / 60 );
    let minutes = x % 60;
    return `${ minutes }:${ seconds }`;
  }

  audioFeatures() {
    return new TrackHandler().audioFeatures(this.id);
  }
}

/**
 * Exports the Track class.
 */
export default Track;
