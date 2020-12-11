import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent, data: { title: 'Booking System | Login' } },
      // { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Booking System | Forgot Password' } },
      // { path: 'page-404', component: PageNotFoundComponent, data: { title: 'Page-404 :: Lucid Angular' } },
      // { path: 'page-403', component: PageForbiddonErrorComponent, data: { title: 'Page-403 :: Lucid Angular' } },
      // { path: 'page-500', component: PageIsErrorComponent, data: { title: 'Page-500 :: Lucid Angular' } },
      // { path: 'page-503', component: PageTryLaterComponent, data: { title: 'Page-503 :: Lucid Angular' } },
      // { path: 'page-maintanance', component: PageMaintananceComponent, data: { title: 'maintanance :: Lucid Angular' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
