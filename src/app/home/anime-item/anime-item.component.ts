import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/shared/anime.model';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.css']
})
export class AnimeItemComponent implements OnInit {

  constructor() { }

  @Input('anime') anime: Anime;

  ngOnInit(): void {
  }

}
