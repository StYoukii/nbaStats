import { Injectable } from "@angular/core";
import { Globals } from '../const/Globals';
import { NBATeam } from "../models/NBATeam";
import { NBAPlayer } from "../models/NBAPlayer";
import { NBAPlayerStats } from "../models/NBAPlayerStats";

@Injectable()
export class Requests {

  constructor() {

  }

  /**
   * Requêtage et insertion dans l'objet 'team' des joueurs pour l'équipe 'team'
   */
  public static requestCommonTeamRoster(team: NBATeam) {
    Globals.NBA.stats.commonTeamRoster({
      LeagueID: Globals.LEAGUE_ID,
      Season: Globals.SEASON,
      TeamID: team.id
    }).then(response => {
      let commonTeamRoster = response.commonTeamRoster;

      for(let i = 0; i < commonTeamRoster.length; i++) {
        let player: NBAPlayer = new NBAPlayer();

        player.age = commonTeamRoster[i].age;
        player.birthDate = commonTeamRoster[i].birthDate;
        player.exp = commonTeamRoster[i].exp;
        player.height = commonTeamRoster[i].height;
        player.leagueID = commonTeamRoster[i].leagueID;
        player.num = commonTeamRoster[i].num;
        player.player = commonTeamRoster[i].player;
        player.playerId = commonTeamRoster[i].playerId;
        player.position = commonTeamRoster[i].position;
        player.school = commonTeamRoster[i].school;
        player.season = commonTeamRoster[i].season;
        player.teamID = commonTeamRoster[i].teamID;
        player.weight = commonTeamRoster[i].weight;
        player.stats = new NBAPlayerStats();

        team.roster.push(player);

        Requests.requestPlayerProfile(player);
      }

      // Initialize 'starter'
      team.createDefaultStarter();

      // Initialize 'bench"
      team.createDefaultBench();
    });
  }

  /**
   * Requêtage des statistiques des joueurs
   */
  public static requestPlayerProfile(player: NBAPlayer) {
    Globals.NBA.stats.playerProfile({
      LeagueID: "00",
      PlayerOrTeam: "Player",
      PlayerID: player.playerId,
      Season: "2017-18",
      SeasonType: "Regular Season",
    }).then(response => {
      let seasonTotalsRegularSeason = response.seasonTotalsRegularSeason;

      player.stats = seasonTotalsRegularSeason[seasonTotalsRegularSeason.length-1];
    });
  }
}
