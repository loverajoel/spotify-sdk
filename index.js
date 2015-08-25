import Client from './src/services/Client';
import PlaylistHandler from './src/handlers/Playlist';
import UserHandler from './src/handlers/User';
import TrackHandler from './src/handlers/Track';
import UserEntity from './src/entities/User';
import PlaylistEntity from './src/entities/PlaylistEntity';

export default {
	Client: Client,
	PlaylistHandler: PlaylistHandler,
	UserHandler: UserHandler,
	TrackHandler: TrackHandler,
	UserEntity: UserEntity,
	PlaylistEntity: PlaylistEntity
};