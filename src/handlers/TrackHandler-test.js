import Client from './../Client';
import TrackHandler from './TrackHandler';

let client = Client.instance;
var track = new TrackHandler();

describe('TrackHandler', () => {

  it('should return a valid object and has the base methods', (done) => {
    track.search('R U mine?', {limit: 5}).then((trackCollection) => {
      expect(trackCollection.first).toBeAn('function')
      done();
    });
  });

  it('should return a valid track', (done) => {
    track.search('R U mine?', {limit: 5}).then((trackCollection) => {
      const track = trackCollection.first();
      console.log(track.name)
      expect(track.name).toBeAn('string')
      done();
    });
  });

});
