import { Component, EventEmitter, Output } from "@angular/core";
import { BmiInputModel } from "src/app/models/bmiInput.model";

@Component({
    templateUrl:"./bmiInput.component.html",
    selector:'bmi-input'
})

export class BMIInputComponent
{
    height:number = 0;
    weight:number = 0;

    @Output()
    inputAvailable = new EventEmitter<BmiInputModel>();

    @Output()
    clearAvailable = new EventEmitter<null>();

    onHeightEdit(inputHeight:string)
    {
        this.height = parseInt(inputHeight);
    }

    onWeightEdit(inputWeight:string)
    {
        this.weight = parseInt(inputWeight);
    }

    calculateBMI()
    {
        const data = new BmiInputModel(this.height, this.weight);
        this.inputAvailable.emit(data);
    }

    clearData()
    {
        this.height = 0;
        this.weight = 0;
        this.clearAvailable.emit();
    }
}