import Client from './../Client';
import PlaylistHandler from './PlaylistHandler';
import UserHandler from './UserHandler';
import TrackHandler from './TrackHandler';

const client = new Client('BQCI6-F-tGgZrTQQTWAg1bQfk8agnxZ7nAFVt3hFayIU8XqfPePmE-S-MWz2FDS487JNiaE3E-lxrPYkX1BZI3SEEVE88clU4PE_Kx1JvpquRzF3JzlEJjEhFw7PpEKhqS5atkjTp0jaraFt6Ngrqrc2VOpEol04owT2Di3hufDXSZGdd8gK-4bIdQsFviUusPArTm_BTPMfg0gPbkYV503T3KHeBXkreUcs8cTXpnESWDPm4dqkUMK_jdVg3yS5Cpk');
const playlist = new PlaylistHandler(client);
const user = new UserHandler(client);

describe('PlaylistHandler', () => {

  it('should save a playlist', (done) => {
    let myTrack;

    new TrackHandler(client).search('Ginza').then(trackCollection => {
      myTrack = trackCollection.first();
    });

    playlist.create('1258448899', 'tes', true).then((myPlaylist) => {
      console.log(myPlaylist.addTrack)
      myPlaylist.addTrack([myTrack]).then(snapshot => {
        console.log(snapshot)
        done();
      }).catch(response => {
        console.log(response)
        done()
      })
      // expect(trackCollection.first).toBeAn('function')

    });
  });


  // it('should save a playlist', (done) => {
  //   let myTrack;

  //   new TrackHandler(client).search('Ginza').then(trackCollection => {
  //     myTrack = trackCollection.first();
  //   });

  //   user.me().then((user) => {
  //     user.playlists('5ViEO6BLk3KN1W6PkkS4TQ').then((playlistEntity) => {
  //       playlistEntity.addTrack([myTrack]).then((response) => {
  //         done()
  //       });
  //     });
  //    });
  // });

});
