import Client from './src/Client';
import ArtistHandler from './src/handlers/ArtistHandler';
import AlbumHandler from './src/handlers/AlbumHandler';
import TrackHandler from './src/handlers/TrackHandler';
import PlaylistHandler from './src/handlers/PlaylistHandler';
import UserHandler from './src/handlers/UserHandler';
import CollectionHandler from './src/handlers/CollectionHandler';
import ArtistEntity from './src/entities/ArtistEntity';
import AlbumEntity from './src/entities/AlbumEntity';
import TrackEntity from './src/entities/TrackEntity';
import PlaylistEntity from './src/entities/PlaylistEntity';
import UserEntity from './src/entities/UserEntity';
import CollectionEntity from './src/entities/CollectionEntity';
import Artist from './src/helpers/Artist';
import Album from './src/helpers/Album';
import Track from './src/helpers/Track';
import Playlist from './src/helpers/Playlist';
import User from './src/helpers/User';
import Collection from './src/helpers/Collection';

export default {
	Client: Client,
	ArtistHandler: ArtistHandler,
	AlbumHandler: AlbumHandler,
	TrackHandler: TrackHandler,
	PlaylistHandler: PlaylistHandler,
	UserHandler: UserHandler,
	CollectionHandler: CollectionHandler,
	ArtistEntity: ArtistEntity,
	AlbumEntity: AlbumEntity,
	TrackEntity: TrackEntity,
	PlaylistEntity: PlaylistEntity,
	UserEntity: UserEntity,
	CollectionEntity: CollectionEntity,
	Artist: Artist,
	Album: Album,
	Track: Track,
	Playlist: Playlist,
	User: User,
	Collection: Collection
};