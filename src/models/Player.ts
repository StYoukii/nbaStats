import { PlayerStats } from "./PlayerStats";

export class Player {

  age: number;
  birthDate: string;
  exp: string;
  height: string;
  leagueID: string;
  num: string;
  player: string;
  playerId: number;
  position: string;
  school: string;
  season: string;
  teamID: number;
  weight: string;

  stats: PlayerStats;

  constructor() {

  }

  /**
   * Parser les données en objets stats
   * @param data
   */
  public addStatsToPlayerStats(data) {
    this.stats = data;
  }
}
