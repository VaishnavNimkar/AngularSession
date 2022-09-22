import { NgModule } from "@angular/core";
import { BmiCalculatorService } from "src/services/bmiCalculator.service";
import { BMICalculatorComponent } from "./components/bmiCalculator/bmiCalculator.component";
import { BMIInputComponent } from "./components/bmiInput/bmiInput.component";
import { BMIResultComponent } from "./components/bmiResult/bmiResult.component";
import { HeadingCompponent } from "./components/header/header.component";

//decorator - Typescript building block, support metadata programming
@NgModule({
    declarations:[HeadingCompponent, BMICalculatorComponent, BMIResultComponent, BMIInputComponent],       //declaration refers to assets of this module
    imports:[],
    exports:[HeadingCompponent, BMICalculatorComponent],
    providers:[]
})

export class WidgetModule
{
    constructor()
    {

    }
}