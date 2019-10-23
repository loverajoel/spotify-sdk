'use strict';

import Tracks from './Tracks';



/**
 * Add helpers methods to TrackEntity
 */
class Track {
  
  constructor(data) {
    return Object.assign(this, data);
  }
  /**
   * Get a list of Artsits of a Track.
   *
   * @public
   * @return {Promise}
   */
  getArtists() {
    // return Factory(this.artists);
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
    return new Tracks().getAudioFeatures(this.id);
  }
}

/**
 * Exports the Track class.
 */
export default Track;
