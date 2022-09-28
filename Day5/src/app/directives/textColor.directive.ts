import { Directive, ElementRef, Renderer2, Input, OnInit, OnChanges, SimpleChanges, HostListener } from "@angular/core";

@Directive({
    selector:'[textColor]'
})

export class ColorDirective implements OnInit, OnChanges
{

    @Input() textColor= "";

    constructor(private targetElement:ElementRef, private domApi:Renderer2)
    {
        this.domApi.setStyle(this.targetElement.nativeElement, "color", this.textColor || "red");
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
    }

    @HostListener("mouseleave")
    onMouseLeaveFromHostElement()
    {
        this.domApi.setStyle(this.targetElement.nativeElement, "color", this.textColor || "red");
    }
}