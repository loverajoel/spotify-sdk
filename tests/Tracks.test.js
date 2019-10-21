import Client from './../src/Client';
import { Tracks, Track, Collection2 } from './../src/index';

let client = Client.instance;
client.token = 'BQA1u2EpFbLf2Kx4fphOHoI49oLZd3tGJZDR7votw5nqDrPbAEa8pZcwa8NoNfUv-xlb1QrQzeHZ0jktQgz5JKSQw5D4gZLP9rJGUX-zKOqwAYjS98a6URmOgLmHq4w5dJwUtaOyu5hnXi1bjvJAHBIJaMG3dWhGFPbP0kNSCLG28Rjj0wBdv7C4j8ZBv-FDgFDhPhlh74E037dxzbWimrTRw0W92BJVkZ7klqRGSpb1T7Ykq527BvM9EEwegPXVvjL_px0xgdw07YNILyk';

const tracksHandler = new Tracks(client);

describe('Tracks', () => {

  it('should return a Collection', async () => {
    const trackCollection = await tracksHandler.search('Julie London');
    expect(trackCollection).toBeInstanceOf(Collection2);
  });
  
  it('should return a collection of Track entities', async () => {
    const trackCollection = await tracksHandler.search('Julie London');
    expect(trackCollection.length).toBe(20);
    expect(trackCollection.getFirst()).toBeInstanceOf(Track);
  });


  it('should return a 5 tracks', async () => {
    const trackCollection = await tracksHandler.search('Julie London', { limit: 5 });
    expect(trackCollection.length).toBe(5);
  });

  it('should return a collection of Tracks by ids', async () => {
    const trackCollection = await tracksHandler.get(['4uc6eHBaQfXwWZANx4pCmS', '4P8apt1P3y4m7vQDJi2inx']);
    expect(trackCollection.length).toBe(2);
    expect(trackCollection.getFirst()).toBeInstanceOf(Track);
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

  // it('should return the audio analysis of a single track id', async () => {
  //   const audioAnalysis = await tracksHandler.getAudioAnalysis('4uc6eHBaQfXwWZANx4pCmS');
  //   expect(audioAnalysis.type).toBe('audio_analysis');
  //   expect(audioAnalysis.id).toBe('4uc6eHBaQfXwWZANx4pCmS');
  // });

});