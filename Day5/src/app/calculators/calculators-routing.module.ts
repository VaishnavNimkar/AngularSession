import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CalaculatorsDashboardComponent } from './calaculators-dashboard/calaculators-dashboard.component';
import { MeldCalculatorComponent } from './meld-calculator/meld-calculator.component';

const routes: Routes = [
    {path:"", component:CalaculatorsDashboardComponent, children:[
      {path:"bmi", component:BmiCalculatorComponent},
      {path:"meld", component:MeldCalculatorComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule { }
