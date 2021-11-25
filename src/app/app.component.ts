import { Component } from '@angular/core';
import { Avengers } from './avengers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Avengers]
  
})
export class AppComponent {
  title = 'AvengersOfAngular';
  public childData! : string;
}
