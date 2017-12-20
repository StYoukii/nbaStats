import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { GameComponent } from './game/game.component';
import { InformationsComponent } from './informations/informations.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SearchPlayerComponent,
    GameComponent,
    InformationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
