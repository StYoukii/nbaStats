import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NbaPlayerComponent } from './nba-player/nba-player.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { NbaGameComponent } from './nba-game/nba-game.component';
import { InformationsComponent } from './informations/informations.component';
import { FootballPlayerComponent } from './football-player/football-player.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeNbaComponent } from './home-nba/home-nba.component';
import { HomeComponent } from './home/home.component';
import { HomeFootballComponent } from './home-football/home-football.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nba', component: HomeNbaComponent },
  { path: 'football', component: HomeFootballComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NbaPlayerComponent,
    SearchPlayerComponent,
    NbaGameComponent,
    InformationsComponent,
    FootballPlayerComponent,
    MainMenuComponent,
    HomeNbaComponent,
    HomeComponent,
    HomeFootballComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
