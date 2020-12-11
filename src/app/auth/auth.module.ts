import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
