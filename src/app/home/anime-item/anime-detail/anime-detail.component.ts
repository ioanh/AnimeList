import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/shared/api.service';
import { Anime } from 'src/app/shared/anime.model';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  constructor(private apiService: api) { }

  anime: Anime;
  animeTitle: string = '';
  animeImageURL: string = '';
  animeURL: string = '';
  episodes: number = 0;
  score: number = 0;
  startDate: string = '';
  endDate: string = '';
  rated: string = '';
  members: number = 0;


  ngOnInit(): void {
    this.apiService.animeSelected.subscribe(
      (data) => {
        this.anime = data;
        this.animeTitle = this.anime.title
        this.animeImageURL = this.anime.image_url
        this.animeURL = this.anime.url
        this.episodes = this.anime.episodes
        this.score = this.anime.score
        this.startDate = this.anime.start_date
        this.endDate = this.anime.end_date
        this.rated = this.anime.rated
        this.members = this.anime.members
      }
    )
  }

}
