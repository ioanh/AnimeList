import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.css']
})
export class AnimeDisplayComponent implements OnInit {

  anime: {
    title: string, 
    score: number,
    url: string,
    imgURL:string,
    episodes: number,
    start: string,
    end: string
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime = {
      title: this.route.snapshot.params['title'],
      score: this.route.snapshot.params['score'],
      url: this.route.snapshot.params['url'],
      imgURL: this.route.snapshot.params['imgURL'],
      episodes: this.route.snapshot.params['episodes'],
      start: this.route.snapshot.params['start'],
      end: this.route.snapshot.params['end'],
    }
  }

}
