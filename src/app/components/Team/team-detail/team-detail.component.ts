import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../../../services/data-service';
import { TaskService } from '../../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../../../models/taskModel';
import Swal from 'sweetalert2';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTeamModalComponent } from '../../Sidebar/side-bar/add-team-modal/add-team-modal.component';
import { AddTaskModalComponent } from '../../Task/add-task-modal/add-task-modal.component';
import { UpdateDeleteTaskModalComponent } from '../../Task/update-delete-task-modal/update-delete-task-modal.component';
import { AddTeamToTaskModalComponent } from '../add-team-to-task-modal/add-team-to-task-modal.component';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
})
export class TeamDetailComponent implements OnInit {
  colorCodes = [
    '#A8DADC',
    '#F4A261',
    '#C9ADA7',
    '#457B9D',
    '#B5E48C',
    '#FFDDC1',
    '#6D597A',
    '#84A59D',
  ];

  teamNameData: any;
  teamId: any;
  tasks: TaskModel[] = [];
  groupedTasks: { [key: string]: TaskModel[] } = {};
  allUser: any;
  assignedId: any;
  constructor(
    private dataService: DataSharedService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.dataService.currentTeamName.subscribe((name) => {
      this.teamNameData = name;
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.teamId = params.get('id');

      if (this.teamId !== null) {
        this.getTaskByTeamId(this.teamId);
      }
    });

    this.getAllUser();
  }

  getTaskByTeamId(id: any) {
    this.taskService.getTaskByTeamId(id).subscribe({
      next: (res: any) => {
        this.tasks = res;
        this.groupTasksByUser();
      },
      error(err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There is no task related to this team.',
        });
      },
    });
  }
  groupTasksByUser() {
    this.groupedTasks = {};

    this.tasks.forEach((task) => {
      this.assignedId = task.assigneeId;

      const user = this.allUser.find(
        (u: { task: any; id: any; assignedId: any }) => u.id === this.assignedId
      );
      if (!this.groupedTasks[user.userName]) {
        this.groupedTasks[user.userName] = [];
      }
      this.groupedTasks[user.userName].push(task);
    });
  }
  getAllUser() {
    this.userService.GetAllUsers().subscribe({
      next: (value) => {
        this.allUser = value;
      },
      error: (err) => {
        console.error('Error fetching users', err);
      },
    });
  }
  openModalForAddTask() {
    const dialogRef = this.dialog.open(AddTaskModalComponent, {
      data: { assigneeId: this.assignedId, teamId: this.teamId },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.getTaskByTeamId(this.teamId);
      }
    });
  }

  openUpdateDeleteModal(taskData: any) {
    const dialogRef = this.dialog.open(UpdateDeleteTaskModalComponent, {
      data: taskData,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.getTaskByTeamId(this.teamId);
      }
    });
  }
  getStatusText(status: number): string {
    const statusMap: { [key: number]: string } = {
      1: 'Open',
      2: 'In Progress',
      3: 'Done',
    };

    return statusMap[status] || 'Open';
  }

  addUserToTeam(){
    const dialogRef = this.dialog.open(AddTeamToTaskModalComponent, {
      data: {teamId: this.teamId }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.getTaskByTeamId(this.teamId);
      }
    });
  }
}
