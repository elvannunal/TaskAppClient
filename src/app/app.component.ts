import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service';
import { Router } from '@angular/router';
import { DataSharedService } from './services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TaskStreamClient';
  isLogin: boolean = false;
  isToken: boolean = false;

  constructor(public dataService: DataSharedService, public authService: AuthService) {}

  ngOnInit(): void {
    this.isToken = this.authService.isAuthenticated();
    this.dataService.currentData.subscribe(data => {
      this.isLogin = data;
    });
  }
}
