import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SpotifySearchResponse } from '../models/spotify-search-response-model';
import { Track } from '../models/track.model';
import { Album } from '../models/album.model';
import { Artist } from '../models/artist.model';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private getHeaders(): HttpHeaders {
    const token = this.auth.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  searchAll(query: string): Observable<SpotifySearchResponse> {
    return this.http.get<SpotifySearchResponse>(
      `${this.baseUrl}/search?q=${query}&type=track,album,artist&limit=10`,
      { headers: this.getHeaders() }
    );
  }

  searchTracksOnly(query: string): Observable<{ tracks: { items: Track[] } }> {
    return this.http.get<{ tracks: { items: Track[] } }>(
      `${this.baseUrl}/search?q=${query}&type=track&limit=10`,
      { headers: this.getHeaders() }
    );
  }

  searchAlbumsOnly(query: string): Observable<{ albums: { items: Album[] } }> {
    return this.http.get<{ albums: { items: Album[] } }>(
      `${this.baseUrl}/search?q=${query}&type=album&limit=10`,
      { headers: this.getHeaders() }
    );
  }

  searchArtistsOnly(query: string): Observable<{ artists: { items: Artist[] } }> {
    return this.http.get<{ artists: { items: Artist[] } }>(
      `${this.baseUrl}/search?q=${query}&type=artist&limit=10`,
      { headers: this.getHeaders() }
    );
  }
}