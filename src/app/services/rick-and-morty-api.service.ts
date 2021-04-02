import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { CharacterResponse, LocationResponse, EpisodeResponse } from "../RickAndMortyResponse";

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

    getLocationData(locationName): Observable<LocationResponse> {
        return this._http.get<LocationResponse>(this._siteURL + "location/?name=" + locationName)
            .pipe(
                tap(data => console.log("Locationdata/error" + JSON.stringify(data))
                ),
                catchError(this.handleError)
            );
    }

    getEpisodeData(episodeName): Observable<EpisodeResponse> {
        return this._http.get<EpisodeResponse>(this._siteURL + "episode/?name=" + episodeName)
            .pipe(
                tap(data => console.log("Episodedata/error" + JSON.stringify(data))
                ),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        console.log('RickAndMortyService: ' + err.message);
        return Observable.throw(err.message);
    }
}
