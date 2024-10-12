import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataSharedService } from '../../services/data-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit,AfterViewInit {
  isLogin: boolean = false;
  isToken:boolean=false;

  constructor(public dataService: DataSharedService,public auth:AuthService) {
    this.dataService.currentData.subscribe((data) => {
      this.isLogin = data;
    });
  }
  ngOnInit(): void {
    this.isToken= this.auth.isAuthenticated();
  }
  ngAfterViewInit(): void {
    this.isToken= this.auth.isAuthenticated();
  }

}
