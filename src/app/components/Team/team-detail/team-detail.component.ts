import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
})
export class TeamDetailComponent implements OnInit {
  teamNameData: any;
  constructor(private dataService: DataService) {
    this.dataService.currentTeamName.subscribe((data) => {
      this.teamNameData = data;
    });
  }
  ngOnInit(): void {}
}
