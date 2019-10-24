'use strict';

import Tracks from './Tracks';
import Artists from './Artists';

/**
 * Add helpers methods to TrackEntity
 */
class Track {
  
  constructor(data) {
    return Object.assign(this, data);
  }
  /**
   * Get a list of Artists of a Track.
   *
   * @public
   * @return {Promise}
   */
  getArtists() {
    return new Artists().get(this.artists.map(artist => artist.id));
  }

  /**
   * Convert duration from ms to m
   *
   * @public
   * @return {String} mm:ss
   */
  get durationM() {
    let x = ~~( Number( this.duration_ms ) / 1000 );
    let seconds = x % 60;
    seconds = `${ seconds }`.length == 1? `0${ seconds }`: seconds;
    x = ~~( x / 60 );
    let minutes = x % 60;
    return `${ minutes }:${ seconds }`;
  }

  getAudioFeatures() {
    return new Tracks().getAudioFeatures(this.id);
  }
}

/**
 * Exports the Track class.
 */
export default Track;
