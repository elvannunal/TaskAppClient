import { Component } from '@angular/core';
import { LoginCheckService } from '../../../services/login-check.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  isLogin: boolean=false;

  constructor(public dataService:LoginCheckService) {
    this.dataService.currentData.subscribe(data=>{
      this.isLogin=data
    })
  }


}
