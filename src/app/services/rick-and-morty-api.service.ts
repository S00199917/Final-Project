import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { CharacterResponse } from "../RickAndMortyResponse";


@Injectable({
    providedIn: 'root'
})

export class RickAndMortyAPIService {
    private _siteURL = "https://rickandmortyapi.com/api/";

    constructor(private _http: HttpClient) { }

    getCharacterData(characterName): Observable<CharacterResponse> {
        return this._http.get<CharacterResponse>(this._siteURL + "character/?name=" + characterName)
            .pipe(
                tap(data => console.log('Characterdata/error' + JSON.stringify(data)) 
                ),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        console.log('RickAndMortyService: ' + err.message);
        return Observable.throw(err.message);
    }
}
