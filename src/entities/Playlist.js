'use strict';

import Playlists from './Playlists';

/**
 * Add helpers methods to PlaylistEntity
 */
class Playlist {

  /**
   * @param {Object} data Playlist object
   */
  constructor(data) {
    return Object.assign(this, data);
  }

  /**
   * Add one or more Tracks to a Playlist.
   *
   * @public
   * @param {Array} tracks Tracks list
   * @param {Object} [query] Query parameters.
   * @return {Promise}
   */
  addTrack(tracks, query) {
    let trackList = tracks.map(track => {
      return track.uri;
    });
    return new PlaylistHandler().addTracks(trackList, this.owner.id, this.id, query);
  }

  /**
   * Remove one or more Tracks to a Playlist.
   *
   * @public
   * @param {Array} tracks Tracks list
   * @param {Object} [query] Query parameters.
   * @return {Promise}
   */
  removeTrack(tracks, query) {
    let trackList = tracks.map(track => {
      return track.uri;
    });
    return new PlaylistHandler().removeTracks(trackList, this.owner.id, this.id, query);
  }

  /**
   * Follow a Playlist
   *
   * @public
   * @param {Object} [query] query parameters.
   * @return {Promise}
   */
  follow(query) {
    return new PlaylistHandler().follow(this.owner.id, this.id, query);
  }

  /**
   * Unfollow a Playlist
   *
   * @public
   * @param {Object} [query] Query parameters.
   * @return {Promise}
   */
  unfollow(query) {
    return new PlaylistHandler().unfollow(this.owner.id, this.id, query);
  }

  /**
   * Verify if a user follow a playlist
   *
   * @public
   * @param {Array} [ids] User ids list.
   * @return {Promise}
   */
  contains(ids) {
    return new PlaylistHandler().contains(this.owner.id, this.id, ids);
  }

  /**
   * Edit a Playlist
   *
   * @public
   * @return {Promise}
   */
  edit() {
    return new PlaylistHandler().edit(this.owner.id, this.id, this.name, this.public);
  }
}

/**
 * Exports the Playlist class.
 */
export default Playlist;
