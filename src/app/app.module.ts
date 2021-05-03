import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RickAndMortyAPIService } from "./services/rick-and-morty-api.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { FavoriteCharactersComponent } from './favorite-characters/favorite-characters.component';
import { FavoriteCharactersListComponent } from './favorite-characters-list/favorite-characters-list.component';

@NgModule({
    declarations: [
        AppComponent,
        FavoriteCharactersComponent,
        FavoriteCharactersListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
