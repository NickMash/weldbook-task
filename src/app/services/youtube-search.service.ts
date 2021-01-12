import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Video} from '../models/search.interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyDbl8IbuSUnJykMnZ8v_upTN6WKHItltBE';

  inputTouched = false;
  loading = false;
  videos: Video[] = [];
  quantity = 12;

  constructor(private http: HttpClient) {}

  changeQuantity(): void {
    this.quantity = this.quantity + 12;
    this.handleSearch();
  }

  getVideos(inputValue: string, location: string, sorting: string): Observable <any> {
    const url = `${this.API_URL}?q=${inputValue.toLowerCase()}?location=${location.toLowerCase()}?order=${sorting.toLowerCase()}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=${this.quantity.toString()}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }

  handleSearch(inputValue: string = '', location: string = '', sorting: string = ''): void {
    this.loading = true;
    this.getVideos(inputValue, location, sorting)
      .subscribe((items: any) => {
        this.videos = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        this.inputTouched = true;
        this.loading = false;
      });
  }
}
