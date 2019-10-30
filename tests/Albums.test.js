import Client from './../src/Client';
import { Album, Albums, Collection } from './../src/index';

let client = Client.instance;

const albumsHandler = new Albums(client);

describe.skip('Albums', () => {

  beforeAll(async () => {
    client.token = await client.getToken();
  });

  it('should return a Collection', async () => {
    const albumsCollection = await albumsHandler.search('Live in Buenos Aires');
    expect(albumsCollection).toBeInstanceOf(Collection);
  });
  
  it('should return a collection of Albums entities', async () => {
    const albumsCollection = await albumsHandler.search('Live');
    expect(albumsCollection.length).toBe(20);
    expect(albumsCollection.getFirst()).toBeInstanceOf(Album);
  });

  it('should return 5 Albums', async () => {
    const albumsCollection = await albumsHandler.search('Live', { limit: 5 });
    expect(albumsCollection.length).toBe(5);
  });

  it('should return a collection of Albums by ids', async () => {
    const albumsCollection = await albumsHandler.get(['0rxKf57PZvWEoU8v3m5W2q', '3JRPfW15UIAdRYuBvNxLkR']);
    expect(albumsCollection.length).toBe(2);
    expect(albumsCollection.getFirst()).toBeInstanceOf(Album);
  });

  it('should return a single Album by id', async () => {
    const albumEntity = await albumsHandler.get('0rxKf57PZvWEoU8v3m5W2q');
    expect(albumEntity).toBeInstanceOf(Album);
    expect(albumEntity.id).toBe('0rxKf57PZvWEoU8v3m5W2q');
  });


  it('should return a collection of new released Albums', async () => {
    const albumsCollection = await albumsHandler.getNewReleases({ country: 'US' });
    expect(albumsCollection.length).toBe(20);
    expect(albumsCollection.getFirst()).toBeInstanceOf(Album);
  });

});

describe.skip('Artist', () => {

  beforeAll(async () => {
    client.token = await client.getToken();
  });
    
  // it('should return a collection of Albums for the Artist', async () => {
  //   const artistEntity = await albumsHandler.get('1LeVJ5GPeYDOVUjxx1y7Rp');
  //   const albumCollection = await artistEntity.getAlbums();
  //   expect(albumCollection).toBeInstanceOf(Collection);
  //   expect(albumCollection.getFirst()).toBeInstanceOf(Album);
  // });

  it('should return a collection of top Tracks for the Artist', async () => {
    const artistEntity = await albumsHandler.get('1LeVJ5GPeYDOVUjxx1y7Rp');
    const trackCollection = await artistEntity.getTopTracks({ country: 'US' });
    expect(trackCollection).toBeInstanceOf(Collection);
    expect(trackCollection.getFirst()).toBeInstanceOf(Track);
  });

  it('should return a collection of related Artists for the Artist', async () => {
    const artistEntity = await albumsHandler.get('1LeVJ5GPeYDOVUjxx1y7Rp');
    const artistCollection = await artistEntity.getRelatedArtists();
    expect(artistCollection).toBeInstanceOf(Collection);
    expect(artistCollection.getFirst()).toBeInstanceOf(Artist);
  });

});