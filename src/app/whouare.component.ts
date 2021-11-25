import { Component , OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `You are {{charOfAvenger}}`
})

export class WhoUAre implements OnInit{
   charOfAvenger : any;
   
   constructor(private _route: ActivatedRoute)
   {

   }
   ngOnInit(){
       this.charOfAvenger = this._route.snapshot.params['name'];
   }
}