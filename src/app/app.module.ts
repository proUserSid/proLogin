import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { InvalidFocusFieldDirective } from './directives/invalid-focus-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    InvalidFocusFieldDirective,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
