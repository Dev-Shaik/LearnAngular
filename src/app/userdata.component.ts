import { Component } from "@angular/core";

@Component({
selector : "userdata-root",
templateUrl : "./userdata.component.html",
styles : [`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`]
})

export class UserDataComponent{
    public fname! :string;
    public lname! : string;
    onSubmit(value : any)
    {
        console.log(value);
    }
}