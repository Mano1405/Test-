import { FavMoviesComponent } from './fav-movies/fav-movies.component';
import { FavMovies } from './fav-movies';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'fav',component:FavMoviesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
