import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public teams=["1,2,3","test","deneme"];
  colorCodes = ['#7AC555', '#FFA500', '#E4CCFD', '#76A5EA', '#8BC48A', '#FFA500', '#5030E5', '#800080']
}
