import { Component, Inject } from "@angular/core";
import { ConsoleLoggerService } from "src/services/consoleLogger.service";
import { ILoggerService } from "src/services/loggerContract.service";

@Component({
    templateUrl:"./appRoot.component.html",
    selector:'app-root'
})

export class AppRootCompponent
{
    constructor(@Inject("logger")loggerService:ILoggerService)
    {
        loggerService.write("AppRootComponent initialized");
        
    }
}