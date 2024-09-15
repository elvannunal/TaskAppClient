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
  isClicked:boolean=false;
  isShowEditDelete:boolean=false
  allTeam: AllTeam[] = [];
  activeTeamIndex: number | null = null;  // Track the active team index

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

  showOptions(isClicked:boolean,index:any){
    this.isShowEditDelete=!this.isShowEditDelete

    this.activeTeamIndex = this.activeTeamIndex === index ? null : index;

  }

  selectedTeam(team:AllTeam){
    console.log("selected team",team)
  }
  createNewTeam() {
    console.log("selected team")
  }
  editTeam(team: AllTeam) {
    console.log("team team",team)
  }
  deleteTeam(team:AllTeam)
  {
    this.teamService.deleteTeam(team.id).subscribe({
      next:(res)=>{
        alert("Team successfl deleted!")
      },
      error:(err)=>{
        console.log("error",err)
      }
    })
  }

}
