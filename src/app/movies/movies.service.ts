import { FavMovies } from './fav-movies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http :HttpClient) { }

  getfavmovies(){
    return this.http.get<FavMovies[]>("]http://localhost:3000/user/fav-movies")
  }
}
