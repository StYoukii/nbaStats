import { Player } from "./Player";

export class Team {

  name: string;
  id: number;
  roster: Player[] = [];

  constructor() {

  }

  /**
   * Parser les données en objets 'player'
   * @param data
   */
  public addPlayersToTeam(data) {
    for(let i = 0; i < data.length; i++) {
      this.roster[i] = data[i];
    }
  }
}
