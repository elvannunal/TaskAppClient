import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject = new BehaviorSubject<boolean>(false);
  currentData = this.dataSubject.asObservable();

  private teamName = new BehaviorSubject<string>('');
  currentTeamName = this.dataSubject.asObservable();

  constructor() {}

  changeData(data: boolean) {
    this.dataSubject.next(data);
  }
  changeTeamNameData(teamNameData: string) {
    this.teamName.next(teamNameData);
  }

}
