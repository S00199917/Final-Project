import { Component, Input, OnInit } from '@angular/core';
import { IFavorite } from '../FavoriteInterface';
import { FavoriteServiceService } from '../services/favorite-service.service';

@Component({
  selector: 'app-favorite-characters',
  templateUrl: './favorite-characters.component.html',
  styleUrls: ['./favorite-characters.component.css']
})
export class FavoriteCharactersComponent implements OnInit {

  @Input() characterData: IFavorite;

  constructor(private _favoriteService: FavoriteServiceService) { }

  ngOnInit(): void {
  }
}
