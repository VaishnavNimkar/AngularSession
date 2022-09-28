import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootCompponent } from './components/appRoot/appRoot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginUiComponent } from './components/loginUi/loginUi.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SignUpUiComponent } from './components/signUp/signUp.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './directives/textColor.directive';


@NgModule({
  declarations: [AppRootCompponent, LoginUiComponent, HomeComponent, SignUpUiComponent, MainCardsComponent, ColorDirective],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, MaterialModule, AppRoutingModule, HttpClientModule],
  exports : [],
  providers: [],
  bootstrap: [AppRootCompponent]
})
export class AppModule { }
