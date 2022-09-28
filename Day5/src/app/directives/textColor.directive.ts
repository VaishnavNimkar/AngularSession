import { style } from "@angular/animations";
import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges, SimpleChanges, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[textColor]'
})

export class ColorDirective implements OnInit, OnChanges
{

    @Input() textColor= "";

    @HostBinding('style.border') border:string = "";

    constructor(private targetElement:ElementRef, private domApi:Renderer2)
    {
        this.domApi.setStyle(this.targetElement.nativeElement, "color", this.textColor || "red");
        this.border = "dotted 2px";
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        this.changeColor();
    }

    ngOnInit(): void {
        this.changeColor();
    }
    changeColor() {
        this.domApi.setStyle(this.targetElement.nativeElement, "color", this.textColor || "red");
    }

    @HostListener("mouseenter")
    onMouseOverOnHostElement()
    {
        this.domApi.setStyle(this.targetElement.nativeElement, "color", "green");
        this.border = "solid 4px";
    }

    @HostListener("mouseleave")
    onMouseLeaveFromHostElement()
    {
        this.domApi.setStyle(this.targetElement.nativeElement, "color", this.textColor || "red");
        this.border = "dotted 2px";
    }
}