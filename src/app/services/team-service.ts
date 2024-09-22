
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { RegisterModel } from '../models/registerModel';
import { LoginModel } from '../models/loginModel';
import { AllTeam } from '../models/allTeam';
import { CreateTeam } from '../models/UpdateTeam';

@Injectable({
  providedIn: 'root',
})

export class TeamService {
  constructor(private http: HttpClient) { }

  public GetAllTeam():Observable<any>{
    const url=`${environment.apiUrl}/Team`
    return this.http.get(url);
  }
  createTeam(team: any): Observable<CreateTeam> {
    return this.http.post<CreateTeam>(`${environment.apiUrl}/Team/Create`, team);
  }

  deleteTeam(id:any):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}/Team/Delete/`+id);

  }
  updateTeam(data:any):Observable<any>{
    return this.http.put<CreateTeam>(`${environment.apiUrl}/Team/Update`, data);

  }
}
