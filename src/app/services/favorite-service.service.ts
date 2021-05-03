import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";

import { IFavorite } from "../FavoriteInterface";

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  favoriteDataCollection: AngularFirestoreCollection<IFavorite>;

  favoriteData: Observable<IFavorite[]>;

  allFavoriteData: IFavorite[];

  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.favoriteDataCollection = _afs.collection<IFavorite>("CharacterDatabase");
  }

  getCharacterData(): Observable<IFavorite[]> {
    this.favoriteData = this.favoriteDataCollection.valueChanges({ idField: "id" });

    this.favoriteData.subscribe(
      data => console.log("getCharacterData: " + JSON.stringify(data))
    )

    return this.favoriteData;
  }

  addCharacterData(character: IFavorite): void {
    this.favoriteDataCollection.add(JSON.parse(JSON.stringify(character)));
  }

  private handleError(err: HttpErrorResponse) {
    console.log("FavoriteApiService: " + err.message);
    return Observable.throw(err.message);
  }
}
