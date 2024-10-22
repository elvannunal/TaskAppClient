export interface UserModel {
  id: string;
  userName: string;
  email: string;
  selectedRole: string;
  userTasks: UserTaskModel[];
}

export interface UserTaskModel {
  taskId: string;
  taskName: string;
  taskStatus: string;
}
