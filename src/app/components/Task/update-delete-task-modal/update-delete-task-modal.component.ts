import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../../services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-delete-task-modal',
  templateUrl: './update-delete-task-modal.component.html',
  styleUrls: ['./update-delete-task-modal.component.css'],
})
export class UpdateDeleteTaskModalComponent implements OnInit {
  userTaskName: string = '';
  description: string = '';
  status: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<UpdateDeleteTaskModalComponent>
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.userTaskName = this.data.userTaskName;
      this.description = this.data.description;
      this.status = this.data.status;
    }
  }

  updateTask() {
    if (!this.userTaskName || !this.description || this.status === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields!',
      });
      return;
    }

    const updatedTask = {
      userTaskName: this.userTaskName,
      description: this.description,
      status: Number(this.status),
      assigneeId: this.data.assigneeId,
      teamId: this.data.teamId,
    };

    this.taskService.updateTask(updatedTask, this.data.id).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Task Updated',
          text: 'The task was successfully updated!',
        });
        this.dialogRef.close(true);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again!',
        });
        console.error('Error updating task', err);
      },
    });
  }

  deleteTask() {
    this.taskService.deleteTask(this.data.id).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Task Deleted',
          text: 'The task was successfully deleted!',
        });
        this.dialogRef.close(true);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Could not delete the task. Please try again!',
        });
        console.error('Error deleting task', err);
      },
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
