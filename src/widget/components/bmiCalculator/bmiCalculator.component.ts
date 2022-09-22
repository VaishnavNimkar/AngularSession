import { Component } from "@angular/core";
import { BmiInputModel } from "src/app/models/bmiInput.model";
import { BmiCalculatorService } from "src/services/bmiCalculator.service";

@Component({
    templateUrl:"./bmiCalculator.component.html",
    selector:'bmi-calculator'
})

export class BMICalculatorComponent
{
    bmiResult:number = 0;
    service:BmiCalculatorService;


    constructor(service:BmiCalculatorService)
    {
        this.service = service;
    }

    calculateBMI(data:BmiInputModel)
    {
        this.bmiResult = this.service.calculatorBmi(data);
    }

    clear()
    {
        this.bmiResult = 0;
    }
}