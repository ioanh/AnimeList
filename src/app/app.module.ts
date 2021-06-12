import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { api } from './shared/api.service';
import { HeaderComponent } from './header/header.component';
import { AnimeItemComponent } from './home/anime-item/anime-item.component';
import { AnimeDetailComponent } from './home/anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AnimeItemComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [api],
  bootstrap: [AppComponent]
})
export class AppModule { }
