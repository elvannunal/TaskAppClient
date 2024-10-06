import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

    public GetAllUsers(): Observable<any> {
      const url = `${environment.apiUrl}/User`;
      return this.http.get(url);
    }
    public GetUserById(userId:string):Observable<any>{
      return this.http.get<any>(`${environment.apiUrl}`+userId)
    }
}
