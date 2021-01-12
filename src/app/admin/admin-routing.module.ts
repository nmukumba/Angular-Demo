import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserComponent} from './users/user/user.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {UsersComponent} from './users/users/users.component';
import {ProfileComponent} from './profile/profile.component';
import {TasksComponent} from './tasks/tasks/tasks.component';
import {AddTaskComponent} from './tasks/add-task/add-task.component';
import {EditTaskComponent} from './tasks/edit-task/edit-task.component';
import {TaskComponent} from './tasks/task/task.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Angular Demo | Dashboard' } },
      {
        path: 'users',
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: UsersComponent, data: { title: 'Angular Demo | Users' } },
          { path: 'add', component: AddUserComponent, data: { title: 'Angular Demo | Add User' } },
          { path: 'edit/:id', component: EditUserComponent, data: { title: 'Angular Demo | Edit User' } },
          { path: 'user/:id', component: UserComponent, data: { title: 'Angular Demo | View User' } },
          { path: 'profile', component: ProfileComponent, data: { title: 'Angular Demo| My Profile' } },
        ]
      },
      {
        path: 'tasks',
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: TasksComponent, data: { title: 'Angular Demo | Tasks' } },
          { path: 'add', component: AddTaskComponent, data: { title: 'Angular Demo | Add Task' } },
          { path: 'edit/:id', component: EditTaskComponent, data: { title: 'Angular Demo | Edit Task' } },
          { path: 'task/:id', component: TaskComponent, data: { title: 'Angular Demo | View Task' } },
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
