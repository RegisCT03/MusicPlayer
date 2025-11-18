import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SpotifyService } from '../../../core/services/spotify.service';
import { Album } from '../../../core/models/album.model';

@Component({
  selector: 'app-artist-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-results.html',
  styleUrls: ['./album-results.css']
})
export class AlbumResultsComponent implements OnInit {
  query: string = '';
  albums: Album[] = [];

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.query = params['query'];
      this.spotify.searchAlbumsOnly(this.query).subscribe(res => {
        this.albums = res.albums.items;
      });
    });
  }
}