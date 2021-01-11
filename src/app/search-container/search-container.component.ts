import { Component, OnInit } from '@angular/core';
import { YoutubeSearchService } from '../services/youtube-search.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  constructor(public youtubeSearchService: YoutubeSearchService) { }

  ngOnInit(): void {
    this.youtubeSearchService.handleSearch();
  }

}
