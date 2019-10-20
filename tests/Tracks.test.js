import Client from './../src/Client';
import { Tracks, Track, CollectionHandler, Collection } from './../src/index';

let client = Client.instance;
client.token = 'BQAMhjQ7wxoDI-PSEll8hYI4qd5aZ3U0SUhcFWlSCw0aYBqRiajaKZ-E4ory6KSsSHii0TUVEcQknoOEOKdbNHB3_XDPKl7KB9WGhDo-G73wyOXHl8NOk21fSyZnLBXKDNMsWdbH0rY0NxOlE6VwuTRCk2N4OPUyzTcYNo-_h6jnJ1TvBa5g9s3YooYXoQ9efqCoYYU_dlw4lRZMyGU2RKKwoF_Nv6flE8IiRGtjqxbcw7j7T4h_b_zPI6s6eMuIYFTPYKgNngMFF-awMMk';

const tracksHandler = new Tracks(client);

describe('Tracks', () => {

  // it('should return a collection', async () => {
  //   const trackCollection = await tracksHandler.search('Julie London');
  //   expect(trackCollection).toBeInstanceOf(Collection);
  // });
  
  it('should return a collection of Track entities', async () => {
    const trackCollection = await tracksHandler.search('Julie London');
    expect(trackCollection.length).toBe(20);
    expect(trackCollection.first()).toBeInstanceOf(Track);
  });


  it('should return a 5 tracks', async () => {
    const trackCollection = await tracksHandler.search('Julie London', { limit: 5 });
    expect(trackCollection.length).toBe(5);
  });

  it('should return a collection of Tracks by ids', async () => {
    const trackCollection = await tracksHandler.get(['4uc6eHBaQfXwWZANx4pCmS', '4P8apt1P3y4m7vQDJi2inx']);
    expect(trackCollection.length).toBe(2);
    expect(trackCollection.first()).toBeInstanceOf(Track);
  });

  it('should return a single Track by id', async () => {
    const trackEntity = await tracksHandler.get('4uc6eHBaQfXwWZANx4pCmS');
    expect(trackEntity).toBeInstanceOf(Track);
    expect(trackEntity.id).toBe('4uc6eHBaQfXwWZANx4pCmS');
  });

  it('should return the audio features of a single track id', async () => {
    const audioFeatures = await tracksHandler.getAudioFeatures('4uc6eHBaQfXwWZANx4pCmS');
    expect(audioFeatures.type).toBe('audio_features');
    expect(audioFeatures.id).toBe('4uc6eHBaQfXwWZANx4pCmS');
  });

  it('should return the audio features of a list of track ids', async () => {
    const audioFeatures = await tracksHandler.getAudioFeatures(['4uc6eHBaQfXwWZANx4pCmS', '4P8apt1P3y4m7vQDJi2inx']);
    expect(audioFeatures.audio_features.length).toBe(2);
    expect(audioFeatures.audio_features[0].type).toBe('audio_features');
  });

});