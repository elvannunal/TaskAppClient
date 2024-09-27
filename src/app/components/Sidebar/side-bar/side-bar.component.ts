

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllTeam } from '../../../models/allTeam';
import { TeamService } from '../../../services/team-service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { AddTeamModalComponent } from './add-team-modal/add-team-modal.component';
import { EditTeamModalComponent } from './edit-team-modal/edit-team-modal.component';
import { DataService } from '../../../services/data-service';

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
  activeTeamIndex: number | null = null;  // Takip için aktif takım index
  allTeam:any
  constructor(
    private router: Router,
    private teamService: TeamService,
    private dialog:Dialog,
    public dataService:DataService
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

  showOptions(index: number) {
    this.activeTeamIndex = this.activeTeamIndex === index ? null : index;
  }

  editTeam(team: AllTeam) {
    const dialogRef = this.dialog.open(EditTeamModalComponent, {
      data: { team },  // Dialog'a veri gönder
      width: '400px',
    });

    dialogRef.closed.subscribe(result => {
      if (result) {
        console.log('Dialog kapandı, takım güncellendi:', result);
        this.getAllTeam();  // Takım güncellendikten sonra listeyi yenile
      }
    });
  }

  createNewTeam() {
    const dialogRef = this.dialog.open(AddTeamModalComponent, {
      width: '400px',
    });

    dialogRef.closed.subscribe(result => {
      if (result) {
        console.log('Yeni takım eklendi:', result);
        this.getAllTeam();
      }
    });
  }

  deleteTeam(team: AllTeam) {
    this.teamService.deleteTeam(team.id).subscribe({
      next: (res) => {
        alert("Takım başarıyla silindi!");
        this.getAllTeam(); // Takım silindikten sonra listeyi yenile
      },
      error: (err) => {
        console.log("Hata", err);
      }
    });
  }

  selectedTeam(team: AllTeam) {
    this.dataService.changeTeamNameData(team.teamName);
    this.router.navigate(['/team-detail', team.id]);
  }

}
