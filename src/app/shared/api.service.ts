import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Anime } from './anime.model';

@Injectable ()
export class api {
    constructor(private httpClient: HttpClient) {}

    animeSelected = new EventEmitter<Anime>();
    queryChanged = new EventEmitter<string>();

    getApi(query: string = ''): Observable <any>{
        return this.httpClient.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`)
    }
}