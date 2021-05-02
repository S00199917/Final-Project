import { Component } from '@angular/core';
import { RickAndMortyAPIService } from "./services/rick-and-morty-api.service";
import {CharacterResponse} from './RickAndMortyResponse';
import { from } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RickAndMortyAPIService]
})
export class AppComponent {
    characterData: CharacterResponse;
    errorMessage: any;

    constructor(private _rickAndMortyService: RickAndMortyAPIService) { }

    getCharacterDetails(characterName: string): boolean {
        this._rickAndMortyService.getCharacterData(characterName).subscribe(
            res => {
                this.characterData = res;
                console.log("Info: " + this.characterData.info.count);
                console.log("Character Name:" + this.characterData.results[0].name);
                console.log("Character Name:" + this.characterData.results[1].name);
            },
            error => this.errorMessage = <any>error
        );
        return false;
    }

    Count(): number {
        return 3;
    }
}
