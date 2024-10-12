import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './loginPage/login/login.component';
import { RegisterComponent } from './registerPage/register/register.component';

@NgModule({
  declarations: [
    RegisterComponent,
  //  LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
})
export class AuthModule { }
