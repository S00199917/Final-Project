import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class RickAndMortyAPIService {
    private _siteURL = "https://rickandmortyapi.com/api";

    constructor(private _http: HttpClient) { }

    getCharacterdata(characterName):Observable<
}
