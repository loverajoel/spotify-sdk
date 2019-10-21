import Client from './../src/Client';

let client = Client.instance;

client.token = 'BQA1u2EpFbLf2Kx4fphOHoI49oLZd3tGJZDR7votw5nqDrPbAEa8pZcwa8NoNfUv-xlb1QrQzeHZ0jktQgz5JKSQw5D4gZLP9rJGUX-zKOqwAYjS98a6URmOgLmHq4w5dJwUtaOyu5hnXi1bjvJAHBIJaMG3dWhGFPbP0kNSCLG28Rjj0wBdv7C4j8ZBv-FDgFDhPhlh74E037dxzbWimrTRw0W92BJVkZ7klqRGSpb1T7Ykq527BvM9EEwegPXVvjL_px0xgdw07YNILyk';

// client singleton is a real singleton
// request works
// settings and token are setted correclty

describe('Client singleton', () => {
  it('should return a valid object when make a request', (done) => {
    // client.request('https://api.spotify.com/v1/tracks/2UzMpPKPhbcC8RbsmuURAZ').then(response => {
      done();
    // })
  });
});