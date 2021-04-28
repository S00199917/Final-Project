import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RickAndMortyAPIService } from "./services/rick-and-morty-api.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
