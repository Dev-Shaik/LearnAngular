import { Injectable } from "@angular/core";

@Injectable() /*For dependency injection*/

export class Avengers{
    getAvengers()
    {
        return [
            {"id": 1, "name" : "Hulk", "gender":"male"},
            {"id": 2, "name" : "Ironman", "gender":"male"},
            {"id": 3, "name" : "Captain Marvel", "gender":"female"}
        ];
    }
}