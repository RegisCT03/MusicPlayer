import { Track } from './track.model';
import { Album } from './album.model';
import { Artist } from './artist.model';

export interface SpotifySearchResponse {
  tracks: {
    items: Track[];
  };
  albums: {
    items: Album[];
  };
  artists: {
    items: Artist[];
  };
}