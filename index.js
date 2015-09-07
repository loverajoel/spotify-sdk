import Client from './Client';
import ArtistHandler from './handlers/ArtistHandler';
import AlbumHandler from './handlers/AlbumHandler';
import TrackHandler from './handlers/TrackHandler';
import PlaylistHandler from './handlers/PlaylistHandler';
import UserHandler from './handlers/UserHandler';
import CollectionHandler from './handlers/CollectionHandler';
import ArtistEntity from './entities/ArtistEntity';
import AlbumEntity from './entities/AlbumEntity';
import TrackEntity from './entities/TrackEntity';
import PlaylistEntity from './entities/PlaylistEntity';
import UserEntity from './entities/UserEntity';
import CollectionEntity from './entities/CollectionEntity';
import Artist from './halpers/Artist';
import Album from './halpers/Album';
import Track from './halpers/Track';
import Playlist from './halpers/Playlist';
import User from './halpers/User';
import Collection from './halpers/Collection';

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