import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}
    public GetAllUsers(): Observable<UserModel[]> {
      return this.http.get<any[]>(`${environment.apiUrl}/User`).pipe(
        map((data: any[]) =>
          data.map(user => ({
            id: user.id,
            userName: user.userName,
            email: user.email,
            selectedRole: '',
            userTasks: user.userTasks.map((task: { id: any; name: any; status: any; }) => ({
              taskId: task.id,
              taskName: task.name,
              taskStatus: task.status
            }))
          }))
        )
      );
    }

    GetRoles(): Observable<any[]> {
      return this.http.get<any[]>(`${environment.apiUrl}/Role`);
    }
    public GetUserById(userId:string):Observable<any>{
      return this.http.get<any>(`${environment.apiUrl}`+userId)
    }

    public assignRoleToUser(userId:string, roleName:string){
      const requestCreateRole={userId,roleName}
      return this.http.post<any>(`${environment.apiUrl}/Role/assign-role`, requestCreateRole);
    }

    public createRoleToUser(userRole:string){
      return this.http.post<any>(`${environment.apiUrl}/Role/crete-role`,userRole);
   }
   public removeUserRole(userId:string, userRole:string){
    const requestCreateRole={userId,userRole}

    return this.http.post<any>(`${environment.apiUrl}/Role/remove-role`,requestCreateRole);
 }
}
