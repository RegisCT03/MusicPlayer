import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient, private auth: AuthService) {}

}