import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { api } from './shared/api.service';
import { HeaderComponent } from './header/header.component';
import { AnimeItemComponent } from './home/anime-item/anime-item.component';
import { AnimeDetailComponent } from './home/anime-item/anime-detail/anime-detail.component';
import { AnimeDisplayComponent } from './home/anime-item/anime-display/anime-display.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail', component: AnimeDetailComponent},
  {path: 'detail/:title/:score/:url/:imgURL/:episodes/:start/:end', component: AnimeDisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AnimeItemComponent,
    AnimeDetailComponent,
    AnimeDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [api],
  bootstrap: [AppComponent]
})
export class AppModule { }
