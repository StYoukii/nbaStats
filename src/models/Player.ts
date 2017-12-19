export class Player {

  age: number;
  birtDate: string;
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

  constructor() {

  }

  /**
   * Parser les données en objets stats
   * @param data
   */
  public static addStatsToPlayer(data) {
    console.log(data);
  }
}
