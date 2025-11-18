import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { TrackResultsComponent } from './track-results/track-results.component';
import { AlbumResultsComponent } from './album-results/album-results.component';
import { ArtistResultsComponent } from './artist-results/artist-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    children: [
      { path: 'tracks', component: TrackResultsComponent },
      { path: 'albums', component: AlbumResultsComponent },
      { path: 'artists', component: ArtistResultsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}