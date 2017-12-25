import { Component, OnInit } from '@angular/core';

declare var require: any;

const NBA = require('nba');

@Component({
  selector: 'app-nba-player',
  templateUrl: './nba-player.component.html',
  styleUrls: ['./nba-player.component.css']
})
export class NbaPlayerComponent implements OnInit {

  player = null;

  constructor() {

    this.player = NBA.findPlayer('Stephen Curry');
    console.log(this.player);
  }

  ngOnInit() {
  }
}
