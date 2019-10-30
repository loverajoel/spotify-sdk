import Client from './../src/Client';
import { Playlists, Playlist, Collection } from './../src/index';

let client = Client.instance;

const playlistsHandler = new Playlists(client);

describe('Playlists', () => {

  beforeAll(async () => {
    client.token = await client.getToken();
  });

  it('should return a Collection', async () => {
    const playlistsCollection = await playlistsHandler.search('Indie');
    expect(playlistsCollection).toBeInstanceOf(Collection);
  });
  
  it('should return a collection of Playlists entities', async () => {
    const playlistsCollection = await playlistsHandler.search('Indie');
    expect(playlistsCollection.length).toBe(20);
    expect(playlistsCollection.getFirst()).toBeInstanceOf(Playlist);
  });

  it('should return a 5 Playlists', async () => {
    const playlistsCollection = await playlistsHandler.search('Indie', { limit: 5 });
    expect(playlistsCollection.length).toBe(5);
  });

  it('should return a Playlists by id', async () => {
    const playlistEntity = await playlistsHandler.get('37i9dQZF1DWWM6GBnxtToT');
    expect(playlistEntity).toBeInstanceOf(Playlist);
  });

  it('should return a collection of Feature Playlists', async () => {
    const playlistsCollection = await playlistsHandler.getFeaturedPlaylists();
    expect(playlistsCollection.getFirst()).toBeInstanceOf(Playlist);
  });

  it('should return a collection of Playlists by category', async () => {
    const playlistsCollection = await playlistsHandler.getPlaylistsByCategory('rock', { limit: 2 });
    expect(playlistsCollection.length).toBe(2);
    expect(playlistsCollection.getFirst()).toBeInstanceOf(Playlist);
  });

  // user methods
  
});