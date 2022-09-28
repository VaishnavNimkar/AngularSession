import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.css']
})
export class BmiResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
    bmi:number = 0;

    @Input()
    clear:boolean = false;

}
