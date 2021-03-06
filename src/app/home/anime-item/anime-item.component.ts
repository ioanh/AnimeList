import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from 'src/app/shared/anime.model';
import { api } from 'src/app/shared/api.service';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.css']
})
export class AnimeItemComponent implements OnInit {

  constructor(private apiService: api, private readonly router: Router) { }

  @Input('anime') anime: Anime;

  ngOnInit(): void {
  }

  animeSelected(){
    this.apiService.animeSelected.emit(this.anime)
  }

}
