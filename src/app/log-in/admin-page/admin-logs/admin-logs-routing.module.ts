import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLogsPage } from './admin-logs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLogsPageRoutingModule {}
