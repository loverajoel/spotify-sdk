import Client from './../src/Client';
import { Artists, Artist, Track, Collection } from './../src/index';

let client = Client.instance;

const artistsHandler = new Artists(client);

describe('Artists', () => {

  beforeAll(async () => {
    client.token = await client.getToken();
  });

  it('should return a Collection', async () => {
    const artistsCollection = await artistsHandler.search('Unknown Mortal Orchestra');
    expect(artistsCollection).toBeInstanceOf(Collection);
  });
  
  it('should return a collection of Artist entities', async () => {
    const artistsCollection = await artistsHandler.search('Unknown Mortal Orchestra');
    expect(artistsCollection.length).toBe(1);
    expect(artistsCollection.getFirst()).toBeInstanceOf(Artist);
  });

  it('should return a 5 tracks', async () => {
    const artistsCollection = await artistsHandler.search('Ariel', { limit: 5 });
    expect(artistsCollection.length).toBe(5);
  });

  it('should return a collection of Artists by ids', async () => {
    const artistsCollection = await artistsHandler.get(['1LeVJ5GPeYDOVUjxx1y7Rp', '22bE4uQ6baNwSHPVcDxLCe']);
    expect(artistsCollection.length).toBe(2);
    expect(artistsCollection.getFirst()).toBeInstanceOf(Artist);
  });

  it('should return a single Artist by id', async () => {
    const artistsEntity = await artistsHandler.get('22bE4uQ6baNwSHPVcDxLCe');
    expect(artistsEntity).toBeInstanceOf(Artist);
    expect(artistsEntity.id).toBe('22bE4uQ6baNwSHPVcDxLCe');
  });

  it('should return a collection of Albums from the artist', async () => {
    const albumsCollection = await artistsHandler.getAlbums('22bE4uQ6baNwSHPVcDxLCe');
  });

  it('should return a collection of Tracks from the artist', async () => {
    const trackCollection = await artistsHandler.getTopTracks('5ZKMPRDHc7qElVJFh3uRqB', { country: 'US' });
    expect(trackCollection.length).toBe(10);
    expect(trackCollection.getFirst()).toBeInstanceOf(Track);
  });

  it('should return a collection of related Artists from the artist', async () => {
    const artistsCollection = await artistsHandler.getRelatedArtists('1LeVJ5GPeYDOVUjxx1y7Rp');
    expect(artistsCollection).toBeInstanceOf(Collection);
    expect(artistsCollection.length).toBe(20);
    expect(artistsCollection.getFirst()).toBeInstanceOf(Artist);
  });

  // follow
  // unfollow

});

describe('Artist', () => {

  beforeAll(async () => {
    client.token = await client.getToken();
  });
    
  // it('should return a collection of Albums for the Artist', async () => {
  //   const artistEntity = await artistsHandler.get('1LeVJ5GPeYDOVUjxx1y7Rp');
  //   const albumCollection = await artistEntity.getAlbums();
  //   expect(albumCollection).toBeInstanceOf(Collection);
  //   expect(albumCollection.getFirst()).toBeInstanceOf(Album);
  // });

  it('should return a collection of top Tracks for the Artist', async () => {
    const artistEntity = await artistsHandler.get('1LeVJ5GPeYDOVUjxx1y7Rp');
    const trackCollection = await artistEntity.getTopTracks({ country: 'US' });
    expect(trackCollection).toBeInstanceOf(Collection);
    expect(trackCollection.getFirst()).toBeInstanceOf(Track);
  });

  it('should return a collection of related Artists for the Artist', async () => {
    const artistEntity = await artistsHandler.get('1LeVJ5GPeYDOVUjxx1y7Rp');
    const artistCollection = await artistEntity.getRelatedArtists();
    expect(artistCollection).toBeInstanceOf(Collection);
    expect(artistCollection.getFirst()).toBeInstanceOf(Artist);
  });

  // follow
  // unfollow
  // contains

});