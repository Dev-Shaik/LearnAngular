import { style } from "@angular/animations";
import { Component } from "@angular/core";

/*Decerator*/
@Component({
 selector: 'superhero-root',
 template: `
            <h4>Structural Directive</h4>
            <p *ngIf="isShow">It will show if ngIf is true</p>
            <p>Info : Previously in ngSwitch we used to use *ngSwitchWhen but now it is *ngSwitchCase</p>
            <div [ngSwitch]="colorMatch">
                <p *ngSwitchCase="'red'">It shows if value is red</p>
                <p *ngSwitchCase="'blue'">It shows if value is blue</p>
                <p *ngSwitchDefault>It shows if value is not matched</p>
            </div>
            <p>Info : In ngFor previously we used <b>'in'</b> operator it is changed as <b>'of'</b></p>
            <ul>
            <li *ngFor="let color of colours">{{color}}</li>
            </ul>
        <hr>
            <h4>Attribute Directives (ngClass, ngStyle)</h4>
            <p [ngClass]= "{oneClass : oneC, twoClass: twoC}">The ng class applied</p>
            <p [ngStyle]= "{'font-style' : style, 'font-size': font}">The ng style applied</p>
        <hr>
            <h4>You are going in right way...</h4>
            <img src="http://lorempixel.com/100/100">
            <h2>This is a string interpolation: {{getfromprop}}</h2>
            <img [src]="imgUrl"><br/>
            <h3>This [src] is a data-binding example. 
            If we used square brackets, it workd as property not a attribute. 
            Attribute won't change but property will change</h3>
        <hr>
            <h4>The way we pass reference of user input...</h4>
            <input type="text" #weCanUseItAsRef><br/>
            <button (click) ="onClick(weCanUseItAsRef)">Show Ref Value</button>
        <hr>

            <h4>The way we pass reference of user input...</h4>
            <input type="text"><br/>
            <button (mouseover) ="onClick($event)">Get event details</button>
        <hr>

            <input type="text" [(ngModel)]= "fName"/>
            <input type="text" [(ngModel)]= "lName"/>
            SuperHero Name: {{fName}} {{lName}}`, 
           
 styles:[`h4{color : Green}`, 
        `h2{color : Blue}`, 
        `h3{color : Brown}`, 
        `.oneClass {color : white}`,
        `.twoClass {background-color: red}`]
})

export class SuperHeroComponent {
    public oneC = true;
    public twoC = true;
    public style = 'italic';
    public font = '50px';
    public colorMatch='blue';
    public colours = ['Red', 'Green', 'Blue', 'Yellow'];
    public isShow = true; /*Set it as true or false to check*/
    public getfromprop = "I think you got it";
    public imgUrl = "http://lorempixel.com/100/100";
    public fName : any; 
    public lName : any;

    onClick(valueOf : any){
            alert(valueOf.value + " " + event?.type);
    }
}