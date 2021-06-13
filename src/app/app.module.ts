import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { api } from './shared/api.service';
import { HeaderComponent } from './header/header.component';
import { AnimeItemComponent } from './home/anime-item/anime-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AnimeItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [api],
  bootstrap: [AppComponent]
})
export class AppModule { }
