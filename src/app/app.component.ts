import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service';
import { Router } from '@angular/router';
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'TaskStreamClient';
  isLogin: boolean=false;

  constructor(public dataService:DataService) {
    this.dataService.currentData.subscribe(data=>{
      this.isLogin=data
    })
  }

}
