import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {

  private dataSubject = new BehaviorSubject<boolean>(false);
  currentData = this.dataSubject.asObservable();

  constructor() {}

  changeData(data: boolean) {
    this.dataSubject.next(data);
  }
}
