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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail', component: AnimeDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AnimeItemComponent,
    AnimeDetailComponent,
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
