import { Component } from '@angular/core';
import { GameControlComponent } from './game-control/game-control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[]= [];
  evenNumbers: number[]= [];



  firedInterval(numberGenerated:number){
   if(numberGenerated % 2 === 0){
     this.evenNumbers.push(numberGenerated);
   }else{
     this.oddNumbers.push(numberGenerated);
   }
  }
}
