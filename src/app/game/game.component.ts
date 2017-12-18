import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/Team';
import { Player } from '../../models/Player';

const NBA = require('nba');
const LEAGUE_ID = "00";
const SEASON = "2017-18";
const TEAM_ID = "1610612737";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  teamsNamesList: Array<string> = [
    'Atlanta Hawks',
    'Boston Celtics',
    'Brooklyn Nets',
    'Charlotte Hornets',
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors',
    'Houston Rockets',
    'Indiana Pacers',
    'LA Clippers',
    'Los Angeles Lakers',
    'Memphis Grizzlies',
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'New York Knicks',
    'Oklahoma City Thunder',
    'Orlando Magic',
    'Philadelphia 76ers',
    'Phoenix Suns',
    'Portland Trail Blazers',
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards'
  ];

  home: Team = new Team();
  road: Team = new Team();

  homePlayers: Array<Player>;
  roadPlayers: Array<Player>;

  constructor() {

  }

  ngOnInit() {
    this.home.name = this.teamsNamesList[0];
    this.road.name = this.teamsNamesList[1];

    this.home.id = NBA.teamIdFromName(this.home.name);
    this.road.id = NBA.teamIdFromName(this.road.name);

    this.refreshData();
  }

  /**
   * Changement de la sélection de l'équipe 'Road'
   * @param teamName
   */
  onChangeRoad(teamName) {
    this.road.name = teamName;
    this.road.id = NBA.teamIdFromName(this.road.name);

    this.refreshData();
  }

  /**
   * Changement de la sélection de l'équipe 'Home'
   * @param teamName
   */
  onChangeHome(teamName) {
    this.home.name = teamName;
    this.home.id = NBA.teamIdFromName(this.home.name);

    this.refreshData();
  }

  /**
   * Rechargement du contenu de la page
   */
  refreshData() {
    console.log("Road ID : " + this.home.id);
    console.log("Home ID : " + this.road.id);

    /**
     * Reqûete de joueurs dans l'équipe 'Road'
     */
    let commonRoadTeamRoster = NBA.stats.commonTeamRoster({
      LeagueID: LEAGUE_ID,
      Season: SEASON,
      TeamID: this.road.id
    }).then(this.successCallback, this.failureCallback);

    /**
     * Reqûete de joueurs dans l'équipe 'Home'
     */
    let commonHomeTeamRoster = NBA.stats.commonTeamRoster({
      LeagueID: LEAGUE_ID,
      Season: SEASON,
      TeamID: this.road.id
    }).then(this.successCallback, this.failureCallback);

    console.log(commonRoadTeamRoster);
  }

  /**
   * Si la requête retourne un résultat
   * @param result
   */
  successCallback(result) {
    console.log(result);
  }

  failureCallback(error) {
    console.log("It failed with " + error);
  }
}
