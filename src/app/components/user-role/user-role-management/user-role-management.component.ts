import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-management-role',
  templateUrl: './user-role-management.component.html',
  styleUrls: ['./user-role-management.component.css'],
})
export class UserRoleManagementComponent implements OnInit {
  users: any[] = [];
  roles: { id: string; name: string }[] = [];
snackBarMessage: any;

  constructor(private userService: UserService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadUsers();
    this.getAllRoles();
  }

  loadUsers() {
    this.userService.GetAllUsers().subscribe((data: any[]) => {
      this.users = data.map((user) => ({
        id: user.id,
        userName: user.userName,
        selectedRole: '',
      }));
    });
  }

  getAllRoles(): void {
    this.userService.GetRoles().subscribe({
      next: (res) => {
        this.roles = res.map((role) => ({
          id: role.id,
          name: role.name,
        }));
      },
      error: (err) => {
        this.snackBar.open('Failed to fetch roles.', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
      },
    });
  }

  assignRoles(user: any) {
    const payload = {
      userId: user.id,
      roleName: user.selectedRole,
    };

    if (!payload.roleName) {
      this.snackBar.open('Please select a role before assigning.', 'Close', {
        duration: 3000,
        panelClass: ['snackbar-error'],
      });
      return;
    }

    this.userService.assignRoleToUser(payload.userId, payload.roleName).subscribe(
      () => {
        this.snackBar.open(`${user.userName}'s role updated to ${user.selectedRole}`, 'Close', {
          duration: 3000,
        });

        user.selectedRole = '';
      },
      (error) => {
        this.snackBar.open(`Failed to assign role to ${user.userName}`, 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
      }
    );
  }
}
