import { Component, Input } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent {

  constructor(public favoritesService: FavoritesService) { }

  @Input() src;
  @Input() videoTitle;
  @Input() href;
  @Input() videoChannelTitle;
  @Input() videoPublishedAt;
  @Input() videoDescription;
  @Input() videoUrl;
  @Input() id;
  @Input() isFavorites = false;


  addVideo(id): void {
    this.favoritesService.addToFavorites(id);
  }

}
