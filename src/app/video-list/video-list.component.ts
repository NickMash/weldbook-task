import {Component, Input} from '@angular/core';
import { Video } from '../models/search.interface';
import {FavoritesService} from '../services/favorites.service';
import {YoutubeSearchService} from '../services/youtube-search.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {

    @Input() videos: Video[];

  constructor(public favoritesService: FavoritesService, public youtubeSearchService: YoutubeSearchService) { }

  clearMemory(): void {
    this.favoritesService.favorites = [];
    this.favoritesService.favorite$.next([]);
    localStorage.removeItem('videoInfo');
  }

}
