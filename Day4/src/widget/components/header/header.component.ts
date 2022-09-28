import { Component, Input } from "@angular/core";

@Component({
    selector:'header1',
    template:`<h1>{{message}}</h1>`
})

export class HeadingCompponent
{
    @Input()
    message:string = ""
}