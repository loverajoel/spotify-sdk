import Client from './Client';

let client = Client.instance;

describe('Client singleton', () => {
  it('should return a valid object when make a request', (done) => {
    client.request('https://api.spotify.com/v1/tracks/2UzMpPKPhbcC8RbsmuURAZ').then(response => {
      expect(response).toBeAn('object')
      done();
    })
  });
});
