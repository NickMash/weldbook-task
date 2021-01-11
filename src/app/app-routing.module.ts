import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllResultsComponent} from './all-results/all-results.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: 'all-results', component: AllResultsComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: '**', redirectTo: 'all-results'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
