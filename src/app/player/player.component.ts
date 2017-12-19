import { Component, OnInit } from '@angular/core';

declare var require: any;

const NBA = require('nba');

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player = null;

  constructor() {

    this.player = NBA.findPlayer('Stephen Curry');
    console.log(this.player);
  }

  ngOnInit() {
  }
}
