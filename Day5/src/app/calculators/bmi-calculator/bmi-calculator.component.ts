import { Component, OnInit } from '@angular/core';
import { BmiInputModel } from 'src/app/models/bmiInput.model';

@Component({
  selector: 'bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() {}

  bmiResult:number = 0;

    calculateBMI(data:BmiInputModel)
    {
        this.bmiResult = data.height/data.weight;
    }

    clear()
    {
        this.bmiResult = 0;
    }

}
