import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { YoutubeSearchService } from './youtube-search.service';

@Injectable()
export class FavoritesService {

  constructor(private youtubeSearchService: YoutubeSearchService) {
  }

  public favorite$: any = new BehaviorSubject([]);
  favorites = [];

  addToFavorites(id): void {
    const videoInfo = this.youtubeSearchService.videos?.find(item => (item.videoId === id));
    this.favorites.push(videoInfo);
    this.favorite$.next(this.favorites);
    localStorage.setItem('videoInfo', JSON.stringify(this.favorites));
  }

  checkFavorites(id): any {
    return  this.favorites.find(item => (item.videoId === id));
  }
}
