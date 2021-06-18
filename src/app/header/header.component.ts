import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: api, private router: Router) { }

  ngOnInit(): void {
  }

  updateQuery(param){
    this.apiService.queryChanged.emit(param)
  }

}
