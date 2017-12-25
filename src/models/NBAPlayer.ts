import { NBAPlayerStats } from "./NBAPlayerStats";

export class NBAPlayer {

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
  stats: NBAPlayerStats;

  constructor() {
    this.age = 0;
    this.birthDate = "none";
    this.exp = "none";
    this.height = "none";
    this.leagueID = "none";
    this.num = "none";
    this.player = "none";
    this.playerId = 0;
    this.position = "none";
    this.school = "none";
    this.season = "none";
    this.teamID = 0;
    this.weight = "none";
    this.stats = new NBAPlayerStats();
  }
}
