import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./features/locations/locations.module').then(
        (m) => m.LocationsModule
      ),
  },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
