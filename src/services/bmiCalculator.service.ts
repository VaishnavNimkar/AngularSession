import { Inject, Injectable } from "@angular/core";
import { BmiInputModel } from "src/app/models/bmiInput.model";
import { ILoggerService } from "./loggerContract.service";

@Injectable()
export class BmiCalculatorService
{
    loggerService: ILoggerService;

    constructor(@Inject("logger")logger:ILoggerService)
    {
        this.loggerService = logger;
    }

    calculatorBmi(data:BmiInputModel) : number
    {
        this.loggerService.write("Calculate Bmi Calculate");
        return data.height/data.weight;
    }
}