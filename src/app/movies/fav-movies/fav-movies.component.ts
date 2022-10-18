import { Component, OnInit } from '@angular/core';
import { FavMovies } from '../fav-movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.scss']
})
export class FavMoviesComponent implements OnInit {
 favmovies:FavMovies[]=[]
  constructor(private movies:MoviesService) { }

  ngOnInit(): void {

    this.movies.getfavmovies().subscribe((data)=>{
      this.favmovies=data
    })

  }

}
