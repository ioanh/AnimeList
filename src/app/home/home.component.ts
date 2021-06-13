import { Component, OnInit } from '@angular/core';
import { api } from '../shared/api.service';
import { Anime } from '../shared/anime.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animeList: Anime [] = [];

  constructor(private api: api) { }

  ngOnInit(): void {
    //Populating the anime list on init
    this.api.getApi().subscribe(
      (data) => {
        this.animeList = data.results
      }
    )

    this.api.queryChanged.subscribe(
      (query) => {
        console.log(query)
        this.api.getApi(query).subscribe(
          (thisapi) => {
            this.animeList = thisapi.results
          }
        )
      } 
    )

  }

}
