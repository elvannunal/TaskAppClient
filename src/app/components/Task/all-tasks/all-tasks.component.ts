import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import Swal from 'sweetalert2';
import { TaskModel } from '../../../models/taskModel';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
})
export class AllTasksComponent implements OnInit {
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

  public allTask: any;
  assignedId: any;
  groupedTasks: { [key: string]: TaskModel[] } = {};
  public allUser: any;

  constructor(
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  // Load both tasks and users in sequence
  loadData() {
    this.getAllUser().then(() => {
      this.getAllTasks();
    });
  }

  getAllTasks() {
    this.taskService.GetAllTask().subscribe({
      next: (res) => {
        this.allTask = res;
      },
      complete: () => {
        this.groupTaskByUserId();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again!',
        });
      },
    });
  }

  groupTaskByUserId() {
    this.groupedTasks = {};

    this.allTask.forEach((task: any) => {
      this.assignedId = task.assigneeId;

      // Find the user by the assignedId
      const user = this.allUser.find(
        (u: { id: any }) => u.id === this.assignedId
      );

      // If user is found, proceed to group the tasks
      if (user && user.userName) {
        if (!this.groupedTasks[user.userName]) {
          this.groupedTasks[user.userName] = [];
        }
        this.groupedTasks[user.userName].push(task);
      } else {
        console.warn(`User not found for task: ${task.id}`);
      }
    });
  }

  getAllUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.userService.GetAllUsers().subscribe({
        next: (value) => {
          this.allUser = value;
          resolve();
        },
        error: (err) => {
          console.error('Error fetching users', err);
          reject(err);
        },
      });
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
}
