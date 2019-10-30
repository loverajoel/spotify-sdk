import Client from './../src/Client';
import { Tracks, Track, Artist, Collection } from './../src/index';

let client = Client.instance;

const tracksHandler = new Tracks(client);

describe('Tracks', () => {

  beforeAll(async () => {
    client.token = await client.getToken();
  });

  it('should return a Collection', async () => {
    const trackCollection = await tracksHandler.search('Julie London');
    expect(trackCollection).toBeInstanceOf(Collection);
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

  it('should return the audio analysis of a single track id', async () => {
    const audioAnalysis = await tracksHandler.getAudioAnalysis('4uc6eHBaQfXwWZANx4pCmS');
    expect(Array.isArray(audioAnalysis.bars)).toBe(true);
    expect(Array.isArray(audioAnalysis.beats)).toBe(true);
  });

});


describe('Track', () => {

  beforeAll(async () => {
    client.token = await client.getToken();
  });

  it('should return a the duration on minutes', async () => {
    const trackEntity = await tracksHandler.get('4P8apt1P3y4m7vQDJi2inx');
    expect(trackEntity).toBeInstanceOf(Track);
    expect(trackEntity.id).toBe('4P8apt1P3y4m7vQDJi2inx');
    expect(trackEntity.durationM).toBe('3:01');
  });

  it('should return the audio features of a track', async () => {
    const trackEntity = await tracksHandler.get('4P8apt1P3y4m7vQDJi2inx');
    const audioFeatures = await trackEntity.getAudioFeatures();
    expect(audioFeatures.id).toBe('4P8apt1P3y4m7vQDJi2inx');
    expect(audioFeatures.type).toBe('audio_features');
  });

  it('should return a collection of Artist for the track', async () => {
    const trackEntity = await tracksHandler.get('4P8apt1P3y4m7vQDJi2inx');
    const artistCollection = await trackEntity.getArtists();
    expect(artistCollection).toBeInstanceOf(Collection);
    expect(artistCollection.getFirst()).toBeInstanceOf(Artist);
  });

});