import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamService } from '../../../../services/team-service';
import { CreateTeam } from '../../../../models/createTeam';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';


@Component({
  selector: 'app-add-team-modal',
  templateUrl: './add-team-modal.component.html',
  styleUrl: './add-team-modal.component.css'
})
export class AddTeamModalComponent {

  teamName:any
  data:any
  team:any
  constructor(
    public dialog: MatDialog,
    public teamService:TeamService
  ) { }

  ngOnInit(): void {

  }

  closeModal() {
    const modal = document.querySelector('.modal-container');
    if (modal) {
      modal.setAttribute('style', 'display: none;');
    }
  }

  addTeam(teamName:any){
    this.team={teamName:teamName}
    this.teamService.createTeam(this.team).subscribe({
      next:(res)=>{
        this.data=res;
        console.log("data",this.data)
        console.log("res",res)

      },error:(err)=>{


      }
    })
  }
}
