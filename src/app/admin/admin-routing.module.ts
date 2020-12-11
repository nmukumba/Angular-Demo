import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Booking System | Dashboard' } },
      // {
      //   path: 'clients',
      //   children: [
      //     { path: '', redirectTo: 'all', pathMatch: 'full' },
      //     { path: 'all', component: ClientsComponent, data: { title: 'Booking System | Clients' } },
      //     { path: 'add', component: AddClientComponent, data: { title: 'Booking System | Add Client' } },
      //     { path: 'edit/:id', component: EditClientComponent, data: { title: 'Booking System | Edit Client' } },
      //     { path: 'view/:id', component: ViewClientComponent, data: { title: 'Booking System | View Client' } },
      //   ]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
