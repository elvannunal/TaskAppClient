import { Component } from '@angular/core';
import { DataSharedService } from '../../services/data-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  isLogin: boolean=false;

  constructor(public dataService:DataSharedService) {
    this.dataService.currentData.subscribe(data=>{
      this.isLogin=data
    })
  }

}
