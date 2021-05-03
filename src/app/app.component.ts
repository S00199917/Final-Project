import { Component, OnInit } from '@angular/core';
import { RickAndMortyAPIService } from "./services/rick-and-morty-api.service";
import { CharacterResponse } from './RickAndMortyResponse';
import { from } from 'rxjs';
import { FavoriteServiceService } from "./services/favorite-service.service";
import { IFavorite, Favorite } from "./FavoriteInterface";
import { createSpreadAssignment } from 'typescript';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        RickAndMortyAPIService,
        FavoriteServiceService
    ]
})
export class AppComponent {
    show: boolean;
    characterData: CharacterResponse;
    errorMessage: any;
    favCharacterData: IFavorite[];

    constructor(private _rickAndMortyService: RickAndMortyAPIService, private _favoriteService: FavoriteServiceService) { }

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

    addTheCharacter(gender: string, image: string, location: string, name: string, origin: string, species: string, status: string) {
        let tempFav: IFavorite;
        tempFav = new Favorite(gender, image, location, name, origin, species, status);
        this._favoriteService.addCharacterData(tempFav);
    }
}