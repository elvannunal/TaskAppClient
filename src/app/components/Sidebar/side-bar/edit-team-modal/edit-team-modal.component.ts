import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamService } from '../../../../services/team-service';

@Component({
  selector: 'app-edit-team-modal',
  
  templateUrl: './edit-team-modal.component.html',
  styleUrl: './edit-team-modal.component.css'
})
export class EditTeamModalComponent {
  dialogRef!: MatDialogRef<EditTeamModalComponent>;
  teamForm!: FormGroup;
teamName: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {

  }
  editTeam(teamName:any) {
    if (this.teamForm.valid) {
      this.teamService.updateTeam(teamName).subscribe(
        (response) => {
          console.log('Ekibiniz başarıyla eklendi:', Response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Ekibinizi eklerken bir hata oluştu:', error);
        }
      );
    }
  }


}
