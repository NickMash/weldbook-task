import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { YoutubeSearchService } from '../services/youtube-search.service';

@Component({
  selector: 'app-search-line',
  templateUrl: './search-line.component.html',
  styleUrls: ['./search-line.component.css']
})
export class SearchLineComponent implements OnInit {

  public sorts: any = ['Date', 'Rating', 'Title'];

  loginForm: FormGroup;

  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder, public youtubeSearchService: YoutubeSearchService) {
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      searchRequest: ['', [Validators.required]],
      location: [''],
      sorting: ['']
    });
  }

  searchMethod(): void {
    const enteredSearchRequest = this.loginForm.get('searchRequest').value;
    const enteredLocation = this.loginForm.get('location').value;
    const enteredSorting = this.loginForm.get('sorting').value;
    this.youtubeSearchService.handleSearch(enteredSearchRequest, enteredLocation, enteredSorting);
  }

}
