import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {AdminRoutingModule} from './admin-routing.module';
import {LayoutModule} from '../layout/layout.module';



@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
