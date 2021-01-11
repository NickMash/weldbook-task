import { OnInit, Component } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{

  constructor(public favoritesService: FavoritesService) { }

  ngOnInit(): void {
      this.favoritesService.favorites = JSON.parse(localStorage.getItem('videoInfo')) || [];
      this.favoritesService.favorite$.next(this.favoritesService.favorites);
  }

  clearMemory(): void {
    this.favoritesService.favorites = [];
    this.favoritesService.favorite$.next([]);
    localStorage.removeItem('videoInfo');
  }

}
