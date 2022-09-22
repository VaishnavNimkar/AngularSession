import { ILoggerService } from "./loggerContract.service";

export class FileLoggerService implements ILoggerService
{
    write(message:string):void
    {
        console.log(`file logging.... ${message}`);
    }
}