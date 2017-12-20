import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';
import { Globals } from '../../const/Globals';
import { Requests } from '../../const/Requests';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {

  public teamsNamesList = Globals.TEAM_NAME_LIST;

  public road: Team = new Team();
  public home: Team = new Team();

  constructor() {
    this.home.name = this.teamsNamesList[0];
    this.road.name = this.teamsNamesList[1];

    this.home.id = Globals.NBA.teamIdFromName(this.home.name);
    this.road.id = Globals.NBA.teamIdFromName(this.road.name);

    this.refreshData();
  }

  ngOnInit() {

  }

  /**
   * Changement de la sélection de l'équipe 'Road'
   * @param teamName
   */
  onChangeRoad(teamName) {
    this.road.name = teamName;
    this.road.id = Globals.NBA.teamIdFromName(this.road.name);

    this.refreshData();
  }

  /**
   * Changement de la sélection de l'équipe 'Home'
   * @param teamName
   */
  onChangeHome(teamName) {
    this.home.name = teamName;
    this.home.id = Globals.NBA.teamIdFromName(this.home.name);

    this.refreshData();
  }

  /**
   * Rechargement du contenu de la page
   */
  refreshData() {
    console.log("Road ID : " + this.home.id);
    console.log("Home ID : " + this.road.id);

    // Initialisation des reqûetes
    Requests.requestCommonTeamRoster(this.road);
    Requests.requestCommonTeamRoster(this.home);
  }
}
