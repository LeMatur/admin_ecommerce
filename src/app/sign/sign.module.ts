import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignRoutingModule } from './sign-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SignModule { }
