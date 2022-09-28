import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { MeldCalculatorComponent } from './meld-calculator/meld-calculator.component';
import { CalaculatorsDashboardComponent } from './calaculators-dashboard/calaculators-dashboard.component';
import { BmiInputComponent } from './bmi-calculator/bmi-input/bmi-input.component';
import { BmiResultComponent } from './bmi-calculator/bmi-result/bmi-result.component';
import { MeldInputComponent } from './meld-calculator/meld-input/meld-input.component';
import { MeldResultComponent } from './meld-calculator/meld-result/meld-result.component';


@NgModule({
  declarations: [
    BmiCalculatorComponent,
    MeldCalculatorComponent,
    CalaculatorsDashboardComponent,
    BmiInputComponent,
    BmiResultComponent, 
    MeldInputComponent,
    MeldResultComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule
  ]
})
export class CalculatorsModule { }
