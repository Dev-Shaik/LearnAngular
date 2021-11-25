import { Component, OnInit } from "@angular/core";
import { Avengers } from "./avengers.service";
import { Router } from "@angular/router";

@Component({
    selector: 'AvengersList-root',
    template: `<ul class="items">
                <li (click)= "onClick(ave)" *ngFor="let ave of avengers"><span class="badge">{{ave.id}}</span> {{ave.name}} </li>
            </ul>`
})

export class AvengersList implements OnInit {
    avengers: any;

   constructor(private _avengerService : Avengers, private _route: Router){

   }

   ngOnInit()
   {
       this.avengers = this._avengerService.getAvengers();
   }


   onClick(avenger : any)
   {
       this._route.navigate(["/whouare", avenger.name]);
   }

}