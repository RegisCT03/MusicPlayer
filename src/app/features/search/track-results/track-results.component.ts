import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SpotifyService } from '../../../core/services/spotify.service';
import { Track } from '../../../core/models/track.model';

@Component({
  selector: 'app-artist-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-results.html',
  styleUrls: ['./track-results.css']
})
export class TrackResultsComponent implements OnInit {
  query: string = '';
  tracks: Track[] = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.query = params['query'];
      this.spotify.searchTracksOnly(this.query).subscribe(res => {
        this.tracks = res.tracks.items;
      });
    });
  }
}