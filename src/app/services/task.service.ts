import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  public GetAllTask(): Observable<any> {
    const url = `${environment.apiUrl}/Task`;
    return this.http.get(url);
  }

  //create new task
  public createTask(userTask: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/Task`, userTask);
  }

  //delete task using task id
  public deleteTask(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/Task/` + id);
  }
  //update task
  // TaskService'deki updateTask fonksiyonu
  public updateTask(data: any, taskId: string): Observable<any> {
    return this.http.put<any>(
      `${environment.apiUrl}/Task/${taskId}`,
      data
    );
  }

  // get releated task/tasks of user
  public getTaskByUserId(userId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/Task/userTasks` + userId);
  }

  //get tasks releated teamm id
  public getTaskByTeamId(teamId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/Task/teamId/` + teamId);
  }
  //get task releated task
  public getTaskByTaskId(taskId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}` + taskId);
  }
}
