import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/shared/anime.model';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.css']
})
export class AnimeDisplayComponent implements OnInit {

  animeURL: string;
  imageURL: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animeURL = decodeURIComponent(this.route.snapshot.params['animeURL']) 
    this.imageURL = decodeURIComponent(this.route.snapshot.params['imageURL']) 
    console.log(this.animeURL)
  }

}
