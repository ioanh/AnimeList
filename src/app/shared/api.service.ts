import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable ()
export class api {
    constructor(private httpClient: HttpClient) {}

    queryChanged = new EventEmitter<string>();

    getApi(query: string = 'Death'): Observable <any>{
        return this.httpClient.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`)
    }
}