import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserComponent} from './users/user/user.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {UsersComponent} from './users/users/users.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Booking System | Dashboard' } },
      // {
      //   path: 'users',
      //   children: [
      //     { path: '', redirectTo: 'all', pathMatch: 'full' },
      //     { path: 'all', component: UsersComponent, data: { title: 'Angular Demo | Users' } },
      //     { path: 'add', component: AddUserComponent, data: { title: 'Angular Demo | Add User' } },
      //     { path: 'edit/:id', component: EditUserComponent, data: { title: 'Angular Demo | Edit User' } },
      //     { path: 'user/:id', component: UserComponent, data: { title: 'Angular Demo  | View User' } },
      //   ]
      // },
      {
        path: 'users',
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: UsersComponent, data: { title: 'Booking System | Users' } },
          { path: 'add', component: AddUserComponent, data: { title: 'Booking System | Add User' } },
          { path: 'edit/:id', component: EditUserComponent, data: { title: 'Booking System | Edit User' } },
          { path: 'user/:id', component: UserComponent, data: { title: 'Booking System | My Profile' } },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
