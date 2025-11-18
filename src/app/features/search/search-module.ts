import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing-module';

import { SearchPageComponent } from './search-page/search-page.component';
import { TrackResultsComponent } from './track-results/track-results.component';
import { AlbumResultsComponent } from './album-results/album-results.component';
import { ArtistResultsComponent } from './artist-results/artist-results.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchPageComponent,
    TrackResultsComponent,
    AlbumResultsComponent,
    ArtistResultsComponent
  ]
})
export class SearchModule {}