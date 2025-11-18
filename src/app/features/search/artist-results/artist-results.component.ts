import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SpotifyService } from '../../../core/services/spotify.service';
import { Artist } from '../../../core/models/artist.model';

@Component({
  selector: 'app-artist-results',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './artist-results.html',
  styleUrls: ['./artist-results.css']
})

export class ArtistResultsComponent implements OnInit {
  query: string = '';
  artists: Artist[] = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.query = params['query'];
      this.spotify.searchArtistsOnly(this.query).subscribe(res => {
        this.artists = res.artists.items;
      });
    });
  }
}