import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector:'[textColor]'
})

export class ColorDirective //implements OnInit, OnChanges
{

    //@Input() textColor= "";

    constructor(private targetElement:ElementRef, private domApi:Renderer2)
    {
        domApi.setStyle(targetElement.nativeElement, "color", "red");
    }
    
    /*ngOnChanges(changes: SimpleChanges): void {
        this.changeColor();
    }

    ngOnInit(): void {
        this.changeColor();
    }

    changeColor()
    {
        this.domApi.setStyle(this.targetElement, "color", this.textColor || "red");
    }*/
}