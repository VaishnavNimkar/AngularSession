import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginUiComponent } from './components/loginUi/loginUi.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { SignUpUiComponent } from './components/signUp/signUp.component';

const routes: Routes = [
    //Route Objects
    {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"home", component:HomeComponent, children:[
        { path:"login", component:LoginUiComponent },
        { path:"signup", component:SignUpUiComponent }
    ]},
    {path:'main-cards', component:MainCardsComponent, children:[
        {path:"calculators", loadChildren: ()=>import('./calculators/calculators.module').then(m=> m.CalculatorsModule)}//,
        //{path:"doctor"},
        //{path:"appointment"},
        //{path:"health-tips"}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }