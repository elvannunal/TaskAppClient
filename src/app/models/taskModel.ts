export class TaskModel {
  constructor(
    public userTaskName: string,
    public description: string,
    public status: number,
    public assigneeId: string,
    public teamId: string,
    public id: string
  ) {}
}


// export class TaskModel {
//   userTaskName: string;
//   description: string;
//   status: number;
//   assigneeId:string;
//   teamId:string;
//   id:string;

//   constructor(userTaskName: string, description: string, status: number,assigneeId:string,teamId:string,
//     id:string
//   ) {
//     this.userTaskName = userTaskName;
//     this.description = description;
//     this.status = status;
//     this.assigneeId=assigneeId;
//     this.teamId=teamId
//     this.id=id

//   }
// }
