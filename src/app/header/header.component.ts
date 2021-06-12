import { Component, OnInit } from '@angular/core';
import { api } from '../shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: api) { }

  ngOnInit(): void {
  }

  updateQuery(param){
    this.apiService.queryChanged.emit(param)
  }

}
