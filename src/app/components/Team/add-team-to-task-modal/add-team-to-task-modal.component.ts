import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TaskService } from '../../../services/task.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-team-to-task-modal',
  templateUrl: './add-team-to-task-modal.component.html',
  styleUrl: './add-team-to-task-modal.component.css',
})
export class AddTeamToTaskModalComponent implements OnInit {
  userTaskName: string = '';
  description: string = '';
  status: number = 0;
  assigneeId: string = '';
  users: any;
  userList: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService,
    public dialogRef: MatDialogRef<AddTeamToTaskModalComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  addNewTask() {
    if (!this.userTaskName || !this.description || this.status === 0 || !this.assigneeId) {
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
      assigneeId: this.assigneeId, 
      teamId: this.data.teamId,
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
      },
    });
  }

  closeModal() {
    this.dialogRef.close();
  }

  getUsers() {
    this.userService.GetAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.userList = this.users.map((u: any) => {
          return {
            id: u.id,
            userName: u.userName,
          };
        });
        console.log(this.userList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
