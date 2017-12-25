import { NBAPlayer } from "./NBAPlayer";
import { Globals } from "../const/Globals";
import List = require("typescript.list");

export class NBATeam {

  name: string = null;
  id: number = null;
  roster: List<NBAPlayer> = new List<NBAPlayer>();
  starter: List<NBAPlayer> = new List<NBAPlayer>();
  bench: List<NBAPlayer> = new List<NBAPlayer>();
  out: List<NBAPlayer> = new List<NBAPlayer>();

  constructor() {

  }

  /**
   * Create default 'starter' team
   */
  createDefaultStarter() {
    // Include Center into 'starter'
    for(let player in this.roster) {
      if(this.roster[player].position === Globals.CENTER) {
        this.starter.push(this.roster[player]);

        this.roster.splice(parseInt(player), 1);

        break;
      }
    }

    // If there is no real center, include a Forward-Center to 'starter'
    if(this.starter.length == 0) {
      for(let player in this.roster) {
        if(this.roster[player].position.includes(Globals.CENTER)) {
          this.starter.push(this.roster[player]);

          this.roster.splice(parseInt(player), 1);

          break;
        }
      }
    }

    // Include two Forwards to 'starter'
    for(let i = 0; i < 2; i++) {
      for(let player in this.roster) {
        if(this.roster[player].position === Globals.FORWARD) {
          this.starter.push(this.roster[player]);

          this.roster.splice(parseInt(player), 1);

          break;
        }
      }
    }

    // Include two Guards to 'starter'
    for(let i = 0; i < 2; i++) {
      for(let player in this.roster) {
        if(this.roster[player].position === Globals.GUARD) {
          this.starter.push(this.roster[player]);

          this.roster.splice(parseInt(player), 1);

          break;
        }
      }
    }
  }

  /**
   * Create default 'bench' team
   */
  createDefaultBench() {
    this.bench = this.roster;
    this.roster = new List<NBAPlayer>();
  }
}
