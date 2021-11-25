import { Component, OnInit } from "@angular/core";
import { Avengers } from "./avengers.service";

@Component({
    selector: 'AvenegerDetails-root',
    template: `<ul>
    <li *ngFor="let a of avengerList">{{a.name}} - {{a.gender}}</li>
    </ul>`
})

export class AvengersDetails implements OnInit{
   avengerList : any;

   constructor(private _avengersDetaisl: Avengers){}

   ngOnInit(){
       this.avengerList = this._avengersDetaisl.getAvengers();
   }
}