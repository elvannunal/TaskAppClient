import { Component, OnInit } from '@angular/core';
import {  DataSharedService } from '../../../services/data-service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
})
export class TeamDetailComponent implements OnInit {
  colorCodes = [
    '#7AC555',
    '#FFA500',
    '#E4CCFD',
    '#76A5EA',
    '#8BC48A',
    '#FFA500',
    '#5030E5',
    '#800080',
  ];
  teamNameData: any;
  constructor(private dataService: DataSharedService) {
    this.dataService.currentTeamName.subscribe((x) => {
      this.teamNameData = x;
    });
  }
  ngOnInit(): void {}
}
