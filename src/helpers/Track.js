/*
 * Track
 * Add methods to TrackEntity
 */
'use strict';

import TrackEntity from '../entities/TrackEntity';
import TrackHandler from '../handlers/TrackHandler';
import Factory from '../Factory';

class Track extends TrackEntity {

    constructor(data) {
        super(data);
    }

    /*
     * @public 
     * @override
     * @return {Collection} artistCollection
     */
    get artists() {
        return Factory(this._artists);
    }

    /*
     * Convert duration from ms to m
     *
     * @public 
     * @return {string} mm:ss
     */
    get durationM() {
        let x = ~~( Number( this._duration_ms ) / 1000 );
        let seconds = x % 60;
        seconds = `${ seconds }`.length == 1? `0${ seconds }`: seconds;
        x = ~~( x / 60 );
        let minutes = x % 60;
        return `${ minutes }:${ seconds }`;
    }

}

export default Track;