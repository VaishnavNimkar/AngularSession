import { Component, Input } from "@angular/core";

@Component({
    templateUrl:"./bmiResult.component.html",
    selector:'bmi-result'
})

export class BMIResultComponent
{
    @Input()
    bmi:number = 0;

    @Input()
    clear:boolean = false;
}