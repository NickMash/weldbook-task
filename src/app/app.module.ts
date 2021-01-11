import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubeSearchService } from './services/youtube-search.service';
import { FavoritesService } from './services/favorites.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { SearchLineComponent } from './search-line/search-line.component';
import { AllResultsComponent } from './all-results/all-results.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    SearchLineComponent,
    AllResultsComponent,
    FavoritesComponent,
    MenuItemComponent,
    VideoCardComponent,
    SearchContainerComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [YoutubeSearchService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
