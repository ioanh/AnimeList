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
  dataReceived: boolean;

  ngOnInit(){
    this.apiService.animeSelected.subscribe(
      (data) => {
        this.anime = data;
        this.dataReceived = true;
      }
    )
  }

}
