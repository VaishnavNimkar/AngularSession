import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BmiCalculatorService } from "src/services/bmiCalculator.service";
import { ConsoleLoggerService } from "src/services/consoleLogger.service";
import { WidgetModule } from "src/widget/widget.module";
import { AppRootCompponent } from "./components/appRoot/appRoot.component";


//decorator - Typescript building block, support metadata programming
@NgModule({
    declarations:[AppRootCompponent],       //declaration refers to assets of this module
    imports:[BrowserModule, WidgetModule],
    exports:[],
    providers:[{provide:BmiCalculatorService, useClass:BmiCalculatorService}, {provide:"logger", useClass:ConsoleLoggerService}],
    bootstrap:[AppRootCompponent]
})

export class AppModule
{
    constructor()
    {

    }
}