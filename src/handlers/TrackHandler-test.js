import Client from './../Client';
import TrackHandler from './TrackHandler';

let client = Client.instance;
var track = new TrackHandler();

describe('TrackHandler', () => {

  // it('should return a valid object when make a search', (done) => {
  //   track.search('R U mine?', {limit: 5}).then((trackCollection) => {
  //     expect(trackCollection).toBeAn('object')
  //     done();
  //   });
  // });

  it('should return a valid object and has the base methods', (done) => {
    track.search('R U mine?', {limit: 5}).then((trackCollection) => {
      console.log(trackCollection.first)
      // expect(trackCollection).toBeAn('object')
      done();
    });
  });

});
