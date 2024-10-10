import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../../services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.css']
})
export class AddTaskModalComponent implements OnInit {

  userTaskName: string = '';
  description: string = '';
  status: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<AddTaskModalComponent>
  ) {}

  ngOnInit(): void {}

  addNewTask() {
    if (!this.userTaskName || !this.description || this.status === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields!',
      });
      return;
    }

    const newTask = {
      userTaskName: this.userTaskName,
      description: this.description,
      status: Number(this.status),
      assigneeId: this.data.assigneeId,
      teamId: this.data.teamId
    };

    this.taskService.createTask(newTask).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Task Created',
          text: 'The task was successfully created!',
        });
        this.dialogRef.close();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again!',
        });
        console.error('Error creating task', err);
      }
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
