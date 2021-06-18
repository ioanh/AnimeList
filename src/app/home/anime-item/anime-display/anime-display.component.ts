import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/shared/anime.model';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.css']
})
export class AnimeDisplayComponent implements OnInit {

  anime: {
    url: string
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime = this.route.snapshot.params['anime']
    console.log(this.anime)
  }

}
