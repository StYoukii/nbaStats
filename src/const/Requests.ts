import { Injectable } from "@angular/core";
import { Globals } from '../const/Globals';
import { Team } from "../models/Team";
import { Player } from "../models/Player";

@Injectable()
export class Requests {

  constructor() {

  }

  /**
   * Requêtage et insertion dans l'objet 'team' des joueurs pour l'équipe 'team'
   */
  public static requestCommonTeamRoster(team: Team) {
    Globals.NBA.stats.commonTeamRoster({
      LeagueID: Globals.LEAGUE_ID,
      Season: Globals.SEASON,
      TeamID: team.id
    }).then(response => {
      let commonTeamRoster = response.commonTeamRoster;

      team.addPlayersToTeam(commonTeamRoster);

      for(let i = 0; i < team.roster.length; i++) {
        Requests.requestPlayerProfile(team.roster[i]);
      }
    });
  }

  /**
   * Requêter les statistiques des joueurs
   */
  public static requestPlayerProfile(player: Player) {
    Globals.NBA.stats.playerProfile({
      LeagueID: "00",
      PlayerOrTeam: "Player",
      PlayerID: player.playerId,
      Season: "2017-18",
      SeasonType: "Regular Season",
    }).then(response => {
      let seasonTotalsRegularSeason = response.seasonTotalsRegularSeason;

      // player.addStatsToPlayer("test");
    });
  }


}
