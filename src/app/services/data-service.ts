import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from '../models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  private dataSubject = new BehaviorSubject<boolean>(false);
  currentData = this.dataSubject.asObservable();

  private teamName = new BehaviorSubject<string>('');
  currentTeamName = this.teamName.asObservable();

  constructor() {}

  changeData(data: boolean) {
    this.dataSubject.next(data);
  }
  changeTeamNameData(teamNameData: string) {
    this.teamName.next(teamNameData);
  }

  private dataSource = new BehaviorSubject<boolean>(false);
  currentDataLogin = this.dataSource.asObservable();



  updateData(isLoggedIn: boolean) {
    this.dataSource.next(isLoggedIn);  
  }
}
