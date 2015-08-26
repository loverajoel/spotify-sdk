import Client from './src/services/Client';
import PlaylistHandler from './src/handlers/PlaylistHandler';
import UserHandler from './src/handlers/UserHandler';
import TrackHandler from './src/handlers/TrackHandler';
import UserEntity from './src/entities/UserEntity';
import PlaylistEntity from './src/entities/PlaylistEntity';

export default {
	Client: Client,
	PlaylistHandler: PlaylistHandler,
	UserHandler: UserHandler,
	TrackHandler: TrackHandler,
	UserEntity: UserEntity,
	PlaylistEntity: PlaylistEntity
};