import { ILoggerService } from "./loggerContract.service";

export class ConsoleLoggerService implements ILoggerService
{
    write(message:string):void
    {
        console.log(`console logging.... ${message}`);
    }
}