import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../../../services/data-service';
import { TaskService } from '../../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../../../models/taskModel';
import Swal from 'sweetalert2';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
})
export class TeamDetailComponent implements OnInit {
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
    private userService: UserService
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
}
