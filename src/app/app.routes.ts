import { Routes } from '@angular/router';
import { MaintenanceSummaryComponent } from './maintenance-summary/maintenance-summary';
import { AddUserComponent } from './user-maintenance/add-user/add-user';

import { UserMaintenanceComponent } from './user-maintenance/user-maintenance';

export const routes: Routes = [
  { path: '', redirectTo: 'maintenance-summary', pathMatch: 'full' },
  { path: 'maintenance-summary', component: MaintenanceSummaryComponent },
  { path: 'user-maintenance', component: UserMaintenanceComponent },
  { path: 'user-maintenance/add', component: AddUserComponent }
];








