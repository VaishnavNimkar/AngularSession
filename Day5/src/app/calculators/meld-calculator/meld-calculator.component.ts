import { Component, OnInit } from '@angular/core';
import { MeldInputData } from 'src/app/models/meldInput.model';

@Component({
  selector: 'meld-calculator',
  templateUrl: './meld-calculator.component.html',
  styleUrls: ['./meld-calculator.component.css']
})
export class MeldCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meldResult:number = 0;

    calculateMELD(data:MeldInputData)
    {
        this.meldResult = 9.57*Math.log(data.creatinine) + 3.78*Math.log(data.bilirubin) + 11.2*Math.log(data.inr) + 6.43;
    }

    clear()
    {
        this.meldResult = 0;
    }

}
