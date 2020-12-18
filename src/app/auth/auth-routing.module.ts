import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {AuthComponent} from './auth/auth.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent, data: { title: 'Angular Demo | Login' } },
      { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Angular Demo | Forgot Password' } },
      { path: 'register', component: RegisterComponent, data: { title: 'Angular Demo | Register a New Account' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
