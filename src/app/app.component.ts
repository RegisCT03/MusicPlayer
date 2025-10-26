import { Component } from '@angular/core';
import { SpotifyService } from '../app/core/services/spotify.service';
import { PlayerService } from './features/player/services/player.service';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { PlayerMainComponent } from "./features/player/components/player-main/player-main.component";
import { PlaylistSidebarComponent } from "./features/player/components/playlist-sidebar/playlist-sidebar.component";
import { PlayerControlsComponent } from "./features/player/components/player-controls/player-controls.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    NavbarComponent,
    PlayerMainComponent,
    PlaylistSidebarComponent,
    PlayerControlsComponent
  ]
})
export class AppComponent {
  title = 'music-player';

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}

  onSearch(query: string): void {
    this.spotifyService.searchTracks(query).subscribe(tracks => {
      if (tracks.length > 0) {
        this.playerService.setPlaylist(tracks);
        this.playerService.playTrack(tracks[0]);
      }
    });
  }

  loginWithSpotify(): void {
    const clientId = 'TU_CLIENT_ID';
    const redirectUri = 'http://localhost:4200/callback';
    const scopes = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
      'streaming'
    ];

    const authUrl = `https://accounts.spotify.com/authorize?` +
      `client_id=${clientId}` +
      `&response_type=token` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scopes.join(' '))}`;

    window.location.href = authUrl;
  }
}