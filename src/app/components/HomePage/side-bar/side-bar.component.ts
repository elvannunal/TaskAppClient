import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllTeam } from '../../../models/allTeam';
import { TeamService } from '../../../services/team-service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
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

  teams: any;
  selectedIndex: number =0
  selectedTeam: AllTeam=new AllTeam(0,"","") ;

  allTeam: AllTeam[] = [];

  constructor(
    private router: Router,
    private teamService: TeamService,
  ) {}

  ngOnInit(): void {
    this.getAllTeam();
  }

  getAllTeam() {
    this.teamService.GetAllTeam().subscribe({
      next: (res) => {
        this.allTeam = res;
      },
      error: (err: Error) => {
        console.warn(`${err}`);
      },
    });
  }

  showOptions(index: number, team: AllTeam) {
    if (this.selectedIndex === index) {
      this.createNewTeam()
    } else {
      this.selectedIndex = index;
      this.selectedTeam = team;
      this.editTeam(team)
    }
  }
  createNewTeam() {
    throw new Error('Method not implemented.');
  }
  editTeam(team: AllTeam) {
    throw new Error('Method not implemented.');
  }

}
