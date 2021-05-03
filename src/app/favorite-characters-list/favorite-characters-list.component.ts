import { Component, OnInit, TemplateRef } from '@angular/core';
import { FavoriteServiceService } from "../services/favorite-service.service";
import { IFavorite, Favorite } from "../FavoriteInterface";

@Component({
  selector: 'app-favorite-characters-list',
  templateUrl: './favorite-characters-list.component.html',
  styleUrls: ['./favorite-characters-list.component.css'],
  providers: [FavoriteServiceService]
})
export class FavoriteCharactersListComponent implements OnInit {
  characterData: IFavorite[];

  constructor(private _favoriteService:FavoriteServiceService) { }

  ngOnInit(): void {
    this._favoriteService.getCharacterData().subscribe(characterData => { this.characterData = characterData });
  }

  addFavorite(gender: string, image: string, location: string, name: string, origin: string, species: string, status: string): boolean{
    let tempFav: IFavorite;
    tempFav = new Favorite(gender, image, location, name, origin, species, status);
    this._favoriteService.addCharacterData(tempFav);
    return false;
  }
}
