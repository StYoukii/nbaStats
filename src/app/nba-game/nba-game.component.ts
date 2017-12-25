import { Component, OnInit } from '@angular/core';
import { NBATeam } from '../../models/NBATeam';
import { Globals } from '../../const/Globals';
import { Requests } from '../../requests/Requests';

@Component({
  selector: 'nba-app-game',
  templateUrl: './nba-game.component.html',
  styleUrls: ['./nba-game.component.css'],
})
export class NbaGameComponent implements OnInit {

  public teamsNamesList = Globals.TEAM_NAME_LIST;

  public road: NBATeam = new NBATeam();
  public home: NBATeam = new NBATeam();

  constructor() {

  }

  ngOnInit() {
    this.road.name = this.teamsNamesList[0];
    this.home.name = this.teamsNamesList[1];

    NbaGameComponent.refreshTeamData(this.road);
    NbaGameComponent.refreshTeamData(this.home);
  }

  /**
   * Changement de l'équipe
   * @param team
   * @param teamName
   */
  onChangeTeam(team, teamName) {
    if(team === "road") {
      this.road = new NBATeam();
      this.road.name = teamName;
      NbaGameComponent.refreshTeamData(this.road);
    } else {
      this.home = new NBATeam();
      this.home.name = teamName;
      NbaGameComponent.refreshTeamData(this.home);
    }
  }

  /**
   * Rechargement du contenu de l'équipe 'team'
   */
  static refreshTeamData(team) {
    team.id = Globals.NBA.teamIdFromName(team.name);

    // Initialisation des reqûetes
    Requests.requestCommonTeamRoster(team);
  }
}
