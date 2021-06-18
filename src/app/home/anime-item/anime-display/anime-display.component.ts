import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.css']
})
export class AnimeDisplayComponent implements OnInit {

  anime: {title: string, score: number}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime = {
      title: this.route.snapshot.params['title'],
      score: this.route.snapshot.params['score']
    }
  }

}
