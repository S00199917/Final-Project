import { Component } from '@angular/core';
import { RickAndMortyAPIService } from "./services/rick-and-morty-api.service";
import { CharacterResponse, LocationResponse, EpisodeResponse } from "./RickAndMortyResponse";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RickAndMortyAPIService]
})
export class AppComponent {
    characterData: CharacterResponse;
    locationData: LocationResponse;
    episodeData: EpisodeResponse;
    errorMessage: any;

    constructor(private _rickAndMortyService: RickAndMortyAPIService) { }

    getCharacterDetails(characterName: string): boolean {
        this._rickAndMortyService.getCharacterData(characterName).subscribe(
            characterData => {
                this.characterData = characterData;
                console.log("Character Name:" + this.characterData);
            },
            error => this.errorMessage = <any>error
        );
        return false;
    }
}
