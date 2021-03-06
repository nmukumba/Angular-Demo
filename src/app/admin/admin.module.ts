import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {LayoutModule} from '../layout/layout.module';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TaskComponent } from './tasks/task/task.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    ProfileComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    UserComponent,
    TasksComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
