import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search/:query',
    loadChildren: () =>
      import('../app/features/search/search-module').then(m => m.SearchModule)
  },
  { path: '**', redirectTo: '' }
];