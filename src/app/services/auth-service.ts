
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { RegisterModel } from '../models/registerModel';
import { LoginModel } from '../models/loginModel';
import { DataSharedService } from './data-service';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient,private dataService:DataSharedService) { }

  public Register(data:RegisterModel):Observable<any>{
    const url=`${environment.apiUrl}/Auth/register`
    return this.http.post(url,data);
  }

  public Login(data:LoginModel):Observable<any>{
    const url=`${environment.apiUrl}/Auth/login`;
    return this.http.post(url,data);
  }


  storeToken(token: string): void {
    localStorage.setItem('token', token);
    this.dataService.updateData(true); // Kullanıcının giriş yaptığını bildir
  }

  public storeCredentials(username: string, password: string): void {
    localStorage.setItem('rememberedUsername', username);
    localStorage.setItem('rememberedPassword', password);
  }

  public clearCredentials(): void {
    localStorage.removeItem('rememberedUsername');
    localStorage.removeItem('rememberedPassword');
  }

  public getStoredCredentials(): { username: string, password: string } | null {
    const username = localStorage.getItem('rememberedUsername');
    const password = localStorage.getItem('rememberedPassword');
    if (username && password) {
      return { username, password };
    }
    return null;
  }

  public clearToken(): void {
    localStorage.removeItem('token');
  }

}
