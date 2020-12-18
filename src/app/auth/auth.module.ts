import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, AuthComponent, ForgotPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
