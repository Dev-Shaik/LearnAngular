import { Component, EventEmitter } from "@angular/core";

@Component({
 selector : "child-root",
 template: `<h1>child component</h1>
            <input type="text" placeholder="enter child value" #txtChild (keyup)="onChange(txtChild.value)"><br/>
            <b>Text from parent compinent is : {{parentData}}</b>`,
 inputs: [`parentData`],
 outputs: [`childEvent`]
})

export class ChildComponent {
    public parentData : any;
    childEvent = new EventEmitter<string>();
    onChange(value : string)
    {
        this.childEvent.emit(value);
    }
}